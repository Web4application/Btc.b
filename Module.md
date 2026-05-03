# Sequencing Modules (/en/docs/syndicate-stack/core-concepts/sequencing-modules)

Syndicate transforms blockchain sequencing by bringing it onchain through smart contracts deployed on a separate blockchain. This modular approach enables unprecedented control, transparency, and community ownership of the transaction ordering process.

Syndicate sequencing modules are comprised of several key components that can be independently configured to meet your specific application needs.

<Cards>
  <Card title="Permission Modules" href="#permission-modules">
    Control who can sequence transactions through mechanisms like allowlists and
    token holdings
  </Card>

  <Card title="Ordering Modules" href="#ordering-modules">
    Define how transactions are ordered and batched for optimal processing
  </Card>

  <Card title="Auction Modules" href="#auction-modules">
    Enable competitive sequencing rights through mechanisms like sealed-bid
    auctions
  </Card>

  <Card title="Atomic Modules" href="#atomic-modules">
    Allow coordinated sequencing across multiple chains for complex operations
  </Card>
</Cards>

### Permission Modules

Permission modules control who can sequence transactions on your appchain. They implement a simple interface with an `isAllowed` function that returns whether an address can sequence:

```solidity
function isAllowed(address proposer) external view returns (bool);
```

#### Available Modules

* **Allowlist**: Simple admin-controlled list of allowed sequencers
* **Token Balance**: Require sequencers to hold a minimum amount of tokens
* **Sealed Bid Auction**: Competitive bidding for sequencing rights

#### Example: Token Balance Module

Here's a simple example that requires sequencers to hold tokens:

```solidity
contract TokenBalanceSequencingModule is PermissionModule {
    address public immutable tokenAddress;
    uint256 public immutable minimumBalance;

    function isAllowed(address proposer) external view override returns (bool) {
        return IERC20(tokenAddress).balanceOf(proposer) >= minimumBalance;
    }
}
```

### Ordering Modules

The ordering of transactions is currently handled by the base `SyndicateSequencingChain` contract, which processes transactions in the order they are submitted. This provides a simple and predictable transaction ordering mechanism.

#### Available Features

* **Single Transaction Processing**: Process individual transactions through `processTransaction`
* **Bulk Transaction Processing**: Process multiple transactions at once with `processBulkTransactions`
* **Raw Transaction Support**: Handle compressed transactions with `processTransactionRaw`

#### Example: Transaction Processing

```solidity
contract SyndicateSequencingChain is SequencingModuleChecker {
    event TransactionProcessed(address indexed sender, bytes data);

    function processTransaction(bytes calldata data) external onlyWhenAllowed(msg.sender) {
        emit TransactionProcessed(msg.sender, prependZeroByte(data));
    }

    function processBulkTransactions(bytes[] calldata data) external onlyWhenAllowed(msg.sender) {
        for (uint256 i = 0; i < data.length; i++) {
            emit TransactionProcessed(msg.sender, prependZeroByte(data[i]));
        }
    }
}
```

### Auction Modules

Auction modules enable competitive sequencing rights through sealed-bid auctions, where bidders submit encrypted bids to ensure fairness.

#### Available Modules

* **Sealed Bid Auction**: A two-phase auction where bidders first submit encrypted bids and later reveal them

#### Example: Sealed Bid Auction

```solidity
contract SealedBidAuctionSequencingModule is PermissionModule {
    // Track bids and auction state
    mapping(address => bytes32) public sealedBids;
    address public highestBidder;
    uint256 public highestBid;

    // Phase 1: Submit sealed bids
    function bid(bytes32 sealedBid) external payable {
        require(msg.value > 0, "Must send deposit");
        sealedBids[msg.sender] = sealedBid;
    }

    // Phase 2: Reveal bids
    function revealBid(uint256 bidAmount, string memory salt) external {
        bytes32 computedHash = keccak256(abi.encodePacked(bidAmount, salt));
        require(computedHash == sealedBids[msg.sender], "Invalid bid reveal");

        if (bidAmount > highestBid) {
            highestBid = bidAmount;
            highestBidder = msg.sender;
        }
    }

    // Only highest bidder can sequence
    function isAllowed(address proposer) external view override returns (bool) {
        return proposer == highestBidder;
    }
}
```

### Atomic Modules

Atomic modules enable coordinated transaction processing across multiple chains, ensuring all transactions are processed together or none at all.

#### Available Modules

* **Atomic Sequencer**: Process transactions across multiple chains atomically

#### Example: Atomic Sequencer

```solidity
contract AtomicSequencer {
    // Process transactions on multiple chains atomically
    function processTransactionsAtomically(
        SyndicateSequencingChain[] chains,
        bytes[] transactions
    ) external {
        // Ensure input arrays match
        require(chains.length == transactions.length, "Length mismatch");

        // Process each transaction on its respective chain
        for (uint256 i = 0; i < chains.length; i++) {
            chains[i].processTransaction(transactions[i]);
        }
    }

    // Process multiple transactions per chain atomically
    function processBulkTransactionsAtomically(
        SyndicateSequencingChain[] chains,
        bytes[][] transactions
    ) external {
        require(chains.length == transactions.length, "Length mismatch");

        for (uint256 i = 0; i < chains.length; i++) {
            chains[i].processBulkTransactions(transactions[i]);
        }
    }
}
```

The atomic sequencer ensures that either all transactions are processed successfully across all specified chains, or none are processed at all. This is useful for cross-chain operations that need to maintain consistency.

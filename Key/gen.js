def generate_hotp(secret_b32, counter, digits=6):
    """
    HOTP: the counter-based version.
    Literally one variable different from TOTP.
    """
    key = base64.b32decode(secret_b32)
    msg = struct.pack(">Q", counter)         # <-- counter instead of time. that's it.
    h = hmac.new(key, msg, hashlib.sha1).digest()
    o = h[-1] & 0x0F
    code = (struct.unpack(">I", h[o:o+4])[0] & 0x7FFFFFFF) % (10 ** digits)
    return f"{code:0{digits}d}"

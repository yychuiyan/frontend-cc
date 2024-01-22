function hmacEncrypted() {
  let hmacText = document.getElementById('hmacText').value;
  let key = "123456"
  let hash = CryptoJS.HmacSHA256(key, hmacText)
  let encrypted = CryptoJS.enc.Hex.stringify(hash);
  document.getElementById('hmacKey').value = encrypted;
}

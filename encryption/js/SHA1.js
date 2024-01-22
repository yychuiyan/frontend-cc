function shEncrypted() {
  let shText = document.getElementById('shText').value;
  let encrypted = CryptoJS.SHA1(shText).toString()
  document.getElementById('shKey').value = encrypted;
}

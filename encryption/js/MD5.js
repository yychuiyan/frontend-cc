function mdEncrypted() {
  let mdText = document.getElementById('mdText').value;
  let encrypted = md5(mdText)
  document.getElementById('mdKey').value = encrypted;
}


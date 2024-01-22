function handleBase() {
  alert('Hello World!')
}
document.addEventListener('DOMContentLoaded', function () {
  let selectElement = document.getElementById('categorySelect');
  selectElement.addEventListener('change', function () {
    let selectedValue = this.value;
    console.log("selectedValue", selectedValue)
    switch (Number(selectedValue)) {
      case 1:
        document.getElementById("content_base64").style.display = "block"
        document.getElementById("content_md5").style.display = "none"
        document.getElementById('content_sh').style.display = "none"
        document.getElementById('content_hmac').style.display = "none"
        document.getElementById('content_aes').style.display = "none"
        document.getElementById('content_des').style.display = "none"
        document.getElementById('content_rsa').style.display = "none"
        break;
      case 2:
        document.getElementById("content_base64").style.display = "none"
        document.getElementById("content_md5").style.display = "block"
        document.getElementById('content_sh').style.display = "none"
        document.getElementById('content_hmac').style.display = "none"
        document.getElementById('content_aes').style.display = "none"
        document.getElementById('content_des').style.display = "none"
        document.getElementById('content_rsa').style.display = "none"
        break;
      case 3:
        document.getElementById("content_base64").style.display = "none"
        document.getElementById("content_md5").style.display = "none"
        document.getElementById('content_sh').style.display = "block"
        document.getElementById('content_hmac').style.display = "none"
        document.getElementById('content_aes').style.display = "none"
        document.getElementById('content_des').style.display = "none"
        document.getElementById('content_rsa').style.display = "none"
        break;
      case 4:
        document.getElementById("content_base64").style.display = "none"
        document.getElementById("content_md5").style.display = "none"
        document.getElementById('content_sh').style.display = "none"
        document.getElementById('content_hmac').style.display = "block"
        document.getElementById('content_aes').style.display = "none"
        document.getElementById('content_des').style.display = "none"
        document.getElementById('content_rsa').style.display = "none"
        break;
      case 5:
        document.getElementById("content_base64").style.display = "none"
        document.getElementById("content_md5").style.display = "none"
        document.getElementById('content_sh').style.display = "none"
        document.getElementById('content_hmac').style.display = "none"
        document.getElementById('content_aes').style.display = "block"
        document.getElementById('content_des').style.display = "none"
        document.getElementById('content_rsa').style.display = "none"
        break;
      case 6:
        document.getElementById("content_base64").style.display = "none"
        document.getElementById("content_md5").style.display = "none"
        document.getElementById('content_sh').style.display = "none"
        document.getElementById('content_hmac').style.display = "none"
        document.getElementById('content_aes').style.display = "none"
        document.getElementById('content_des').style.display = "block"
        document.getElementById('content_rsa').style.display = "none"
        break;
      case 7:
        document.getElementById("content_base64").style.display = "none"
        document.getElementById("content_md5").style.display = "none"
        document.getElementById('content_sh').style.display = "none"
        document.getElementById('content_hmac').style.display = "none"
        document.getElementById('content_aes').style.display = "none"
        document.getElementById('content_des').style.display = "none"
        document.getElementById('content_rsa').style.display = "block"
        break;
      default:
        break;
    }
  });
});

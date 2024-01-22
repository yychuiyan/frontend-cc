
// 加密
function desEncrypted() {
  let secretKey = "12345678" // 定制秘钥，长度必须为：8/16/32位, 长度不一致也没问题
  let desText = document.getElementById('desText').value; // 加密内容
  // 参数1=加密内容, 参数2=密钥
  let encrypted = CryptoJS.DES.encrypt(desText, CryptoJS.enc.Utf8.parse(secretKey), {
    mode: CryptoJS.mode.ECB, // 为DES的工作方式
    padding: CryptoJS.pad.Pkcs7  // 当加密后密文长度达不到指定整数倍(8个字节、16个字节)则填充对应字符
  }).toString() // 转字符串类型
  document.getElementById('desKey').value = encrypted;
}
// 解密
function desDecrypted() {
  let secretKey = "12345678";
  let encrypted = document.getElementById('desKey').value;
  let decrypted = CryptoJS.DES.decrypt(encrypted, CryptoJS.enc.Utf8.parse(secretKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
  document.getElementById('desKey').value = decrypted;
}

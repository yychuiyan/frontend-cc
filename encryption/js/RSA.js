// 公私匙在线生成：http://web.chacuo.net/netrsakeypair
// 公钥
let PUBLIC_KEY = ''
// 私钥
let PRIVATE_KEY = ''
// 加密
function rsaEncrypted() {
  let encrypt = new JSEncrypt() // 实例化加密对象
  encrypt.setPublicKey(PUBLIC_KEY) // 设置公钥

  let plainText = document.getElementById('rsaText').value; // 需要加密的数据
  let encrypted = encrypt.encrypt(plainText) // 对指定数据进行加密
  document.getElementById('rsaKey').value = encrypted
}
// 解密
function rsaDecrypted() {
  let encrypted = document.getElementById('rsaKey').value; // 获取加密内容
  let decrypt = new JSEncrypt() // 创建解密对象
  decrypt.setPrivateKey(PRIVATE_KEY) // 设置私钥
  let decrypted = decrypt.decrypt(encrypted) // 解密
  document.getElementById('rsaKey').value = decrypted
}

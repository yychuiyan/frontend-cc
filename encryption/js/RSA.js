
// 公钥
let PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA06f7POjGJuoK/S031frCNpdGjE2DYrIRtTHFuD0vZS/u0hCQHYa3JRp2UuLybIwQdMvGYyIyVTpovQTwVACuBi4XCzrajl8OGygIaFMJCkwoQ8U/Hnr1jFWKBOfJF6Eh4niPJaSv/9F32QEXeAXaHYNVLlXHwXQxs2JJItJHAwOGkixkjj2GvD9rWMaNWlcqVHg9m3aw0woV8kZcfzV+KdOfVM9Qi2zmYTpIQAAfeqWz21EX61q/yzEGF5jeLnBk12Y74zGD9bOd2QF+4F63rhcABbEuL5MI5Efl7wXNTXxjj6Tf4bT/2PEjFlBKz/AS9tENeUYROAvm8jLREjoNXwIDAQAB-----END PUBLIC KEY-----'
// 私钥
let PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTp/s86MYm6gr9LTfV+sI2l0aMTYNishG1McW4PS9lL+7SEJAdhrclGnZS4vJsjBB0y8ZjIjJVOmi9BPBUAK4GLhcLOtqOXw4bKAhoUwkKTChDxT8eevWMVYoE58kXoSHieI8lpK//0XfZARd4Bdodg1UuVcfBdDGzYkki0kcDA4aSLGSOPYa8P2tYxo1aVypUeD2bdrDTChXyRlx/NX4p059Uz1CLbOZhOkhAAB96pbPbURfrWr/LMQYXmN4ucGTXZjvjMYP1s53ZAX7gXreuFwAFsS4vkwjkR+XvBc1NfGOPpN/htP/Y8SMWUErP8BL20Q15RhE4C+byMtESOg1fAgMBAAECggEASKLecsHDtvkc+lP5VILxAcEaoe28CDPqJc/F9ftxd31irU6n1qoz0hTpxHpEDgJnZ13DYKQMt/kKlsvKGln9XvuURvNUrAVtFt6/O+Y7NQB71P4tMi2qdRWp/xL4jRZsRYdwQM/q4pUlVyCryDHh77zxj6w6mGZi5Bf3125ollyQnCwMbq1Mq1c9jv1wQemVmsuJLA1zcG8Mr9qFGMObz2yYsBSW4siGS3qFQID5LArgJChqNSM1jtNLS+whQHvCwt+doX0eDP6GRAID3N1802UTOWVMt2naDwyIOSux0VCS/5WijodCPg4ofoCZDKz861SNBrElzDPxT2szlzLv4QKBgQDrGuhxU8ZlPbuMNKSgS42LocRiTr9MMHxW1lQgELbjgJZKU6tXUYlF4C1Qhl5AmneMSyOQ/49xqJRuPtJHuMDAiXcOO7Lf4/Vd54nMPMDr8DXs4bGd8+my+By1t7VH4WOdt+QwNaumBh40P2F3B2PtwS9BB3PLnxwv2hmgcpsdDwKBgQDmd5C0psVy3t4ZvBkaFQ+gclV5h7cdROIIA5vD2vi1DmyCsmINm45oFPRrRzzA8KN7RLq7aPvR9wfKYcHZx3q4+pmWvwNxnDPiGerMIwyJv5CeDn25UK2cKf2lAI4Zh27DRMEJly+qmbEEzMpLi498J877fxRuiSEY6ObEH2GqsQKBgQCr5jq6UdSnxaFRfFQ6V8OgqqDaeFVqsbDYFVHhOBdg9G3u3opTB+zkyGqZjAVyGv759x6EMDeDlQ0iJpC9nBpjLJ9+Kqw5A4YuKNMaH/m3CSWEk+i4YtUm5D6ppy7G5cdeVExl63gbpjGDZiwvSZoJBs00MOy7nxSO8Fr4c5NyhQKBgE9kAMU6beoUPA5BbaQ+fROYTzl+NuYuRG7eT1o4pFQ6k8ayDHUDkRrpnQkXkSYlvytHkcvdbmH15wkgg9axkOUH7sCvLFCGrpjEtM19hWQuSXMpKsYbtLKHBIlCl7DTpqQ9mwHiwtjR+NjecxFzEgqC7BpWvIMXWf9qu5Pz+4EBAoGBAKot9qwJnb9ZGA72qT15DuhNvjsge6iFaGlqhp3PtbJxDmLcSu0kuQegcMgE43tkay9QlSrmcjoK7vorzVUe//AqzZElVOIl4E7NS+B128zVCt9Nx9HlyVYwtep/BKFNmOdHFaY8xffKHmRQVMkJxjS4s8kO4bPQGGdENqcuLQH5-----END PRIVATE KEY-----'
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

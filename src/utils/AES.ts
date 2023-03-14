import { AES as CryptoJsAES } from 'crypto-js';

export class AES {
  static encrypt(message: string, passphrase: string) {
    return CryptoJsAES.encrypt(message, passphrase).toString();
  }

  static decrypt(cipherText: string, passphrase: string) {
    const bytes = CryptoJsAES.decrypt(cipherText, passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

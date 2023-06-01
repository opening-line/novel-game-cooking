
// 名前付きインポート
import { message } from './sub06a.js';

// デフォルトインポート
import message from './sub06a.js';


// top level await
await new Promise((resolve) => setTimeout(resolve, 1000));



console.log(message);
## 应用初始化

参数

| 字段 | 类型 | 必填 | 说明|
| --- | --- | --- | --- |
| secretId | string | 否 | 腾讯云 API 固定密钥对，在云函数内执行可不填。[前往获取](https://console.cloud.tencent.com/cam/capi)|
| SecretKey | string | 否 |  同上|
| env | string | 否 | TCB 环境 ID，不填使用默认环境|

```javascript
// 初始化示例
const app = require('tcb-admin-node');

// 初始化资源
// 云函数下不需要secretId和secretKey。
// env如果不指定将使用默认环境
app.init({
  secretId: 'xxxxx',
  secretKey: 'xxxx',
  env: 'xxx'
});

//云函数下使用默认环境
app.init()

//云函数下指定环境
app.init({
  env: 'xxx'
})
```
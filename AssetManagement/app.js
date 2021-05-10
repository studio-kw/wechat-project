// app.js
App({
  // onLaunch() {
  //   // 展示本地存储能力
  //   const logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)

  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  // },
  // globalData: {
  //   userInfo: null
  // }
  onLaunch: function(){
    console.log('小程序初始化完成')
  },
  onShow: function(){
    console.log('小程序启动或进入了前台')
  },
  onHide: function(){
    console.log('小程序启动或进入了后台')
  },
  onError: function (msg) {
    console.log("小程序出错啦："+msg);
  }


})

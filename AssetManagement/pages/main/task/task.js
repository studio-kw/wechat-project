// pages/main/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈哈',
    token: ''
  },

  getUserInfo: function () {
    // wx.request({
    //   url: 'http://192.168.111.11:8080/user',
    //   method: 'POST',
    //   data: {

    //   },
    //   header: {
    //     'Authorization': this.data.token
    //   },
    //   success: (result) => {
    //     console.log(result.data.code)
    //     if (result.data.code === 20000){
    //       console.log(result.data.data.texcel.lastName + result.data.data.texcel.firstName)
    //       this.setData({title: result.data.data.texcel.lastName + result.data.data.texcel.firstName})
    //     }
    //   },
    //   fail: (res) => {
    //     console.log(res.errMsg)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://192.168.111.11:8080/user/login',
    //   method: 'POST',
    //   data: {
    //     loginAccount: 'huqk',
    //     loginPassword: 'huqk'
    //   },
    //   success: (result) => {
    //     console.log(result.data.data)
    //     wx.showToast({
    //       title: '登录成功' +result.data.data,
    //     })
    //     this.setData({ 
    //       title: result.data.data,
    //       token: result.data.data })
    //   },
    //   fail: (res) => {
    //     console.log(res.errMsg)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '任务',
    })
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 //这里写相应页面的序号
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/home/home.js
// getApp()获取App.js产生的实例对象
const app = getApp()

console.log(app.globaData.name)
Page({
  getUserInfo(event) {
    console.log(event)
  },

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true
  },
  tabControlClick (event) {
    console.log(event)
  },
  handleIncrementCpn () {
    // 目的：修改my-sel组件中的counter
    const my_sel = this.selectComponent('.sel-class')
    // // 注意：这里不是this.setData，而是my_sel.setData，可以直接在这里设置那个组件
    // my_sel.setData({
    //   // 注意：这里不能使用++必须使用+1
    //   counter: my_sel.data.counter + 1
    // })

    // 通过方法调用组件内的方法（最合理）可以传值
    my_sel.incrementCounter(10)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 让用户选择图片或拍照
    // wx.chooseImage({
    //   complete: (res) => {},
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
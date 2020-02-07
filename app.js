App({
  onLaunch: function() {
  },
  onShow: function(options) {
    wx.getUserInfo({
      success: function(res) {
      }
    })
  },
  onHide: () => {

  },
  // 可以在这里定义全局共享数据
  globaData: {
    name: 'gaoya',
    age: '18'
  }
})
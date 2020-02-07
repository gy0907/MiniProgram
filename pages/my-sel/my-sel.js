// pages/my-sel/my-sel.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  methods: {
    incrementCounter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
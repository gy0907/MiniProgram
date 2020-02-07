// pages/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: Array
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick (event) {
      var index = event.currentTarget.dataset.tap
      this.setData ({
        currentIndex: index
      })
      // 通知页面内部的点击事件
      this.triggerEvent('itemclick', {index, title: this.properties.titles[index]},{})
    }
  }
})
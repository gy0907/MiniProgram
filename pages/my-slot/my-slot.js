// pages/my-slot/my-slot.js
Component({
//  多插槽需要一个配置项
options: {
  multipleSlots: true,
  // 设置样式的隔离方式
  styleIsolation: isFinite
},
// 外界传入的额外的样式
externalClasses: [],

// 可以监听properties/data的改变
observers: {
  // 这里只有newVal没有oldVal
  counter: function(newVal){
      console.log(newVal)
  }
},

// 组件中监听生命周期函数
// 1. 监听在页面的生命周期
pageLifetimes: {
  show() {},
  hide() {},
  // 监听页面尺寸的改变
  resize() {}
},

// 2.监听组件本身的生命周期
lifetimes: {
  created() {
    console.log('组件被创建出来')
  },
  attached () {
    console.log('组件被添加到页面')
  },
  ready() {
    console.log('组件被渲染出来')
  },
  moved() {
    console.log('组件被移动到另外一个节点')
  },
  detached() {
    console.log('组件被移除掉')
  }
}


})

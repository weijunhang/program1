//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,

    background: ['http://file02.16sucai.com/d/file/2015/0413/799c7b74c1e63f523e23d3b21fa8dd92.jpg', 'https://img.zcool.cn/community/01d8ba5b35e6ffa80121b994073045.jpg@1280w_1l_2o_100sh.jpg', 'https://img.zcool.cn/community/0182ac554321520000019ae9fefcc6.jpg@2o.jpg'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular:true,
    interval: 4000,
    duration: 500,


    topics: ['推荐', '医药头条','新药介绍'],
    indexSelect:0,
  },
  //事件处理函数
  goto: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },

  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.ind;
    //把index换成id，let得到的id是默认给的index值0,1，2
    this.setData({
      indexSelect: id
    });
  },

  onLoad: function () {
   
   
  },
  getUserInfo: function(e) {
   
  }
})

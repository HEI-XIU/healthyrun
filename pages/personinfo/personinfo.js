// pages/personinfo/personinfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentData : 0,
    list: [{
      name: '我的跑步心得',
      num: '1',
      title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/4.png',
      avatar: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/4.png'
    },
    {
      name: '校园跑步',
      num: '1',
      title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png',
      avatar: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/7.png'
    },
    {
      name: '每日学习心得',
      num: '1',
      title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/6.png',
      avatar: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/6.png'
    },
    {
      name: '跑后放松',
      num: '1',
      title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/3.png',
      avatar: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/3.png'
    },
    {
      name: '轧马路跑步分享',
      num: '1',
      title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png',
      avatar: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/1.png'
    },
    {
      name: '跑步设备分享',
      num: '1',
      title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      url: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png',
      avatar: 'https://gitee.com/susuhhhhhh/su-sus-picture/raw/master/%E5%A5%BD%E7%9C%8B%E5%9B%BE%E7%89%87/2.png'
    },
    ]
  },

  onLoad: function (options) {
  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
 
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  myAudit(){
    this.setData({
      currentTab:0,
    })
  },
  myInitiate(){
    this.setData({
      currentTab:1,
      // jiraArray:[]
    })
  },
  switchTab(event){
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
        currentTab: cur,
        navScrollLeft: (cur - 2) * singleNavWidth
    });
  },  

  gotonode: function () {
    wx.navigateTo({
      url: '/pages/personinfo/note/note',
    })
    console.log(1);
  },
  gotoPageconcern: function () {
    wx.navigateTo({
      url: '/pages/personinfo/concern/concern',
    })
  },
  gotoPagefans: function () {
    wx.navigateTo({
      url: '/pages/personinfo/fans/fans',
    })
  },
  gotoPagecollection: function () {
    wx.navigateTo({
      url: '/pages/personinfo/collection/collection',
    })
  },
  gotoPageMy: function () {
    wx.navigateTo({
      url: '/pages/personinfo/personinfo',
    })
  },
  gotoPagelike: function () {
    wx.navigateTo({
      url: '/pages/personinfo/like/like',
    })
  },
  gotoPageSetting: function () {
    wx.navigateTo({
      url: '/pages/personinfo/EditYourProfile/EditYourProfile',
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
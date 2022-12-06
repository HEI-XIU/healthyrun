// pages/personinfo/concern/concern.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function () {
    this.getNotelist();
  },
  getNotelist(){
    console.log('2');
    let app = getApp();
    wx.request({
      url: 'http://49.234.210.20/php/fans/follow.php',//接入自己的接口
      data: {
        uid:app.globalData.info.userLoginID,
      },
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      success: (result)=>{
        
        app.globalData.followlist=result.data;
        console.log(app.globalData.followlist)
        this.setData({
          // ...this.data,
          list:app.globalData.followlist
        })
        this.list=app.globalData.followlist
        // console.log(this.list)
      },
    });
  },
  gotoPage:function () {
    wx.navigateTo({
      url: '/pages/home/duifangzhuye/duifangzhuye',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
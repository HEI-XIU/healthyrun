// pages/personinfo/EditYourProfile/EditYourProfile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head:'',
    uname:'',
    sex:'',
    birthday:'',
    personality:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let app = getApp();
    console.log(app.globalData.info.head)
    this.setData({
      ...this.infodata,
      head:app.globalData.info.head,
      uname:app.globalData.info.userName,
      personality:app.globalData.info.signature,
      birthday:app.globalData.info.birthday,
      sex:app.globalData.info.sex,
    })
    console.log(app.globalData.info.head)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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
let app = getApp();

// const utils = require("../../utils/util")
Page({
  /**
 * 页面的初始数据
 */
  data: {
    me: app.globalData.info.userLoginID,
    content: "",
    too: "",
    setInter: null,
  },

  handleInput(e) {
    this.data.content = e.detail.value;
  },

  jumpToChat: function () {
    // wx.redirectTo({
    wx.navigateTo({
      url: '/pages/message/doctorchat/doctorchat',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // let newData = { ...this.data };
    // newData.too = options.title;
    console.log(options.title)
    console.log(this.data)
    this.setData({ ...this.data, too: options.title, me: app.globalData.info.userLoginID });
    // this.showshowshow(options);
    // setInterval(() => {
    //   this.showshowshow(options);
    // }, 700);
    this.showshowshow();
    // this.othershow(options);
    console.log(this.data.me)
    const that = this;
    //定时器  函数赋值给timer  方便clearInterval（）使用
    that.data.setInter = setInterval(
      () => this.showshowshow()
      , 700);

    that.setData({
      setInter: that.data.setInter
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  showshowshow() {
    console.log("1")
    let app = getApp();
    wx.request({
      url: 'http://49.234.210.20/php/chat/showshowshow.php', //接入自己的接口
      data: {
        uid: app.globalData.info.userLoginID,
        too: this.data.too
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        app.globalData.followlist = result.data;
        // console.log(app.globalData.followlist)
        // let newData = { ...this.data };
        // newData.list = app.globalData.followlist;
        this.setData({ ...this.data, list: app.globalData.followlist });
        this.list = app.globalData.followlist
      },
    });
    // console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    clearInterval(this.data.setInter);
    this.setData({
      setInter: null
    });
    console.log(this.data.setInter)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    clearInterval(this.data.setInter);
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

  },

  // 点击发送按钮，触发此事件
  send() {
    console.log(this.data)
    let date = new Date();
    let arr = {
      me: app.globalData.info.userLoginID,
      content: this.data.content,
      too: this.data.too,
      date: date.toLocaleString('chinese', { hour12: false })
    }
    // // 给服务端发消息
    // wx.sendSocketMessage({
    //   data: JSON.stringify(arr)
    // })

    console.log(this.data.content != "")
    if (this.data.content != "") {
      console.log(arr)
      // // 连接服务端
      wx.request({
        url: 'http://49.234.210.20/php/chat/chat.php', //接入自己的接口
        data: { ...arr },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
      });
    }
    // let newData = { ...this.data };
    // newData.content = "";
    this.setData({ ...this.data, content: "" });
  },

  //显示聊天内容
  showchat() {
    let app = getApp();
    wx.request({
      url: 'http://49.234.210.20/php/chat/showchat.php', //接入自己的接口
      data: { ...arr },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        app.globalData.followlist = result.data;
        this.setData({
          list: app.globalData.followlist
        })
        this.list = app.globalData.followlist
      },
    });
  }

})
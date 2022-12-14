let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    otheruser:'',
    notelist:[
    ],
    state:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      otheruser:app.globalData.otherinfo
    })
    // console.log(app.globalData.otherinfo);
    // console.log(this.data.otheruser)
    this.getNotelist();
    this.reflesh();
  },
  btnchat:function () {
    wx.navigateTo({
      url: '/pages/message/userchat/userchat',
    })
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
    this.isconcern();
    this.setData({
      otheruser:app.globalData.otherinfo
    })
    // console.log(app.globalData.otherinfo);
    // console.log(this.data.otheruser)
    this.getNotelist();
    this.reflesh();
  },
  reflesh(){
    wx.request({
      url: 'http://49.234.210.20/php/reflesh.php',//接入自己的接口
      // url:'http://43.143.216.10:8012/note/userNote',
      data: {
        uid:app.globalData.info.userLoginID,
      },
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      success: (result)=>{
        // console.log(3)
        // console.log(result)
        app.globalData.info=result.data;
      },
    });
  },
  getNotelist(){
    // console.log('2');
    wx.request({
      url: 'http://49.234.210.20/unote.php',//接入自己的接口
      // url:'http://43.143.216.10:8012/note/userNote',
      data: {
        uid:app.globalData.otherinfo.userLoginID,
      },
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      success: (result)=>{
        // console.log(result.data)
        app.globalData.notelist=result.data;
        this.setData({
          // ...this.notelist,
          notelist:app.globalData.notelist
        })
        // console.log(this.notelist)
      },
    });
  },
  isconcern() {
    wx.request({
      url: 'http://49.234.210.20/php/fans/isconcern.php', //接入自己的接口
      data: {
        myid: app.globalData.info.userLoginID,
        otherid: app.globalData.otherinfo.userLoginID
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        // console.log(result.data)
        if (result.data) {
          this.setData({
            state: "取消关注"
          })
        } else {
          this.setData({
            state: "关注"
          })
        }
        // console.log(app.globalData.info.userLoginID)
        // console.log(app.globalData.writer)
      },
    });
  },
  btnconcern: function (e) {
    // console.log(this.data.state)
    var that = this
    if (that.data.state == "取消关注") {
      wx.request({
        url: 'http://49.234.210.20/php/fans/disfollow.php', //删除的phpSQL语句
        data: {
          myid: app.globalData.info.userLoginID,
          otherid: app.globalData.otherinfo.userLoginID
        },
        success: (result) => {
          console.log(app.globalData.info.userLoginID)
          console.log(app.globalData.writer)
          this.setData({
            state: "关注"
          })
        }
      })
      wx.request({
        url: 'http://49.234.210.20/php/fans/fans-.php', //更新粉丝数
        data: {
          otherid: app.globalData.otherinfo.userLoginID
          // myid:app.globalData.info.userLoginID
        },
        success: (result) => {}
      })
      wx.request({
        url: 'http://49.234.210.20/php/fans/favor-.php', //更新关注数
        data: {
          // otherid:e.currentTarget.dataset.otheruid,
          myid: app.globalData.info.userLoginID
        },
        success: (result) => {}
      })
      // that.onShow();
    } else if (that.data.state == "关注") {
      wx.request({
        url: 'http://49.234.210.20/php/fans/addconcern.php', //添加的phpSQL语句
        data: {
          myid: app.globalData.info.userLoginID,
          otherid: app.globalData.otherinfo.userLoginID
        },
        success: (result) => {
          console.log(2)
          console.log(result.data)
          this.setData({
            state: "取消关注"
          })
        }
      })
      wx.request({
        url: 'http://49.234.210.20/php/fans/fans+.php', //更新粉丝数
        data: {
          otherid: app.globalData.otherinfo.userLoginID
          // myid:app.globalData.info.userLoginID
        },
        success: (result) => {}
      })
      wx.request({
        url: 'http://49.234.210.20/php/fans/favor+.php', //更新关注数
        data: {
          // otherid:e.currentTarget.dataset.otheruid,
          myid: app.globalData.info.userLoginID
        },
        success: (result) => {}
      })
      // that.onShow();
    }
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
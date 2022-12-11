let app = getApp();
Page({

  /**
   * 页面的初始数据
   */


  data: {
    noteContent: '',
    noteid: '',
    writerid: '',
    myid: '',
    state: '',
    otherid: '',
    islike: '', //是否点赞
    isfavor: '', //是否喜欢
    userid: '',
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
  onShow: function () {
    this.getNotelist();
    this.isconcern();
    this.isFavor();
    this.isLike();
  },
  isLike() {
    wx.request({
      url: 'http://49.234.210.20/php/note/islike.php', //接入自己的接口
      data: {
        userid: app.globalData.writer,
        noteid: app.globalData.noteID,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        console.log(result)
        if (result.data) {
          this.setData({
            islike: "已点赞"
          })
        } else {
          this.setData({
            islike: "点赞"
          })
        }
      },
    });
  },
  isFavor() {
    wx.request({
      url: 'http://49.234.210.20/php/note/isfavor.php', //接入自己的接口
      data: {
        userid: app.globalData.writer,
        noteid: app.globalData.noteID,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        // console.log(app.globalData.writer)
        // console.log(app.globalData.noteID)
        // console.log(result)
        if (result.data) {
          this.setData({
            isfavor: "已喜欢"
          })
        } else {
          this.setData({
            isfavor: "喜欢"
          })
        }
      },
    });
  },
  btnFavor() {
    var that = this
    if (that.data.isfavor == "已喜欢") {
      wx.request({
        url: 'http://49.234.210.20/php/note/disfavor.php',//删除的phpSQL语句
        data: {
          userid: app.globalData.writer,
          noteid: app.globalData.noteID,
        },
        success: (result) => {
          console.log(app.globalData.info.userLoginID)
          console.log(app.globalData.writer)
          this.setData({
            isfavor: "喜欢"
          })
        }
      })
    } else if (that.data.isfavor == "喜欢") {
      wx.request({
        url: 'http://49.234.210.20/php/note/addfavor.php',//添加喜欢表
        data: {
          userid: app.globalData.writer,
          noteid: app.globalData.noteID,
        },
        success: (result) => {
          this.setData({
            isfavor: "已喜欢"
          })
        }
      })
    }
  },
  btnLike(){
    var that = this
    if(that.data.islike=="已点赞"){
      wx.request({
        url: 'http://49.234.210.20/php/note/dislike.php',//删除的phpSQL语句
        data: {
          userid: app.globalData.writer,
          noteid: app.globalData.noteID,
        },
        success: (result) => {
          console.log(result)
          console.log(app.globalData.info.userLoginID)
          console.log(app.globalData.writer)
          this.setData({
            islike: "点赞"
          })
        }
      })
      wx.request({
        url: 'http://49.234.210.20/php/note/like-.php',//更新点赞数
        data:{
          noteid: app.globalData.noteID,
          // myid:app.globalData.info.userLoginID
        },
        success: (result) => {}
      })
    }else if(that.data.islike=="点赞"){
      wx.request({
        url: 'http://49.234.210.20/php/note/addlike.php',//添加的phpSQL语句
        data:{
          noteid: app.globalData.noteID,
          userid: app.globalData.writer,
        },
        success: (result) => {
          console.log(app.globalData.writer)
          console.log(app.globalData.noteID)
          // console.log(2)
          console.log(result.data)
            this.setData({
              islike:"已点赞"
            })
        }
      })
      wx.request({
        url: 'http://49.234.210.20/php/note/like+.php',//更新点赞数
        data:{
          noteid: app.globalData.noteID,
          // myid:app.globalData.info.userLoginID
        },
        success: (result) => {}
      })
    }
  },





  isconcern() {
    wx.request({
      url: 'http://49.234.210.20/php/fans/isconcern.php', //接入自己的接口
      data: {
        myid: app.globalData.info.userLoginID,
        otherid: app.globalData.writer
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
  getNotelist() {
    wx.request({
      url: 'http://49.234.210.20/php/note/notecontent.php', //接入自己的接口
      data: {
        noteid: app.globalData.noteID
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        app.globalData.noteContent = result.data;
        this.setData({
          noteContent: app.globalData.noteContent
        })
        // console.log(this.data.noteContent)
      },
    });
  },
  user: function (item) {
    // console.log(item.target.id)
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://49.234.210.20/php/otheruser/otheruser.php', //接入自己的接口
        data: {
          writerid: item.target.id,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: (result) => {
          console.log(item)
          this.setData({
            otherid: item.target.id
          })
          app.globalData.otherinfo = result.data;
          // console.log(app.globalData.otherinfo)
          resolve(result.data)
        }
      })
    }).then(() => {
      wx.navigateTo({
        url: '/pages/personinfo/otherUser/otherUser',
      })
    })
    // app.globalData.noteID =  item.currentTarget.id
    // console.log(app.globalData.noteID)
  },
  btnconcern: function (e) {
    // console.log(this.data.state)
    var that = this
    if (that.data.state == "取消关注") {
      wx.request({
        url: 'http://49.234.210.20/php/fans/disfollow.php', //删除的phpSQL语句
        data: {
          myid: app.globalData.info.userLoginID,
          otherid: app.globalData.writer
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
          otherid: app.globalData.writer,
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
          otherid: app.globalData.writer
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
          otherid: app.globalData.writer,
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
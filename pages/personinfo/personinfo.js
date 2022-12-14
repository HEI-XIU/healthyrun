// pages/personinfo/personinfo.js
let app = getApp();
Page({
  infodata:{
    uid:'',
    head:'',
    uname:'',
    popular:'',
    personality:'',
    fans:'',
    follow:'',
    notelist:[
    ],
    concrenlist:[],
  },
  data: {
    currentData : 0,
  },

  onLoad: function () {
    this.reflesh();
    this.setData({
      ...this.infodata,
      uid:app.globalData.info.userLoginID,
      head:app.globalData.info.head,
      uname:app.globalData.info.userName,
      popular:'',
      personality:app.globalData.info.signature,
      fans:app.globalData.info.fansNum,
      follow:app.globalData.info.favorNum,
    })
    // console.log(this.notelist)
    // console.log(app.globalData.info.head)

    
  },
  onShow:function () {
    this.getNotelist();
    this.reflesh();
    this.getconcernlist();
    this.setData({
      ...this.infodata,
      uid:app.globalData.info.userLoginID,
      head:app.globalData.info.head,
      uname:app.globalData.info.userName,
      popular:'',
      personality:app.globalData.info.signature,
      fans:app.globalData.info.fansNum,
      follow:app.globalData.info.favorNum,
    })
  },
  getconcernlist(){
    wx.request({
      url: 'http://49.234.210.20/uconcern.php',//接入自己的接口
      // url:'http://43.143.216.10:8012/note/userConcern',
      data: {
        uid:app.globalData.info.userLoginID,
      },
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      success: (result)=>{
        console.log(result.data)
        app.globalData.concrenlist=result.data;
        this.setData({
          // ...this.notelist,
          concrenlist:app.globalData.concrenlist
        })
        // this.infodata.notelist=result.data
        // console.log(app.globalData.notelist)
        console.log(this.concrenlist)
      },
    });
    // console.log(this.notelist)
    
  },
  reflesh(){
    wx.request({
      url: 'http://49.234.210.20/php/reflesh.php',//接入自己的接口
      // url:'http://43.143.216.10:8012/user/refresh',
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
    // console.log('1');
    wx.request({
      url: 'http://49.234.210.20/unote.php',//接入自己的接口
      // url:'http://43.143.216.10:8012/note/userNote',
      data: {
        uid:app.globalData.info.userLoginID,
      },
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      success: (result)=>{
        app.globalData.notelist=result.data;
        this.setData({
          // ...this.notelist,
          notelist:app.globalData.notelist
        })
        // this.infodata.notelist=result.data
        // console.log(app.globalData.notelist)
        // console.log(this.notelist)
      },
    });
    // console.log(this.notelist)
    
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

  gotonode: function (item1) {
      app.globalData.noteID =  item1.currentTarget.id
      app.globalData.writer =item1.currentTarget.dataset.writer
    wx.navigateTo({
      url: '/pages/RunningCircle/note/note',
    })
    // console.log(1);
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
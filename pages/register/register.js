// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    repassword: '',
    users: [],
    state:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.isregister()
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
    this.isregister()

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

  },
  name(e) {
    this.data.username = e.detail.value;
  },

  pw(e) {
    this.data.password = e.detail.value;
  },
  repw(e) {
    this.data.repassword = e.detail.value;
  },
  register: function () {
    // wx.switchTab({
    //   url: '/pages/home/home',
    // })
    this.isregister()
    var that = this
    if (that.data.username === "") {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 1500,
      });
    } else if (that.data.password === "") {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1500,
      });
    } else if (that.data.password != that.data.repassword) {
      wx.showToast({
        title: '两次密码不相同，请检查',
        icon: 'none',
        duration: 1500,
      });
    } else if (that.data.state ==="no"){
      
      wx.showToast({
        title: '账户已存在',
        icon: 'none',
        duration: 1500,
      });
    }else {
      console.log(this.data.state)
        wx.request({
          url: 'http://49.234.210.20/php/register.php', //插入用户语句
          data: {
            username: this.data.username,
            password: this.data.password,
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: (result) => {
            wx.navigateTo({
              url: '/pages/login/login' //成功跳到主页
            })
            // resolve(result.data)
          }
        })
    }
  },

  isregister:function() {
    wx.request({
      url: 'http://49.234.210.20/php/isregister.php', //插入用户语句
      data: {
        username: this.data.username,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (result) => {
        console.log(result.data)
        if(result.data){
          this.setData({
            state:"no",
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据  
   */
  data: {
    select: false,
    identity: '--请选择--',
    all_select: ['医生', '普通用户', ]
  },
  /**
   * 点击下拉框 
   */
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },

  /**
   * 已选下拉框 
   */
  mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      identity: name,
      select: false
    })
  }

})
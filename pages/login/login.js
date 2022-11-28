var app = getApp()
Page({
  data: {
    username:'',
    password:'',
    users:[],
  },
  loginNow: function () {
    // wx.switchTab({
    //   url: '/pages/home/home',
    // })
    var that = this
    if (that.data.username === "") {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 1500,
      });
    } else if (that.data.password === ""){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1500,
      });
    } else{
      wx.request({
        url: 'http://49.234.210.20/Login.php',//接入自己的接口
        data: {
          password:this.data.password,
          username:this.data.username
        },
        
        header: {"Content-Type": "application/x-www-form-urlencoded"},
        success: (result)=>{
          console.log(this.data);
          console.log(result);
          if (!result.data){
            wx.switchTab({
              url: '../home/home'//成功跳到主页
            })
            wx.showToast({
              title: "登录成功",
              icon: 'success',
              duration: 1500,
            });
          } else{
            wx.showToast({
              title: '登陆失败',
              icon: 'error',
              duration: 1500,
            });
          }
        },
        fail: ()=>{
          wx.showToast({
            title: '网络错误',
            icon: 'error',
            duration: 1500,
          });
        },
      });
    }
  },
  //options(Object)
  onLoad: function(options){
    
  },
  name(e){
    this.data.username = e.detail.value;
  },

  pw(e){
    this.data.password = e.detail.value;
  },

  login(){
    var that = this
    if (that.data.username === "") {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 1500,
      });
    } else if (that.data.password === ""){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1500,
      });
    } else{
      wx.request({
        url: 'https://example.com/onLogin',//接入自己的接口
        data: {password:this.data.password,username:this.data.username},
        header: {"Content-Type": "application/x-www-form-urlencoded"},
        success: (result)=>{
          if (result.data.code === 200){
            wx.reLaunch({
              url: '../index/index'//成功跳到主页
            })
            wx.showToast({
              title: "登录成功",
              icon: 'success',
              duration: 1500,
            });
          } else if (result.data.code === 0){
            wx.showToast({
              title: result.data.msg,
              icon: 'none',
              duration: 1500,
            });
          } else{
            wx.showToast({
              title: '登陆失败',
              icon: 'error',
              duration: 1500,
            });
          }
        },
        fail: ()=>{
          wx.showToast({
            title: '网络错误',
            icon: 'error',
            duration: 1500,
          });
        },
      });
    }
  }
})

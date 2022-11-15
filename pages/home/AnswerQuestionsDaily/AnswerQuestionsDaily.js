// pages/AnswerQuestionsDaily/AnswerQuestionsDaily.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  gotoTest: function (){
    wx.navigateTo({
        url: '/pages/home/AnswerQuestionsDaily/test/test',
})  
},
  onLoad: function () {

  },
  
})
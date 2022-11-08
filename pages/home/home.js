// pages/home/home.js
Page({
  data: {

  },
  gotoPageTi: function (){
    //wx.redirectTo ({
      wx.navigateTo({
          url: '/pages/home/AnswerQuestionsDaily/AnswerQuestionsDaily',
  })  
  },
  gotoPageLearn: function () {
    wx.navigateTo({
      url: '/pages/home/recommendedDaily/recommendedDaily',
    })
  },
  gotoPageAsk: function () {
    wx.navigateTo({
          url: '/pages/home/ask/ask',//要跳转到的页面路径
  })  
  }
})

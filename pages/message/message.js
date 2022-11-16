// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotoUserChat: function (){
      wx.navigateTo({
          url: "userchat/userchat",
  })  
  },
  gotoDoctoeChat: function (){
    wx.navigateTo({
        url: "doctorchat/doctorchat",
})  
}
})
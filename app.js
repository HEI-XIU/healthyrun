// app.js
App({
  globalData:{
    info:[],
    otherinfo:[],
    notelist:[],
    concrenlist:[],
    circlelist:[],
    followlist:[],
    fanslist:[],
    noteID:'',
    writer:'',
    noteContent:[],

  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env:'cloud1-3gvyw1wdd6e80920',
        traceUser: true,
      })
    }
  }

})
let app = getApp();
Page({
  data: {
    circlelist:[],
  },
  onShow:function () {
    this.getNotelist();
  },
  getNotelist(){
    console.log('1');
    wx.request({
      url: 'http://49.234.210.20/runcircle.php',//接入自己的接口
      // url: 'http://43.143.216.10:8012/note/runcircle',
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      success: (result)=>{
        app.globalData.circlelist=result.data;
        this.setData({
          circlelist:app.globalData.circlelist
        })
        console.log(this.circlelist)
      },
    });
  },
  search:function(){
    
    wx.navigateTo({
      url: './search/search',
    })
  },
  addnote:function(){
    wx.navigateTo({
      url: './addnote/addnote',
    })
  },
  note:function(item){
    // console.log(item.currentTarget)
      app.globalData.noteID =  item.currentTarget.id
      app.globalData.writer =item.currentTarget.dataset.writer
      // console.log(app.globalData.writer)
    wx.navigateTo({
      url: '/pages/RunningCircle/note/note',
    })
  },
})

// pages/personinfo/personinfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentData : 0,
    list2: [{
      name: '运动有益健康，健康成就未来',
      num: '1',
      title: '"踏上跑道，是一种选择。离开起点，是一种勇气。驰骋赛场，是一种胜利',
      url: '/images/testPhoto/collection/c1.JPG',
      avatar: '/images/testPhoto/collection/c1.JPG'
    },
    {
      name: '站在山顶，感受那些曾经的恶意',
      num: '1',
      title: '广阔的绿茵场，是为你们搭建的舞台。张扬吧，年轻的心，我们将为你永远喝彩！',
      url: '/images/testPhoto/collection/c2.JPG',
      avatar: '/images/testPhoto/collection/c2.JPG'
    },
    {
      name: '活水贵在流动，生命贵在运动。',
      num: '1',
      title: '不为掌声的注释不为刻意的征服不为失败的痛苦只有辛勤的汗水化作成功的脚步',
      url: '/images/testPhoto/collection/c3.JPG',
      avatar: '/images/testPhoto/collection/c3.JPG'
    },
    {
      name: '健身是我的生活。媳妇是我的奖励',
      num: '1',
      title: '不为鲜花的围绕，不为刹那的荣耀，只有执着的信念，化作不停的奔跑，心中燃烧着梦想，脚下不停的步伐',
      url: '/images/testPhoto/collection/c4.JPG',
      avatar: '/images/testPhoto/collection/c4.JPG'
    },
    {
      name: '让运动成为习惯，让生命更加精彩',
      num: '1',
      title: '时间在流逝，赛道在延伸，成功在你面前展现心脏的跳动，热血在沸腾，辉煌在你脚下铸就加油吧，健儿们',
      url: '/images/testPhoto/collection/c5.JPG',
      avatar: '/images/testPhoto/collection/c5.JPG'
    },
    {
      name: '做一个清淡颜欢的女子，寂静于甜',
      num: '1',
      title: '致失败者 倒下的时候，生命又怎能屹立！歪歪斜斜的身影，又怎耐的住风雨的洗礼。你若有一个不屈的灵魂，脚下才会有一方坚实的土地。昨天的失败已经过去，胜利不仅仅是一个美好的话题',
      url: '/images/testPhoto/collection/c6.JPG',
      avatar: '/images/testPhoto/collection/c6.JPG'
    },
    ],
    list1: [{
      name: '我精彩，我运动。我运动，我健康',
      num: '1',
      title: '漫漫长路，你愿一人独撑，忍受着孤独与寂寞，承受着体力与精神的压迫，只任汗水溶于泪水，可脚步却从不停歇。好样的，纵然得不了桂冠，可坚持的你，定会赢得最后的掌声。',
      url: '/images/testPhoto/like/l1.JPG',
      avatar: '/images/testPhoto/like/l1.JPG'
    },
    {
      name: '活水贵在流动，生命贵在运动',
      num: '1',
      title: '泥泞的路走过无数累了，告诉自己：快了，再坚持一会儿身上的伤流出血来疼了，告诉自己：别哭，会好的摔到了，告诉自己：快爬起来，世上很少有坦途。',
      url: '/images/testPhoto/like/l2.JPG',
      avatar: '/images/testPhoto/like/l2.JPG'
    },
    {
      name: '发展体育运动，推行全民健身',
      num: '1',
      title: '不要掉泪，不要屈服，哪怕胜利永远只是个未知数。跌倒了，不要放弃，爬起来，继续努力前进！因为如果放弃，虽不会再摔跤，但是——永远不会前进半步！我们追求，绿叶为我们喝彩，风雨为我们做伴，用微笑洗去尘埃，把心点燃，照亮一切美好的未来！',
      url: '/images/testPhoto/like/l3.JPG',
      avatar: '/images/testPhoto/like/l3.JPG'
    },
    {
      name: '参加体育运动，做阳光少年',
      num: '1',
      title: '汗水，泪水；笑声，歌声；我们尽情挥洒。开幕式上，运动场上，我们尽情展现，多少艰辛，多少困苦，我们勇敢承担。因为年轻，因为张扬，因为我们知道：用今天的汗水换来明天的微笑。',
      url: '/images/testPhoto/like/l4.JPG',
      avatar: '/images/testPhoto/like/l4.JPG'
    },
    {
      name: '运动，生活有你更精彩',
      num: '1',
      title: '坚定，执着，耐力与希望，在延伸的白色跑道中点点凝聚！力量，信念，拼搏与奋斗，在遥远的终点线上渐渐明亮！时代的强音正在你的脚下踏响。',
      url: '/images/testPhoto/like/l5.JPG',
      avatar: '/images/testPhoto/like/l5.JPG'
    },
    {
      name: '运动是一切生命的源泉',
      num: '1',
      title: '你的汗水洒在跑道，浇灌着成功的花朵开放。你的欢笑飞扬在赛场，为班争光数你最棒。跑吧，追吧在这广阔的赛场上，你似骏马似离铉的箭。跑吧，追吧你比虎猛比豹强。',
      url: '/images/testPhoto/like/l6.JPG',
      avatar: '/images/testPhoto/like/l6.JPG'
    },
    ],

    list: [{
      name: '为什么要在有情绪和压力的时候继续跑步',
      num: '1',
      title: '在情绪上头和生活或工作充满压力的时候，保持冷静并继续是一件很难的事',
      url: '/images/testPhoto/Node/n1.JPG',
      avatar: '/images/testPhoto/Node/n1.JPG'
    },
    {
      name: '已瘦58斤|你跑步减肥为什么不瘦还会胖',
      num: '1',
      title: '很多人坚持跑步几个月，一斤没瘦甚至有的反而胖了，下面罗列了一些问题点和正确方法',
      url: '/images/testPhoto/Node/n2.JPG',
      avatar: '/images/testPhoto/Node/n2.JPG'
    },
    {
      name: '为什么说越野跑是跑者的终极归属',
      num: '1',
      title: '如果说路跑关注的是距离、配速、心率、步频、步幅，这些技术性的指标，那么越野跑则是关注不一样的风景、变化多端的路况、攀爬、下降',
      url: '/images/testPhoto/Node/n3.JPG',
      avatar: '/images/testPhoto/Node/n3.JPG'
    },
    {
      name: '这个冬天一起迎着暖阳奔跑吧',
      num: '1',
      title: '冬天迎着暖阳跑步在日落下拉伸放松',
      url: '/images/testPhoto/Node/n4.JPG',
      avatar: '/images/testPhoto/Node/n4.JPG'
    },
    {
      name: '空腹晨跑茂，10公里',
      num: '1',
      title: '跑步你是如何坚持下来的？:促使自己，每个星期都去跑。如果不能迈出大门，跑步也就中止了。而且我会选择固定的时',
      url: '/images/testPhoto/Node/n5.JPG',
      avatar: '/images/testPhoto/Node/n5.JPG'
    },
    {
      name: '自由潜水员的基础训练~长距离跑步',
      num: '1',
      title: '跑步对自由潜水帮助在静态跟动态表现提高助益良多，尤其是在深度项目中前提：良好的跑步技术，装备等',
      url: '/images/testPhoto/Node/n6.JPG',
      avatar: '/images/testPhoto/Node/n6.JPG'
    },
    ]
  },

  onLoad: function (options) {
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

  gotonode: function () {
    wx.navigateTo({
      url: '/pages/personinfo/note/note',
    })
    console.log(1);
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
// 连接云数据库
const db = wx.cloud.database();
// 获取集合的引用
const activityQuestion = db.collection('activityQuestion');
// 数据库操作符
const _ = db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList: [], // 题目列表
    index: 5 ,// 当前题目索引
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取题库-函数执行
    this.getQuestionList()
  },

  // 获取题库-函数定义
  getQuestionList() {
    // 显示 loading 提示框
    wx.showLoading({
      title: '拼命加载中'
    });
    // 构建查询条件
    activityQuestion
    .get()
    .then(res => {
      // 获取集合数据，或获取根据查询条件筛选后的集合数据。
      console.log('[云数据库] [activityQuestion] 查询成功')
      console.log(res.data)
      let data = res.data || [];
      
      // 将数据从逻辑层发送到视图层，通俗的说，也就是更新数据到页面展示
      this.setData({
        questionList:data,
        index: 5 ,
      });

      // 隐藏 loading 提示框
      wx.hideLoading();
    })
  },

    // 下一题/提交 按钮
    btn2(){
      // 判断是不是最后一题
      this.lastJudge();
    },
  
    // 判断是不是最后一个
    lastJudge(){
      if (this.data.index < this.data.questionList.length - 1) {
        // 如果不是最后一个，则切换下一个0
        let index = this.data.index + 1;
        this.setData({
          index
        })
      }
    },

     // 上一题 按钮
     btn1(){
      // 判断是不是第一题
      this.firstJudge();
    },
  
    // 判断是不是第一个
    firstJudge(){
      if (this.data.index != 5) {
        // 如果不是第一个，则切换上一个
        let index = this.data.index - 1;
        this.setData({
          index
        })
      }
    }
  
})
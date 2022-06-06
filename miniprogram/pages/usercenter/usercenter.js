// pages/usercenter/usercenter.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfor:{},
    phone:{},
    school:{},
    index:1,
    allData:'',
    mglist:''
  },

  getUserInfor:function(e){
    wx.getUserProfile({
      desc: '用来完善用户个人信息',//展示的消息
      success:(res)=>{
          console.log(res.userInfo)//将用户信息打印至控制台
         this.setData({ userinfor:res.userInfo})//将信息保存到定义的容器里
         db.collection("user").get().then(res1=>{
          this.setData({
            allData:res1.data,
            index:0
          })
        })
        var that =this;
        console.log("ss");
      }
    })
/*
    this.data.allData.forEach(element => {
      if(element.name==userInfo.nickName)
      school=element.school;
    });*/
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //db.collection("user").where([name:userInfo.nickName]).get().then(res=>)
    db.collection("banner_my").get({
      success:res=>{
        console.log(res)
        this.setData({
          mglist:res.data
        })
      }
    })
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
// pages/goodsDetail/goodsDetail.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'',
    text_id:'',
    title:'',
    picture:'',
    detail:'',
    price:'',
    condition:'',
    owner:'',
    ownerPicture:'',
    school:'',
    auth:'',
    time:'',
    str:"已认证"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      text_id:options.text_id
    })
    db.collection("goods").doc(this.data.text_id).get().then(res=>{
      this.setData({
        title:res.data.name,
        picture:res.data.picture,
        detail:res.data.detail,
        price:res.data.price,
        condition:res.data.condition,
        owner:res.data.owner,
        ownerPicture:res.data.ownerPicture,
        school:res.data.school,
        auth:res.data.auth,
        time:res.data.time
      })
    })
    db.collection("banner").get({
      success:res=>{
        console.log(res)
        this.setData({
          pic:res.data
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
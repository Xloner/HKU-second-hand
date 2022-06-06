// pages/index/index.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mglist:'',
    goods:'',
    str:"已认证"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("banner").get({
      success:res=>{
        console.log(res)
        this.setData({
          mglist:res.data
        })
      }
    })
    db.collection("goods").get({
      success:res=>{
        console.log(res)
        this.setData({
          goods:res.data
        })
      }
    })
  },
  banner_jump:function(e){
    wx.navigateTo({
      url: '../announcement/announcement1',
    })
  },
  sjowbs:function(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail?text_id='+e.currentTarget.id,
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
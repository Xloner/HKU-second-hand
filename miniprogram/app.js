// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-6g4y8ct203bcd298',
        traceUser: true,
      });
    }
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.openSetting({
      /*接口调用成功的回调函数*/
      success: res => {
        /*success成功回调函数的参数：authorSetting对象*/
        /*authSetting对象属性之一：scope.userInfo授权用户信息*/
        if (res.authSetting['scope.userInfo']) {
          /*scope.userInfo（是否授权用户信息，对应接口 wx.getUserInfo）*/
          wx.getUserInfo({
            
          })
        }
      }
    })
    wx.openSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 必须是在用户已经授权的情况下调用
          wx.getUserInfo({
            success: res => {
              // globalData函数设置全局变量，方便其他页面调用。
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    this.globalData = {};
  }
});

function findBleDevices () {
	var list = {};

	wx.openBluetoothAdapter({
      success: function(res){
       wx.startBluetoothDevicesDiscovery({
                services: [],
                success: function(res){
                   console.log(res);
                },
                fail: function(res) {
                   console.log(res);
                }
        })
      },
      fail: function(res) {
        // fail
         console.log(res);
      },
      complete: function(res) {
        // complete
         console.log(res);
      }
    })

    wx.getBluetoothDevices({
       success: function(res){
         console.log(res);
          that.setData({
          list:res.devices
          });
          console.log(that.data.list);
       },
       fail: function(res) {
         // fail
       },
       complete: function(res) {
         // complete
       }
     })

  }
  module.export = {
    findBleDevices = findBleDevices;
  }

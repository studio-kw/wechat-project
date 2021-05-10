Component({
  data: {
    dialog_show: false,
    selected: "",
    color: "#333",
    selectedColor: "#008B7D",
    backgroundColor: "#fff",
    dialog_list:[
      {
        icon: "/pages/images/purchase.png",
        text: "资产申购",
        url: "/pages/main/purchase/purchase"
      },
      {
        icon: "/pages/images/register.png",
        text: "资产登记",
        url: ""
      },
      {
        icon: "/pages/images/change.png",
        text: "资产变更",
        url: ""
      },
      {
        icon: "/pages/images/check.png",
        text: "资产点检",
        url: ""
      },
      {
        icon: "/pages/images/scrap.png",
        text: "资产报废",
        url: ""
      },
      {
        icon: "/pages/images/repair.png",
        text: "资产维修",
        url: ""
      },
      {
        icon: "/pages/images/sheet.png",
        text: "资产报表",
        url: ""
      },
      {
        icon: "/pages/images/encoding.png",
        text: "资产编码",
        url: ""
      },
      {
        icon: "/pages/images/wait.png",
        text: "（待定）",
        url: ""
      },
    ],
    list: [
      {
        pagePath: "/pages/main/task/task",
        text: "任务",
        iconPath: "/pages/images/task.png",
        selectedIconPath: "/pages/images/task_select.png"
      },
      {
        pagePath: "/pages/main/record/record",
        text: "记录",
        iconPath: "/pages/images/record.png",
        selectedIconPath: "/pages/images/record_select.png"
      },
      {
        pagePath: "/pages/main/record/record",
        bulge: true,
        iconPath: "/pages/images/icon_tabbar_center.png",
        selectedIconPath: "/pages/images/icon_tabbar_center.png"
      },
      {
        pagePath: "/pages/main/msg/msg",
        text: "消息",
        iconPath: "/pages/images/msg.png",
        selectedIconPath: "/pages/images/msg_select.png"
      },
      {
        pagePath: "/pages/main/mine/mine",
        text: "我的",
        iconPath: "/pages/images/mine.png",
        selectedIconPath: "/pages/images/mine_select.png"
      }
    ]
  },
  methods: {
    onClose() {
      this.setData({ dialog_show: false });
    },
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      if (data.index === 2) {
        this.setData({ dialog_show: true })
      } else {
        wx.switchTab({ url })
      }
    }
  }
})
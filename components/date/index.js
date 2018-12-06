// components/data/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer(newVal,oldVal,changedPath){
        let val = newVal <10? '0'+newVal: newVal
        // console.log(val)
        // 千万不要在一个observer函数中去修改属性本身的值，否则的话很有可能引起无限递归造成内存泄漏的情况。 
        this.setData({
          _index: val
        })
      }
      
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    _index:'0',
    month:'',
    year:'',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached(){
    let data=new Date()
    let year=data.getFullYear()
    let month=data.getMonth()
    this.setData({
      year,
      month:this.data.months[month]
    })
  }
})

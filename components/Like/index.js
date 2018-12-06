// components/Like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    like:true,
    yesSrc:'images/1_01.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
      let { like }=this.properties;
      let { count } = this.properties;
      count = like ? count - 1 : count + 1
      this.setData({
        count,
        like:!like
      })
      // console.log(this.properties)
      //子传父
      let behavior = this.properties.like? "like":"cancel";
      // console.log(behavior)
      this.triggerEvent('like',{
        behavior
      },{})
    }
  }
})

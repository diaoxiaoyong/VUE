<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
          watch: {//使用watch 监听$router的变化
            $route(to, from) {
              console.log(to)
                //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > 0){
                    if( to.meta.index < from.meta.index){
                        this.transitionName = 'slide-right';
                    }else{
                        this.transitionName = 'slide-left';
                    }
                }else if(to.meta.index == 0 && from.meta.index > 0){
                    this.transitionName = 'slide-right';
                }

                //当然，如果你没有需要设置索引值为0的页面可以直接用着一段
                /*if( to.meta.index < from.meta.index){
                      this.transitionName = 'slide-right';
                }else{
                      this.transitionName = 'slide-left';
                }*/
            }
        }
}
</script>
<style >


body {
  background-color: #fbf9fe;
}
 * {
        margin: 0;
        padding: 0;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;
        font-family: arial;
        color: #333;
        -webkit-user-select: none;
    }

    html {
        font-family: arail;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 1;
        font-size: 20px;
        height:100%;
        overflow-x: hidden;
    }
    body{
        position: relative;
        overflow-x: hidden;
        background: #f0f2f5;
        min-height:100%;
        display: flex;
        flex-direction: column;
    }
    #app{
        display: flex;
        flex:1;
        flex-direction: column;
        background: #f0f2f5;
    }
    img {
        display: block;
    }
    ul,ol{
        list-style: none;
    }
    a{
        text-decoration: none;
        outline: none;
    }
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter {
        transform: translateX(-100%);
    }
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(100%);
    }
    .slide-left-leave-active {
        transform: translateX(-100%);
    }
</style>


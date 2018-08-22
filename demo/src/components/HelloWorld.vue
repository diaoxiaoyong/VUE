
<template>
  <div>
    <ul>
      <li v-for="(item,index) in lists" :key="index" @click = "msg">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      lists:[]
    }
  },
  computed:{
    ...mapState({
      message : state => state.list.msgList
    })
     
  },
  mounted () {
      this.$store.dispatch('message','helll')
  },
  watch:{
    message(val){
      this.lists = val
      console.log(this.lists)
    }
  },
  methods :{
    msg(){
      this.$router.push({name:'hello',query:{id:1,hello:2}})
    }
  }
}
</script>

<style>

</style>
  
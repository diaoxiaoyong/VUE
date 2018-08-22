
<template>
  <div>
    <ul @click="msg">
      <li>hello</li>
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
      this.$router.push({name:'HelloWorld',query:{id:1,hello:2}})
    }
  }
}
</script>

<style>

</style>
  
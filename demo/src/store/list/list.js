import axios from 'axios'
axios.defaults.baseURL = 'http://120.77.215.34:9001'
const state = {
    msgList:[]
}
const mutations = {
    MESSAGE (state,res){
        state.msgList = res
    }
}
const actions = {
    message ({commit},data){
        console.log(data)
        axios.get("/channel/guest",{withCredentials:true}).then(data=>{
            var res=data.data.myList;
            commit("MESSAGE",res)
        })
    }
}
export default {
    state,mutations,actions
}
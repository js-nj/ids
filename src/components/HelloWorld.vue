<template>
  <div class="hello">
    <div>账号</div>
    <div><input v-model="account" /></div>
    <div>密码</div>
    <div><input type="password" v-model="password" /></div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
axios.defaults.baseURL = 'http://localhost:3000'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account:'',
      password:'',
    }
  },
  methods:{
    submit(){
      //alert(111)
      axios.get('/ids/login', {
        params: {
          id: this.account,
          pw:this.password
        }
      }).then(function (response) {
        if(response.data.code === 'ok'){
          //debugger;
          Cookies.set('_cas_', response.data.id,{ expires: 30 });
        }
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div>
    <button id="p" @click="getAll()" type="text" size="small">点击</button>
    <!--<div>My name is{{msg}}</div>-->
  </div>
</template>

<script>
  import Http from '../utils/http'
  import Vue from 'vue'
  import axios from 'axios'
  import $ from 'jquery'

  $(function () {
    $("#p").on("tap",function(){

    });
  })
export default {
  name: 'Home',
  data() {
    return {
      msg: 'My name is',
      dataForm: {
        name: '',
        age: '',
        sex: '',
        param: {
          id:1
        }
      }
    };
  },
  mounted: function () {
    // this.getAll()
  },
  // activated() {
  //   alert(5555)
  //   this.login()
  // },
  methods: {
    exportWord() {
      // Http.post('/operation/userInfo/exportWord').then(response => {
      //
      // })
      // window.open('http://localhost:8989/operation/userInfo/exportWord')
    },
    getAll() {
      Http.post('/yq/getAllData',this.dataForm.param).then(response => {
          console.log(response)
          let data = response.data
          console.log(data)
        }
      ).catch(function (error) {
        console.log(error)
      })
    },
    // getAll() {
    //   // let data = https.post('/user/info', param)
    //   axios({
    //     method: 'post',
    //     // baseURL: 'http://111.230.239.224:8079/',
    //     baseURL: 'http://localhost:8989',
    //     url: '/operation/userInfo/getAll',
    //     timeout: 60000,
    //     headers: {
    //       'X-Requested-With': 'XMLHttpRequest',
    //       'Content-Type': 'application/json; charset=UTF-8',
    //       'Access-Control-Max-Age': '1209600'
    //       // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
    //       // 'Access-Control-Allow-Methods': 'GET,POST'
    //     }
    //   }).then(
    //     (response) => {
    //       console.log(response.data)
    //       this.dataForm.name = response.data.user.name
    //       this.msg = this.dataForm.name
    //     }
    //   ).catch(function (error) {
    //     console.log(error)
    //     alert(error)
    //   })
    // },
    save() {
      axios({
        method: 'post',
        // baseURL: 'http://111.230.239.224:8079/',
        baseURL: 'http://localhost:8989',
        url: '/operation/userInfo/save',
        data: this.dataForm.param,
        timeout: 60000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Max-Age': '1209600'
          // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
          // 'Access-Control-Allow-Methods': 'GET,POST'
        }
      }).then(
        (response) => {
          console.log(response.data)
        }
      ).catch(function (error) {
        console.log(error)
        alert(error)
      })
    },
    login() {
      let param = {
       'id': 1
      }
      // let data = https.post('/user/info', param)
      axios({
        method: 'post',
        // baseURL: 'http://111.230.239.224:8079/',
        baseURL: 'http://localhost:8989',
        url: '/operation/userInfo/getById',
        data: param,
        timeout: 60000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Max-Age': '1209600'
          // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
          // 'Access-Control-Allow-Methods': 'GET,POST'
        }
      }).then(
        (response) => {
          console.log(response.data)
          this.dataForm.name = response.data.user.name
          this.msg = this.dataForm.name
        }
      ).catch(function (error) {
        console.log(error)
        alert(error)
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

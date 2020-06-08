<!-- readyState表示连接有四种状态：
CONNECTING (0)：表示还没建立连接；
OPEN (1)： 已经建立连接，可以进行通讯；
CLOSING (2)：通过关闭握手，正在关闭连接；
CLOSED (3)：连接已经关闭或无法打开； -->
<template>
  <div>
    <input type="text" v-model="text">
    <button @click="send()">发送消息</button>
    <br>
    <button @click="closeWebSocket()">关闭websocket连接</button>
    <button @click="pink()">开启websocket连接</button>
    <br>
    <div>{{websocket.onmessage}}</div>
    <div>{{data}}</div>
  </div>
</template>
<script>
  export default {
    name: "WebSocket",
    components: {

    },
    data() {
      return {
        text: '',
        data: '',
        websocket: null
      }
    },
    mounted() {
      if ('WebSocket' in window) {
        this.websocket = new WebSocket('ws://localhost:8989/websocket/'+ 33)
        this.initWebSocket()
      } else {
        alert('当前浏览器 Not support websocket')
      }
    },
    beforeDestroy() {
      this.onbeforeunload()
    },
    methods: {
      pink() {
        if ('WebSocket' in window) {
          this.websocket = new WebSocket('ws://localhost:8989/websocket/'+ 33)
          this.initWebSocket()
        } else {
          alert('当前浏览器 Not support websocket')
        }
      },
      initWebSocket() {
        //连接错误
        this.websocket.onerror = this.setErrorMessage

        // //连接成功
        this.websocket.onopen = this.setOnopenMessage

        //收到消息的回调
        this.websocket.onmessage = this.setOnmessageMessage

        //连接关闭的回调
        this.websocket.onclose = this.setOncloseMessage

        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = this.onbeforeunload
      },
      setErrorMessage() {
        this.data = "WebSocket连接发生错误" + '   状态码：' + this.websocket.readyState;
      },
      setOnopenMessage() {
        this.data = "WebSocket连接成功" + '   状态码：' + this.websocket.readyState;
      },
      setOnmessageMessage(event) {
        this.data = '服务端返回：' + event.data;
      },
      setOncloseMessage() {
        this.data = "WebSocket连接关闭" + '   状态码：' + this.websocket.readyState;
      },
      onbeforeunload() {
        this.closeWebSocket();
      },

      //websocket发送消息
      send() {
        this.websocket.send(this.text)
        this.text = ''
      },
      closeWebSocket() {
        this.websocket.close()
      }
    }
  }

</script>
<style scoped>
</style>

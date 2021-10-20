<template>
  <div class="hello">    
    <p v-if="!showNext">
      你在一片沙滩上睁开双眼,不知道自己是谁,为什么会在这里
      <br />
      你举目四望,你的身后是大海,面前是被迷雾笼罩的森林,以及一块石碑
      <br />
      你看向石碑,石碑上刻着
      <br />
      <br />
      <b>【向着迷雾深处前进吧，那里有一切的答案,以及回家之路】</b>
      <br />
      <br />
      <button @click="setUserName">触摸</button>
    </p>
    <div v-else>
      <p>
        你想起了自己的名字
        <span>【{{ userName }}】</span>,同时眼前的迷雾涌动,形成了三条通道
        <br />
        没什么好犹豫的了,前进吧
      </p>
      <h2><router-link to="charcter">前进</router-link></h2>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
import { ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    user: String,
  },
  setup() {
    const userName = ref("无名之人");
    const showNext = ref(false);
    function setUserName() {
      var username = prompt("你的名字");
      if (username !== null && username.length > 0) {
        store.commit("chageUserName", username);
        this.userName = username;
        this.showNext = true;
      }
    }
    return { userName, showNext, setUserName };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

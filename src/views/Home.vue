<template>
  <div class="home">
    <h1>欢迎来到迷雾岛</h1>
    <HelloWorld user="{userName}" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {},
  data() {
    return {
      userName: "",
    };
  },
};
</script>

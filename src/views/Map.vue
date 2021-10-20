<template>
  <div>
    <StatusBar></StatusBar>
    <div>这里是地图</div>
  </div>
</template>
<script>
import StatusBar from "@/components/StatusBar.vue";
export default {
  name: "Map",
  components: {
    StatusBar,
  },
  mounted() {},
  methods: {
    createMap: () => {},
  },
  data() {
    return {};
  },
};
</script>
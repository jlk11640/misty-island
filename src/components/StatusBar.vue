<template>
  <div class="statusbar">
    <div>
      <b>{{ userName }}</b>
    </div>
    <div>生命: {{ currLief }} / {{ life }}</div>
    <div>第 {{ level }} 层</div>
    <div></div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import store from "../store";
export default {
  name: "StatusBar",
  data() {
    return {};
  },
  setup() {
    const currLief = ref(store.getters.getCurrentLife);
    const userName = ref(store.getters.getUserName);
    const life = ref(store.getters.getLife);
    const level = ref(store.getters.getLevel);
    return { currLief, life, userName, level };
  },
};
</script>
<style scoped>
.statusbar {
  display: -webkit-box;
}
</style>
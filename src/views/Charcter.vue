<template>
  <div
    class="bg"
    v-bind:style="{ backgroundImage: 'url(' + bgSrc + ')' }"
  ></div>
  <div class="charcter-container">
    <div class="charcters">
      <template v-for="charcter in charcters" :key="charcter.id">
        <div
          class="charcter"
          :class="[
            charcter.selected ? selected : '',
            charcter.selectable ? selectable : '',
          ]"
          @click="clickCharcter(charcter.id, charcter.selecable)"
        >
          <div>
            {{ charcter.name }}
          </div>
          <div>
            {{ charcter.desc }}
          </div>
          <div v-if="charcter.selectable">
            <div>生命: {{ charcter.life }}</div>
            <div>费用: {{ charcter.cost }}</div>
            <div>特性: {{ charcter.feature }}</div>
          </div>
          <div v-else>暂缺</div>
        </div>
      </template>
      <div class="bottom-bar">
        <div>
          <router-link
            to="/"
            class="link"
            style="float: left; margin-left: 20px"
            >返回</router-link
          >
        </div>
        <div>
          <router-link
            to="/map"
            class="link"
            style="float: right; margin-right: 20px"
            >启程</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import store from "../store/index";
export default {
  name: "Charcter",
  mounted() {
    this.getCharcters();
  },
  data() {
    return {
      charcters: [],
      bgSrc: "",
      selected: "selected",
      selectable: "selectable",
    };
  },
  methods: {
    getCharcters() {
      axios.get("../data/charcter/Charcter.json").then((res) => {
        res.data.forEach((charcter) => {
          var obj = {};
          obj.id = charcter.id;
          obj.name = charcter.name;
          obj.life = charcter.life;
          obj.cost = charcter.cost;
          obj.money = charcter.money;
          obj.desc = charcter.desc;
          obj.feature = charcter.feature;
          obj.selectable = charcter.selectable;
          obj.selected = false;
          obj.image = charcter.image;
          this.charcters.push(obj);
        });

        this.clickCharcter(res.data[0].id, res.data[0].selectable);
      });
    },
    clickCharcter(id, selectable) {
      if (!selectable) return;
      let obj;
      this.charcters.forEach((p) => {
        if (p.id == id) {
          p.selected = true;
          obj = p;
        } else {
          p.selected = false;
        }
      });
      if (obj.selectable) {
        this.bgSrc = require("../assets/charcter/" + obj.image);
        obj.currLife = obj.life;      
        store.commit("changeCharcter", obj);
      }
    },
    selectCharcters(charcter) {
      store.commit("changeCharcter", charcter);
    },
  },
};
</script>
<style scoped>
.charcter-container {
  height: 100%;
  display: flex;
}
.bg {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
}
.charcters {
  background-color: white;
  opacity: 0.9;
  display: -webkit-box;
  margin: auto;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  padding-bottom: 40px;
  position: relative;
}
.charcter {
  width: 180px;
  margin: 10px;
  border: 1px solid #8db2e3;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(183, 221, 232, 0.5);
}
.selectable {
  cursor: pointer;
}
.selected {
  background-color: rgba(235, 241, 221, 0.8) !important;
}
.bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15px;
  text-align: center;
}
.link {
  color: #346dad;
  text-decoration: none;
  font-weight: bold;
}
</style>
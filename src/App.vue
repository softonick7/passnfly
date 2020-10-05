<template>
  <div id="app" data-app>
    <NavBar title="Asset 1" />
    <router-view :scrolled="scrolledToBottom" />
    <footer class="footer">© Created by Sofian Azouache</footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      scrolledToBottom: false,
    };
  },
  methods: {
    checkScroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight +
            10 >=
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.scrolledToBottom = true;
        } else {
          this.scrolledToBottom = false;
        }
      };
    },
  },
  mounted() {
    this.checkScroll();
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px !important;
  background-color: #c0dbf785;
  min-height: 100vh;
}

.footer {
  background-color: #dc3545;
  bottom: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>

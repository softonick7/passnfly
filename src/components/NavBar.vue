<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img :src="require('./../assets/passnflyLogo.png')" class="brandImg" />
        {{ title }}</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav> </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.brandImg {
  height: 45px;
  object-fit: none;
  width: fit-content;
}
</style>

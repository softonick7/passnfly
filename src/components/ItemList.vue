<template>
  <div>
    <ItemCreate />
    <b-card no-body v-b-modal.modal-create class="overflow-hidden cardItem">
      <b-row no-gutters class="cardRow">
        <b-col md="2">
          <b-img-lazy
            :src="require('./../assets/passnflyPlane.png')"
            alt="Image"
            class="rounded-0"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-card-body title="New Entry">
            <b-icon icon="plus-circle" font-scale="5" variant="info"></b-icon>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div v-for="airport in reducedAirports" :key="airport.id">
      <ItemCard :data="airport" />
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard";
import ItemCreate from "./ItemCreate";
import { mapState } from "vuex";

export default {
  name: "ItemList",
  components: {
    ItemCard,
    ItemCreate,
  },
  data() {
    return {
      reducedAirports: [],
      airports: [],
      length: 10,
    };
  },
  computed: mapState(["setAirports"]),
  watch: {
    "$store.state.airports": function(newValue) {
      this.airports = newValue;
      this.reducedAirports = newValue.slice(0, this.length);
    },
    "$attrs.scrolledMax": function(newValue) {
      if (newValue) {
        this.length = this.length + 10;
      }
      this.reducedAirports = this.$store.state.airports.slice(0, this.length);
    },
  },
  mounted() {
    this.reducedAirports = this.$store.state.airports.slice(0, 10);
  },
};
</script>

<style scoped>
.cardRow > div {
  padding: 0.5rem;
  margin: auto;
}

.cardItem {
  margin-bottom: 1rem;
}
</style>

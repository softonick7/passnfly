<template>
  <div>
    <header class="pageTitle">
      <h1>List of airports</h1>
    </header>
    <main class="container">
      <b-button block variant="info" v-b-toggle.searchPanel
        ><b-icon icon="search" font-scale="1"></b-icon
      ></b-button>
      <b-collapse id="searchPanel">
        <b-card>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search iata, icao or name"
            v-model="filterInput"
          ></b-form-input>
          <b-button
            block
            variant="info"
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            @click="filterAirport"
            >Search</b-button
          ></b-card
        >
      </b-collapse>
      <ItemList v-if="airports.length > 0" :scrolledMax="this.scrolledMax" />

      <div v-else>
        <div v-if="loading">
          <b-icon
            icon="cone-striped"
            animation="spin"
            font-scale="4"
            variant="warning"
          ></b-icon>
          <h3>Loading</h3>
        </div>
        <div v-else>
          <b-icon
            icon="emoji-frown"
            animation="cylon"
            font-scale="4"
            variant="danger"
          ></b-icon>
          <h3>No data</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ItemList from "./../components/ItemList";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    ItemList,
  },
  props: {
    scrolled: Boolean,
  },
  data() {
    return {
      airports: [],
      loading: false,
      scrolledMax: false,
      filterInput: null,
    };
  },
  watch: {
    "$props.scrolled": function(newValue) {
      this.scrolledMax = newValue;
    },
  },
  methods: {
    filterAirport() {
      let filteredAirports = this.airports;
      if (this.filterInput) {
        filteredAirports = this.airports.filter((airport) => {
          return (
            airport.name
              .toLocaleLowerCase()
              .includes(this.filterInput.toLocaleLowerCase()) ||
            airport.iata
              .toLocaleLowerCase()
              .includes(this.filterInput.toLocaleLowerCase()) ||
            airport.icao
              .toLocaleLowerCase()
              .includes(this.filterInput.toLocaleLowerCase())
          );
        });
        // .filter((airport) => {
        //   airport.iata === this.filterInput;
        // });
      }
      this.$store.commit("setAirports", filteredAirports);

      // this.airports = filteredAirports;
    },

    async getAllData() {
      this.loading = true;
      await axios
        .get(
          "https://gist.githubusercontent.com/stepan-passnfly/8997fbf25ae87966e8919dc7803716bc/raw/37c07818c8498ae3d587199961233aada88ed743/airports.json"
        )
        .then((response) => {
          this.$store.commit("setAirports", response.data);
          this.airports = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getAllData();
  },
};
</script>

<style scoped>
.container {
  width: 75%;
  margin: 2rem auto 2rem auto;
}

.pageTitle {
  margin: 2rem auto 2rem auto;
}
</style>

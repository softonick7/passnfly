<template>
  <div>
    <ItemEdit :modalId="data.id.toString()" :data="data" />
    <b-card no-body class="overflow-hidden cardItem">
      <b-row no-gutters class="cardRow">
        <b-col md="2">
          <b-img-lazy
            :src="require('./../assets/passnflyPlane.png')"
            alt="Image"
            class="rounded-0"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-card-body :title="data.name" style="text-align:start">
            <b-card-text>
              <b>IATA:</b> {{ data.iata }}
              <b>ICAO:</b>
              {{ data.icao }}
              <b>Type:</b> {{ data.type }} <i>Source: {{ data.source }}</i>
            </b-card-text>
            <b-card-text>
              <b>Country:</b>
              {{ data.country }} <b>City:</b> {{ data.city }}
            </b-card-text>
            <b-card-text>
              <b>Latitude:</b> {{ data.latitude }} <b>Longitude:</b>
              {{ data.longitude }} <b>Altitude:</b> {{ data.altitude }}
              <b>Timezone:</b> {{ data.timezone }} <b>DST:</b> {{ data.DST }}
              <b>TZ:</b> {{ data.tz }}
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="2">
          <b-button
            v-b-modal="'modal-edit' + data.id.toString()"
            block
            variant="info"
            >Edit &#128397;</b-button
          >
          <b-button block variant="danger" @click="onDelete"
            >Delete <b-icon icon="patch-minus" font-scale="1"></b-icon
          ></b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ItemEdit from "./ItemEdit";
// import axios from "axios";

export default {
  name: "ItemCard",
  components: {
    ItemEdit,
  },
  props: {
    data: Object,
  },
  methods: {
    onDelete() {
      let airports = this.$store.state.airports,
        ind = airports.findIndex((airport) => {
          return airport.id === this.data.id;
        });

      if (ind > -1) {
        airports.splice(ind, 1);
      }

      this.$store.commit("setAirports", airports);
      // body = {
      //   params: {
      //     airports,
      //   },
      // };
      this.loading = true;

      //   await axios
      //     .delete("./backendUri", body)
      //     .then((response) => {
      //       this.$store.commit("setAirports", response.data);
      //       alert("Deleted Successfuly");
      //     })
      //     .finally(() => {
      //       this.loading = false;
      //     });
      alert("Deleted Successfuly");
    },
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

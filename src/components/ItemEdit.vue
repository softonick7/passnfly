<template>
  <b-modal
    :id="'modal-edit' + modalId"
    hide-backdrop
    centered
    title="Edit Info"
  >
    <b-form>
      <b-form-group id="nameLabel" label="Name:" label-for="name">
        <b-form-input
          id="name"
          type="text"
          v-model="airport.name"
          required
          placeholder="Airport name"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col md="6">
          <b-form-group id="cityLabel" label="City:" label-for="city">
            <b-form-input
              id="city"
              type="text"
              v-model="airport.city"
              required
              placeholder="Airport city"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="countryLabel" label="Country:" label-for="country">
            <b-form-input
              id="country"
              type="text"
              v-model="airport.country"
              required
              placeholder="Airport country"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="iataLabel" label="Iata:" label-for="iata">
            <b-form-input
              id="iata"
              type="text"
              v-model="airport.iata"
              required
              placeholder="Airport iata"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="icaoLabel" label="Icao:" label-for="icao">
            <b-form-input
              id="icao"
              type="text"
              v-model="airport.icao"
              required
              placeholder="Airport icao"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            id="latitudeLabel"
            label="Latitude:"
            label-for="latitude"
          >
            <b-form-input
              id="latitude"
              type="text"
              v-model="airport.latitude"
              required
              placeholder="Airport latitude"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            id="longitudeLabel"
            label="Longitude:"
            label-for="longitude"
          >
            <b-form-input
              id="longitude"
              type="text"
              v-model="airport.longitude"
              required
              placeholder="Airport longitude"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            id="altitudeLabel"
            label="Altitude:"
            label-for="altitude"
          >
            <b-form-input
              id="altitude"
              type="text"
              v-model="airport.altitude"
              required
              placeholder="Airport altitude"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            id="timezoneLabel"
            label="Timezone:"
            label-for="timezone"
          >
            <b-form-input
              id="timezone"
              type="text"
              v-model="airport.timezone"
              required
              placeholder="Airport timezone"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="DSTLabel" label="DST:" label-for="DST">
            <b-form-input
              id="DST"
              type="text"
              v-model="airport.DST"
              required
              placeholder="Airport DST"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="tzLabel" label="Tz:" label-for="tz">
            <b-form-input
              id="tz"
              type="text"
              v-model="airport.tz"
              required
              placeholder="Airport tz"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="typeLabel" label="Type:" label-for="type">
            <b-form-input
              id="type"
              type="text"
              v-model="airport.type"
              required
              placeholder="Airport type"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="sourceLabel" label="source:" label-for="source">
            <b-form-input
              id="source"
              type="text"
              v-model="airport.source"
              required
              placeholder="Airport source"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <template v-slot:modal-footer="{ cancel }">
      <div>
        <b-button type="reset" variant="danger" @click="cancel()"
          >Cancel</b-button
        >
        <b-button type="submit" variant="success" @click="onEdit"
          >Save</b-button
        >
      </div>
    </template>
  </b-modal>
</template>

<script>
// import axios from "axios";

export default {
  name: "ItemEdit",
  props: {
    data: Object,
    modalId: String,
  },
  data() {
    return {
      airport: {},
      loading: false,
    };
  },
  methods: {
    async onEdit(oEvent) {
      oEvent.target.previousElementSibling.click();
      let airports = this.$store.state.airports,
        ind = airports.findIndex((airport) => {
          return airport.id === this.data.id;
        });

      if (ind > -1) {
        airports.splice(ind, 1, this.airport);
      }

      this.$store.commit("setAirports", airports);

      // const  body = {
      //   params: {
      //     airport:this.airport,
      //   },
      // };
      this.loading = true;

      //   await axios
      //     .put("./backendUri",body)
      //     .then((response) => {
      //        this.$store.commit("setAirports", airports);
      //     })
      //     .finally(() => {
      //       this.loading = false;
      //     });
      alert("Edited successfuly");
    },
  },
  mounted() {
    this.airport = Object.assign({}, this.data);
  },
};
</script>

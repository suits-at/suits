<template>
  <section class="override-link-color">
    <h1>//{{ title }}</h1>
    <div class="mb-8 max-w-4xl" v-html="$md.render(content)" />
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/3 text-center my-4">
        <font-awesome-icon :icon="['fal', iconMe]" size="3x" color="#646464" />
        <div v-html="$md.render(textMe)" />
      </div>
      <div class="w-full sm:w-1/3 text-center py-4">
        <font-awesome-icon
          :icon="['fal', iconLocation]"
          size="3x"
          color="#646464"
        />
        <div v-html="$md.render(textLocation)" />
      </div>
      <div class="w-full sm:w-1/3 text-center py-4">
        <font-awesome-icon
          :icon="['fal', iconMail]"
          size="3x"
          color="#646464"
        />
        <div v-html="$md.render(textMail)" />
      </div>
    </div>
    <div id="map" ref="map">Google Map is loading...</div>
  </section>
</template>

<script>
export default {
  components: {},
  async asyncData() {
    return await import('~/content/contact/kontakt.json');
  },
  data() {
    let marker;
    const mapsKey = process.env.MAPS_KEY;
    return {
      marker,
      mapsKey,
    };
  },
  mounted() {
    if (typeof google === 'undefined') {
      const script = document.createElement('script');
      script.onload = this.initMap;
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.mapsKey}&libraries=places`;
      document.head.appendChild(script);
    } else {
      this.initMap();
    }
  },
  methods: {
    initMap() {
      const myLatLng = { lat: 48.226668, lng: 16.4225076 };
      const mapRef = this.$refs.map;

      const map = new google.maps.Map(mapRef, {
        zoom: 14,
        center: myLatLng,
        mapTypeControl: false,
        streetViewControl: false,
      });

      this.marker = new google.maps.Marker({
        position: myLatLng,
        map,
        icon: '/images/uploads/suits_marker.png',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#map {
  min-height: 400px;
  margin-bottom: 2rem;
}
</style>

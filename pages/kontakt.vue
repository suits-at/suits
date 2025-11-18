<template>
  <section class="override-link-color">
    <h1>//{{ kontaktData?.title }}</h1>
    <div class="mb-8 max-w-4xl" v-html="kontaktData?.content" />
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/3 text-center my-4">
        <font-awesome-icon v-if="kontaktData?.iconMe" :icon="['fas', kontaktData.iconMe]" size="3x" color="#646464" />
        <div v-html="kontaktData?.textMe" />
      </div>
      <div class="w-full sm:w-1/3 text-center py-4">
        <font-awesome-icon
          v-if="kontaktData?.iconLocation"
          :icon="['fas', kontaktData.iconLocation]"
          size="3x"
          color="#646464"
        />
        <div v-html="kontaktData?.textLocation" />
      </div>
      <div class="w-full sm:w-1/3 text-center py-4">
        <font-awesome-icon
          v-if="kontaktData?.iconMail"
          :icon="['fas', kontaktData.iconMail]"
          size="3x"
          color="#646464"
        />
        <div v-html="kontaktData?.textMail" />
      </div>
    </div>
    <div id="map" ref="mapElement">Google Map is loading...</div>
  </section>
</template>

<script setup lang="ts">
import type { ContactContent } from '~/types/content'

const config = useRuntimeConfig()
const mapsKey = config.public.mapsKey

const mapElement = ref<HTMLElement>()
const marker = ref()

const { data: kontaktData } = await useAsyncData('contact', () =>
  queryContent<ContactContent>('/contact/kontakt').findOne()
)

onMounted(() => {
  if (typeof google === 'undefined') {
    const script = document.createElement('script')
    script.onload = initMap
    script.type = 'text/javascript'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsKey}&libraries=places`
    document.head.appendChild(script)
  } else {
    initMap()
  }
})

function initMap() {
  const myLatLng = { lat: 48.226668, lng: 16.4225076 }
  const mapRef = mapElement.value

  if (!mapRef) return

  const map = new (google as any).maps.Map(mapRef, {
    zoom: 14,
    center: myLatLng,
    mapTypeControl: false,
    streetViewControl: false,
  })

  marker.value = new (google as any).maps.Marker({
    position: myLatLng,
    map,
    icon: '/images/uploads/suits_marker.png',
  })
}
</script>

<style lang="scss" scoped>
#map {
  min-height: 400px;
  margin-bottom: 2rem;
}
</style>

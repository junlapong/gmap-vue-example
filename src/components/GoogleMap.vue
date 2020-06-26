<template>
  <div class="gmap">
    <GmapMap
      :center="{ lat: 13.7246, lng: 100.633111 }"
      :zoom="7"
      style="width: 100%; height: 800px"
    />
  </div>
</template>

<script>
export default {
  name: "GoogleMap"
};
</script>

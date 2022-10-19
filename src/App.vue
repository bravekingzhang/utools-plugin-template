<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

useDark();

async function handlePluginEnterCallback(e: Event) {
  console.log("tool-plugin-enter", e);
}

onMounted(() => {
  window.addEventListener("tool-plugin-enter", handlePluginEnterCallback);
});

onUnmounted(() => {
  window.removeEventListener("tool-plugin-enter", handlePluginEnterCallback);
});
</script>

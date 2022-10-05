<template>
  <div>您已经进入插件{{ count + 1 }}次了</div>

  <template-item :data="3"></template-item>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

import TemplateItem from "./components/template-item.vue";

useDark();

// 有点类似vue2的 data()
const count = ref<number>(0);

async function handlePluginEnterCallback(e: Event) {
  count.value = count.value + 1;
}

onMounted(() => {
  window.addEventListener("tool-plugin-enter", handlePluginEnterCallback);
});

onUnmounted(() => {
  window.removeEventListener("tool-plugin-enter", handlePluginEnterCallback);
});
</script>

<template>这里是一个组件示例,计算属性值是{{ computedData }}</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  data: { type: Number, required: true },
});

// defineEmits(["cancel", "refresh"]);

const computedData = computed(() => (props.data || 0) + 1);
</script>

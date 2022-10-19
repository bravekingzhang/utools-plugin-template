<template>
  <div class="container">
    <h1 class="title">我这里是首页{{ greeting }}</h1>
    <el-button @click="toDetail">点击我到详情页</el-button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";

export default defineComponent({
  data() {
    return {
      message: "Hello!",
    };
  },
  components: {
    ElButton,
  },
  computed: {
    greeting() {
      return this.message + "!";
    },
  },
  methods: {
    toDetail() {
      this.$router.push("/detail");
    },
  },
  mounted() {
    this.greeting; // type: string
  },
  setup() {},
});
</script>

// ts 是用参考这里 https://blog.csdn.net/qq_25186543/article/details/121954169
// or 参考这里 https://vuejs.org/guide/typescript/composition-api.html

<template>
  <div id="app">
    <test-button>按钮</test-button>
    <test-input>按钮</test-input>
  </div>
</template>

<script>
/*eslint-disable */
import TestButton from "./TestButton";
import TestInput from "./TestInput";
export default {
  name: "app",
  components: {
    TestButton,
    TestInput
  }
};
</script>

<style lang="scss"></style>

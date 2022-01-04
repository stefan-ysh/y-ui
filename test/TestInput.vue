<template>
  <div class="app">
    <div class="row">
      <h4>Original</h4>
      <y-input type="password" :value="value"></y-input>
    </div>
    <div class="row">
      <h4>Plain</h4>
    </div>
    <div class="row">
      <h4>Round</h4>
    </div>
    <div class="row">
      <h4>Circle</h4>
    </div>
    <div class="row">
      <h4>Font</h4>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  data() {
    return {
      value: "QazWsx1472582017"
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 600px;
  // height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.row {
  padding: 10px 0;
}
.y-button {
  margin-left: 10px;
}
h4 {
  text-align: center;
}
</style>

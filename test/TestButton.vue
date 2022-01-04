<template>
  <div class="app">
    <div class="row">
      <h4>Original</h4>
      <y-button>Button</y-button>
      <y-button type="primary">Button</y-button>
      <y-button type="success">Button</y-button>
      <y-button type="info">Button</y-button>
      <y-button type="warning">Button</y-button>
    </div>
    <div class="row">
      <h4>Plain</h4>
      <y-button plain>Button</y-button>
      <y-button plain type="primary">Button</y-button>
      <y-button plain type="success">Button</y-button>
      <y-button plain type="info">Button</y-button>
      <y-button plain type="warning">Button</y-button>
    </div>
    <div class="row">
      <h4>Round</h4>
      <y-button round plain>Button</y-button>
      <y-button round plain type="primary">Button</y-button>
      <y-button round plain type="success">Button</y-button>
      <y-button round plain type="info">Button</y-button>
      <y-button round plain type="warning">Button</y-button>
    </div>
    <div class="row">
      <h4>Circle</h4>
      <y-button circle>OK</y-button>
      <y-button circle type="primary">OK</y-button>
      <y-button circle type="success">OK</y-button>
      <y-button circle type="info">OK</y-button>
      <y-button circle type="warning">OK</y-button>
    </div>
    <div class="row">
      <h4>Font</h4>
      <y-button plain>字体</y-button>
      <y-button icon="y-icon-check" circle plain type="primary"></y-button>
      <y-button icon="y-icon-message" circle plain type="success"></y-button>
      <y-button icon="y-icon-search" circle plain type="info"></y-button>
      <y-button icon="y-icon-star-off" plain type="warning">字体图标</y-button>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
export default {};
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

<template>
  <div>
    <input
      :type="type"
      :title="title"
      :placeholder="placeholder"
      :value="value"
      :min="min"
      :max="max"
      :name="name"
      :readonly="
        ['hidden', 'range', 'color', 'checkbox', 'radio', 'file'].indexOf(
          type
        ) > -1
          ? ''
          : readonly
      "
      :minlength="
        ['text', 'email', 'search', 'password', 'tel', 'url'].indexOf(type) > -1
          ? minlength
          : ''
      "
      :maxlength="
        ['text', 'email', 'search', 'password', 'tel', 'url'].indexOf(type) > -1
          ? maxlength
          : ''
      "
      :disabled="disabled"
      :step="step"
    />
    <span v-if="showPassword" @mousedown="showPassword" @mouseup="hidePassword">
      <i
        :class="type === 'text' ? 'y-icon-search' : 'y-icon-ice-cream-round'"
      ></i>
    </span>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: "YInput",
  props: {
    type: {
      type: String,
      default: "email"
    },
    name: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    value: {
      type: String | Number,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    min: {
      type: String | Number,
      default: ""
    },
    max: {
      type: String | Number,
      default: ""
    },
    step: {
      type: String | Number,
      default: ""
    },
    minlength: {
      type: String | Number,
      default: ""
    },
    maxlength: {
      type: String | Number,
      default: ""
    }
  },
  methods: {
    showPassword() {
      let tempVal = this.value;
      this.type = "text";
      this.value = tempVal;
    },
    hidePassword() {
      let tempVal = this.value;
      this.type = "password";
      this.value = tempVal;
    }
  }
};
</script>
<style lang="scss"></style>

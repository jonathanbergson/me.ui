<template>
  <button>
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: "me-button",
  props: {
    label: {type:String, default:"button"}
  }
};
</script>

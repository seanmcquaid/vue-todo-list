<template>
  <button type="type" @click="onClick"><slot /></button>
</template>

<script>
export default {
  props: {
    onClick: { type: Function },
    type: { type: String },
  },
};
</script>

<style scoped>
button {
  border: 2px solid black;
}
</style>

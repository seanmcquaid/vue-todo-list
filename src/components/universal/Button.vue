<template>
  <button type="type" @click="onClick"><slot /></button>
</template>

<script>
export default {
  props: {
    onClick: { type: Function, required: false },
    type: { type: String, required: false },
  },
};
</script>

<style scoped>
button {
  border: 2px solid black;
}
</style>

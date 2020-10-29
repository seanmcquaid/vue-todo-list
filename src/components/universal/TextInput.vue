<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input type="text" id="name" :value="value" @input="onChange" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {
    onChange($event) {
      this.$emit('text-input-on-change', {
        value: $event.target.value,
        name: this.name,
      });
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
input {
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid black;
  outline: none;
}
</style>

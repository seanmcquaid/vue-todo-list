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

<style></style>

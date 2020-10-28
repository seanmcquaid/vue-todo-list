<template>
  <div class="home">
    <TextInput
      name="inputText"
      :value="inputText"
      @update="update"
      label="Add Todo"
    />
    <Button :type="'button'" :onClick="click">Add To Do</Button>
  </div>
</template>

<script>
import TextInput from '../components/universal/TextInput.vue';
import Button from '@/components/universal/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
    TextInput,
  },
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    click() {
      console.log(this.inputText);
    },
    update(payload) {
      this[payload.name] = payload.value;
    },
  },
};
</script>

<style scoped></style>

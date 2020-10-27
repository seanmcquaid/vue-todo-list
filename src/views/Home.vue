<template>
  <div class="home">
    <Button :type="'button'" :onClick="click">Add To Do</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/universal/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    click() {
      console.log('click');
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="home">
    <form @submit.prevent="submitNewTodo">
      <TextInput
        name="inputText"
        :value="inputText"
        @text-input-on-change="textInputOnChange"
        label="Add Todo"
      />
      <Button :type="'submit'">Add To Do</Button>
    </form>
  </div>
  <TodoList />
</template>

<script>
import TodoList from '../components/app/Home/TodoList.vue';
import TextInput from '../components/universal/TextInput.vue';
import Button from '@/components/universal/Button.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Button,
    TextInput,
    TodoList,
  },
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    textInputOnChange(payload) {
      this[payload.name] = payload.value;
      console.log(this.$store.state);
    },
    submitNewTodo() {
      this.addTodo({
        text: this.inputText,
      });
    },
  },
};
</script>

<style scoped></style>

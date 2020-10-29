<template>
  <div class="home">
    <H1>Simple Todo List App</H1>
    <form @submit.prevent="submitNewTodo" class="submitNewTodoForm">
      <TextInput
        name="inputText"
        :value="inputText"
        @text-input-on-change="textInputOnChange"
        label="Add Todo"
      />
      <Button :type="'submit'">Add Todo</Button>
    </form>
    <TodoList />
  </div>
</template>

<script>
import H1 from '../components/universal/Typography/H1.vue';
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
    H1,
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
    },
    submitNewTodo() {
      this.addTodo({
        text: this.inputText,
      });
      this.inputText = '';
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.submitNewTodoForm {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
}
</style>

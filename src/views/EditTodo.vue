<template>
  <div class="editTodo">
    <H1>Edit Todo</H1>
    <form @submit.prevent="submitEditedTodo" class="submitEditedTodoForm">
      <TextInput
        name="inputText"
        :value="inputText"
        @text-input-on-change="textInputOnChange"
      />
      <Button :type="'submit'">Submit Edit</Button>
    </form>
  </div>
</template>

<script>
import H1 from '../components/universal/Typography/H1.vue';
import Button from '../components/universal/Button.vue';
import TextInput from '../components/universal/TextInput.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    Button,
    TextInput,
    H1,
  },
  data() {
    return {
      inputText: '',
    };
  },
  computed: {
    ...mapGetters(['getTodoById']),
    todoId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(['editTodo']),
    textInputOnChange(payload) {
      this[payload.name] = payload.value;
    },
    submitEditedTodo() {
      this.editTodo({
        todo: {
          text: this.inputText,
          isCompleted: false,
        },
        index: Number.parseInt(this.todoId),
      });
      this.$router.push({ name: 'home' });
    },
  },
  mounted() {
    this.inputText = this.getTodoById(Number.parseInt(this.todoId))?.text ?? '';
  },
};
</script>

<style scoped>
.editTodo {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.submitEditedTodoForm {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
}
</style>

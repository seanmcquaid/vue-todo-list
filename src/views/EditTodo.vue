<template>
  <div>Hello</div>
  <form @submit.prevent="submitEditedTodo">
    <TextInput
      name="inputText"
      :value="inputText"
      @text-input-on-change="textInputOnChange"
      label="Add Todo"
    />
    <Button :type="'submit'">Add To Do</Button>
  </form>
</template>

<script>
import Button from '../components/universal/Button.vue';
import TextInput from '../components/universal/TextInput.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Button,
    TextInput,
  },
  data() {
    return {
      inputText: '',
    };
  },
  computed: {
    ...mapGetters({ todoInfo: 'getTodoById' }),
    todoId() {
      return this.$route.params.id;
    },
  },
  methods: {
    textInputOnChange(payload) {
      this[payload.name] = payload.value;
    },
  },
  mounted() {
    this.inputText = this.todoInfo(Number.parseInt(this.todoId)).text;
  },
};
</script>

<style></style>

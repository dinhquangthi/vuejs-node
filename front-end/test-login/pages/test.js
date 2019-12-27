export default {
  name: "test",
  data () {
    return {
      user: [{
        email: '',
        password: '',
      }],
      show1: false,
      show2: true,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
      },
    }
  },
  computed: {
  },
  methods: {
    getEmail() {
      this.user.email = event.target.value;
      console.log(this.user.email);
    },
    getPass(){
      this.user.password = event.target.value;
      console.log(this.user.password);
    },
    submit() {
      console.log('aaaa');
    }
  }
};

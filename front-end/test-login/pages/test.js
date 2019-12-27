import axios from 'axios'
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
    // de ta
    getEmail() {
      this.user.email = event.target.value;
      // console.log(this.user.email);
    },
    getPass(){
      this.user.password = event.target.value;
      // console.log(this.user.password);
    },
    submit() {
      axios.request('http://localhost:5000/users/login', {
    })
    .then(response => {
      console.log('call thanh cong');
      console.log(response);
    })
    .catch(e => {
      console.log('call that bai',e);
    })
    }
  }
};

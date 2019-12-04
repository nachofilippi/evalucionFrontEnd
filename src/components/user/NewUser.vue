<template>
  <div class="row">
    <div class="col-12">
      <div class="card border-secondary mb-3">
        <div class="card-header">Creación de nuevo usuario</div>
        <div class="card-body">
          <h4>Nombre</h4>
          <input type="text" class="form-control" v-model="user.name" placeholder="Joaquin" aria-label="Username"
            aria-describedby="basic-addon1">
          <h4 for="dateofbirth">Fecha de nacimiento</h4>
          <input v-model="user.date" type="date" name="dateofbirth" id="dateofbirth">
          <h4>Fecha de nacimiento</h4>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-danger" @click="user.gender = 'Femenino'">
              <input type="radio" name="options" v-model="user.gender" autocomplete="off">Femenino </label>
            <label class="btn btn-primary" @click="user.gender = 'Masculino'">
              <input type="radio" name="options" v-model="user.gender" autocomplete="off">Masculino </label>
          </div>
          <h4>Email</h4>
          <input v-model="user.email" type="text" class="form-control" placeholder="joaquin@gmail.com"
            aria-label="Email" aria-describedby="basic-addon1">
          <hr>
          <div class="d-flex justify-content-end">
            <router-link tag="button" type="button" class="btn btn-btn btn-outline-secondary cancel" :to="link">CANCELAR
            </router-link>
            <button tag="button" type="button" class="btn btn-success" @click="save">GUARDAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as moment from 'moment';
import Swal from 'sweetalert2';

export default {
  components:{
    Swal
  },
  data() {
    return {
      link: {
        name: '/user',
      },
      userInformation: [],
      user: [{
        id: '',
        name: '',
        date: '',
        gender: '',
        email: ''
      }],
      newUser: {
        id: null,
        name: '',
        age: null,
        gender: '',
        email: '',
      },
    }
  },
  created() {
    this.userInformation = JSON.parse(localStorage.getItem('userInformation'));
  },
  methods: {
    save() {
      this.userInformation = JSON.parse(localStorage.getItem('userInformation'));
      // difference between today and user's birthday than gives me the age
      let age = Math.abs(parseInt(moment.duration(moment.utc(this.user.date).diff(moment())).asYears()));
      // create object to set in localStorage
      this.newUser.id = this.idUniqueValidation(age);
      if (this.newUser.id != 0) {
        this.newUser.gender = this.user.gender;
        this.newUser.email = this.user.email;
        this.newUser.name = this.user.name;
        this.newUser.age = age;
        if(this.userInformation == null){
          this.userInformation = [];
        }
        this.userInformation.push(this.newUser);
        localStorage.setItem('userInformation', JSON.stringify(this.userInformation));
        this.successSwal(this.newUser.id);
      }
    },
    // generate an unique id that not exists in localStorage and validate unique name and mail
    idUniqueValidation(age) {
      // random id
      let id = parseInt(Math.random() * 10000);
      // validate over age and break and show swal
      if(age < 18){
        this.errorSwal('una edad inválida');
        return 0;
      }
      // regex email validation break and show swal
      if(this.validateEmail(this.user.email) == false){
        this.errorSwal('un mail inválido');
        return 0;
      }
      
      if (id != 0 && this.userInformation != null) {
        this.userInformation.forEach((user, index) => {
          // if id exists generates another id
          if (user.id == id)
            id = parseInt(Math.random() * 10000);
          // if name exist, break and show swal
          if (user.name == this.user.name){
            this.errorSwal('un nombre ya existente');
            return 0;
          }
          // if name exist, break and show swal
          if(user.email == this.user.email){
            this.errorSwal('un mail ya existente');
            return 0;
          }
        });
        return id;
      }
      // if Object in localStorage is empty
      if(this.userInformation == null)
        return id;
    },
    // validate email with regex 
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    // error alert function
    errorSwal(msg){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Se introdujo ${msg}`,
      })
    },
    // success alert function
    successSwal(msg) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado',
        text: `ID: ${msg}`,
        confirmButtonText: 'OK'
      }).then((result) => {
        this.$router.push({ name: "userList" });
      })
    }
  }
}
</script>

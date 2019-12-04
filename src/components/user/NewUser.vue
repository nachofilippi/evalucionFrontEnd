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
              <input type="radio" name="options" v-model="user.gender"  autocomplete="off">Femenino </label>
            <label class="btn btn-primary" @click="user.gender = 'Masculino'">
              <input type="radio" name="options" v-model="user.gender"  autocomplete="off">Masculino </label>
          </div>




          <h4>Email</h4>
          <input v-model="user.email" type="text" class="form-control" placeholder="joaquin@gmail.com" aria-label="Email"
            aria-describedby="basic-addon1">
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

export default {
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
      }

    }
  },
  created() {
    this.userInformation = JSON.parse(localStorage.getItem('userInformation'));
    // console.log(this.userInformation);
  },
  methods: {
    save() {
      // difference between today and user's birthday than gives me the age
      let age = Math.abs(parseInt(moment.duration(moment.utc(this.user.date).diff(moment())).asYears()));
      // create object to set in localStorage
      this.newUser.id = this.idUniqueValidation(age);
      console.log(this.newUser.id);
      
      if (this.newUser.id != 0) {
        this.newUser.gender = this.user.gender;
        this.newUser.email = this.user.email;
        this.newUser.name = this.user.name;
        this.newUser.age = age;
        if(this.userInformation == null){
          localStorage.setItem('userInformation', JSON.stringify(this.newUser));
        }else{
          this.userInformation.push(this.newUser);
          localStorage.setItem('userInformation', JSON.stringify(this.userInformation));
        }
        console.log(this.userInformation);
        // set information in object localStorage
      }
    },
    // generate an unique id that not exists in localStorage and validate unique name and mail
    idUniqueValidation(age) {
      // random id
      let id = parseInt(Math.random() * 10000);
      // validate age 
      if(age < 18){
        return 0;
      }
      // regex email validation
      if(this.validateEmail(this.user.email) == false){
        return 0;
      }
      
      if (id != 0 && this.userInformation != null) {
        this.userInformation.forEach((user, index) => {
          // if id exists generates another id
          if (user.id == id)
            id = parseInt(Math.random() * 10000);
          // if mail or name exist, break
          if ((user.name == this.user.name) || (user.email == this.user.email))
            return 0;
        });
        return id;
      }
      // if Object in localStorage is empty
      if(this.userInformation == null)
        return id;
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

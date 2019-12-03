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
export default {
    data(){
        return {
            link:{ 
                name:'/user', 
            },
            userInformation: [],
            user:[{
              id:'',
              name:'',
              date:'',
              gender:'',
              email:''
            }],
          newUser : {
            id: null,
            name: '',
            age: null,
            gender: '',
            email: '',
          }

        }
    },
    created(){
      this.userInformation = JSON.parse(localStorage.getItem('userInformation'));
      console.log(this.userInformation);
    },
    methods:{
      save(){
        this.newUser.id = this.userInformation.length; 
        this.newUser.gender = this.user.gender;
        this.newUser.email = this.user.email;
        this.newUser.name = this.user.name;
        console.log(this.user.date);
        

        this.userInformation.push(this.newUser);
        console.log(this.userInformation);
        
        // localStorage.setItem('userInformation', JSON.stringify(this.userInformation));
        
      },
     
    }
}
</script>

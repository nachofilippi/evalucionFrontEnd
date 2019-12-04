<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card border-secondary mb-3">
                    <div class="card-header">Listado de usuario activos</div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th v-for="(title, index) in titles" :key="index" scope="col-2">{{title}}</th>
                                    <th scope="col-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(info, index) in userInformation" :key="index" style="cursor: pointer">
                                    <td>{{info.id}}</td>
                                    <td>{{info.name}}</td>
                                    <td>{{info.age}}</td>
                                    <td>{{info.gender}}</td>
                                    <td>{{info.email}}</td>
                                    <td class="d-flex justify-content-end">
                                        <a href="#">
                                            <span class="glyphicon glyphicon-edit mr-2"></span>
                                        </a>
                                        <a href="#">
                                            <span class="glyphicon glyphicon-trash text-danger"></span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- <ul class="list-group">

                            <router-link tag="li" to="/user/2" class="list-group-item" >Lucas
                            </router-link>
                            <router-link tag="li" to="/user/3" class="list-group-item" style="cursor: pointer">Matias
                            </router-link>
                        </ul> -->
                        
                        <div class="d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" @click="prev">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" @click="next">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-end ">
                            <router-link class="btn btn-info" data-toggle="tooltip" data-placement="top"
                                title="Usted podrá cargar un nuevo usuario a la lista" :to="{ name: 'newUser'}">
                                Cargar Usuario
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>

export default {
    data(){
        return {
            titles:['ID','NOMBRE','EDAD','SEXO','EMAIL'],
            userInformation: [{
                id: null,
                name: '',
                age: null,
                gender: '',
                email: '',
            }],
            link:{ 
                name:'userEdit', 
                params: { id: this.$route.params.id }, 
                hash: '#data'
            },
            pageNo: 1,
            pageSize: 10,
            pageCount: 0
        }
    },
    created(){
        this.userInformation = JSON.parse(localStorage.getItem('userInformation'));
        console.log(this.userInformation);
        
    },
    methods: {
        prev() {
            if (this.pageNo > 1) {
                this.pageNo -= 1;
                console.log(this.pageNo);
                console.log(this.userInformation.length);
            }
        },

        next() {
            if (this.pageNo < this.pageCount) {
                this.pageNo += 1;
                console.log(this.pageNo);
                console.log(user);
                
            }
        }
    }
}
</script>
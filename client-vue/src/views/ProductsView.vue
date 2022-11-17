<template>
  <main class="py-3">
    <div class="container">
      <div class="d-flex justify-content-between mt-3">
        <h1>Nos Produits</h1>
        <div style="width: 50%;">
          <router-link to="/add-product">
            <button type="button" class="btn btn-primary" style="height: 40px; margin-left: auto; width: 140px; display: flex; align-items: center; justify-content: space-between;">
              <i class="fa-solid fa-plus"></i> Ajouter
            </button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div v-for="(product, i) in inventory" :key="product.id" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="my-3 p-3 rounded card">
            <router-link :to="'product/'+product.name">
              <img class="card-img-top" :src="('./img/450/'+product.photo)" alt="{{ product.name }}" />
            </router-link>
            <div class="card-body">
              <div class="card-title">
                <h5>
                  <strong>{{ product.name }}</strong>
                </h5>
              </div>
              <p class="card-text">{{ product.category }}</p>
              <h3 class="card-text">$ {{ product.price }}</h3>
              <div class="card-title">{{ product.description }}</div>
              <div class="d-flex justify-content-between mt-3">
                <router-link class="btn btn-primary" :to="'/product-edit/'+product.id" style="background-color: white; color: black; padding: 0px;">
                  <i class="fa-solid fa-pen-to-square"></i>
                </router-link>
                <router-link class="btn btn-primary" :to="'/product-delete/'+product.id" style="background-color: white; color: black; padding: 0px;">
                  <i class="fa-solid fa-trash" @click="deleteProduct(product.id, i)"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['inventory', 'removeInv'],
  methods: {
    deleteProduct (id, i) {
      ProductDataService.delete(id)
        .then(() => {
          this.removeInv(i)
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>

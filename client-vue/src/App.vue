<template>
  <!-- nav -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container d-flex justify-content-between">
      <a href="#" class="navbar-brand">Maisonneuve</a>
      <div id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/"><i class='fa-solid fa-house'></i> Accueil</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/products"><i class='fa-solid fa-store'></i> Produits</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/about"><i className='fa-solid fa-circle-info'></i> À Propos</router-link></li>
          </ul>
      </div>
    </div>
  </nav>
  <router-view
  :inventory = "inventory"
  :addInv = "addInventory"
  :updateInv = "updateInventory"
  :removeInv = "removeInventory"
  />
  <FooterSection/>
</template>

<script>
import FooterSection from '@/components/AppFooter.vue'
import ProductDataService from '@/services/ProductDataService'

export default {
  name: 'myAppMaisonneuve',
  components: {
    FooterSection
  },
  data () {
    return {
      inventory: []
    }
  },
  methods: {
    addInventory (data) {
      this.inventory.push(data)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].photo = data.photo
      this.inventory[index].price = data.price
      this.inventory[index].description = data.description
      this.inventory[index].category = data.category
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
  }
}
</script>

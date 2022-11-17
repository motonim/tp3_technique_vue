<template>
  <div class="container my-5">
    <div class="row">
      <div class="col col-md-8">
        <img class="img-fluid" :src="'/img/450/'+product.photo" alt="{{ product.name }}" />
      </div>
      <div class="col col-md-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h3>{{ product.name }}</h3>
          </li>
          <li class="list-group-item">
            Prix: $ {{ product.price }}
          </li>
          <li class="list-group-item">
            Description: {{ product.description }}
          </li>
          <li class="list-group-item">
            Category: {{ product.category }}
          </li>
          <li class="list-group-item">
            Status: {{ product.stock }}
          </li>
        </ul>
      </div>
      <!-- <div class="col col-md-3">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col">Prix:</div>
                <div class="col">
                  <strong>$ {{ product.price}}</strong>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col">Status:</div>
                <div class="col">
                  {{ product.stock }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['inventory'],
  computed: {
    product () {
      const product = this.inventory.find((p) => {
        return p.name === this.$route.params.id
      })
      return product
    },
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.name === this.$route.params.id
      })
      return index
    }
  }
}
</script>

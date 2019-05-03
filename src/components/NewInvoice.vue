<template>
  <div id="new-invoice">
    <h3>New Invoice</h3>
    <div class="row">
      <form @submit.prevent="saveInvoice" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="project_id" required>
            <label>Project ID</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="invoice_id" required>
            <label>Invoice ID</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class='datepicker' v-model="created" required>
            <label>Created</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class='datepicker' v-model="due" required>
            <label>Due</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="item_1" required>
            <label>Item 1</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="cost_1" required>
            <label>Cost 1</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="item_2" required>
            <label>Item 2</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="cost_2" required>
            <label>Cost 2</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="item_3" required>
            <label>Item 3</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="cost_3" required>
            <label>Cost 3</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/invoices" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "new-invoice",
  data() {
    return {
      cost_1: null,
      cost_2: null,
      cost_3: null,
      created: null,
      due: null,
      invoice_id: null,
      item_1: null,
      item_2: null,
      item_3: null,
      project_id: null
    };
  },
  methods: {
    saveInvoice() {
      db.collection("invoices")
        .add({
          cost_1: this.cost_1,
          cost_2: this.cost_2,
          cost_3: this.cost_3,
          created: this.created,
          due: this.due,
          invoice_id: this.invoice_id,
          item_1: this.item_1,
          item_2: this.item_2,
          item_3: this.item_3,
          project_id: this.project_id
        })
        .then(docRef => this.$router.push("/invoices"))
        .catch(error => console.log(err));
    }
  }
};
</script>

<style>
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL Stuff **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}
</style>
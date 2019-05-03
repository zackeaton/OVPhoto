<template>
  <!-- <div id="view-invoice">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Invoice # {{invoice_id}}</h4>
      </li>
      <li class="collection-item">Project ID: {{project_id}}</li>
      <li class='collection-item'>Invoice ID: {{invoice_id}}</li>
      <li class='collection-item'>Created: {{created}}</li>
      <li class='collection-item'>Due: {{due}}</li>
      <li class='collection-item'>Item 1: {{item_1}}</li> 
      <li class='collection-item'>Cost 1: {{cost_1}}</li>     
      <li class='collection-item'>Item 2: {{item_2}}</li>
      <li class='collection-item'>Cost 2: {{cost_2}}</li>
      <li class='collection-item'>Item 3: {{item_3}}</li>
      <li class='collection-item'>Cost 3: {{cost_3}}</li>
      
    </ul>
    <router-link to="/invoices" class="btn grey">Back</router-link>
    <button @click="deleteInvoice" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-invoice', params: {invoice_id: invoice_id}}"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>
  </div>
</template> -->

<div class='invoice-box' id="view-invoice">
  <table cellpadding="0" cellspacing="0">
    <tr class="top">
      <td colspan="4">
        <table>
          <tr>
            <td class="title">
              <img src="http://static1.squarespace.com/static/5982735ae6f2e1038a293da0/t/5a47f502e4966b19e3e6d4e3/1514665395643/ov1.jpg?format=1000w" style="width:100%; max-width:300px;">
            </td>

            <td>
              Invoice #: {{invoice_id}}<br> 
              Created: {{created}}
              <br> 
              Due: {{due}}
              <!-- <input type="date" id='dates' v-model="invoice_due_date" class='right-align col s2' required> -->
            </td>
          </tr>
        </table>
      </td>

    <tr class="information">
      <td colspan="4">
        <table>
          <tr>
            <td>
              OV Photography<br> 1 University Blvd<br> St. Louis, MO 63121
            </td>

            <td>
              First Name Last Name<br> Project ID: {{project_id}}<br> first@example.com
            </td>
          </tr>
        </table>
      </td>
    </tr>

   <!-- <tr class="heading">
      <td colspan="3">Payment Method</td>
      <td>Payment Method</td>
    </tr>

    <tr class="details">
      <td colspan="3">Check</td>
      <td>1000</td>
    </tr> -->
  </table> 

  <table>
    <thead>
      <tr>
      <td>Item</td>
      <td>Unit Cost</td>
      <td>Quantity</td>
      <td>Price</td>
      </tr>
    </thead>

     <thead>
      <tr>
      <td>{{item_1}}</td>
      <td>{{cost_1}}</td>
      <td>1</td>
      <td>{{cost_1}}</td>
      </tr>
    </thead>

    <thead>
      <tr>
      <td>{{item_2}}</td>
      <td>{{cost_2}}</td>
      <td>1</td>
      <td>{{cost_2}}</td>
      </tr>
    </thead>

    <thead>
      <tr>
      <td>{{item_3}}</td>
      <td>{{cost_3}}</td>
      <td>1</td>
      <td>{{cost_3}}</td>
      </tr>
    </thead>

    <!-- <tr class="item" v-bind:key="item" v-for="item in items">
      <td><input v-model="item.description" /></td>
      <td><input type="number" v-model="item.price" /></td>
      <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$"
       onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="item.quantity" /></td>
      <td>${{ item.price * item.quantity}}</td>
    </tr> -->

    <!--<ul>
      <li :key='item.id' v-for='item in items'>{{item.price}}</li>
    </ul> -->

   <tr class="total">
      <td colspan="3"></td>
      <td>Total: ${{ total }}</td>
    </tr>

   <tr>
      <td colspan="4">
        <router-link to="/invoices" class="btn grey">Back</router-link>
        <button @click="deleteInvoice" class="btn red">Delete Invoice</button>
       <!-- <button class="btn" @click="addRow">Add row</button> -->
       <!-- <button class="btn red" @click="delRow">Delete row</button> -->
      </td>
    </tr>

  </table>
<div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-invoice', params: {invoice_id: invoice_id}}"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>

</div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "view-invoice",
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
  beforeRouteEnter(to, from, next) {
    db.collection("invoices")
      .where("invoice_id", "==", to.params.invoice_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.cost_1 = doc.data().cost_1;
            vm.cost_2 = doc.data().cost_2;
            vm.cost_3 = doc.data().cost_3;
            vm.created = doc.data().created;
            vm.due = doc.data().due;
            vm.invoice_id = doc.data().invoice_id;
            vm.item_1 = doc.data().item_1;
            vm.item_2 = doc.data().item_2;
            vm.item_3 = doc.data().item_3;
            vm.project_id = doc.data().project_id
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("invoices")
        .where("invoice_id", "==", this.$route.params.invoice_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.cost_1 = doc.data().cost_1;
            this.cost_2 = doc.data().cost_2;
            this.cost_3 = doc.data().cost_3;
            this.created = doc.data().created;
            this.due = doc.data().due;
            this.invoice_id = doc.data().invoice_id;
            this.item_1 = doc.data().item_1;
            this.item_2 = doc.data().item_2;
            this.item_3 = doc.data().item_3;
            this.project_id = doc.data().project_id;
          });
        });
    },
    deleteInvoice() {
      if (confirm("Are you sure?")) {
        db.collection("invoices")
          .where("invoice_id", "==", this.$route.params.invoice_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/invoices");
            });
          });
      }
    },
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
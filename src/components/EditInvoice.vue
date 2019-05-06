<template>
  <div id="edit-invoice">
    <h3>Edit Invoice</h3>
    <!-- <div class="row">
      <form @submit.prevent="updateInvoice" class="col s12">
          <div class="row">
          <div class="input-field col s 12">
            Project ID:
            <input disabled type="text" v-model="project_id" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Invoice ID:
            <input disabled type="text" v-model="invoice_id" required>
            <label></label>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s 12">
            Created:
            <input type="date" class='datepicker' v-model="created" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Due:
            <input type="date" class='datepicker' v-model="due" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Item 1:
            <input type="text" v-model="item_1" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Cost 1:
            <input type="text" v-model="cost_1" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Item 2:
            <input type="text" v-model="item_2" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Cost 2:
            <input type="text" v-model="cost_2" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Item 3:
            <input type="text" v-model="item_3" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Cost 3:
            <input type="text" v-model="cost_3" required>
            <label></label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/invoices" class="btn grey">Cancel</router-link>
        
      </form> 
    </div>-->

    <div class="invoice-box" id="view-invoice">
      <table cellpadding="0" cellspacing="0">
        <tr class="top">
          <td colspan="4">
            <table>
              <tr>
                <td class="title">
                  <img
                    src="http://static1.squarespace.com/static/5982735ae6f2e1038a293da0/t/5a47f502e4966b19e3e6d4e3/1514665395643/ov1.jpg?format=1000w"
                    style="width:100%; max-width:300px;"
                  >
                </td>

                <td>
                  Invoice #: {{invoice_id}}
                  <br>Created:
                  <input
                    type="date"
                    id="dates"
                    v-model="created"
                    class="right-align col s2"
                    required
                  >
                  <br>Due:
                  <input
                    type="date"
                    id="dates"
                    v-model="due"
                    class="right-align col s2"
                    required
                  >
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="information">
          <td colspan="4">
            <table>
              <tr>
                <td>
                  OV Photography
                  <br>1 University Blvd
                  <br>St. Louis, MO 63121
                </td>

                <td>
                  Customer:
                  <select v-model="fbase_id">
                    <option v-for="(name,index) in customerArray" :key="index">{{name}}</option>
                  </select>
                  <br>
                  <!-- First Name Last Name<br> Project ID: {{project_id}}<br> first@example.com -->
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
        </tr>-->
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
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 1:
                  <input type="text" v-model="item_1" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 1:
                  <input type="number" v-model="cost_1" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_1}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 2:
                  <input type="text" v-model="item_2" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 2:
                  <input type="number" v-model="cost_2" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_2}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 3:
                  <input type="text" v-model="item_3" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 3:
                  <input type="number" v-model="cost_3" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_3}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 4:
                  <input type="text" v-model="item_4" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 4:
                  <input type="number" v-model="cost_4" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_4}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 5:
                  <input type="text" v-model="item_5" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 5:
                  <input type="number" v-model="cost_5" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_5}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 6:
                  <input type="text" v-model="item_6" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 6:
                  <input type="number" v-model="cost_6" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_6}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 7:
                  <input type="text" v-model="item_7" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 7:
                  <input type="number" v-model="cost_7" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_7}}</td>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Item 8:
                  <input type="text" v-model="item_8" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>
              <div class="row">
                <div class="input-field col s 12">
                  Cost 8:
                  <input type="number" v-model="cost_8" required>
                  <label></label>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>{{cost_8}}</td>
          </tr>
        </thead>
        <!-- <tr class="item" v-bind:key="item" v-for="item in items">
      <td><input v-model="item.description" /></td>
      <td><input type="number" v-model="item.price" /></td>
      <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$"
       onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="item.quantity" /></td>
      <td>${{ item.price * item.quantity}}</td>
        </tr>-->

        <!--<ul>
      <li :key='item.id' v-for='item in items'>{{item.price}}</li>
        </ul>-->

        <tr>
          <td colspan="4">
            <button @click="updateInvoice" class="btn">Submit</button>
            <router-link to="/invoices" class="btn grey">Cancel</router-link>
            <!-- <button class="btn" @click="addRow">Add row</button> -->
            <!-- <button class="btn red" @click="delRow">Delete row</button> -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
function submitform() {
  $("#submit_handle").click();
}
</script>


<script>
import db from "./firebaseInit.js";
export default {
  name: "edit-invoice",
  data() {
    return {
      customerArray: [],
      cost_1: null,
      cost_2: null,
      cost_3: null,
      cost_4: null,
      cost_5: null,
      cost_6: null,
      cost_7: null,
      cost_8: null,
      created: null,
      due: null,
      invoice_id: null,
      item_1: null,
      item_2: null,
      item_3: null,
      item_4: null,
      item_5: null,
      item_6: null,
      item_7: null,
      item_8: null,
      project_id: null,
      fbase_id: null
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
            vm.cost_4 = doc.data().cost_4;
            vm.cost_5 = doc.data().cost_5;
            vm.cost_6 = doc.data().cost_6;
            vm.cost_7 = doc.data().cost_7;
            vm.cost_8 = doc.data().cost_8;
            vm.created = doc.data().created;
            vm.due = doc.data().due;
            vm.invoice_id = doc.data().invoice_id;
            vm.item_1 = doc.data().item_1;
            vm.item_2 = doc.data().item_2;
            vm.item_3 = doc.data().item_3;
            vm.item_4 = doc.data().item_4;
            vm.item_5 = doc.data().item_5;
            vm.item_6 = doc.data().item_6;
            vm.item_7 = doc.data().item_7;
            vm.item_8 = doc.data().item_8;
            vm.project_id = doc.data().project_id;
            vm.fbase_id = doc.data().fbase_id;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  async mounted() {
    const snapshot = await db
      .collection("customers")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.customerArray.push(
            // " " + doc.data().customer_id + " " + doc.data().first_name + " " + doc.data().last_name + " " + doc.data().email
            " " +
              doc.data().first_name +
              " " +
              doc.data().last_name +
              " | " +
              doc.data().email
          );
        });
      });
    // const customers = snapshot.docs.map(doc =>{
    //   doc
    // })
    // console.log(customers)
    console.log(this.customerArray);
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
            this.cost_4 = doc.data().cost_4;
            this.cost_5 = doc.data().cost_5;
            this.cost_6 = doc.data().cost_6;
            this.cost_7 = doc.data().cost_7;
            this.cost_8 = doc.data().cost_8;
            this.created = doc.data().created;
            this.due = doc.data().due;
            this.invoice_id = doc.data().invoice_id;
            this.item_1 = doc.data().item_1;
            this.item_2 = doc.data().item_2;
            this.item_3 = doc.data().item_3;
            this.item_4 = doc.data().item_4;
            this.item_5 = doc.data().item_5;
            this.item_6 = doc.data().item_6;
            this.item_7 = doc.data().item_7;
            this.item_8 = doc.data().item_8;
            this.project_id = doc.data().project_id;
            this.fbase_id = doc.data().fbase_id;
          });
        });
    },
    updateInvoice() {
      //Validation first
      if (this.invoice_id == null) {
        alert("Invoice ID cannot be empty");
      } else if (this.fbase_id == null) {
        alert("You must choose a client");
      } else if (this.item_1 == null || this.item_1 == "") {
        alert("Item 1 cannot be empty");
      } else {
        db.collection("invoices")
          .where("invoice_id", "==", this.$route.params.invoice_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref
                .update({
                  cost_1: this.cost_1,
                  cost_2: this.cost_2,
                  cost_3: this.cost_3,
                  cost_4: this.cost_4,
                  cost_5: this.cost_5,
                  cost_6: this.cost_6,
                  cost_7: this.cost_7,
                  cost_8: this.cost_8,
                  created: this.created,
                  due: this.due,
                  invoice_id: this.invoice_id,
                  item_1: this.item_1,
                  item_2: this.item_2,
                  item_3: this.item_3,
                  item_4: this.item_4,
                  item_5: this.item_5,
                  item_6: this.item_6,
                  item_7: this.item_7,
                  item_8: this.item_8,
                  project_id: this.project_id,
                  fbase_id: this.fbase_id
                })
                .then(() => {
                  this.$router.push({
                    name: "view-invoice",
                    params: { invoice_id: this.invoice_id }
                  });
                });
            });
          });
      }
    }
  }
};
</script>

<style>
select {
  display: block !important;
}
</style>
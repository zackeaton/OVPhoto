<template>
  <div id="new-invoice">
    <h3>New Invoice</h3>
    <!--  <div class="row">
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
            <input type="number" v-model="cost_1" required>
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
            <input type="number" v-model="cost_2" required>
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
            <input type="number" v-model="cost_3" required>
            <label>Cost 3</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/invoices" class="btn grey">Cancel</router-link>
      </form>
    </div>
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
                  Invoice #:
                  <div class="row">
                    <div class="input-field col s 12">
                      <input type="text" v-model="invoice_id" required>
                      <label>Invoice ID</label>
                    </div>
                  </div>
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
            <button @click="saveInvoice" class="btn">Submit</button>
            <router-link to="/invoices" class="btn grey">Cancel</router-link>
            <button onClick='alert("This is the page you can create a new invoice from. Selecting a customer & a project from the dropdown is required, as is the first row.");' 
  class='btn'>Help</button>
            <!-- <button class="btn" @click="addRow">Add row</button> -->
            <!-- <button class="btn red" @click="delRow">Delete row</button> -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "new-invoice",
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
  methods: {
    saveInvoice() {
      
      //Validation first
      if (this.invoice_id == null) {
        alert("Invoice ID cannot be empty");
      } else if (this.fbase_id == null) {
        alert("You must choose a client");
      } else if (this.item_1 == null) {
        alert("Item 1 cannot be empty");
      } else {
        db.collection("invoices")
          .add({
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
          .then(docRef => this.$router.push("/invoices"))
          .catch(error => console.log(err));
      }
    }
  },
  async mounted() {
    const snapshot = await db
      .collection("customers")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.customerArray.push(
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
select {
  display: block !important;
}
</style>
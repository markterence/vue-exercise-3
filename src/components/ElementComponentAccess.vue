<template>
  <div class="mb-5">
    <h2>Element &amp; Component Access</h2>
    <div class="container-fluid mt-3">
      <div class="d-block">
        <div>
          <span class="h5 text-secondary">Message:</span>
          <input type="text" class="text-dark form-control" v-model="form.message" ref="textBox1">
        </div>
        <div class="d-flex">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="chkBox" v-model="form.broadcast">
            <label class="form-check-label" for="chkBox" style="user-select:none">Announcement: {{form.broadcast}}</label>
          </div>
          <div class="mx-3">
            <div class="form-check-inline">
              <input class="form-check-input" type="radio" id="rbtnWarn" name="logType" value="warning" v-model="form.logType">
              <label class="form-check-label text-warning" for="rbtnWarn" style="user-select:none" >Warning</label>
            </div>
            <div class="form-check-inline">
              <input class="form-check-input" type="radio" id="rbtnPrimary" name="logType" value="primary" v-model="form.logType">
              <label class="form-check-label text-primary" for="rbtnPrimary" style="user-select:none" >Primary</label>
            </div>
            <div class="form-check-inline"> 
              <input class="form-check-input" type="radio" id="rbtnSuccess" name="logType" value="success" v-model="form.logType">
              <label class="form-check-label text-success" for="rbtnSuccess" style="user-select:none" >Success</label>
            </div>
            <div class="form-check-inline" >
              <input class="form-check-input" type="radio" id="rbtnDanger" name="logType" value="danger" v-model="form.logType">
              <label class="form-check-label text-danger" for="rbtnDanger" style="user-select:none" >Danger</label>
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-block btn-dark" @click="broadcastMessage" ref="btnSend"><span class="v-green">Send</span></button>
          <button class="btn btn-block btn-dark" @click="clearMessage"><span class="text-danger">Purge</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {

  data() {
    return {
      form: {
        message: "Element & Component Access",
        broadcast: true
      }
    };
  }, 
  methods: {
    clearMessage($event) {
      this.$emit('onPurgeClicked', $event)
    },
    broadcastMessage(){
      if(this.form.message.trim() !== '') {
        this.$refs.textBox1.disabled = true;
        this.$refs.btnSend.disabled = true;

        setTimeout(()=>{
          const msg = [
            {
              message: `Component is accessed using $refs.`,
              logType: 'danger',
              tag: 'System'
            },
            {
              message: this.form.message,
              logType: this.form.logType,
              tag: this.form.broadcast ? 'Announcement' : null
            }
          ]
          this.$emit('onSendClicked', msg)
          this.$refs.textBox1.disabled = false;
          this.$refs.btnSend.disabled = false;
        }, 1000)
      }
    }
  }
};
</script>

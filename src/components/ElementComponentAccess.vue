<template>
  <div class="mb-5">
    <h2>Element &amp; Component Access</h2>
    <div class="container-fluid mt-3">
      <div class="d-block">
        <div>
          <span class="h5 text-secondary">Message:</span>
          <input type="text" class="text-dark form-control" v-model="form.message" ref="textBox1">
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="chkBox" v-model="form.broadcast">
          <label class="form-check-label" for="chkBox" style="user-select:none">Announcement: {{form.broadcast}}</label>
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
          const msg = {
            data: {
              message: this.form.message,
              warn: this.form.broadcast
            }
          }
          this.$emit('onSendClicked', msg)
          this.$refs.textBox1.disabled = false;
          this.$refs.btnSend.disabled = false;
        }, 1000)
      }
    }
  }
};
</script>

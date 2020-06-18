<template>
<ValidationObserver ref="observer" v-slot="{ passes }">
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" v-model="email" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Password">
            <b-input type="password" v-model="password" password-reveal></b-input>
          </b-field>
        </div>
      </div>
    </div>
  </section>
</ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  data: () => ({
    email: null,
    password: null
  })
};
</script>
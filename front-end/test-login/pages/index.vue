<script src="./test.js"></script>
<style lang="scss" scoped src="./test.scss"></style>

<template>
  <v-app id="index">
    <v-container>
      <v-row>
        <div class="form-login">
          <v-card :elevation="6">
            <form class="mx-auto">
              <h2 class="text-center title">Login</h2>
              <!-- Email -->
              <v-text-field  label="E-mail" required class="mb-3" @input="getEmail"></v-text-field>
              <!-- Password -->
              <v-text-field
               
                :rules="[rules.required]"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                @input="getPass"
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-btn large color="success" @click="submit">submit</v-btn>
            </form>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

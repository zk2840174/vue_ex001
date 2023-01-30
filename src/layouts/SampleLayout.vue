<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/page2">Page2</router-link>
        </li>
        <li>
          <router-link to="/todo/list">Todo List</router-link>
        </li>
      </ul>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

    </v-app-bar>

    <v-main>

      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      value=0
      mobile-break-point="10240"
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Startups</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Research</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>subject</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Tutorials</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>All About AI</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
      <v-container fill-height fill-width align-start>
        
      <feed/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Feed from "@/components/Feed";
import Item from "@/components/Item";
export default {
  name: "MainPage",
  components: {
    Feed,
    Item
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>
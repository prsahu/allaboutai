<template>
    <v-flex xs12>
        <v-card color="light-grey" class="black--text">
            <v-layout>
            <v-flex xs5>
                <v-img
                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                height="125px"
                contain
                ></v-img>
            </v-flex>
            <v-flex xs7>
                <v-card-title primary-title>
                <div>                    
                    <h2>Article headline</h2>                    
                </div>
                </v-card-title>
                <div>Description Article</div>
            </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <!-- <v-card-actions class="pa-3">
            Rate this album
            <v-spacer></v-spacer>
             <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon> 
            </v-card-actions> -->
        </v-card>
    </v-flex>
</template>

<script>
export default {
  name: "Item"
};
</script>

<style>
.flex-container {
  display: flex;
  align-items: left;
  /* background-color: #f1f1f1; */
  width: 100%;
}

.flex-container > div {
  /* background-color: DodgerBlue; */
  color: black;
  /* width: 100px; */
  /* margin: 10px;
          text-align: center; */
  line-height: 25px;
  font-size: 15px;
  align-items: left;
  width: 100%;
}
</style>

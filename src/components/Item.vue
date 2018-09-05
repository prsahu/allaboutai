<template>
    <v-flex xs12>
        <v-card color="light-grey" class="black--text">
            <v-layout>
                <v-flex xs5>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain/>
                </v-flex>
                <v-flex class="text-sm-left">
                    <v-card-title primary-title>
                        <h2>
                            <a :href="link">{{headline}}</a>
                        </h2>
                    </v-card-title>
                    <div>{{description}}</div>
                </v-flex>
            </v-layout>
            <!-- <v-divider light></v-divider>            -->
        </v-card>
    </v-flex>
</template>

<script>
export default {
  name: "Item",
  props: ["headline", "description", "image", "link"]
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

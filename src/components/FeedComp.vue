<template>
    <div>
        <Divider>
            <h2>4th September</h2>
        </Divider>
        <div class="center" v-for="i in feed" :key="i.id">        
            <Card dis-hover class="card">
              <Item 
              :headline="i.title"
              :description = "i.description"
              :link = "i.link"
              :image = "i.image"
              />
            </Card>
      </div > 
    </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "FeedComp",
  props: ["feed"],
  components: {
    Item
  }
};
</script>

<style>
</style>

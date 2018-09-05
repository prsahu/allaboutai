<template>
<div>
        <Divider><h2>4th September</h2></Divider>
        <div class="center" v-for="i in feed" :key="i.id">        
            <Card dis-hover class="card">
              <Item 
              :headline="i.title"
              :description = "i.description"
              :link = "i.link"
              :image = "i.image"
              />
            </Card>
            <!-- <Card dis-hover class="card">
              <Item/>
            </Card>
            <Card dis-hover class="card">
              <Item/>
            </Card>        
            <Card dis-hover class="card">
              <Item/>
            </Card>
            <Card dis-hover class="card">
              <Item/>
            </Card>
            <Card dis-hover class="card">
              <Item/>
            </Card>
            <Card dis-hover class="card">
              <Item/>
            </Card>
            <Card dis-hover class="card">
              <Item/>
            </Card>
            <Card dis-hover class="card">
              <Item/>
            </Card> -->
      </div > 
    </div>
</template>



<script>
import Item from "@/components/Item";
import DataService from "@/services/dataservice";
export default {
  name: "Feed",
  components: {
    Item
  },
  data() {
    return {
      feed: []
    };
  },
  async mounted() {
    this.feeds = (await DataService.index()).data;
    this.feed = this.feeds;
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    }
  }
};
</script>
<style>
.scroll-container {
  /* display: flex; */
  width: 50%;
  align-items: center;
  align-self: center;
  overflow: hidden;
  /* background-color: #f1f1f1; */
}
.center {
  margin: auto;
  width: 50%;
  /* border: 3px solid green; */
  padding: 5px;
}
.card {
  align-self: center;
  align-items: left;
  margin: 5px 0;
  width: 100%;
}
</style>


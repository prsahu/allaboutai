<template>
    <!-- <h1>Hello PDF</h1> -->
    <v-app>
    <p>Hello PDF</p>
    <!-- <div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> -->
    </v-app>        
</template>

<script>
export default {
name: "PDF",

mounted(){
    (function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://allaboutai.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
// disqus_shortname = 'allaboutai';
        // jQuery(document).ready(function() {
        //   jQuery("p").inlineDisqussions();
        // });
}
}
</script>

<style>

</style>

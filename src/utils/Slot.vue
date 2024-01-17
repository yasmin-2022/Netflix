<template>
  <div>
    <Content>
        <template #img>
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
          </div>
        </template>
        <template #title>
    <h1>Enjoy on your TV</h1>
  </template>
  <template #subtitle>  
    <div >      
      <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
    </div>
  </template>
</Content>
 <Content>
        <template #image>
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
          </div>
        </template>
        <template #header>
          <div>
            <h1>Download your shows to watch offline</h1>
          </div>
  </template>
  <template #para>  
    <div>      
      <p>Save your favourites easily and always have something to watch.</p>
    </div>
  </template>
</Content>
<Content>
        <template #img>
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
          </div>
        </template>
        <template #title>
    <h1>Watch everywhere</h1>
  </template>
  <template #subtitle>  
    <div >      
      <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
    </div>
  </template>
</Content>
<Content>
        <template #image>
            <div>
              <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"/>
          </div>
        </template>
        <template #header>
          <div>
            <h1>Create profiles for kids</h1>
          </div>
  </template>
  <template #para>  
    <div>      
      <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
    </div>
  </template>
</Content>
  </div>
</template>

<script>
import Content from './Content.vue'
  export default {
  name: "SlotPage",
  components: {
      Content
    }
  }
</script>

<style lang="scss" scoped>

</style>
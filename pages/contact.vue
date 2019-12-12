<template>
  <div id="content">
    <section class="contact-page">
      <div class="contact-page--content">
        <n-link to="/" title="Price Log Home Page">
          <PriceLogLogo classes="contact-info--logo"/>
        </n-link>
        
        <h1 class="contact-page--header">Feedback &&nbsp;Support</h1>
        
        <div class="contact-page--content--text">
          <p><strong>Thanks so much for your&nbsp;interest!</strong></p>
        
          <p>If you have feedback or questions, please fill out this contact form.</p>
        </div>
      </div>
      <div class="contact-page--form">
        <div id="wufoo-q1qwtthu10gjlht">
  Fill out my <a href="https://chasesbank.wufoo.com/forms/q1qwtthu10gjlht">online form</a>.
  </div>
  <script type="text/javascript">var q1qwtthu10gjlht;(function(d, t) {
  var s = d.createElement(t), options = {
  'userName':'chasesbank',
  'formHash':'q1qwtthu10gjlht',
  'autoResize':true,
  'height':'500',
  'async':true,
  'host':'wufoo.com',
  'header':'show',
  'ssl':true};
  s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
  s.onload = s.onreadystatechange = function() {
  var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
  try { q1qwtthu10gjlht = new WufooForm();q1qwtthu10gjlht.initialize(options);q1qwtthu10gjlht.display(); } catch (e) {}};
  var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
  })(document, 'script');</script>
      </div>
    </section>
  </div>
</template>

<script>
import PriceLogLogo from '~/components/PriceLogLogo.vue'

export default {
  components: {
    PriceLogLogo,
  },
  
  head() {
    return {
      title: 'Contact',
    }
  },
}
</script>

<style lang="scss" scoped>
.contact-page {
  position: relative;
  background:
    linear-gradient(to right, white, rgba(white,0) 60%),
    url(~assets/images/pricelog-gradient--to-right.png?disable=true) top left repeat-y;
  background-size: 100% auto;

  display: flex;
  align-items: center;
  
  min-height: 100%;
  padding-top: $mediumPadding;
  padding-bottom: $mediumPadding;
}

.contact-page--content {
  // background: red;
  margin-left: 10vw;
  width: 30vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  p {
    letter-spacing: -.25px;
    margin-top: 1.1rem;
    color: color(green,dark);
    
    + p {
      margin-top: 1rem;
    }
  }
  
  svg {
    margin-bottom: 0;
  }
}

.contact-page--header {
  color: color(green,baseContrast);
  line-height: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.contact-page--form {
  // background: yellow;
  width: 40vw;
  margin-left: 10vw;
}



@media (max-width: $small) {
  .contact-page {
    background:
      linear-gradient(to bottom, white, rgba(white,0) 60%),
      url(~assets/images/pricelog-gradient--to-bottom.png?disable=true) top left repeat-x;
  background-size: auto 100%;
    flex-direction: column;
  }
  
  .contact-page--content {
    margin: 0;
    width: 100%;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  
  .contact-page--form {
    margin-top: 10vw;
    flex: 1;
    margin-left: 0;
    width: 100%;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
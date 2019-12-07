<template>
  <main>
    <nuxt />
    <TheFooter/>
  </main>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheFooter,
  },
}
</script>

<style lang="scss">
*, *:before, *:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  height: 100%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  -webkit-overflow-scrolling: touch;
  background: color(green,baseContrast);
}

#__nuxt,
#__layout,
main {
  display: flex;
  height: 100%;
  width: 100%;
  // align-content: stretch;
}

main {
  flex-direction: column;
}

#content {
  flex-grow: 2;
  height: 85%;
  overflow-y: auto;
  overflow-x: hidden;
}





section {
  padding-top: $largePadding;
  padding-bottom: $largePadding;
}

.section-content {
  padding-left: $mediumPadding;
  padding-right: $mediumPadding;
}

// .block-header {
//   position: relative;
//   height: 2rem;
//   margin: 0;
//   width: 100%;
//   filter: drop-shadow(0rem 0.5rem 0.5rem rgba(0, 0, 0, .2));
//   z-index: 10;

//   &:before {
//     @include squircleMask(25);
//     background-color: color(green, dark);
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//   }

//   h2 {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 100%;
//     margin-top: 0;
//     margin-bottom: 0;
//     line-height: 1;
//     color: white;
//   }
// }

.section-intro_block-header {
  position: relative;
  bottom: -1em;
  padding: .75em;
  color: white;
  filter: drop-shadow(0rem 0.5rem 0.5rem rgba(0, 0, 0, .5));
  z-index: 1;

  &:before {
    @include squircleMask(35);
    background-color: color(green, dark);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

.block {
  display: relative;
}

.block-content {
  position: relative;
  padding: calc(2rem + 1.5vw)
    calc(1rem + 1.5vw)
    calc(1rem + 1.5vw)
    calc(1rem + 1.5vw);
  padding-top: calc(2.5rem + 1.5vw);
  padding-bottom: calc(1.5rem + 1.5vw);
  margin-top: -1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  box-shadow: 0px 80px 100px -40px rgba(color(green, dark), .5),
    0px 10px 20px rgba(color(green, dark), .25);

  // &:before {
  //   display: block;
  //   content: '';
  //   position: absolute;
  //   top: -3.1rem;
  //   left: -1rem;
  //   right: -1rem;
  //   height: 4rem;
  //   border-radius: 2rem;
  //   box-shadow: 0px 20px 50px -20px rgba(color(green, dark), .5),
  //     0px 5px 20px rgba(color(green, dark), .5);
  // }

  p {
    margin-top: 0;
    margin-bottom: 0;

    + p {
      margin-top: 1em;
    }
  }
}



@media (max-width: $small) {
  .section-process {
    background: linear-gradient(
      to bottom,
      color(green, baseContrast),
      color(green, base)
    );
  }
  .section-process_section-content {
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;

    h2 {
      font-size: 1.5em;
      max-width: 100%;
      margin-top: 0;
      left: 0;

      &:after {
        display: none;
      }
    }

    .block-process {
      width: 100%;
    }
  }

  .app-download-badges {
    padding-left: 1%;
    padding-right: 1%;
  }
}



@media (min-width: 1000px) {
  header {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .logo-wrap {
    padding-top: 0;
    flex: 2;
  }

  .phone-wrap {
    width: 40%;
    height: 100%;
  }

  .phone {
    top: initial;
    right: 5%;
    bottom: 0;
    transform: translateX(20%);
  }
}

@media (min-width: 1200px) {
  header {
    justify-content: center;
  }

  .logo-wrap {
    flex: none;
  }

  .phone-wrap {
    width: auto;
    flex: none;
    display: flex;
    align-items: flex-end;
  }

  .phone {
    position: relative;
  }
}

@media (min-width: $small) {
  .section-tagline {
    .section-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    h2 {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    h3 {
      margin-top: .2rem;
    }
  }
}
</style>

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

  p {
    margin-top: 0;
    margin-bottom: 0;

    + p {
      margin-top: 1em;
    }
  }
}
</style>

<style lang="scss" scoped>
::v-deep {
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
}
</style>

<template>
  <div class="overflow-x-hidden">
    <div
      class="
        main
        flex flex-col
        items-center
        w-full
        h-screen
        bg-pattern-main bg-no-repeat bg-cover
      "
    >
      <p
        class="
          main-text
          w-320px
          font-lato
          text-42px
          leading-50px
          tracking-1.26px
          text-title
          mt-6
          text-center text-gray-800
        "
      >
        Deine Job website
      </p>
      <img
        class="main-logo flex w-full"
        src="../assets/img/undraw_agreement_aajr.png"
      />
    </div>
    <nav
      class="section-button-group flex justify-around mt-65px"
      :class="[tab === 0 ? ' ml-40' : tab === 1 ? ' ml-0' : '-ml-40']"
    >
      <ul class="flex items-center justify-center mb-5" role="group">
        <li
          class="
            cursor-pointer
            border-l border-t border-b border-gray-400
            h-10
            w-40
            font-lato
            text-sm
            items-end
            flex
            justify-around
            text-xs
            px-4
            py-2
            rounded-l-xl
            outline-none
            mb-1
            ease-linear
            transition-all
            duration-300
          "
          :class="[
            tab === 0
              ? ' bg-section bg-blue-500  text-white'
              : ' bg-white text-third'
          ]"
          @click="tab = 0"
        >
          Arbeitnehmer
        </li>
        <li
          class="
            cursor-pointer
            border border-solid border-gray-400
            h-10
            w-40
            font-lato
            text-sm
            items-end
            flex
            justify-around
            text-xs
            px-4
            py-2
            outline-none
            mb-1
            ease-linear
            transition-all
            duration-300
          "
          :class="[
            tab === 1
              ? ' bg-section bg-blue-500  text-white'
              : ' bg-white text-third'
          ]"
          @click="tab = 1"
        >
          Arbeitgeber
        </li>
        <li
          class="
            cursor-pointer
            border-t border-b border-r border-gray-400
            h-10
            w-40
            font-lato
            text-sm
            items-end
            flex
            justify-around
            text-xs
            px-4
            py-2
            rounded-r-xl
            outline-none
            mb-1
            ease-linear
            transition-all
            duration-300
          "
          :class="[
            tab === 2
              ? ' bg-section bg-blue-500  text-white'
              : ' bg-white text-third'
          ]"
          @click="tab = 2"
        >
          Temporärbüro
        </li>
      </ul>
    </nav>
    <div>
      <Section1 class=" ease-linear transition-all duration-300" v-if="tab === 0" />
      <Section2 class=" ease-linear transition-all duration-300" v-if="tab === 1" />
      <Section3 class=" ease-linear transition-all duration-300" v-if="tab === 2" />
    </div>
  </div>
</template>

<script>
import Section1 from '~/components/sections/Section1.vue'
import Section2 from '~/components/sections/Section2.vue'
import Section3 from '~/components/sections/Section3.vue'

export default {
  components: {
    Section1,
    Section2,
    Section3
  },
  data() {
    return {
      tab: 0
    }
  }
}
</script>

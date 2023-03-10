<template>
  <nav
    class="flex flex-nowrap items-center justify-between bg-zinc-100 py-6 md:py-8 px-10 md:px-48"
  >
    <router-link to="/" class="flex items-center flex-shrink">
      <img
        title="logo"
        alt="PSDC Logo"
        class="object-scale-down h-8 md:h-14 mr-2"
        src="../assets/psdc.svg"
      />
      <h1
        class="text-xl w-1/2 md:text-3xl text-[#5B9BD5] font-sans leading-4 md:leading-8 font-bold"
      >
        Public Sector Data Chat
      </h1>
    </router-link>

    <router-link
      to="/about"
      class="font-bold text-[#5B9BD5] hover:text-sky-900"
      active-class="font-bold text-sky-900"
    >
      About
    </router-link>
  </nav>
  
</template>

<script></script>

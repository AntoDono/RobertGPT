<template>
   <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
         <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
               <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">RobertGPT</span>
                  <img class="h-12 w-auto" src="/wave.png" alt="logo">
               </a>
            </div>
            <div class="flex lg:hidden">
               <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Open main menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
               </button>
            </div>
         </nav>
      </header>

      <div class="relative isolate px-6 pt-14 lg:px-8">
         <div class="flex flex-row gap-12 items-center justify-center w-[80vw] mx-auto py-32">
            <div class="text-center">
               <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">A Conversational Adventure</h1>
               <p class="mt-6 text-lg leading-8 text-gray-600">Chat with RobertGPT today.
                  Explore his world, ask questions, and gain insights into the social and cultural norms of The Awakening.</p>
               <div class="mt-10 flex items-center justify-center gap-x-6">
                  <NuxtLink to="/chat"
                     class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                     started</NuxtLink>
               </div>
            </div>
            <div>
               <img class="rounded" src="/background.jpg" alt="background">
            </div>
         </div>
         <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true">
            <div
               class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
               style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
         </div>
      </div>
</div></template>
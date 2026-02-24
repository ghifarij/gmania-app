<template>
  <div class="px-4 pt-4 pb-6 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <div class="mb-2">
      <h2 class="font-bold text-gray-900 text-lg leading-tight">Outlet Location</h2>
      <p class="text-[12px] text-gray-600 mt-0.5">Explore your options</p>
    </div>

    <!-- Location List -->
    <div>
      <div
        v-for="(outlet, index) in outlets"
        :key="outlet.name"
      >
        <!-- Item -->
        <div class="py-4 cursor-pointer">
          <p class="text-gray-900 text-[13px] leading-snug mb-1">{{ outlet.name }}</p>
          <p class="text-[12px] text-gray-400 leading-snug mb-2">{{ outlet.address }}</p>
          <div class="flex items-center gap-4 text-gray-400">
            <i class="pi pi-map-marker text-[13px]"></i>
            <span class="text-[12px]">{{ outlet.distance }} km</span>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-gray-200 w-full"></div>
      </div>
    </div>

    <!-- SEE ALL -->
    <div class="mt-5">
      <button class="text-orange-500 font-bold text-sm tracking-wide hover:text-orange-600 transition-colors">
        SEE ALL
      </button>
    </div>

  </div>
</template>

<script setup>
const outlets = [
  {
    name: 'Citra Garden 6',
    address: 'Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat',
    distance: 2.4,
  },
  {
    name: 'Emporium Mall',
    address: 'Emporium Pluit Mall Lt. 2 Jalan Pluit Selatan Raya, Jakarta Utara',
    distance: 6.2,
  },
  {
    name: 'Puri Indah Mall',
    address: 'Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat',
    distance: 6.4,
  },
  {
    name: 'Lippo Mall Puri',
    address: 'Bakmi GM Lippo Mall Puri, Food Avenue Unit FSC-07, Gedung St. Moritz Lippo Mall Puri Lantai I, Jl. Puri Indah Boulevard Blok UI, Jakarta Barat',
    distance: 6.6,
  },
  {
    name: 'Terminal 3 Ultimate',
    address: 'Bandara Soekarno Hatta Terminal 3 Ultimate Domestic Landside, Lantai 2 Ultimate Food Terminal, tangerang',
    distance: 7.7,
  },
]
</script>

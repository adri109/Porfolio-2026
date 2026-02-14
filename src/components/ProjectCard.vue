<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  gradientClass: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  },
  iconPaths: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <article class="glass-card rounded-3xl overflow-hidden group">
    <div
      class="h-48 relative overflow-hidden"
      :class="gradientClass"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <svg
          class="w-20 h-20"
          :class="iconClass"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-for="(path, index) in iconPaths"
            :key="index"
            :d="path.d"
            :stroke-linecap="path.strokeLinecap || 'round'"
            :stroke-linejoin="path.strokeLinejoin || 'round'"
            :stroke-width="path.strokeWidth || '1'"
          />
        </svg>
      </div>
      <div class="absolute top-4 right-4 flex gap-2">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="project-tag px-3 py-1 rounded-full text-xs text-cyan-400"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-500 text-sm mb-4 leading-relaxed">
        {{ description }}
      </p>
      <div class="flex gap-3">
        <button
          class="glow-btn flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 py-2 rounded-xl text-sm font-medium"
          type="button"
        >
          View Code
        </button>
        <button
          class="flex-1 border border-gray-700 py-2 rounded-xl text-sm font-medium hover:border-cyan-500 transition-colors"
          type="button"
        >
          Live Demo
        </button>
      </div>
    </div>
  </article>
</template>

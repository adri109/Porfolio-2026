<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    default: ''
  },
  iconPath: {
    type: String,
    required: true
  },
  iconViewBox: {
    type: String,
    default: '0 0 24 24'
  }
})
</script>

<template>
  <div class="tech-icon glass-card rounded-2xl p-6 text-center cursor-pointer group">
    <svg
      class="w-12 h-12 mx-auto mb-4"
      :class="iconClass"
      :viewBox="iconViewBox"
      fill="currentColor"
    >
      <path :d="iconPath" />
    </svg>
    <p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
      {{ label }}
    </p>
  </div>
</template>

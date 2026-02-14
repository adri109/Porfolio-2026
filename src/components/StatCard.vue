<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="glass-card rounded-2xl p-6 text-center flex-1">
    <p class="text-3xl font-bold gradient-text mb-2">{{ value }}</p>
    <p class="text-gray-500 text-sm">{{ label }}</p>
  </div>
</template>

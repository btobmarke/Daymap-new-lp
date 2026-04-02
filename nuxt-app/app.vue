<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSSD7NVH" height="0" width="0"
        style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'body'
  },
  bodyAppend: [
    {
      tag: 'noscript',
      children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSSD7NVH"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }
  ]
})
</script>
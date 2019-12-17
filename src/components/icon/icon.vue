<template>
  <span class="icon">
    <slot />
  </span>
</template>

<style>
.icon {
  display: inline-block;
  width: var(--icon-small);
  height: var(--icon-small);
  position: relative;
}

.icon:before {
  content: '';
  width: 200%;
  height: 200%;
  display: block;
  border: 1px solid currentColor;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon > svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.4);
}
</style>

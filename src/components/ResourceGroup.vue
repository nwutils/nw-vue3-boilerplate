<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceGroup'
};
</script>

<style scoped>
.item {
  display: inline-flex;
  margin-top: 2rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 500;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0px;
    padding: 0.4rem 0rem 1rem 0rem;
  }
}
</style>

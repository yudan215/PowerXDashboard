<template>
  <div>
    <a-table :data-source="data">
      <template #columns>
        <a-table-column key="UserId" title="UserId" data-index="UserId" />
        <a-table-column key="username" title="用户名" data-index="username" />
        <a-table-column key="phone" title="手机号" data-index="phone" />
        <a-table-column
          key="relatedEmployee"
          title="关联员工字段"
          data-index="relatedEmployee"
        />
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const data = ref({} as any);
</script>

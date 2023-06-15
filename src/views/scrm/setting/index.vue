<template>
  <div class="container">
    <a-card>
      <a-tabs :default-active-key="state.activeTabKey" position="left">
        <a-tab-pane key="1" title="企微员工列表">
          <a-card>
            <a-button type="primary">
              添加企微员工
            </a-button>
          </a-card>
          <a-card>
            <EmployeeTable />
          </a-card>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import EmployeeTable from '@/views/scrm/setting/components/employee_table.vue';
  import { reactive } from 'vue';

  const state = reactive({
    activeTabKey: '1',
  });
</script>

<script lang="ts">
  export default {
    name: 'WeWorkSetting',
  };
</script>

<style scoped></style>

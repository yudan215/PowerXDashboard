<template>
  <div class="container">
    <a-card>
      <a-space size="large">
        <a-button type="primary" @click="openAddLead()">新增线索 </a-button>
      </a-space>
    </a-card>
    <br />
    <a-card>
      <LeadTable ref="RefLeadTable" />
    </a-card>
    <a-drawer
      v-model:visible="state.createLead.visible"
      width="500px"
      ok-text="关闭抽屉"
      :hide-cancel="true"
    >
      <CreateLead
        v-if="state.createLead.visible"
        @submit-success="refreshLeadList"
      />
    </a-drawer>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import LeadTable from '@/views/crm/customer-domain/lead/components/lead-table.vue';
  import CreateLead from '@/views/crm/customer-domain/lead/components/create-lead.vue';
  import { DefaultPageSize } from '@/api/common';

  const RefLeadTable = ref<any>();

  const openAddLead = () => {
    state.createLead.visible = true;
  };

  const pagination = reactive({
    'total': 0,
    'currentPage': 0,
    'pageSize': DefaultPageSize,
    'show-more': true,
    'show-total': true,
    'show-jumper': true,
    'show-page-size': true,
  });

  const state = reactive({
    createLead: {
      visible: false,
      parentNode: {},
    },
  });

  const refreshLeadList = () => {
    RefLeadTable.value.fetchLeadList({
      pageIndex: pagination.currentPage,
      pageSize: pagination.pageSize,
    });
  };
</script>

<script lang="ts">
  export default {
    name: '线索管理',
  };
</script>

<style scoped></style>

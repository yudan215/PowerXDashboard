<template>
  <div class="container">
    <a-card>
      <a-tabs :default-active-key="activeTabKey" position="left">
        <a-tab-pane key="1" title="个人信息">
          <UserInfo style="max-width: 500px" />
        </a-tab-pane>
        <a-tab-pane key="2" title="账户设置">
          <Account style="max-width: 500px" />
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import UserInfo from '@/views/user/setting/components/user-info.vue';
  import Account from '@/views/user/setting/components/account.vue';

  const activeTabKey = ref('1');
</script>

<script lang="ts">
  export default {
    name: 'UserSetting',
  };
</script>

<template>
  <div class="container">
    <!-- auth loading tip -->
  </div>
</template>

<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  import { associateWeWorkAccount } from '@/api/scrm/setting';
  import { Message, Notification } from "@arco-design/web-vue";

  const route = useRoute();
  const router = useRouter();

  // Get path params (type, code, state)
  const { type } = route.params;
  const { code, state } = route.query;

  switch (type) {
    case 'wework':
      associateWeWorkAccount({ code: code as string }).then(res => {
        Message.success('授权成功');
        router.back();
      });
      break;
    default:
      // Case others:
      Notification.error({
        title: '授权失败',
        content: '违规的授权类型',
      });
      // Redirect to home page
      router.push('/');
  }

  // Case others:
</script>

<script lang="ts">
  export default {
    name: 'OAuth2Redirect',
  };
</script>

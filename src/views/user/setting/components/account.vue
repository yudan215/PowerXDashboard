<template>
  <div>
    <a-form ref="formRef" :model="formModel" @submit="onSubmit">
      <a-form-item label="手机号" field="phoneNumber">
        <span v-if="formModel.phoneNumber !== ''">{{
          formModel.phoneNumber
        }}</span>
        <a-button v-else type="primary" @click="bindPhoneNumber">绑定</a-button>
      </a-form-item>
      <a-form-item label="微信" field="wechat">
        <span v-if="formModel.wechat !== ''">{{
          formModel.wechat
        }}</span>
        <a-button v-else type="primary" @click="bindWechat"
          >绑定</a-button
        ></a-form-item
      >
      <a-form-item label="企业微信" field="enterpriseWechat">
        <span v-if="formModel.enterpriseWechat !== ''">{{
          formModel.enterpriseWechat
        }}</span>
        <a-button v-else type="primary" @click="bindEnterpriseWechat">绑定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { getWeWorkOAuth2Url } from '@/api/scrm/public';

  const formRef = ref();
  const formModel = ref({
    phoneNumber: '',
    wechat: '',
    enterpriseWechat: '',
  });

  const bindPhoneNumber = () => {
    // Placeholder function to handle binding of phone number
    // Implement your logic here
    console.log('Bind Phone Number');
  };

  const bindWechat = () => {
    // Placeholder function to handle binding of WeChat
    // Implement your logic here
    console.log('Bind WeChat');
  };

  function openOAuth2AuthenticationWindow(url: string): void {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const oauthWindow = window.open(
      url,
      'OAuth2 Authentication',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (!oauthWindow) {
      console.error(
        'Failed to open OAuth2 authentication window. Please check your popup blocker settings.'
      );
    }
  }

  const bindEnterpriseWechat = () => {
    getWeWorkOAuth2Url({
      redirectUri: 'http://localhost:8080',
      // todo handle state
      state: '123',
    }).then((res) => {
      openOAuth2AuthenticationWindow(res.data.url);
    });
  };
</script>

<template>
  <div>
    <a-form
      ref="formRef"
      auto-label-width
      :model="formModel"
      :rules="rules"
      @submit="onSubmit"
    >
      <a-form-item label="账户" field="account">
        <a-input v-model="formModel.account" :disabled="!editingEnabled" />
      </a-form-item>
      <a-form-item label="用户昵称" field="username">
        <a-input v-model="formModel.username" :disabled="!editingEnabled" />
      </a-form-item>
      <a-form-item label="联系方式" field="phoneNumber">
        <a-input v-model="formModel.phoneNumber" :disabled="!editingEnabled" />
      </a-form-item>
      <a-form-item label="生日" field="birthday">
        <a-input v-model="formModel.birthday" :disabled="!editingEnabled" />
      </a-form-item>

      <a-form-item>
        <a-space size="large">
          <a-button v-if="!editingEnabled" @click="enableEditing"
            >编辑</a-button
          >
          <a-button v-else @click="disableEditing">取消编辑</a-button>
          <a-button v-if="editingEnabled" type="primary" html-type="submit"
            >提交</a-button
          >
          <a-button v-if="editingEnabled" @click="resetForm">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { Message, FieldRule } from '@arco-design/web-vue';

  const formRef = ref();
  const formModel = ref({
    account: 'example_account',
    username: 'example_username',
    phoneNumber: '1234567890',
    birthday: '1990-01-01',
  });

  let editingEnabled = false;

  const enableEditing = () => {
    editingEnabled = true;
  };

  const disableEditing = () => {
    editingEnabled = false;
  };

  const resetForm = () => {
    formRef.value.resetFields();
  };

  const rules = {
    account: [
      { required: true, message: '请输入账户' },
      { max: 50, message: '账户长度不能超过 50 个字符' },
    ],
    username: [
      { required: true, message: '请输入用户昵称' },
      { max: 50, message: '用户昵称长度不能超过 50 个字符' },
    ],
    phoneNumber: [
      { required: true, message: '请输入手机号' },
      {
        pattern: /^1[3-9]\d{9}$/,
        message: '请输入正确的手机号',
      },
    ],
    birthday: [
      { required: true, message: '请输入生日' },
      { type: 'date', message: '请输入有效的日期' },
    ],
  } as Record<string, FieldRule[]>;

  const onSubmit = async () => {
    const err = await formRef.value.validate();
    if (err) {
      return;
    }
    Message.success('提交成功');
  };

  onMounted(() => {});
</script>

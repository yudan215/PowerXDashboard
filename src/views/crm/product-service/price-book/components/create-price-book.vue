<template>
  <div>
    <a-form
      ref="formRef"
      auto-label-width
      :model="formModel"
      :rules="rules"
      @submit="onSubmit"
    >
      <a-form-item label="价格手册名称" field="name">
        <a-input v-model="formModel.name" />
      </a-form-item>
      <a-form-item label="是标准价格手册" field="isStandard">
        <a-checkbox v-model="formModel.isStandard" default-value="false" />
      </a-form-item>
      <a-form-item label="描述" field="description">
        <a-textarea v-model="formModel.description" />
      </a-form-item>
      <a-form-item label="门店" field="storeId">
        <a-select
          v-model="formModel.storeId"
          :options="[]"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item>
        <a-space size="large">
          <a-button type="primary" html-type="submit">提交</a-button>
          <a-button @click="formRef.resetFields()">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import {
    createPriceBook,
    PriceBook,
  } from '@/api/crm/product-service/priceBook';
  import { FieldRule, Message } from '@arco-design/web-vue';

  const emits = defineEmits(['submitSuccess', 'submitFailed', 'update:id']);

  const formRef = ref();
  const formModel = ref({
    isStandard: false,
    name: '',
    description: '',
    storeId: 0,
  } as PriceBook);

  const rules = {
    name: [
      { required: true, message: '请输入价格手册名称' },
      { max: 10, message: '价格手册名称长度不能超过 10 个字符' },
    ],
    description: [{ max: 100, message: '描述长度不能超过 100 个字符' }],
  } as Record<string, FieldRule[]>;

  const state = reactive({ submitLoading: false });

  const onSubmit = async () => {
    if (state.submitLoading) {
      return;
    }
    const err = await formRef.value.validate();
    if (err) {
      return;
    }
    state.submitLoading = true;
    createPriceBook(formModel.value)
      .then(() => {
        Message.success('创建成功');
        emits('submitSuccess');
      })
      .catch(() => {
        emits('submitFailed');
      })
      .finally(() => {
        state.submitLoading = false;
      });
  };

  onMounted(() => {
    // create price book mounted
  });
</script>

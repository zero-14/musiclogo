<template>
  <div class="login-wrapper">
    <div class="contant">
      <div class="img-wrapper">
        <img class="img" :src="require('@/assets/title4.png')" alt="" />
      </div>
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="账号" v-bind="validateInfos.name">
          <a-input v-model:value="modelRef.name" />
        </a-form-item>
        <a-form-item label="密码" v-bind="validateInfos.pwd">
          <a-input v-model:value="modelRef.pwd" type="password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
          <a-button style="margin-left: 10px" @click="reset">Reset</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, toRefs, toRaw } from "vue";
import { Form } from "ant-design-vue";
import { useRouter } from 'vue-router'
const useForm = Form.useForm;

export default defineComponent({
  setup(props, context) {
    const router = useRouter()
    const modelRef = reactive({
      name: "",
      pwd: ""
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: "请输入账号",
          },
        ],
        pwd: [
          {
            required: true,
            message: "请输入密码",
          },
        ],
      })
    );

    const onSubmit = () => {
      validate()
        .then((res) => {
          console.log(res, toRaw(modelRef));
          console.log(router)
          router.push('/redirect')
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    const reset = () => {
      resetFields();
    };

    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
      router
    };
  },
});
</script>
<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url("../../assets/background.png") no-repeat center;
  .img-wrapper {
    width: 100%;
    width: 142px;
    margin: 0 auto;
    padding: 42px 0 45px 0;
    .img {
      width: 142px;
    }
  }
  .contant {
    width: 370px;
    height: 430px;
    margin-bottom: 25px;
    background: #293152;
    border-radius: 10px;
    box-shadow: 0px 11px 24px 0px rgba(18, 21, 40, 0.58);
  }
  ::v-deep .ant-form-item-required{
    color: white !important;
  }
  ::v-deep .ant-form{
    margin: 45px 0 0 50px !important;
  }

}
</style>
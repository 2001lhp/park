<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/services/park';
import { useCounterStore } from '@/stores/counter'
import { useRouter,useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const store = useCounterStore()
interface RuleForm {
    username: string
    password: string
}
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: '',
    password: ''
})
const checked = ref(false)

const rules = reactive<FormRules<RuleForm>>({
    username: [{ required: true, message: '请输入账号', trigger: 'blur' },],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' },]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            login({ username: ruleForm.username, password: ruleForm.password }).then(res => {
                console.log(res)
                store.token = res.data.token
                router.push('/')
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>
<template>
    <div class='login'>
        <div class="bg"></div>
        <div class="form">
            <div class="title">智慧园区-登录</div>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                :size="formSize" status-icon label-position="top">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="checked" label="记住我" size="large" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.login {
    display: flex;
}

.bg {
    width: 60vw;
    height: 100vh;
    background: url('@/icons/login-bg.svg') no-repeat;
    background-position: right top;
    background-size: cover;
}

.form {
    margin: 200px 10% 0;
    flex: 1;

    .title {
        padding-bottom: 76px;
        font-size: 26px;
        font-weight: 500;
        color: #1e2023;
    }

    :deep(.el-form) {
        .el-form-item {
            margin-bottom: 22px;
        }

        .el-form-item__label {
            /* font-size: 16px; */
            font-weight: 600;
        }

        .el-input__wrapper {
            height: 40px;
        }
    }
}
</style>
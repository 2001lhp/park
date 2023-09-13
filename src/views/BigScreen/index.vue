<script setup lang='ts'>
import { getParkInfo } from '@/services/park'
import type { ParkResponseType } from '@/types/park';
import { ref } from 'vue';
const parkinfo = ref<ParkResponseType>()
const getInfo = async () => {
    let res = await getParkInfo()
    console.log(res);
    parkinfo.value = res.data
}
getInfo()
</script>
<template>
    <div class='screen'>
        <div class="left">
            <img class="logo"
                src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E6%A6%82%E5%86%B5%402x.png"
                alt="logo" />
            <div class="icons">
                <div class="item">
                    <div class="icon building-icon">
                        <span class="num"> {{ parkinfo?.base.buildingTotal }} </span>
                    </div>
                    <span class="title">楼宇总数</span>
                    <span class="unity">（栋）</span>
                </div>
                <div class="item">
                    <div class="icon enterprise-icon">
                        <span class="num"> {{ parkinfo?.base.enterpriseTotal }} </span>
                    </div>
                    <span class="title">入驻企业总数</span>
                    <span class="unity">（家）</span>
                </div>
                <div class="item">
                    <div class="icon rod-icon">
                        <span class="num"> {{ parkinfo?.base.parkingTotal }}</span>
                    </div>
                    <span class="title">车位总数</span>
                    <span class="unity">（个）</span>
                </div>
                <div class="item">
                    <div class="icon car-icon">
                        <span class="num"> {{ parkinfo?.base.chargePoleTotal }} </span>
                    </div>
                    <span class="title">一体杆总数</span>
                    <span class="unity">（个）</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.left {
    position: absolute;
    left: 0;
    top: 0;
    width: 480px;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to left,
            rgba(0, 6, 15, 0) 0%,
            rgba(0, 6, 15, 0) 20%,
            rgba(0, 0, 0, 0.4) 30%,
            rgba(0, 0, 0, 0.6) 40%,
            rgba(1, 4, 11, 1) 70%,
            #04070d 100%);

    .logo {
        height: 30px;
    }

    .left {
        flex-basis: 25%;
    }

    .icons {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;

        .item {
            .icon {
                height: 80px;
                position: relative;

                .num {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 18px;
                    color: #fff;
                }
            }

            .building-icon {
                background: url('@/assets/building-icon.png') no-repeat 50% 0 / contain;
            }

            .enterprise-icon {
                background: url('@/assets/enterprise-icon.png') no-repeat 50% 0 / contain;
            }

            .rod-icon {
                background: url('@/assets/rod-icon.png') no-repeat 50% 0 / contain;
            }

            .car-icon {
                background: url('@/assets/car-icon.png') no-repeat 50% 0 / contain;
            }

            .title {
                margin-top: 8px;
            }

            .title,
            .unity {
                font-size: 14px;
                color: #cdd7e1;
            }
        }
    }
}
</style>
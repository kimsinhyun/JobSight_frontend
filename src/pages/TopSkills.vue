<template lang="ko">
    <v-row class="mb-2">
        <v-col>
            <v-row justify="center py-1" >
                <img :src="`${publicPath}imgs/bulb.png`"
                style="width:100px;height:100px;">
            </v-row>
            <v-row justify="center py-3">
                <div class="Top100Skills">
                    <h1>
                        Top IT Skills
                    </h1>
                </div>
            </v-row>
            <v-row justify="center">
                <div class="Top100Skills py-1">
                    <h4>가장 수요가 많은 Skill</h4>
                </div>
            </v-row>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <div v-for="(skillInfo, i) in this.skillInfos" :key="i">
                <SkillRankingCardVue :skillInfo="skillInfo" :isRankingPage="this.isRankingPage"/>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import SkillRankingCardVue from '@/components/SkillRankingCard.vue';
export default {
    name: "TopSkills",
    data () {
        return {
            publicPath: process.env.BASE_URL,
            skillInfos:[
                {
                    rank: 1,
                    skillName: "Java",
                    skillCount: "1000",
                    companyCount: "100",
                },
                {
                    rank: 2,
                    skillName: "Python",
                    skillCount: "800",
                    companyCount: "80",
                },
            ],
            isRankingPage : true,
        }
    },
    components:{
        SkillRankingCardVue,
    }
    
}
</script>

<style scoped>
@import "../assets/statics/css/Topskills"
</style>
<template lang="ko">
    <div class="SkillDetail-font">
        <v-row>
            <v-col>
                <SkillRankingCard :skillInfo="this.skillInfo" :isRankingPage="this.isRankingPage"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="4" class="pa-1 mx-8 rounded-xl">
                    <v-container class="mx-5">
                        <v-row class="mb-4">
                            <h3>1년간 간 채용 공고 수</h3>
                        </v-row>
                        <v-row>
                            <LineChart />
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-3"> 
            <v-col>
                <RelatedSkills :skillInfo="skillInfo"/>    
            </v-col>
            <v-col>
                <RelatedSkillSets :skillInfo="skillInfo"/>        
            </v-col>
        </v-row>
    </div>
</template>
<script>
import SkillRankingCard from '@/components/SkillRankingCard.vue';
import LineChart from '@/charts/LineChart.vue';
import RelatedSkills from'@/components/RelatedSkills.vue'
import RelatedSkillSets from '@/components/RelatedSkillSets.vue';
export default {
    name: "SkillDetail",
    components:{
        SkillRankingCard,
        LineChart,
        RelatedSkills,
        RelatedSkillSets,
    },
    data () {
        return {
            skillInfo:
            {
                rank: 1,
                skillName: "Java",
                skillCount: "1000",
                companyCount: "100",
            },
            isRankingPage: false,
        }
    },
    
}
</script>
<style scoped>
@import "../assets/statics/css/SkillDetail"
</style>
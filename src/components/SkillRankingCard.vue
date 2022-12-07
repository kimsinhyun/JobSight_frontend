<template lang="ko">
    <v-row gutter="36px">
        <v-col class="mx-8">
            <section class="stats-section skill skillRankCardFont">
                <span class="skill__rank skill--placer skill--gold">{{ this.skillInfo.rank }}</span>
                <!-- <img class="img img-responsive skill__logo" src="{% static 'imgs/testBulb.svg' %}" alt="SQL"> -->
                <div class="skill__intro">
                    <h1 class="skill__title ">
                        <span v-if="this.skillInfo.rank == '1'"> 🥇</span>
                        <span v-else-if="this.skillInfo.rank == '2'"> 🥈</span>
                        <span v-else-if="this.skillInfo.rank == '3'"> 🥉</span>
                        {{ this.skillInfo.skillName }}
                    </h1>
                </div>
                <span class="skill__previous-rank ">
                </span>
                <div class="performance-numbers performance-numbers--jobs" style="min-width: 109.641px;">
                    <div class="performance-numbers__header">
                        <span class="performance-numbers__count ">{{ this.skillInfo.skillCount }}</span>
                        <span class="performance-numbers__notation performance-numbers__notation--jobs ">0</span>
                    </div>
                    <span class="performance-numbers__label ">Active Jobs</span>
                </div>
                <div class="performance-numbers performance-numbers--companies performance-numbers--after">
                    <div class="performance-numbers__header">
                    <span class="performance-numbers__count ">{{ this.skillInfo.companyCount }}</span>
                    <span class="performance-numbers__notation performance-numbers__notation--companies">0</span>
                    </div>
                    <span class="performance-numbers__label ">Companies</span>
                </div>

                <div v-if="isRankingPage" class="performance-numbers performance-numbers--locations performance-numbers--after">
                    <a class="btn btn-primary " href="/SkillDetail">
                        <span class="headerNavFont medium">Info</span> 
                    </a>
                </div>
            </section>
        </v-col>
    </v-row>
</template>
<script>
export default {
    name: "SkillRankingCard",
    props: ["skillInfo", "isRankingPage"]
}
</script>
<style scoped>
@import "../assets/statics/css/SkillRankingCard"
</style>
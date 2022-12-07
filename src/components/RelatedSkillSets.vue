<template lang="ko">
    <v-card elevation="4" class="pa-4 mr-8 rounded-xl">
        <h2>인기 있는 skillset</h2>
        <h3>-{{skillInfo.skillName}}- 과 가장 어울리는 skillset은?</h3>
        <div v-for="i in 5" key="i">
            <v-alert color="#9e1bfe"  variant="outlined" class="mt-3 pa-2 rounded-lg">
                <v-container class="pa-0">
                    <v-row dense>
                        <v-col align-self="center" cols="2">
                            SkillSet
                        </v-col>
                        <v-col cols="auto">
                            <v-alert color="#eaccff" class="pa-2">
                                <p style="color:#9e1bfe;">test</p>
                            </v-alert>
                        </v-col>
                        <v-col cols="auto">
                            <v-alert color="#eaccff" class="pa-2">
                                <p style="color:#9e1bfe;">test</p>
                            </v-alert>
                        </v-col>
                        <v-col cols="auto">
                            <v-alert color="#eaccff" class="pa-2">
                                <p style="color:#9e1bfe;">test</p>
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-container>
            </v-alert>
        </div>
    </v-card>
</template>
<script>
export default {
    name: "RelatedSkillSets",
    props: ["skillInfo"],
    
}
</script>
<style scoped>

</style>>
    
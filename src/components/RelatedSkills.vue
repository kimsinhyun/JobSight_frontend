<template lang="ko">
        <v-card fluid elevation="4" class="px-4 pt-4 ml-8 rounded-xl">
            <v-container >
                <v-row class="mb-4">
                    <h2>연관된 다른 기술 스택</h2>
                </v-row>
                <v-row class="mb-5">
                    <h4>어떤 스택이 -{{skillInfo.skillName}}-과 가장 밀접한 관계를 유지하는가?</h4>
                </v-row>
                <div v-for="i in 5" key="i">
                    <v-row class="mb-4">
                        <v-col cols="1">
                            <v-avatar
                                color="#762db6"
                                size="36"
                                style="color: white;"
                            >1</v-avatar>
                        </v-col>
                        <v-col class="related_skillName" cols="2">
                            {{skillInfo.skillName}}
                        </v-col>
                        <v-col class="fill-width">
                            <v-progress-linear
                                v-model="testProgressBarVal"
                                color="#762db6"
                                height="25"
                                rounded-pill
                            ></v-progress-linear>
                        </v-col>
                        <v-col cols="1">50%</v-col>
                    </v-row>
                </div>
            </v-container>
        </v-card>
</template>
<script>
export default {
    name: "RelatedSkills",
    props: ["skillInfo"],
    data(){
        return {testProgressBarVal: 10}
    }
}
</script>
<style scoped>
.related_skillName{
    color: #762db6;
  }
  .v-progress-linear{
    border-radius: 12px;
  }
  
</style>
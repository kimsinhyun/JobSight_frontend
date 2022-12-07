<template lang="ko">
    <div :class="[isHomePage ? 'header' : 'header headerNotHome']" >
      <a href="/Home" class="logo">JobSight</a>
      <div class="header-right">
        <a href="#about">로그인</a>
        <a href="#contact">회원가입</a>
        <a class="active" href="/TopSkills">인사이트</a>
      </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    computed:{
    isHomePage(){
      return document.URL.indexOf("Home") != -1;
    }
  }
}
</script>

<style scoped>
@import "../assets/statics/css/Header.css";

</style>
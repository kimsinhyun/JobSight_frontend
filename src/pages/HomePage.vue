<template lang="ko">
    <div class="Homepage_background">
        <div class="Homepage_middle__container"> 
            <div class="Homepage_middle__container__intro Homepage_font">
                <h1>취준에 데이터를 더하다</h1>
                <div class="search-form" id="search-stuff">
                    <span class="search-form__placeholder">Search for</span>
                    <ul class="search-form__placeholder-items" id="item-list" v-show='toggle'>
                        <li class='rotate-items'><p class="homePageBodyFont">회사</p></li>
                        <li class='rotate-items'><p class="homePageBodyFont">기술스택</p>
                        </li>
                        <li class='rotate-items'><p class="homePageBodyFont">키워드</p></li>
                    </ul>
                    <label for="searchResult">
                        <form>
                            <input 
                                class="search-form__input" 
                                type="text"
                                autocomplete="on"
                                name="searchResult"
                                @focus="toggle = !toggle"
                                @blur="toggle = !toggle">
                        </form>
                    </label>
                    <button type="button" class="search-form__submit">
                        <img :src="`${publicPath}imgs/searchIcon.jpg`"
                        style="border-radius: 50%;">
                    </button>
                </div>
                <div class="bulb_container">
                    <div class="bulb">
                        <img :src="`${publicPath}imgs/bulb.png`">
                    </div>
                    <div class="bulb-shadow">
                        <img :src="`${publicPath}imgs/bulb-shadow.svg`">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "HomePage",
    data () {
        return {
            publicPath: process.env.BASE_URL,
            toggle: true
        }
    },
}
</script>
<style scoped>
@import "../assets/statics/css/HomePage.css";
</style>
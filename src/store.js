//vuex 등록
import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

export const store = new Vuex.Store({
    //conter라는 state 속성을 추가
    state: { // state는 컴포넌트 간에 공유할 data속성
        counter : 0
    }

});
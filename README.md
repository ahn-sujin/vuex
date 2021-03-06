# ๐ก vuex ์์ํ๊ธฐ

## 1. Vuex์ State
    ๋ทฐ์์ค๋ฅผ ์์๋ณด๊ธฐ ์ํด ๋ฒํผ์ผ๋ก ์ซ์๋ฅผ ๋๋ฆฌ๊ณ  ์ค์ผ ์ ์๋ ์นด์ดํฐ ์ฑ์ ํตํด 
    Vue CLI๋ก ํ๋ก์ ํธ๋ฅผ ์์ฑํ ๋ค์ ์๋์ ๊ฐ์ด Parent, Child ์ปดํฌ๋ํธ๋ฅผ ์ ์ํ๋ค. 

### 1-1. ๊ฐ๋จํ Vue App๊ตฌ์ฑ
![image](img/vuex01.PNG)

- vue CLI๋ก ์ํ๋ ํด๋์ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๊ณ , ์์ ๊ฐ์ด ํด๋ ๊ตฌ์กฐ๋ฅผ ๋ง๋ ๋ค.
  - ```App.vue``` : ์์ ์ปดํฌ๋ํธ(Parent)
  - ```child.vue``` : ํ์ ์ปดํฌ๋ํธ(Child)

### 1-2. parent, child ์ปดํฌ๋ํธ ์ค์ 
> App.vue (parent)
```vue
<template>
  <div id="app">
    Parent counter : {{ counter }} <br>
    <button v-on:click = "addCounter">+</button>
    <button v-on:click = "subCounter">-</button>
    <!--  child ์ปดํฌ๋ํธ๋ฅผ ๋ฑ๋กํ๊ณ  counter ๋ฐ์ดํฐ ์์ฑ์ props๋ก ์ ๋ฌํ๋ค. -->
    <Child v-bind:num = "counter"></Child>
  </div>
</template>

<script>
  // child ์ปดํฌ๋ํธ ์ฐ๊ฒฐ
  import Child from './components/Child.vue'

  export default{
    data(){
      return{
        counter: 0
      };
    },
    methods:{
      addCounter(){
        this.counter++;
      },
      subCounter(){
        this.counter--;
      }
    }, 
    components: {
      // child ์ปดํฌ๋ํธ๋ฅผ ํ์ ์ปดํฌ๋ํธ๋ก ๋ฑ๋ก
      'Child' : Child
    }
  }
</script>
...
```

<br>

> Child.vue (Child)
```vue
<template>
  <div>
    <hr>
    Child counter : {{ num }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
  // ์์ ์ปดํฌ๋ํธ์์ ๋ด๋ ค์ค counter ์์ฑ์ num๋ก ๋ฐ์
  props: ["num"]
</script>
...
```
![image](img/vuex02-1.gif)

- ๋ฒํผ์ ํด๋ฆญํ๋ฉด parent์ child์ปดํฌ๋ํธ๊ฐ ํจ๊ป ๋ณ๋๋๋ค.
- ์์ ์ปดํฌ๋ํธ์์ ํ์ ์ปดํฌ๋ํธ์๊ฒ props(counter)๋ฅผ ์ ๋ฌํ๋ ๊ธฐ๋ณธ์ ์ธ ์ปดํฌ๋ํธ ํต์  ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๊ธฐ ๋๋ฌธ์ด๋ค.
- ํ์ง๋ง ์ปดํฌ๋ํธ์ ๊ฐฏ์๊ฐ ๋ฌดํ์  ๋ง์ ์ง๋ค๋ฉด, ์ต์์ ์ปดํฌ๋ํธ์์ ๋งจ ์๋์ ์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ๊ธฐ ์ํด ์ค๊ฐ ๊ณ์ธต ์ปดํฌ๋ํธ์๊ฒ props, event๋ฅผ ์ ์ธํด์ค์ผํ๋ค.
- ํจ์จ์ ์ธ ๋ฐ์ดํฐ ๊ด๋ฆฌ๋ฅผ ์ํด **vuex** ๋ฅผ ์ด์ฉํด๋ณด์ 


### 1-3. vuex ์ค์น ๋ฐ ๋ฑ๋ก
- ํด๋น ํ๋ก์ ํธ ํด๋ cmd์ฐฝ์ ์ด์ด์ ``` npm install vuex ``` ๋ฅผ ์๋ ฅํด Vuex๋ฅผ ์ค์นํ๋ค.
- Vuex ์ค์น ํ์ธ์ ```package.json``` ํ์ผ "dependencies" ์์ ํ  ์ ์๋ค.

  ![image](img/vuex03.PNG)

- vuex๋ฅผ ๋ฑ๋กํ  ์๋ฐ์คํฌ๋ฆฝํธ ํ์ผ์ ํ๋ ์์ฑํ๋ค.
  > store.js
  ```javascript
  import Vue from "vue";
  import Vuex from "vuex";

  Vue.use(Vuex);

  export const store = new Vuex.Store({

  });
  ```
- ```main.js``` ์ ```store.js```๋ฅผ ๋ถ๋ฌ์ ๋ฑ๋กํด์ค๋ค.
  > main.js
  ```javascript
  import Vue from "vue";
  import App from "./App.vue";
  // store.js๋ฅผ ๋ถ๋ฌ์ค๋ ์ฝ๋
  import { store } from "./store";

  new Vue({
    el: "#app",
    // ๋ทฐ ์ธ์คํด์ค์ store ์์ฑ์ ์ฐ๊ฒฐ
    store: store,
    render: h => h(App)
  });
  ```
  
### 1-4. state ๋ฑ๋ก
- state์ ์ ์๋ counter์์ฑ์ ```App.js```(parent ์ปดํฌ๋ํธ)์์ ์ฌ์ฉํ๋ data์์ฑ counter์ ๋์ผํ ์ญํ ์ด๋ค.

  > store.js
  ```javascript
  import Vue from "vue";
  import Vuex from "vuex";

  Vue.use(Vuex);

  export const store = new Vuex.Store({
      //counter๋ผ๋ state ์์ฑ์ ์ถ๊ฐ
      state: { //state๋ ์ปดํฌ๋ํธ ๊ฐ์ ๊ณต์ ํ  data์์ฑ
        counter: 0
      }
  });
  ```
### 1-5. state ์ ๊ทผ
- state์ ๋ฑ๋กํ **counter์์ฑ**์ ```<template>```์ฝ๋์์  ```$store.state.counter```๋ก ์ ๊ทผํ  ์ ์๋ค.

> App.vue
```vue
<template>
<div id="app">
  Parent counter : {{ $store.state.counter }} <br>
  <button v-on:click = "addCounter">+</button>
  <button v-on:click = "subCounter">-</button>
  <!-- <Child v-bind:num = "counter"></Child> -->
  <Child></Child>
</div>

</template>

<script>
import Child from './components/Child.vue'

export default{
  // data(){
  //   return{
  //     counter: 0
  //   };
  // },
  methods:{
    addCounter(){
      this.$store.state.counter++;
    },
    subCounter(){
      this.$store.state.counter--;
    }
  }, 
  components: {
    'Child' : Child
  }

}

</script>
```

- ๋ฌ๋ผ์ง ์ 
  - data ์์ฑ์ผ๋ก ์ ์ธํ counter ๊ฐ ์ ๊ฑฐ 
  - child ์ปดํฌ๋ํธ๋ก counter ์ ๋ฌํ์ง ์์

![image](img/vuex04.PNG)

#### ๐๊ฒฐ๊ณผ
    Parent ์ปดํฌ๋ํธ์์ ๊ด๋ฆฌํ๋ counter ๋ฐ์ดํฐ๋ฅผ vuex์ state์ ๋๊ฒจ์ฃผ์๋ค.
    Child ์ปดํฌ๋ํธ์์ ์ ๊ทผํ๋ Parent ์ปดํฌ๋ํธ์ data ์์ฑ์ด vuex๋ก ๊ฐ๊ธฐ ๋๋ฌธ์ ์ด์  Child์์๋ vuex์ state๋ฅผ ๋ฐ๋ผ๋ณด๋ฉด ๋๋ค. 
    ์ด์  Parent์ Child ๋ชจ๋ state๋ฅผ ์ ๊ทผํ  ์ ์๊ฒ ๋์๊ณ , ์ด๋ค ์ปดํฌ๋ํธ๋  ์ด์  vuex๋ก counter๋ฅผ ์ ๊ทผํ  ์ ์๊ฒ ๋์๋ค.

![image](img/vuex05.gif)

- child ์ปดํฌ๋ํธ์๋ ๋ทฐ์์ค๋ฅผ ์ ์ฉ์์ผ์ค๋ค.

```vue
<template>
<div>
    <hr>
    Child counter : {{ $store.state.counter}}<br>
    <button>+</button>
    <button>-</button>
</div>
</template>

<script>
export default{
    // props : ['num']
}
</script>
```

![image](img/vuex02-1.gif)


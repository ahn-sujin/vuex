# 💡 vuex 시작하기

## 목차


## 1. Vuex와 State
    뷰엑스를 알아보기 위해 버튼으로 숫자를 늘리고 줄일 수 있는 카운터 앱을 통해 
    Vue CLI로 프로젝트를 생성한 다음 아래와 같이 Parent, Child 컴포넌트를 제작한다. 

### 1-1. 간단한 Vue App구성
[이미지 첨부]
- vue CLI로 원하는 폴더에 프로젝트를 생성하고, 위와 같이 폴더 구조를 만든다.
  - ```App.vue``` : 상위 컴포넌트(Parent)
  - ```child.vue``` : 하위 컴포넌트(Child)
  

### 1-2. parent, child 컴포넌트 설정
> App.vue (parent)
```vue
<template>
  <div id="app">
    Parent counter : {{ counter }} <br>
    <button v-on:click = "addCounter">+</button>
    <button v-on:click = "subCounter">-</button>
    <!--  child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <Child v-bind:num = "counter"></Child>
  </div>
</template>

<script>
  // child 컴포넌트 연결
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
      // child 컴포넌트를 하위 컴포넌트로 등록
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
  // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
  props: ["num"]
</script>
...
```

[gif 첨부]

- 버튼을 클릭하면 parent와 child컴포넌트가 함께 변동된다.
- 상위 컴포넌트에서 하위 컴포넌트에게 props(counter)를 전달하는 기본적인 컴포넌트 통신 방법을 사용했기 때문이다.
- 하지만 컴포넌트의 갯수가 무한정 많아진다면, 최상위 컴포넌트에서 맨 아래의 컴포넌트에 데이터를 전달하기 위해 중간계층 컴포넌트에게 props, event를 선언해줘야한다.
- 효율적인 데이터 관리를 위해 **vuex** 를 이용해보자 


### 1-3. vuex 설치 및 등록




















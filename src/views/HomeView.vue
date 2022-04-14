

<template>
  <div class="home">


    <table>
        <tr>
            <td>번호</td>
            <td>제목</td>
            <td>클릭 횟수(조회수)</td>
        </tr>

<!--
        <tr>
            <td>1</td>
            <router-link to="/page1" @click="addcount">
            <td>첫번째 제목</td>
            </router-link> 
            <td>{{$store.state.count1}}</td>
        </tr>
-->


        <tr>
            <td>1</td>
            <td @click="$router.push(`/page1/page2`)"><span @click="addcount1">1번째 제목</span></td>
            <td>{{$store.state.count1}}</td>
        </tr>



        <tr>
            <td>2</td>
            <td @click="$router.push(`/page2/page2`)"><span @click="addcount2">2번째 제목</span></td>
            <td>{{$store.state.count2}}</td>
        </tr>

    </table>

    

  </div>
</template>

<script>

export default {

  name: 'HomeView',

    methods : {
      addcount1() {
        this.$store.commit('addcount1')
      },

      addcount2() {
        this.$store.commit('addcount2')
      }
    }

  }



</script>








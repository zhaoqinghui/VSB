<template>
    <div>
       <el-row style="height: 840px;"@select="logs">
          <el-tooltip effect="dark" placement="right"
                       v-for="item in books"
          :key="item.id"
          @select="logs">
            <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}}</p>
            <p slot="content" style="font-size: 13px;margin-bottom: 6px;">
              <span>{{item.author}}</span>
              <span>{{item.date}}</span>
              <span>{{item.press}}</span>
            </p>
            <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
             <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px"
                      class="book" body-style="padding: 10px" shadow="hover">
               <div class="cover" @click="editBook(item)">
                 <img :src="item.cover" alt="封面">
               </div>
               <div class="info">
                 <div class="title">
                   <a href="">{{item.title}}</a>
                 </div>
               </div>
               <div class="author">{{item.author}}</div>
             </el-card>
          </el-tooltip>
         <edit-form @onSubmit="loadBooks()" ref="edit"></edit-form>
       </el-row>
      <!-- 分页 -->
      <!--<el-row>-->
        <!--<el-pagination-->
          <!--@current-change="handleCurrentChange"-->
          <!--:current-page="currentPage"-->
          <!--:page-size="pagesize"-->
          <!--:total="books.length">-->
        <!--</el-pagination>-->
      <!--</el-row>-->
    </div>
</template>

<script>
  import ViewSwitch from './ViewSwitch'
  import SearchBar from './SearchBar'
  import EditForm from './EditForm'
    export default {
        name: "Books",
      components:{EditForm,ViewSwitch,SearchBar},
       data(){
          return{
            books:[
              {
                id: '2343redfdfgdfer5edfdfe53e341',
                cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1790830750,212010158&fm=26&gp=0.jpg',
                title: '三体',
                author: '刘次新',
                date: '2019-05-05',
                press: '重庆出版社',
                abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
              },
              {
                id: '2343redfdfgdfer5edfdfe53e342',
                cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1790830750,212010158&fm=26&gp=0.jpg',
                title: '三体',
                author: '刘次新',
                date: '2019-05-05',
                press: '重庆出版社',
                abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
              }
            ]
          }
       },
      methods:{
          logs(){
            console.log('日志');
            console.log(books[0].author);
          }
      }
    }
</script>

<style scoped>
  .cover{
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }
  img{
    width: 115px;
    height: 172px;
  }
  .titile{
    font-size: 14px;
    text-align: left;
  }
  .author{
    color: #333333;
    width: 102px;
    font-size: 13px;
    margin-bottom:6px;
    text-align: left;
  }
  .abstract{
    display: block;
    line-height: 17px;
  }
  a{
    text-decoration: none;
  }
  a:link,a:visited,a:focus{
    clor:#3377aa;
  }
  .switch{
    display: flex;
    position:absolute;
    left: 780px;
    top: 25px;
  }
</style>

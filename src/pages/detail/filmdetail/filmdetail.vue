<template>
  <div>
    <div class="list">
      <div class="row">
        <div class="left">
          <h3>{{this.content.title}}</h3>
          <p>{{this.content.score}}分</p>
          <h4>
            {{this.content.year}}
            <span v-for="(v,i) in this.content.genres" :key="i">/{{v}}</span>
          </h4>
          <h5>用App查看影人资料</h5>
        </div>
        <div class="right">
          <img :src="this.content.img" alt />
        </div>
      </div>
      <div class="btn">
        <span class="want">想看</span>
        <span class="like">看过</span>
      </div>
      <div class="intro">{{this.content.title}}的简介</div>
      <div class="info">{{this.content.info | sub}} ...</div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["list"]
  data() {
    return {
      content: {}
    };
  },
  mounted() {
    this.axios({
      url: "/api/film/filmlist",
      method: "get"
    }).then(ok => {
      let arr = ok.data.data.filter(item => {
        return item._id == this.$store.state.pid;
      });
      let arrb = arr[0].content.filter(item => {
        return item.id == this.$store.state.id;
      });
      this.content = arrb[0];
    });
  },
  filters: {
    sub(val) {
      if (val) {
        return val.substr(0, 120);
      }
    }
  }
};
</script>

<style scoped>
.list {
  margin-top: 0.8rem;
  padding: 0 0.15rem;
}
.row {
  display: flex;
}
h3 {
  font-size: 0.2rem;
  font-weight: bolder;
}
p {
  color: #666;
  padding: 0.1rem 0 0.2rem 0;
}
h4 {
  color: #666;
  padding-right: 0.1rem;
}
h5 {
  font-weight: normal;
  font-size: 0.14rem;
  color: #05b512;
  margin-top: 0.08rem;
}
.btn {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
}
.btn span {
  border: 0.01rem solid orange;
  width: 46%;
  text-align: center;
  color: orange;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.08rem;
}
.right img {
  width: 1rem;
  margin-left: 0.8rem;
}
.intro {
  color: #666;
  margin: 0.15rem 0 0.1rem 0;
}
.info {
  color: #666;
  /* 这边展示等一下用filter */
}
</style>
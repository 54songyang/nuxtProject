<template>
  <div class="home-page">
    <div class="page-body">
      <div class="box"></div>
    </div>
    <p>个人笔记</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-page {
  width: calc(100vw - 40px);
  height: calc(100vh - 90px);
  p{
    font-size: 30px;
    color: #958dd0;
    line-height: 100px;
    text-align: center;
  }
  .page-body {
    background: #e6e6e6;
    margin: 0;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 auto;
    .box {
      height: 50px;
      width: 50px;
      position: relative;
    }
    .box::before {
      content: "";
      height: 8px;
      width: 50px;
      background: #000;
      opacity: 0.2;
      border-radius: 50%;
      position: absolute;
      top: 67px;
      left: 0;
      animation: shadow 0.5s linear infinite;
    }
    .box::after {
      border-radius: 5px;
      background: #8da9ff;
      animation: rotate 0.5s linear infinite;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 50px;
    }
    @keyframes shadow {
      0%,
      100% {
        transform: scaleX(1);
      }
      50% {
        transform: scaleX(1.2);
      }
    }

    @keyframes rotate {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(20px) scale(1.1, 0.9);
      }
      75% {
        ransform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>
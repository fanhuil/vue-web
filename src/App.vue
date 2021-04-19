<template>
  <div>
	  <!-- header -->
	  <div id="header">
	  	<div class="header_content">
	  		<div class="header_left">
	  			<span>PHP技术交流</span>
	  		</div>
	  		<!--nav-->
	  		<div id="nav">
	  			<ul>
	  				<li><router-link to="/">首页</router-link></li>
	  				<li><router-link to="/about">关于我</router-link></li>
	  				<li><router-link to="/say">碎言碎语</router-link></li>
	  				<li><router-link to="/diary">个人日记</router-link></li>
	  				<li><router-link to="/album">相册展示</router-link></li>
	  				<li><router-link to="/learn">学无止境</router-link></li>
	  				<li><router-link to="/guestbook">留言板</router-link></li>
	  				<div class="clear"></div>
	  			</ul>
	  		</div>
	  		<!--nav end-->
	  	</div>
	  </div>
	  <!-- footer -->
	  <div>
	  	<div id="footer">
	  		<p>桂ICP备19011879号-2</p>
	  	</div>
	  </div>
	  <!--footer end-->
	  <!--header end-->
<!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
	  <router-link to="/user/foot">User</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
	export default{
		computed: {

		},
	}
	
</script>

<style lang="scss">
	
</style>

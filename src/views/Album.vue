<template>
	<!--content start-->
	<div id="content_xc">
		<!-- position -->
		<div class="position">
			<div class="wz_text">当前位置：<a href="#">首页</a>><h1>相册展示</h1>
			</div>
		</div>
		<!-- position end -->
		<div class="xc_content">
			<div class="con-bg">
				<div class="w960 mt_10">
					<div class="w650">
						<ul class="tips" id="wf-main" style="display:none">
							<li class="wf-cld"><img src="@/assets/images/photo/8.jpg" width="200" height="178" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/1.jpg" height="147" width="200" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/2.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/3.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/4.jpg" width="200" height="299" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/5.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/6.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/7.jpg" width="200" height="135" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/9.jpg" width="200" height="300" alt="" /></li>
							<li class="wf-cld"><img src="@/assets/images/photo/10.jpg" width="200" height="107" alt="" />
							</li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/8.jpg" width="200" height="178" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/1.jpg" height="147" width="200" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/2.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/3.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/4.jpg" width="200" height="299" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/5.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/6.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/7.jpg" width="200" height="135" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/9.jpg" width="200" height="300" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/10.jpg" width="200" height="107" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/2.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/3.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/8.jpg" width="200" height="178" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/1.jpg" height="147" width="200" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/2.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/3.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/4.jpg" width="200" height="299" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/5.jpg" width="200" height="125" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/6.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/7.jpg" width="200" height="135" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/9.jpg" width="200" height="300" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/10.jpg" width="200" height="107" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/2.jpg" width="200" height="267" alt="" /></li>
							<li class="wf-cld"><img rel="lazy" lazy_src="@/assets/images/photo/3.jpg" width="200" height="125" alt="" /></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--content end-->
</template>

<script>
</script>

<style>
	/*相册*/
	#content_xc {
		width: 990px;
		margin: 100px auto;
		background: #fff;
	}

	#content_xc .position {
		width: 1000px;
		height: 50px;
		line-height: 50px;
		background: url("../assets/images/weizi.png") 7px 15px no-repeat;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
	}

	#content_xc .xc_content {
		width: 1000px;
	}

	.xc_content .con-bg {
		width: 1000px;
		background: #fff;
		margin: 0 auto;
		overflow: hidden;
		padding-top: 8px;
		padding-bottom: 10px;
		filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090, direction=120, strength=4);
		/*ie*/
		-moz-box-shadow: 2px 2px 10px #909090;
		/*firefox*/
		-webkit-box-shadow: 2px 2px 10px #909090;
		/*safari或chrome*/
		box-shadow: 2px 2px 10px #909090;
		/*opera或ie9*/
	}

	.w960 {
		width: 960px;
		margin: 0 auto;
		overflow: hidden;
	}

	.fl_lt {
		float: left !important;
	}

	.mt_10 {
		margin-top: 10px;
	}

	.w650 {
		width: 960px;
	}


	.position a.home {
		/* background: url("../assets/images/flower_ico.gif") no-repeat; */
		padding-left: 35px;
		display: inline-block;
	}

	span.bds_more {
		line-height: 16px !important;
	}

	#bdshare span.bds_more {
		background: none !important;
	}

	.w650 {
		width: 960px;
		padding-top: 15px;
	}

	.w650 ul.tips {
		float: left;
		margin-left: 10px;
		display: inline;
		position: relative;
	}

	.w650 li {
		position: absolute;
		display: inline;
		padding-bottom: 20px;
	}

	.w650 li {
		width: 220px;
		height: auto;
		text-align: center;
		overflow: hidden;
	}

	.w650 li a {
		width: 200px;
		height: auto;
		background: #fff;
		border: 1px solid #ddd;
		padding: 9px 9px 2px 9px;
		display: block;
		cursor: pointer;
		-webkit-border-radius: 2px;
		-o-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
	}

	.w650 li a span {
		height: 38px;
		line-height: 38px;
		color: #333;
		overflow: hidden;
		display: block;
		font-size: 14px;
	}

	.w650 li a:hover span {
		color: #9c0f4a;
	}

	.w650 li a:hover {
		background: #fff;
		border: 1px solid #c5c5c5;
		color: #9c0f4a;
	}

	.p_t {
		padding-top: 7px;
	}
</style>

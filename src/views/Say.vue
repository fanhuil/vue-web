<template>
	<!-- content -->
	<div id="say">
		<!-- position -->
		<div class="position">
			<div class="wz_text">当前位置：<a href="#">首页</a>><h1>碎言碎语</h1>
			</div>
		</div>
		<!-- position end -->
		<ul class="say_box">
			<div class="sy">
				<p> 那个可以任意挥霍的年纪，人们叫它'青春'。</p>
			</div>
			<span class="dateview">2014-5-31</span>
		</ul>
		<ul class="say_box">
			<div class="sy">
				<p> 过去就像回形针，把青春一页页的固定，然后变成了一本不被出版的书。</p>
			</div>
			<span class="dateview">2014-5-31</span>
		</ul>
		<ul class="say_box">
			<div class="sy">
				<p> 时间好象一把尺子，它能衡量奋斗者前进的进程。
					时间如同一架天平，它能称量奋斗者成果的重量；
					时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。</p>
			</div>
			<span class="dateview">2014-5-31</span>
		</ul>
		<ul class="say_box">
			<div class="sy">
				<p>青春，一半明媚，一半忧伤。
					它是一本惊天地泣鬼神的着作，而我们却读的太匆忙。
					于不经意间，青春的书籍悄然合上，以至于我们要重新研读它时，
					却发现青春的字迹早已落满尘埃，模糊不清。</p>
			</div>
			<span class="dateview">2014-5-31</span>
		</ul>
	</div>
	<!--content end-->
</template>

<script>
</script>

<style>
/* 碎言碎语 Begin*/
#say {
	width: 1000px;
	margin: 100px auto;
}

.say_box {
	background: #f8f8f8;
	box-shadow: 0px 1px 0px rgba(255, 255, 255, .1), inset 0px 1px 1px rgba(214, 214, 214, 0.7);
	width: 740px;
	border-radius: 5px;
	position: relative;
	padding: 20px 0;
	margin: 10px 0;
	font-size: 14px;
	font-family: "宋体";
}

.say_box p {
	line-height: 24px;
	padding: 0 20px 20px;
}

.say_box::before {
	content: "";
	width: 0px;
	height: 0px;
	border-style: solid;
	border-width: 0px 0 20px 22px;
	border-color: transparent transparent transparent #fff;
	position: absolute;
	left: 740px;
	top: 23px;
}

/* 三角形 */
.say_box::after {
	content: "";
	width: 10px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	left: 763px;
	top: 16px;
	background: #CCCCCE;
	border: 2px solid #fff;
	transition: all 0.5s;
}

/* 圆形 */
.say_box:hover::before {
	border-color: transparent transparent transparent #CECCCD
}

/* 三角形 */
.say_box:hover::after {
	border: #fff 2px solid;
	background: #999;
}

/* 圆形 */
.say_box:hover {
	background: #f4f2f2;
	color: #333;
	text-shadow: #f7f7f7 1px 1px 1px
}

.dateview {
	position: absolute;
	left: 785px;
	top: 15px;
	width: 125px;
	line-height: 35px;
	background: #5EA51B;
	border-radius: 0 30px;
	text-align: center;
	color: #fff;
	font-weight: bold;
	font-size: 14px;
}
</style>

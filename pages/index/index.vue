<template>
  <view class="indexContainer">
		<view class="indexHeader">
  	<!-- 头部 -->
  	<view class="header">
			<view class="searchInput">
				观春景品茶茗
			</view>
		</view>
		
		<!-- 导航栏 -->
		<view class="mainTab">
			<view class="tabs-wrap">
				<!-- 右侧下拉箭头 -->
				<!-- 左侧精选区域 -->
				<!-- <view class="left-scroll">精选
					<view class="left-scroll-down"></view>
				</view> -->
				
				<!-- 左侧scroll区域 -->
				<scroll-view scroll-x="true" enable-flex class="tab-scroll">
					<view class="left-scroll-down"></view>
					<view class="scrollItem" :class="{'left-scroll': index===0}" v-for="(cate,index) in indexData.cates" :key="cate.id">{{cate.cateName}}</view>
					
				</scroll-view>
			</view>
			<!-- <scroll-view scroll-x="true" >
				<view v-for="(navItem,index) in indexData.navigation" :key="navItem.id">{{navItem.name}}</view>
			</scroll-view> -->
		</view>
		
		<!-- 轮播图 -->
		<swiper class="swiper-image" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item" v-for="(img, index) in indexData.cmsdata.data[1].floorData" :key="img.elementId">
				<view class="swiper-image">
					<!-- <image :src=`https://image3.suning.cn/${img.imageUrl}` mode=""></image> -->
					<image :src="img.imageUrl"></image>
				</view>
			</swiper-item>
		</swiper> 
		
		
		<!--11个图标栏目  -->
		<view class="ad-wrap">
			<scroll-view scroll-x enable-flex class="ad-scroll"  >
					<view class="swiper-item" v-for="(img,index) in indexData.cmsdata.data[2].floorData" :key="img.elementId">
						<image :src="img.imageUrl" mode=""></image>
						<text>{{img.name}}</text>
					</view>
			</scroll-view>
		</view>
		
		
		<!-- 今日必拼 -->
		<view class="jr-bp">
			<!-- 今日必拼-上半部分 -->
			<view class="up">
				<view class="up-left">
					<image class="left-image1" src="//res.suning.cn/project/cmsWeb/suning/wap/pin/images/minip/newIndex/bg-flash.png?t=2020" mode=""></image>
					<image class="left-image2" src="//res.suning.cn/project/cmsWeb/suning/wap/pin/images/minip/newIndex/jrbp.png?t=2020" mode=""></image>
					<view class="count-time"></view>
				</view>
				<view class="more">
					<text>更多</text>
					<image src="https://image2.suning.cn/uimg/cms/img/156352677118858358.png?format=is" mode=""></image>
				</view>
			</view>
			<!-- 今日必拼-下半部分 -->
			<view class="down">
				<swiper class="down-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="down-swiper-item">
						<!--  v-for="(item,index) in indexData2" -->
						<view class="swiper-item-1" v-for="(item,index) in jrbqaArr1" :key="item.id">
							<image :src="item.img" mode=""></image>
							<view class="down-price">{{Number(item.price)}}</view>
							<view class="down-number">已拼88件</view>
						</view>
					</swiper-item>

					<swiper-item class="down-swiper-item">
						<view class="swiper-item-1" v-for="(item,index) in jrbqaArr2" :key="item.id">
							<image :src="item.img" mode=""></image>
							<view class="down-price">{{Number(item.price)}}</view>
							<view class="down-number">已拼88件</view>
						</view>
					</swiper-item>

					<swiper-item class="down-swiper-item">
						<view class="swiper-item-1" v-for="(item,index) in jrbqaArr3" :key="item.id">
							<image :src="item.img" mode=""></image>
							<view class="down-price">{{Number(item.price)}}</view>
							<view class="down-number">已拼88件</view>
						</view>
						
					</swiper-item>
					
					
				</swiper>
			</view>
		</view>
		
		<!-- 精选热卖-图片 -->
		<view class="middle-image">
			<image class="middle-image1" src="//res.suning.cn/project/cmsWeb/suning/wap/pin/images/minip/newIndex/jx-title.png?t=719" mode=""></image>
		</view>
		
		<!-- 精选热卖-商品 -->
		<view class="hot-goods">
			<!-- 6件商品 -->
			<view class="goods-lists-6">
				<view class="goods-list-1">
					<view class="left">
						<image src="//imgservice5.suning.cn/uimg1/b2c/image/Ua0HenDu7U_VyQeH5BDOdg.jpg_400w_400h_4e_85Q_is" mode=""></image>
					</view>
					<view class="right">
						<view class="right-title">
							<!-- 自营图片 -->
							<image src="//image.suning.cn/uimg/pgs/activity/160281140850216296.png" mode=""></image>
							<!-- 苏宁宜品 图片 -->
							<image src="//image.suning.cn/uimg/pgs/activity/161053028800612361.png" mode=""></image>
							<text class="good-title">酥田黄山毛峰 茶叶绿茶毛尖春茶新茶118克</text>
						</view>
						<view class="right-desc"></view>
						<view class="label-desc">
							<view class="label"></view>
						</view>
						<view class="bottom-info">
							<view class="info-price"></view>
							<view class="info-price"></view>
							<view class="info-sale"></view>
							<view class="info-ico"></view>
						</view>
					</view>
				</view>
			</view>
			<!-- 商品排行榜 -->
			
			<!-- 6件商品 -->
			<!-- 商品排行榜 -->
		</view>
		
		
		
		<!-- indexHeader -->
		</view>
  </view>
</template>

<script>
	import request from '../../utils/request.js';
	import {mapState,mapActions} from 'vuex'
  export default {
    name:'Home',
		data(){
			return {
				// indexData:{},
				// indexData2:{}
				// 今日必抢的3个数组
				jrbqaArr1:[],
				jrbqaArr2:[],
				jrbqaArr3:[]
			}
		},
		mounted(){
			// console.log(this.$store.state.home.initData)
			this.getIndexDataAction();
			this.getIndexData2Action();
			this.getIndexData3Action();
		},
		methods:{
			...mapActions({
				getIndexDataAction:'getIndexDataAction',
				getIndexData2Action:'getIndexData2Action',
				getIndexData3Action:'getIndexData3Action',
			}),
			
			// 初始化今日必抢中的数据 arr1, arr2,arr3
			setPicPrice(actPic, newPgPrice){
				let obj1 = {}, obj2 = {}, obj3 = {}
				let arr1 = [], arr2 = [], arr3 = []
				
				for (let i = 0; i < 12; i++) {
				  if (i < 4) {
				    obj1 = {
				      id: i,
				      img: actPic[i],
				      price: newPgPrice[i]
				    }
				    arr1.push(obj1)
				  }
				  if (i >= 4 && i < 8) {
				    obj2 = {
				      id: i,
				      img: actPic[i],
				      price: newPgPrice[i]
				    }
				    arr2.push(obj2)
				  }
				
				  if (i >= 8 && i < 12) {
				    obj3 = {
				      id: i,
				      img: actPic[i],
				      price: newPgPrice[i]
				    }
				    arr3.push(obj3)
				  }

				}
				this.jrbqaArr1 = arr1;
				this.jrbqaArr2 = arr2;
				this.jrbqaArr3 = arr3;
			}
			
			
		},
		watch:{
			// 监视indexData数据
			// 今日必拼中的轮播图数据  价格和图片是同个数组中的不同项,而且我们前端的swiper-item是3组, 也就是说我们现在是根据结构改数据.需要3组
			indexData2:{
				handler(newVal, oldVal){
					// console.log(newVal)
					let actPic = newVal.actPic;  //12项商品图片地址 数组
					let pgPrice = newVal.prices;
				
					// 12项商品价格 数组
					let newPgPrice = pgPrice.map(item=>{
						return item.pgPrice
					})
					// 处理图片和价格数组, 转换为3组不同的数组
					this.setPicPrice(actPic, newPgPrice)
				}
			}
		},
		computed:{
			...mapState({
				indexData: state=>state.home.indexData,
				indexData2: state=>state.home.indexData2,
				indexData3: state=>state.home.indexData3,
			})
		}
  }
</script>

<style scoped lang="stylus">
  .indexContainer
		.indexHeader
			display block
			.header
				display flex
				width 750rpx
				height 88rpx
				background #ff3d33
				align-items center
				justify-content center
				.searchInput
					width 710rpx
					height 64rpx
					background #FFFFFF
					border-radius 34rpx
					font-size 28rpx
					color #999999
					text-overflow ellipsis
					overflow hidden
					white-space nowrap
					text-align center
					&::before
						content ""
						display inline-block
						width 40rpx
						height 40rpx
						margin-left 12rpx
						margin-right 12rpx
						background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAQlBMVEUAAAC0tLS4uLi0tLS0tLS0tLS0tLS1tbWzs7O0tLSzs7O0tLS0tLS1tbW0tLS4uLi2tra1tbW0tLSzs7O0tLSzs7MEAYqtAAAAFXRSTlMAjAedrKVzWfPVwz3ITDYkHmjkiBGmNecYAAAA3UlEQVQ4y92UyxKDIAxFAyJYUMBH/v9Xm0kXFkTjuGvvSuKZEC4J8HvSwVnrghawyQzIGsx0gUWPX/LxjJv5/6tXqn/x59zmFJJUAlb6rM7yjXlf57GdM1LY6OL8hkLHOj3l05VTlNMffEHEXAczBWuXTLNyhWiqXcjndAQTOV/WE8g/aIj8DEXAIfYtsEd0RcByic0i7TNQ3vr+YWR7nhkuX6HcFHKbcSdHoXFZAyUUR2HTbCJ2l8O10nAtG0DHpDSuDiqy/QBgp2EnpSdlJ2Uxud4lF7ildbHwd3oDxHgS7RmxmUUAAAAASUVORK5CYII=") no-repeat
						background-size 100%
						transform translateY(30%)
			.mainTab
				width 750rpx
				height 78rpx
				background #FF3D33
				margin 0 auto
				max-width 750rpx
				.tabs-wrap
					display flex
					.tab-scroll
						position relative
						width 100%
						height 78rpx
						display flex
						white-space nowrap
						// 
						.left-scroll-down
							position absolute
							top 66rpx
							left 60rpx
							transform translateX(-50%)
							width 18rpx
							height 6rpx
							background #FFFFFF
						// border-bottom 2rpx solid #FFFFFF
						// box-sizing border-box:
						.left-scroll
							padding-left 24rpx
							margin-right 42rpx
							font-size 36rpx
							color #FFFFFF
							height 78rpx
							line-height 78rpx
						.scrollItem
							color #FFFFFF
							height 78rpx
							line-height 78rpx
							margin-right 42rpx
							font-size 30rpx
			.swiper-image
				width 100%
				height 220rpx
				// background #007AFF
				.swiper-item
					width 100%
					height 100%
					.swiper-image
						width 100%
						height 100%
						position relative
						image
							width 100%
							height 468rpx
							position: absolute;
							left: 0;
							bottom: 0
			.ad-wrap
				width 100%
				height 188rpx
				padding 0 14rpx
				.ad-scroll
					display flex
					width 722rpx
					height 100%
					.swiper-item
						position relative
						display inline-block
						width 134rpx
						height 134rpx
						margin-bottom 4rpx
						margin-right 8rpx
						image
							width 134rpx
							height 134rpx
						text
							font-size 24rpx
							color #666
							text-align center
							position absolute
							left 50%
							transform translateX(-50%)
							bottom 0
							white-space nowrap
			.jr-bp
				width 702rpx
				height 344rpx
				border-radius 24rpx
				background #FFFFFF
				margin 0 auto
				padding-top 20rpx
				box-sizing border-box
				overflow hidden
				// color #333
				.up
					display flex
					align-items center
					justify-content space-between
					height 45rpx
					padding 0 9rpx
					.up-left
						display flex
						align-items center
						.left-image1
							width 30rpx
							height 30rpx
						.left-image2
							width 126rpx
							height 45rpx
						.count-time
							font-size 24rpx
							color #4d4d4d
							width 166rpx
							height 36rpx
							background #007AFF
					.more
						font-size 22rpx
						color gray
						line-height 30rpx
						height 30rpx
						text
							vertical-align middle
						image
							width 24rpx
							height 24rpx
							margin 5rpx 0 0 5rpx
							vertical-align middle
				.down
					margin-top 18rpx
					width 702rpx
					.down-swiper
						// width 702rpx
						height 250rpx
						display flex
						justify-content space-between
						// padding: 0 18rpx
						.down-swiper-item
							margin 0 auto
							height 250rpx
							// width 668rpx
							display flex
							justify-content space-evenly
							flex 1
							// padding-right 15rpx
							.swiper-item-1
								padding-top 6rpx
								box-sizing border-box
								text-align center
								image
									width 158rpx
									height 158rpx
									border-radius 12rpx
									background #fff
								.down-price
									margin-top 10rpx
									font-size 30rpx
									color #ff4c42
									line-height 30rpx
									background #FFFFFF
									height 30rpx
								.down-number
									margin-top 10rpx
									font-size 22rpx
									color #9a9a9a
									line-height 22rpx
									white-space nowrap
									height 22rpx
									background #FFFFFF
			.middle-image
				.middle-image1
					display block
					margin 18rpx auto
					width 200rpx
					height 50rpx		
			.hot-goods
				width 100%
				display flex
				flex-direction column
				align-items center
				background #007AFF
				.goods-lists-6
					margin-bottom 12rpx
					.goods-list-1
						display flex
						align-items center
						width 702rpx
						height 316rpx
						margin 0 auto
						border-radius 24rpx
						padding-left 18rpx
						box-sizing border-box
						background #fff
						.left
							width 280rpx
							height 280rpx
							border-radius 12rpx
							overflow hidden
							image
								width 280rpx
								height 280rpx
						.right
							margin-left 18rpx
							height 280rpx
							box-sizing border-box
							.right-title
								width 368rpx
								height 80rpx
								line-height 40rpx
								font-size 28rpx
								color #222
								// overflow hidden
								// word-break break-all
								image
									max-width 100%
									height 30rpx
									margin-right 5rpx
									margin-top -5rpx
									vertical-align middle
								.good-title
									vertical-align middle



</style>
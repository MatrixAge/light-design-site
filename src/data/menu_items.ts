export interface IMenuItems {
	name: string
	description: string
	path: string
	components: Array<{ name: string; path: string; description: string }>
}

export default [
	{
		name: '通用',
		path: 'common',
		description: '大部分场景下能够使用的组件',
		components: [
			{
				name: 'View',
				description: '盒子'
			},
			{
				name: 'Text',
				description: '文字'
			},
			{
				name: 'Icon',
				description: '图标'
			}
		]
	},
	{
		name: '全局',
		path: 'global',
		description: '通常是一些全局组件',
		components: [
			{
				name: 'NavBar',
				description: '顶部导航栏'
			},
			{
				name: 'TabBar',
				description: '底部导航栏'
			}
		]
	},
	{
		name: '表单',
		path: 'form',
		description: '进行数据录入时需要使用的组件',
		components: [
			{
				name: 'Button',
				description: '按钮'
			},
			{
				name: 'Form',
				description: '表单'
			},
			{
				name: 'Uploader',
				description: '上传'
			},
			{
				name: 'Switch',
				description: '开关'
			},
			{
				name: 'Counter',
				description: '计数器'
			},
			{
				name: 'Radio',
				description: '单选框'
			},
			{
				name: 'RadioGroup',
				description: '单选框组'
			},
			{
				name: 'Checkbox',
				description: '复选框'
			},
			{
				name: 'CheckboxGroup',
				description: '复选框组'
			}
		]
	},
	{
		name: '内容',
		path: 'content',
		description: '用于展示内容的组件',
		components: [
			{
				name: 'Title',
				description: '标题'
			},
			{
				name: 'Card',
				description: '卡片'
			},
			{
				name: 'Loading',
				description: '加载中'
			},
			{
				name: 'Tips',
				description: '提示'
			},
			{
				name: 'Tab',
				description: '选项卡'
			},
			{
				name: 'Table',
				description: '表格'
			},
			{
				name: 'Cascader',
				description: '级联选择'
			},
			{
				name: 'VirtualList',
				description: '虚拟滚动列表'
			},
			{
				name: 'IndexList',
				description: '索引列表'
			},
			{
				name: 'Loadmore',
				description: '加载更多'
			},
			{
				name: 'Sticky',
				description: '索引列表'
			},
			{
				name: 'Gallery',
				description: '画廊'
			},
			{
				name: 'Badge',
				description: '徽标'
			},
			{
				name: 'Dropdown',
				description: '下拉菜单'
			},
			{
				name: 'Collapse',
				description: '折叠面板'
			},
			{
				name: 'CountDown',
				description: '倒计时'
			},
			{
				name: 'Slider',
				description: '滑块'
			},
			{
				name: 'Empty',
				description: '空白占位符'
			},
			{
				name: 'Skeleton',
				description: '骨架屏'
			}
		]
	},
	{
		name: '交互',
		path: 'action',
		description: '用于界面交互的组件',
		components: [
			{
				name: 'ActionSheet',
				description: '抽屉'
			},
			{
				name: 'Dialog',
				description: '对话框'
			},
			{
				name: 'DialogQueue',
				description: '对话框队列'
			},
			{
				name: 'Modal',
				description: '弹层'
			},
			{
				name: 'Toast',
				description: '水波纹'
			},
			{
				name: 'SnackBar',
				description: '提示栏'
			},
			{
				name: 'NoticeBar',
				description: '通告栏'
			},
			{
				name: 'Popover',
				description: '弹框',
				memo: '参考微信右上角加号点出的弹框'
			},
			{
				name: 'Ripple',
				description: '水波纹'
			}
		]
	},
	{
		name: '业务',
		path: 'business',
		description: '通常是仅针对特定业务的组件',
		components: [
			{
				name: 'Sku',
				description: 'Sku组件'
			},
			{
				name: 'Calendar',
				description: '日历'
			},
			{
				name: 'Rate',
				description: '评分'
			},
			{
				name: 'Period',
				description: '预约选择器'
			},
			{
				name: 'Pagenation',
				description: '分页'
			}
		]
	},
	{
		name: '扩展资源',
		path: 'more',
		description: '其他相关资源',
		components: [
			{
				name: 'atom.css',
				path: 'atom',
				description: '通用CSS库'
			},
			{
				name: 'XD资源包',
				path: 'xd',
				description: 'For Adobe XD'
			},
			{
				name: 'Sketch资源包',
				path: 'sketch',
				description: 'For Sketch'
			},
			{
				name: 'Axure资源包',
				path: 'axure',
				description: 'For Axure'
			},
			{
				name: 'Cloud Pack',
				path: 'cloud_pack',
				description: '独立开发利器'
			}
		]
	}
] as Array<IMenuItems>

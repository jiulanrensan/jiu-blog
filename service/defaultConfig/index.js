export const HEADER = [
  {'label': '首页', 'value': ''},
  {'label': '沸点', 'value': 'hot'},
  {'label': '话题', 'value': 'topic'},
  {'label': '小册', 'value': 'book'},
  {'label': '活动', 'value': 'activity'}
]

export const CATEGORY = [
  { router: { name: 'index' }, title: '推荐' },
  { router: { path: '/home/frontend' }, title: '前端' },
  { router: { path: '/home/backend' }, title: '后端' },
  { router: { path: '/home/android' }, title: 'Android' },
  { router: { path: '/home/ios' }, title: 'iOS' },
  { router: { path: '/home/ai' }, title: '人工智能' },
  { router: { path: '/home/freebie' }, title: '工具资源' },
  { router: { path: '/home/life' }, title: '代码人生' },
  { router: { path: '/home/article' }, title: '阅读' }
]

export const HOME_TITLE = [
  {'label': '热门', 'value': 'POPULAR'},
  {'label': '最新', 'value': 'NEWEST'},
  {'label': '热榜', 'value': 'THREE_DAYS_HOTTEST'}
]
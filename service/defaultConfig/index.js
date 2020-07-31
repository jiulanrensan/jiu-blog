export const HEADER = [
  {'label': '首页', 'value': 'index'},
  {'label': '沸点', 'value': 'hot'},
  {'label': '话题', 'value': 'topic'},
  {'label': '小册', 'value': 'book'},
  {'label': '活动', 'value': 'activity'}
]

// 首页
export const HOME_CATEGORY = [
  { router: { path: '/recommand' }, title: '推荐' },
  { router: { path: '/frontend' }, title: '前端' },
  { router: { path: '/backend' }, title: '后端' },
  { router: { path: '/android' }, title: 'Android' },
  { router: { path: '/ios' }, title: 'iOS' },
  { router: { path: '/ai' }, title: '人工智能' },
  { router: { path: '/freebie' }, title: '工具资源' },
  { router: { path: '/life' }, title: '代码人生' },
  { router: { path: '/article' }, title: '阅读' }
]

export const ARTICLE_NAV = [
  {'label': '热门', 'value': 'POPULAR'},
  {'label': '最新', 'value': 'NEWEST'},
  {'label': '热榜', 'value': 'THREE_DAYS_HOTTEST'}
]


// 沸点
export const HOT_CATEGORY = [
  {'title': '推荐', router: { path: '/hot/recommended' }},
  {'title': '热门', router: { path: '/hot/hoted' }},
  {'title': '关注', router: { path: '/hot/following' }},
]
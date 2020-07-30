// 格式化时间文字
/**
 * 
 * @param {Number} time
 * @return {String}
 */
export const formatTimeText = function (time) {
  const TIME_RANGE = [60, 60*60, 60*60*24, 60*60*24*365, Infinity]
  const TIME_RANGE_TEXT = ['刚刚', '分钟', '小时', '天', '年']
  let idx = 0
  let text = ''
  while (idx < TIME_RANGE.length) {
    if (time < TIME_RANGE[idx]) {
      text = `${idx === 0 ? '' : parseInt(time/TIME_RANGE[idx - 1])}${TIME_RANGE_TEXT[idx]}`
      break
    }
    idx++
  }
  return `${text}${idx !== 0 ? '前' : ''}`
}

// 距离现在多长时间
/**
 * @param {String} timeStr
 * @return {String}
 */
export const timeToNow = function (timeStr) {
  // 1 day = 24 h = 24*60 min = 24*60*60 s = 24*60*60*1000 ms
  if (!timeStr) return ''
  const time = new Date(timeStr).getTime()
  const cur = new Date().getTime()
  let gap = time - cur
  if (gap > 0) return ''
  gap = Math.abs(gap)/1000
  return formatTimeText(gap)
}

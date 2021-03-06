import axios from './base.js'

/*
### 歌手分类列表

说明 : 调用此接口,可获取歌手分类列表  

**必选参数 :** `cat` : 即 category Code,歌手类型,默认 1001,返回华语男歌手数据  

**可选参数 :**

`limit` : 返回数量 , 默认为 30

`offset` : 偏移数量，用于分页 , 如
: 如 :( 页数 -1)\*30, 其中 30 为 limit 的值 , 默认为 0

`initial`: 按首字母索引查找参数,如 `/artist/list?cat=1001&initial=b` 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列

category Code 取值:

```
入驻歌手 5001

华语男歌手 1001

华语女歌手 1002

华语组合/乐队 1003

欧美男歌手 2001

欧美女歌手 2002

欧美组合/乐队 2003

日本男歌手 6001

日本女歌手 6002

日本组合/乐队 6003

韩国男歌手 7001

韩国女歌手 7002

韩国组合/乐队 7003

其他男歌手 4001

其他女歌手 4002

其他组合/乐队 4003
```

**接口地址 :** `/artist/list`

**调用例子 :** `/artist/list?cat=1001`
*/

export const getSingerList = ({cat = 5001, limit = 20, page = 1, initial = -1} = {}) => axios.get('/artist/list', {params: {cat, limit, offset: (page - 1) * limit, initial}})


/*

### 热门歌手

说明 : 调用此接口 , 可获取热门歌手数据

**可选参数 :** `limit`: 取出数量 , 默认为 50

`offset`: 偏移数量 , 用于分页 , 如 :( 页数 -1)\*50, 其中 50 为 limit 的值 , 默认
为 0

**接口地址 :** `/top/artists`

**调用例子 :** `/top/artists?offset=0&limit=30`
*/

export const getHotSingerList = ({limit = 20, page = 1} = {}) => axios.get('/top/artists', {params: {limit, offset: (page - 1) * limit, cat: 6001}})


/*
### 歌手热门50首歌曲

说明 : 调用此接口,可获取

**必选参数 :**

`id` : 歌手 id
*/

export const getSingerHotMusic = id => axios('/artist/top/song', {params: {id}})

/*

### 获取歌手单曲

说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲

**必选参数 :** `id`: 歌手 id, 可由搜索接口获得

**接口地址 :** `/artists`
*/

export const getSingerMusic = id => axios.get('/artists', {params: {id}})

/*
### 获取歌手描述

说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述

**必选参数 :** `id`: 歌手 id

**接口地址 :** `/artist/desc`
*/

export const getSingerDesc = id => axios.get('/artist/desc', {params: {id}})

/*
### 获取相似歌手

说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手

**必选参数 :** `id`: 歌手 id

**接口地址 :** `/simi/artist`
*/

export const getSimilarSinger = id => axios.get('/simi/artist', {params: {id}})


/*

### 获取歌手 mv

说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调
用`/mv`传入此接口获得的 mvid 来拿到 , 如 :
`/artist/mv?id=6452`,`/mv?mvid=5461064`

**必选参数 :** `id`: 歌手 id, 可由搜索接口获得

**接口地址 :** `/artist/mv`
*/
export const getSingerMV = ({id, page = 1, limit = 40}) => axios.get('/artist/mv', {params: {id, limit, offset: (page - 1) * limit}})

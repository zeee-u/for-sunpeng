﻿var rule = {
  title: '',
  host: 'https://ys.cwss.xyz/',
  url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.navbar&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
  cate_exclude: '今日更新|热榜|APP',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.module-page&&div&&a;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: '.module-poster-items-base&&a;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag&&Text',
    img: 'img&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text;.module-info-item:eq(4)&&Text;.module-info-item:eq(5)&&Text',
    content: '.module-info-introduction-content&&Text',
    tabs: '.module-tab-item',
    lists: '.module-play-list:eq(#id) a',
  },
  搜索: '.module-main&&div;.module-card-item-title&&Text;img&&data-original;.module-item-note&&Text;a&&href',
}

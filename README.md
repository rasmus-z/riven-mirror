# Riven Mirror

> 此项目意为创建一个裂罅MOD的快捷鉴别工具

> 本项目目前处于ALPHA阶段 很多功能不完善请注意

## 项目介绍

详见WIKI: [A测公式帖](https://gitee.com/pa001024/riven-mirror/wikis/A测公式贴)

## 近期 TODO-LIST

- [ ] 账号
- [ ] 用户feedback页面
- [ ] 根据敌人自动配装(机器学习?)
- [ ] 现在的数据过于平均化对于低射速武器不够客观，可以考虑加入概率系统
  - [ ] 基于概率系统的夜灵伤害模拟


## 特性
- 输入
  - [x] MOD截图识别
    - [x] 英文识别
  - [x] 文本输入
  - [x] 手动选择属性
  - [x] 随机Roll
  - [x] 二维码
- 编辑
  - [x] 自主选卡
  - [x] 统一加成
- 输出
  - [ ] 多方案比较 (正在做)
  - [x] 派系伤害模拟
  - [x] 自动配卡
  - [x] 基准值评分
- [ ] 武器配装
  - [x] 触发计算
  - [x] 派系计算

## change log

1.2.9: 
- 新功能: 极化和容量显示
- 算法更新: 修正一些错误的算法
-- 修正加法触发和连击触发
-- 修正射线类武器多重对触发的错误加成
-- 修正平均触发伤害算法

1.2.8: 更新武器选择器: 支持使用/weapon#ZAW 直接跳转到相应tab ZAW术语修改

1.2.7: 新功能: 触发计算 上线 / 实时信息网络优化

1.2.6: 添加觉醒P/救赎P相关信息

1.2.5: 修复在老版本浏览器中实时信息页面无法滚动的问题

1.2.3 / 1.2.4: 修复一些BUG

1.2.2: 更新新编码方式 (RMEncoding2.0) 修正牛吼的buff类型

1.2.1: 修复一些BUFF和分享方面的BUG

1.2.0: 
- 属性名国际化
- 武器配装新属性弹道飞行速度
- 关联异融电盾元素附加BUFF的效果现在可以正确计算了 (有飞行时间的会合成复合元素反之不会)
- 现在BUFF可以随链接分享了

1.1.7: 修正英文紫卡识别问题

1.1.6: 紫卡编辑器新外观 优化2+1-紫卡快速输入 武器配装快速选择添加4活动元素

1.1.5: 小丑BUFF移动到最终伤害 新增DJ4技能的BUFF

1.1.4: 更新最佳紫卡算法 幻影装置默认等级155->160

1.1.3: 更新组合枪属性 修复弱点专精P数据错误

1.1.2: 添加国服翻译选项

1.1.1: 添加金星赏金任务

1.1.0: 新增Zaw和组合枪(kitgun)的紫卡分析功能

1.0.9: 更新译名与游戏同步

1.0.8: 新增金星时钟显示/修正数据译名等问题

1.0.7: 新增组装枪模拟

1.0.6: 更新金星平原系列武器/裂罅倾向改动

1.0.5: 修复数值变动过小时不显示变动的bug

1.0.4: 修正狂战士无法正常工作的bug/添加天穹之顶次要模式

1.0.3: 修正月神狩弓无法安装MOD的bug

1.0.2: 给武器配装页增加分享按钮/修正zaw部件的错误

1.0.1: 新紫卡创建页面/修正部分翻译错误

1.0.0 本地化代码重构

0.9.1 加成系统独立

0.9.0 新界面/性能优化

0.8.0 幻影装置发布/赋能完整支持

0.7.0 首页发布

0.6.0 武器配装发布

0.5.0 第一次发布

0.4.0 实现洗卡模拟

0.3.0 实现黄历

0.2.4 实现最佳紫卡生成

0.2.3 支持二维码 支持猎人战备

0.2.2 支持近战MOD

0.2.1 实现了元素类型限制 以及追随者MOD限制

0.2.0 demo2 实现了自动配卡标准输出

0.1.0 demo1 实现了mod截图识别

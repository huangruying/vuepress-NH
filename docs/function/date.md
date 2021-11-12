# Date 日期格式化

<div style="margin-top: 50px"></div>

### 引入
```jsx
import { formatTime } from '@/common/formatTime'
```

### 使用
``` jsx
formatTime(1636613485000, 'yyyy-mm-dd hh:mm:ss')
```

---

<div style="margin-top: 50px"></div>

---

## Methods

|     方法名     |     说明    |     参数      |
| :------------: | :---------------: | :-----------: |
|   formatTime   |  日期格式化  | timestamp，format |

---

<div style="margin-top: 50px"></div>

---

**formatTime 参数说明**
| 参数 |              说明               |  类型  | 是否必传 | 可选值 |
| :--: | :----------------------------: | :----: | :------: | :------: |
| timestamp |         时间戳          | Number |   必传   |   ——   |
| format | 类型  | String |   必传   |  yyyymmdd,yyyy-mm-dd,hh:mm:ss,yyyy-mm-dd hh:mm:ss,yyyy-mm-dd hh:mm,hh:mm   |

**format 对应返回值**
2021年11月11日15点10分30秒
|     传入     |     返回    |
| :------------: | :---------------: |
|   yyyymmdd   |  2021年11月11日  |
|   yyyy-mm-dd   |  2021-11-11  |
|   hh:mm:ss   |  15:10:30  |
|   yyyy-mm-dd hh:mm:ss   | 2021-11-11 15:10:30  |
|   yyyy-mm-dd hh:mm   | 2021-11-11 15:10  |
|   hh:mm   | 15:10  |

<br>
<br>
<br>


---

Ctrl + C、Ctrl + V 的次数多了，函数方法也就存在了。

---
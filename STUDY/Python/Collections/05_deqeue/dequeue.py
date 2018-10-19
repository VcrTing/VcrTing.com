# c 语言写的
from collections import deque

# 引出 dequeue
user_list = ['VcrT', 'VcrT2']
user_list.pop()

# deque 传入可迭代对象
user_list2 = deque(['VcrT', 'VcrT2'])

# 双端队列，可以从开头或结尾进行操作
from _collections import deque
# 可以进入这里面查看deque有什么方法
# copy, extend, extendleft, insert, pop, popleft, reverse, rotate
# 实现了__item__

# deque 线程安全的，由GIL来保护的
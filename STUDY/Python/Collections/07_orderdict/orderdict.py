
from collections import OrderedDict

# 是dict的子类
user_dict = OrderedDict()

# python2 的 dict 是无顺序的，OrderedDict是有序的
user_dict['b'] = 'VcrT'
user_dict['a'] = 'Lucy'
user_dict['c'] = 'Bob'

# 除了有dict的方法，还有方法
user_dict.popitem()

user_dict.move_to_end('b')
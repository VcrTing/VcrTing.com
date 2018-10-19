from collections import namedtuple 

User = namedtuple('User', ['name', 'age', 'height'])
user = User(name='VcrT', age=19, height=165)
print('type of user =', type(user))

# 很重要的一个用法
user_tuple = ('VcrTing', 20)
user2 = User(*user_tuple, 165)

# 上面用法的扩展
user_dict = {
    'name': 'VcrT',
    'age': 19
}
user3 = User(**user_dict, height=165)

# 一些方法
# _make() 传递可迭代对象进去
user_list = ['VcrTing', 20, 165]
user4 = User._make(user_list)

# _asdict() 转dict
user_dict = user4._asdict()

# namedtuple的拆包
name, age, *other = user4
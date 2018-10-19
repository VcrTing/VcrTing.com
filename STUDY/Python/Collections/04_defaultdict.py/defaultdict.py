# c语言实现的
from collections import defaultdict

user_dict = {}
users = ['VcrT', 'Lucy', 'Jack', 'Lucy', 'Bob', 'Bob']

# 一个 dict 的操作例子
for user in users:
    user_dict.setdefault(user, 0)
    user_dict[user] += 1

print(user_dict)

# defaultdict 传递可调用对象的名称
def_dict = defaultdict(str)
def_dict['VcrT']
for user in users:
    def_dict[user] += 1

# 可调用对象的应用
def gen_def():
    return {
        'name': '',
        'age': 0
    }
def_dict2 = defaultdict(gen_def)
print(def_dict2['VcrT'])
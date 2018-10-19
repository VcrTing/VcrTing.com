from collections import Counter

# 统计数组
users = ['VcrT', 'Lucy', 'Lucy', 'Jack', 'Bob']
user_counter = Counter(users)

# 统计字符串
a = 'aaaaavdwsfwfwsda'
a_counter = Counter(a)
# 可以传递字符串，也可以传递可迭代对象
a_counter.update('adasqdaswe')

# 可以解决 top n 的问题
# 取最多的前两个
user_counter.most_common(2)
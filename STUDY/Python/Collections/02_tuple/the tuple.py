
# 不可变类型
# 可迭代对象

# 拆包
user = ('VcrT', 19, 165, '江西', '喜欢吃饭')
name, age, height, *other = user
# other 是数组类型

# 对tuple内数组的修改
user = ('VcrT', [49, 165])
user[1][1] = 50
# 对于可变对象，不建议放入tuple中

# tuple比list好的地方
# tuple是immutable对象，性能优化方面较好
#                      线程安全
#                      可hash，可作为dict的key
# 具有拆包特性

# 引出nametuple
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age 

user = User(name='VcrT', age=19)
# 取属性方式
vcrt_name = user.name
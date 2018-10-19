
from collections import ChainMap

# 可以同时操作多个 dict
dic1 = {
    'a': 'VcrT',
    'b': 4
}
dic2 = {
    'a': 'Lucy',
    'c': 'AAA'
}

cmap = ChainMap(dic1, dic2)
cmap.new_child({
    'c': 'BBB',
    'd': 20
})
print(cmap['a'])

for k, v in cmap.items():
    print(k, v)

dict_list = cmap.maps

from django.db import models
from django.utils import timezone

# Create your models here.
class Member(models.Model):
    name = models.CharField(max_length=120, verbose_name='姓名')
    gender = models.CharField(max_length=4, verbose_name='性别')
    bith = models.DateTimeField(default=timezone.now, verbose_name='出生日期')
    start_work_date = models.DateTimeField(default=timezone.now, verbose_name='开始工作的时间')
    depart = models.CharField(max_length=30, verbose_name='部门', default='技术部')
    salary = models.FloatField(verbose_name='底薪')

    class Meta:
        verbose_name = '成员'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name
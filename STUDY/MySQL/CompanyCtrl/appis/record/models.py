
from django.db import models
from django.utils import timezone

from appis.member import models as member_models
# Create your models here.
class BusinessTrip(models.Model):
    member = models.ForeignKey(member_models.Member, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='所属用户')
    go_time = models.DateTimeField(default=timezone.now, verbose_name='起始时间')
    mark = models.CharField(max_length=120, verbose_name='出发描述')

    class Meta:
        verbose_name = '出差表'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.mark
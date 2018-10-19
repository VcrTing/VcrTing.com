from django.contrib import admin

from . import models
# Register your models here.
class MemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'gender', 'bith', 'depart', 'start_work_date', 'salary']

admin.site.register(models.Member, MemberAdmin)
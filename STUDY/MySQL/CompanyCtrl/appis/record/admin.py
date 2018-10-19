from django.contrib import admin

from . import models
# Register your models here.

class BusinessTripAdmin(admin.ModelAdmin):
    lis_display = ['go_time', 'mark']

admin.site.register(models.BusinessTrip, BusinessTripAdmin)

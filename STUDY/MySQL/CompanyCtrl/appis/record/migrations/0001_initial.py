# Generated by Django 2.1.2 on 2018-10-16 09:04

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BusinessTrip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('go_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='起始时间')),
                ('mark', models.CharField(max_length=120, verbose_name='出发描述')),
                ('member', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='member.Member', verbose_name='所属用户')),
            ],
            options={
                'verbose_name': '出差表',
                'verbose_name_plural': '出差表',
            },
        ),
    ]
# Generated by Django 2.0.6 on 2018-07-09 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_expand_datetime_to_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='career',
            name='type',
            field=models.CharField(choices=[('WORK', 'Work'), ('OTHER', 'Other')], max_length=5),
        ),
    ]

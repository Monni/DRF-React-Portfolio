# Generated by Django 2.0.6 on 2018-07-30 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_page_fix_choices'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='page_name',
            field=models.CharField(choices=[('HOME', 'Home'), ('RESUME', 'Resume'), ('PROJECTS', 'Projects')], max_length=10, null=True),
        ),
    ]
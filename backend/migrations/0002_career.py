# Generated by Django 2.0.6 on 2018-06-14 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Career',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=64)),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('type', models.CharField(choices=[('WORK', 'Work'), ('OTHER', 'Other')], max_length=3)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

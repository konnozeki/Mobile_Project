# Generated by Django 4.2.6 on 2023-10-10 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0002_user_remove_book_author_delete_author_delete_book'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('M', 'Nam'), ('F', 'Nữ'), ('O', 'Khác')], default='M', max_length=1),
        ),
    ]

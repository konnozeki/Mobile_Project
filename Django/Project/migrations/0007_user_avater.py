# Generated by Django 4.2.6 on 2023-10-11 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0006_alter_comment_post_id_alter_comment_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avater',
            field=models.ImageField(blank=True, upload_to='uploads/'),
        ),
    ]

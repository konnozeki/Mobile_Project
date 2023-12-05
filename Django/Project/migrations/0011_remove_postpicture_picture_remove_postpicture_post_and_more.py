# Generated by Django 4.2.6 on 2023-11-22 10:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0010_userprofile_alter_comment_user_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='postpicture',
            name='picture',
        ),
        migrations.RemoveField(
            model_name='postpicture',
            name='post',
        ),
        migrations.AddField(
            model_name='article',
            name='posts',
            field=models.ManyToManyField(to='Project.post'),
        ),
        migrations.AddField(
            model_name='post',
            name='picture',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='Project.picture'),
        ),
        migrations.DeleteModel(
            name='ArticlePicture',
        ),
        migrations.DeleteModel(
            name='PostPicture',
        ),
    ]

from django.db import models
from django.core.validators import MinLengthValidator
GENDER_CHOICES = (
        ('M', 'Nam'),
        ('F', 'Nữ'),
        ('O', 'Khác'),
    )
AGE_RESTRICTION = (
    ('All', 0),
    ('18+', 18)
)
TYPE = (
        ("Photog", "Ảnh chụp"), ("Illust", "Tranh vẽ")
    )
class User(models.Model):
    username = models.CharField(max_length=30, null=False, primary_key=True, validators=[MinLengthValidator(8, 'Tên người dùng ít nhất có 8 ký tự')])
    password = models.CharField(max_length=30, validators=[MinLengthValidator(8, 'Mật khẩu ít nhất có 8 ký tự')], null=False)
    name = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=254, null=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=False, default='M')
    #def user_directory_path(instance, filename):
        #return 'Avatar/{0}/{1}'.format(instance.username, filename)
    #avatar = models.ImageField(height_field=200, width_field=200, upload_to=user_directory_path, default=)

class Post(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    release_date = models.DateField(null=False)
    content = models.TextField()
    contributor = models.ForeignKey(User, on_delete=models.CASCADE)
    number_of_likes = models.IntegerField(null=False, default=0)
    title = models.CharField(max_length=100)
    age_restriction = models.CharField(max_length=3, choices=AGE_RESTRICTION, null=False)

class Type(models.Model):
    
    type = models.CharField(max_length=6, choices=TYPE, null=False, primary_key=True)
    description = models.TextField()

class Picture(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    release_date = models.DateField(null=False)
    contributor = models.ForeignKey(User, on_delete=models.CASCADE)
    picture_type = models.ForeignKey(Type, on_delete=models.CASCADE)

class Article(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    release_date = models.DateField(null=False)
    article_type = models.CharField(max_length=6, null=False, choices= TYPE)
    content = models.TextField()
    title = models.CharField(max_length=1000)
    age_restriction = models.CharField(max_length=3, choices=AGE_RESTRICTION, null=False)


class Comment(models.Model):
    comment_id = models.IntegerField(default=0, primary_key=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    previous_comment = models.ForeignKey('self', on_delete=models.CASCADE)
    number_of_likes = models.IntegerField(default=0, null=False)
    content = models.TextField(null=False)

from django.contrib import admin

# Register your models here.
from .models import User, Post, Type, Picture, Article, Comment

admin.site.register(User)
admin.site.register(Post)
admin.site.register(Type)
admin.site.register(Picture)
admin.site.register(Article)
admin.site.register(Comment)
from django.contrib import admin

# Register your models here.
from .models import User, Post, Type, Article, Comment

admin.site.register(Post)
admin.site.register(Type)
admin.site.register(Article)
admin.site.register(Comment)
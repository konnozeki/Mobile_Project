from django.urls import path
from Project import views
from Project.api import *
urlpatterns = [
    path('user/', views.user_list),
    path('user/<int:pk>/', views.user_detail),
    path('post/', views.post_list),
    path('post/<int:pk>/', views.post_detail),
    path('article/', views.article_list),
    path('article/<int:pk>/', views.article_detail),
    path('type/', views.type_list),
    path('type/<int:pk>/', views.type_detail),
    path('comment/', views.comment_list),
    path('comment/<int:pk>/', views.comment_detail),
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('userview/', UserAPI.as_view()),
]
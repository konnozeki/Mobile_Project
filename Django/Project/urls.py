from django.urls import path
from Project import views
from Project.api import *
urlpatterns = [
    path('user/', views.user_list),
    path('user/<int:pk>/', views.user_detail),
    path('post/', views.post_list),
    path('post/<int:pk>/', views.post_detail),
    path('post/illust/', views.post_illust_list),
    path('post/photo/', views.post_photograph_list),
    path('post/user/<int:pk>/', views.post_user_detail),
    path('post/illust/ranking/', views.post_illust_ranking_list),
    path('post/photo/ranking/', views.post_photograph_ranking_list),
    path('post/illust/user/<int:pk>/', views.post_user_illust),
    path('post/photo/user/<int:pk>/', views.post_user_photo),

    path('type/', views.type_list),
    path('type/<int:pk>/', views.type_detail),
    path('comment/', views.comment_list),
    path('comment/<int:pk>/', views.comment_detail),
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('userview/', UserAPI.as_view()),
    path('favourite/', views.favourite_list),
    path('favourite/<int:user>/<int:post>', views.favourite_detail),
    path('favourite/post/<int:pk>', views.post_favourite_posts),
    path('favourite/user/<int:pk>', views.user_favourite_posts),
    path('favourite/contributor/<int:pk>', views.favourite_contributor_list),
    path('hashtags/illust/', views.fetch_illust_posts_with_hashtag_counts),
    path('hashtags/illust/limited/', views.fetch_illust_posts_with_hashtag_counts_limited),
    path('hashtags/photo/', views.fetch_photo_posts_with_hashtag_counts),
    path('hashtags/photo/limited/', views.fetch_photo_posts_with_hashtag_counts_limited),
    path('post/illust/<str:hashtag_word>/', views.posts_illust_by_hashtags),
    path('post/photo/<str:hashtag_word>/', views.posts_photo_by_hashtags)
]
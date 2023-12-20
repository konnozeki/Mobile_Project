from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser,  MultiPartParser
from Project.models import *
from Project.serializers import *
from rest_framework.decorators import api_view, parser_classes
from collections import Counter

@csrf_exempt
def user_list(request):
    if request.method == "GET":
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    


@csrf_exempt
def user_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=204)
    
def fetch_illust_posts_with_hashtag_counts(request):
    if request.method == "GET":
        # Get all posts with hashtags
        posts = Post.objects.filter(type="Illust").exclude(hashtags=None)
        all_hashtags = [tag.name for post in posts for tag in post.hashtags.all()]
        hashtag_counts = Counter(all_hashtags)
        sorted_hashtags = sorted(hashtag_counts.items(), key=lambda x: x[1], reverse=True)
        sorted_hashtags_dict = dict(sorted_hashtags)
        return JsonResponse(sorted_hashtags_dict)
    

def fetch_illust_posts_with_hashtag_counts_limited(request):
    if request.method == "GET":
        # Get all posts with hashtags and count occurrences
        hashtag_counts = Post.objects.filter(type="Illust").exclude(hashtags=None).values_list('hashtags__name', flat=True)
        hashtag_counts = Counter(hashtag_counts)

        # Get the top 9 hashtags
        top_hashtags = dict(sorted(hashtag_counts.items(), key=lambda x: x[1], reverse=True)[:9])

        return JsonResponse(top_hashtags)
    
def fetch_photo_posts_with_hashtag_counts(request):
    if request.method == "GET":
        # Get all posts with hashtags
        posts = Post.objects.filter(type="Photo").exclude(hashtags=None)
        all_hashtags = [tag.name for post in posts for tag in post.hashtags.all()]
        hashtag_counts = Counter(all_hashtags)
        sorted_hashtags = sorted(hashtag_counts.items(), key=lambda x: x[1], reverse=True)
        sorted_hashtags_dict = dict(sorted_hashtags)
        return JsonResponse(sorted_hashtags_dict)
    

def fetch_photo_posts_with_hashtag_counts_limited(request):
    if request.method == "GET":
        # Get all posts with hashtags and count occurrences
        hashtag_counts = Post.objects.filter(type="Photo").exclude(hashtags=None).values_list('hashtags__name', flat=True)
        hashtag_counts = Counter(hashtag_counts)

        # Get the top 9 hashtags
        top_hashtags = dict(sorted(hashtag_counts.items(), key=lambda x: x[1], reverse=True)[:9])

        return JsonResponse(top_hashtags)

from django.db.models import Q
def posts_illust_by_hashtags(request, hashtag_word):
    if request.method == "GET":
        # Exclude '#' character from the hashtag word
        hashtag_word = hashtag_word.lstrip('#')

        # Create a Q object to filter posts that have the specified hashtag word
        filter_condition = Q(hashtags__name__iexact=hashtag_word) | Q(hashtags__name__iexact=f"#{hashtag_word}")

        # Filter posts that have the specified hashtag word
        posts = Post.objects.filter(type='Illust').filter(filter_condition).distinct()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)

def posts_photo_by_hashtags(request, hashtag_word):
    if request.method == "GET":
        # Exclude '#' character from the hashtag word
        hashtag_word = hashtag_word.lstrip('#')

        # Create a Q object to filter posts that have the specified hashtag word
        filter_condition = Q(hashtags__name__iexact=hashtag_word) | Q(hashtags__name__iexact=f"#{hashtag_word}")

        # Filter posts that have the specified hashtag word
        posts = Post.objects.filter(type='Photo').filter(filter_condition).distinct()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
@api_view(['POST', 'GET'])
@parser_classes([JSONParser, MultiPartParser])
def post_list(request):
    if request.method == "GET":
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
from django.db.models import F, Count
def post_illust_ranking_list(request):
    if request.method == "GET":
        post = Post.objects.filter(type="Illust").annotate(num_likes=Count('number_of_likes')).order_by('-number_of_likes', 'release_date')[:5]
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)
    

def post_photograph_ranking_list(request):
    if request.method == "GET":
        post = Post.objects.filter(type="Photo").annotate(num_likes=Count('number_of_likes')).order_by('-number_of_likes', '-release_date')[:5]
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)


def post_illust_list(request):
    if request.method == "GET":
        post = Post.objects.filter(type="Illust")
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)

def post_photograph_list(request):
    if request.method == "GET":
        post = Post.objects.filter(type="Photo")
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def post_user_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        post = Post.objects.filter(contributor__id=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)
    
@csrf_exempt
def post_user_illust(request, pk):
    try:
        post = Post.objects.filter(contributor__id = pk, type = 'Illust')
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)
    
@csrf_exempt
def post_user_photo(request, pk):
    try:
        post = Post.objects.filter(contributor__id = pk, type = 'Photo')
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def post_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        post = Post.objects.filter(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=204)
    

@csrf_exempt
def type_list(request):
    if request.method == "GET":
        type = Type.objects.all()
        serializer = TypeSerializer(type, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TypeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    


@csrf_exempt
def type_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        type = Type.objects.get(pk=pk)
    except Type.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TypeSerializer(type)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TypeSerializer(type, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        type.delete()
        return HttpResponse(status=204)
    




    
@csrf_exempt
def comment_list(request):
    if request.method == "GET":
        comment = Comment.objects.all()
        serializer = CommentSerializer(comment, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    


@csrf_exempt
def comment_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        comment = Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CommentSerializer(comment, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        comment.delete()
        return HttpResponse(status=204)
    


@csrf_exempt
@api_view(['GET'])
@parser_classes([JSONParser, MultiPartParser])
def user_favourite_posts(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        # Retrieve all favorite posts for the given user
        favorite_posts = FavouritePost.objects.filter(user=user)
        serializer = FavouritePostSerializer(favorite_posts, many=True)
        return JsonResponse(serializer.data, safe=False)
    
@csrf_exempt
@api_view(['GET'])
@parser_classes([JSONParser, MultiPartParser])
def post_favourite_posts(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        # Retrieve all favorite posts for the given post
        favorite_posts = FavouritePost.objects.filter(post=post)
        serializer = FavouritePostSerializer(favorite_posts, many=True)
        return JsonResponse(serializer.data, safe=False)



@csrf_exempt
def favourite_list(request):
    if request.method == "GET":
        favourite = FavouritePost.objects.all()
        serializer = FavouritePostSerializer(favourite, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = FavouritePostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    


@csrf_exempt
def favourite_detail(request, user, post):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        favourite = FavouritePost.objects.get(user__id = user, post__id = post)
    except FavouritePost.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = FavouritePostSerializer(favourite)
        return JsonResponse(serializer.data)

    elif request.method == 'DELETE':
        favourite.delete()
        return HttpResponse(status=204)
    
@csrf_exempt  
def favourite_contributor_list(request, pk):
    if request.method == "GET":
        favourite = FavouritePost.objects.filter(contributor=pk)
        serializer = FavouritePostSerializer(favourite, many=True)
        return JsonResponse(serializer.data, safe=False)
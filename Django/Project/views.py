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

        # Filter posts that have the specified hashtag word and get 24 posts randomly
        random_posts = Post.objects.filter(type='Illust').filter(filter_condition).distinct().order_by('?')[:24]

        # Sort the random posts by number_of_likes
        sorted_posts = sorted(random_posts, key=lambda post: post.number_of_likes, reverse=True)

        serializer = PostSerializer(sorted_posts, many=True)
        return JsonResponse(serializer.data, safe=False)

def posts_photo_by_hashtags(request, hashtag_word):
    if request.method == "GET":
        # Exclude '#' character from the hashtag word
        hashtag_word = hashtag_word.lstrip('#')

        # Create a Q object to filter posts that have the specified hashtag word
        filter_condition = Q(hashtags__name__iexact=hashtag_word) | Q(hashtags__name__iexact=f"#{hashtag_word}")

        # Filter posts that have the specified hashtag word and get 24 posts randomly
        random_posts = Post.objects.filter(type='Photo').filter(filter_condition).distinct().order_by('?')[:24]

        # Sort the random posts by number_of_likes
        sorted_posts = sorted(random_posts, key=lambda post: post.number_of_likes, reverse=True)

        serializer = PostSerializer(sorted_posts, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
@api_view(['GET'])
@parser_classes([JSONParser, MultiPartParser])
def posts_illust_by_hashtags_recent(request, hashtag_word):
    if request.method == "GET":
        # Exclude '#' character from the hashtag word
        hashtag_word = hashtag_word.lstrip('#')

        # Create a Q object to filter posts that have the specified hashtag word
        filter_condition = Q(hashtags__name__iexact=hashtag_word) | Q(hashtags__name__iexact=f"#{hashtag_word}")

        # Get 24 posts and order them by release_date
        posts = Post.objects.filter(type='Illust').filter(filter_condition).distinct().order_by('-release_date')[:24]

        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)
    
@csrf_exempt
@api_view(['GET'])
@parser_classes([JSONParser, MultiPartParser])
def posts_photo_by_hashtags_recent(request, hashtag_word):
    if request.method == "GET":
        # Exclude '#' character from the hashtag word
        hashtag_word = hashtag_word.lstrip('#')

        # Create a Q object to filter posts that have the specified hashtag word
        filter_condition = Q(hashtags__name__iexact=hashtag_word) | Q(hashtags__name__iexact=f"#{hashtag_word}")

        # Get 24 posts and order them by release_date
        posts = Post.objects.filter(type='Photo').filter(filter_condition).distinct().order_by('-release_date')[:24]

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
        # Lấy 20 bài viết gần nhất theo release_date
        recent_posts = Post.objects.filter(type="Illust").order_by('-release_date')[:20]

        # Chọn ngẫu nhiên 8 bài viết
        random_posts = random.sample(list(recent_posts), min(len(recent_posts), 8))

        # Sắp xếp chúng theo số lượng likes giảm dần
        sorted_posts = sorted(random_posts, key=lambda post: post.number_of_likes, reverse=True)

        serializer = PostSerializer(sorted_posts, many=True)
        return JsonResponse(serializer.data, safe=False)
    

def post_photograph_ranking_list(request):
    if request.method == "GET":
        # Lấy 20 bài viết gần nhất theo release_date
        recent_posts = Post.objects.filter(type="Photo").order_by('-release_date')[:20]

        # Chọn ngẫu nhiên 8 bài viết
        random_posts = random.sample(list(recent_posts), min(len(recent_posts), 8))

        # Sắp xếp chúng theo số lượng likes giảm dần
        sorted_posts = sorted(random_posts, key=lambda post: post.number_of_likes, reverse=True)

        serializer = PostSerializer(sorted_posts, many=True)
        return JsonResponse(serializer.data, safe=False)


from django.http import JsonResponse
from django.db.models import Count
import random
@csrf_exempt
@api_view(['GET'])
@parser_classes([JSONParser, MultiPartParser])
def post_illust_list(request, pk):
    if request.method == "GET":
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        # Lấy số lượng post có type là "Illust"
        post_count = Post.objects.filter(type="Illust").count()

        # Xác định số lượng post tối đa cần lấy
        limit = min(post_count, 12)  # Chỉ lấy 12 post từ các đóng góp viên

        # Lấy danh sách các contributor từ các post mà người dùng yêu thích
        contributor_ids = FavouritePost.objects.filter(user=user, post__type="Illust").values_list('post__contributor', flat=True).distinct()

        # Lấy tối đa 2 post cho mỗi contributor (tối đa 12 post)
        suggested_posts = []
        for contributor_id in contributor_ids:
            contributor_posts = Post.objects.filter(contributor=contributor_id, type="Illust").order_by('?')[:2]
            suggested_posts.extend(contributor_posts)

        # Nếu không đủ 12 post, thêm ngẫu nhiên các post còn lại
        remaining_count_contributors = limit - len(suggested_posts)
        if remaining_count_contributors > 0:
            random_contributor_posts = Post.objects.filter(type="Illust").exclude(id__in=[post.id for post in suggested_posts])[:remaining_count_contributors]
            suggested_posts.extend(random_contributor_posts)

        # Lấy số lượng post tối đa cần lấy từ các post không nằm trong FavouritePost của người dùng (tối đa 12 post)
        remaining_count_random = 12
        random_posts = Post.objects.filter(type="Illust").exclude(id__in=[post.id for post in suggested_posts])[:remaining_count_random]
        suggested_posts.extend(random_posts)

        # Shuffle danh sách 24 bản ghi
        random.shuffle(suggested_posts)

        serializer = PostSerializer(suggested_posts, many=True)
        return JsonResponse(serializer.data, safe=False)

def post_photograph_list(request, pk):
    if request.method == "GET":
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        # Lấy số lượng post có type là "Illust"
        post_count = Post.objects.filter(type="Photo").count()

        # Xác định số lượng post tối đa cần lấy
        limit = min(post_count, 12)  # Chỉ lấy 12 post từ các đóng góp viên

        # Lấy danh sách các contributor từ các post mà người dùng yêu thích
        contributor_ids = FavouritePost.objects.filter(user=user, post__type="Photo").values_list('post__contributor', flat=True).distinct()

        # Lấy tối đa 2 post cho mỗi contributor (tối đa 12 post)
        suggested_posts = []
        for contributor_id in contributor_ids:
            contributor_posts = Post.objects.filter(contributor=contributor_id, type="Photo").order_by('?')[:2]
            suggested_posts.extend(contributor_posts)

        # Nếu không đủ 12 post, thêm ngẫu nhiên các post còn lại
        remaining_count_contributors = limit - len(suggested_posts)
        if remaining_count_contributors > 0:
            random_contributor_posts = Post.objects.filter(type="Photo").exclude(id__in=[post.id for post in suggested_posts])[:remaining_count_contributors]
            suggested_posts.extend(random_contributor_posts)

        # Lấy số lượng post tối đa cần lấy từ các post không nằm trong FavouritePost của người dùng (tối đa 12 post)
        remaining_count_random = 12
        random_posts = Post.objects.filter(type="Photo").exclude(id__in=[post.id for post in suggested_posts])[:remaining_count_random]
        suggested_posts.extend(random_posts)

        # Shuffle danh sách 24 bản ghi
        random.shuffle(suggested_posts)

        serializer = PostSerializer(suggested_posts, many=True)
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
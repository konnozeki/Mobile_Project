from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser,  MultiPartParser
from Project.models import *
from Project.serializers import *
from rest_framework.decorators import api_view, parser_classes


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
    


@csrf_exempt
def post_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        post = Post.objects.filter(contributor=pk)
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
def article_list(request):
    if request.method == "GET":
        article = Article.objects.all()
        serializer = ArticleSerializer(article, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    


@csrf_exempt
def article_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(article, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        article.delete()
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
    

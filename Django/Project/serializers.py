from rest_framework import serializers
from Project.models import *
from django.contrib.auth import authenticate

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'name', 'gender', 'avatar']

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid Details.")



class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ['id', 'type', 'description']



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'post', 'previous_comment', 'content', 'number_of_likes']


from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)
class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    hashtags = TagListSerializerField()
    class Meta:
        model = Post
        fields = '__all__'
    def create(self, validated_data):
        hashtags_data = validated_data.pop('hashtags', [])  # Assuming 'tags' is the field for tags
        post = Post.objects.create(**validated_data)

        # Set tags for the post
        post.hashtags.set(hashtags_data)
        return post      

class FavouritePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavouritePost
        fields = ['id', 'user', 'post', 'contributor']

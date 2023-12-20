
from collections.abc import Iterable
from django.db import models
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import User
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
        ("Photo", "Photography"), ("Illust", "Illustration")
    )
class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False, primary_key=True)
    name = models.CharField(max_length=30, null=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=False, default='M')
    avatar = models.ImageField(blank=True, upload_to ='uploads/')
    #def user_directory_path(instance, filename):
        #return 'Avatar/{0}/{1}'.format(instance.username, filename)
    #avatar = models.ImageField(height_field=200, width_field=200, upload_to=user_directory_path, default=)




class Type(models.Model):
    
    type = models.CharField(max_length=6, choices=TYPE, null=False, primary_key=True)
    description = models.TextField()


def post_image_path(instance, filename):
    user_id = instance.contributor.id
    path = f'user/{user_id}/post/{filename}'
    return path

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from firebase_admin import storage
firebase_storage = storage.bucket()

def save_image_to_firebase(instance):
    # Open the image file and read its content
    with open(f"user/{instance.contributor.id}/post/{instance.picture.name}", 'rb') as file:
        file_content = file.read()
        # Save the content to Firebase Storage
    destination_path = f"user/{instance.contributor.id}/post/{instance.picture.name}"
    firebase_storage_path = default_storage.save(destination_path, ContentFile(file_content))

        # Get the public URL of the saved file
    public_url = default_storage.url(firebase_storage_path)
    print(firebase_storage_path)

    return public_url

from urllib.parse import urlparse
import os
from taggit.managers import TaggableManager
class Post(models.Model):
    release_date = models.DateField(null=False)
    content = models.TextField()
    contributor = models.ForeignKey(User, on_delete=models.CASCADE)
    number_of_likes = models.IntegerField(null=False, default=0)
    title = models.CharField(max_length=100)
    age_restriction = models.CharField(max_length=3, choices=AGE_RESTRICTION, null=False)
    picture = models.ImageField(null=False, blank=True, upload_to=post_image_path)
    type = models.CharField(max_length=6, choices=TYPE, null=False, default='Illust')
    hashtags = TaggableManager()
    def save_image_to_firebase(self):
        if self.picture:
            # Open the image file and read its content
            with open(f"{self.picture.name}", 'rb') as file:
                file_content = file.read()

            # Save the content to Firebase Storage
            destination_path = f"{self.picture.name}"
            blob = firebase_storage.blob(destination_path)
            blob.upload_from_string(file_content, content_type='image/jpeg')  # Adjust content_type based on your file type

            # Get the public URL of the saved file
            public_url = blob.public_url
            print(public_url)

            return public_url

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

            # Add default hashtags based on the type of the post
        if self.type == 'Illust':
            self.hashtags.add('#Illustration')
        elif self.type == 'Photo':
            self.hashtags.add('#Photograph')

            # Continue with your existing save logic
        super().save()

        if self.picture:
                # Save the image to Firebase Storage before saving the model
            firebase_url = self.save_image_to_firebase()
            parsed_url = urlparse(firebase_url)

            # Get the filename from the path
            filename = os.path.basename(parsed_url.path)
                # Set the image field to the Firebase Storage URL
            self.picture.name = firebase_url#f"https://firebasestorage.googleapis.com/v0/b/illustphoto-b780b.appspot.com/o/user%2F{self.contributor.id}%2Fpost%2F{filename}?alt=media"


            super().save()




class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    previous_comment = models.ForeignKey('self', on_delete=models.CASCADE)
    number_of_likes = models.IntegerField(default=0, null=False)
    content = models.TextField(null=False)

class FavouritePost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    contributor = models.IntegerField(null=True)
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.post and not self.contributor:
            self.contributor = self.post.contributor.id
            super().save()

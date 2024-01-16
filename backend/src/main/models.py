from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from .utils.model_utils.models import BaseModel
# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, **fields):
        assert ('email' in fields)
        user = self.model(**fields)
        user.save()
        return user
    
    def create_superuser(self, **fields):
        user = self.create_user()
        user.is_superuser = True
        user.is_admin = True
        user.save()
        return user

class User(AbstractBaseUser):
    id = models.BigAutoField(primary_key=True)
    email = models.EmailField(null=False, blank=False, unique=True)
    username = models.CharField(max_length=2000, blank=True, null=True)
    first_name = models.CharField(max_length=2000, blank=True, null=True)
    last_name = models.CharField(max_length=2000, blank=True, null=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    objects = UserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]

    def has_perm(self, permission):
        return permission in self.permission.all().values_list("name", flat=True)

    def has_model_perm(self, model_name):
        return True

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"
        db_table = "user"
        ordering = ["date_joined"]

    def __str__(self):
        return self.email




class UserFriend(BaseModel):
    '''models the friends a user has'''
    user = models.ForeignKey(to="main.User", null=True, blank=True, on_delete=models.DO_NOTHING, related_name="user_friends", related_query_name="user_friends")
    friend = models.ForeignKey(to="main.User", null=True, blank=True, on_delete=models.DO_NOTHING, related_name="friend_users", related_query_name="friend_users")
    meta = models.JSONField(default=dict)

    class Meta:
        verbose_name = "UserFriend"
        verbose_name_plural = "UserFriends"
        db_table = "user_friend"

    def __str__(self):
        return f"U: {self.user.email}/F: {self.friend.email}"


class GroupRoles(models.TextChoices):
    '''models a user role in a group'''
    ADMIN = "ADMIN"
    MEMBER = "MEMBER"
    MODERATOR = "MODERATOR"

class Group(BaseModel):
    '''groups a user belongs'''
    group_name = models.CharField(max_length=5000, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    created_by = models.ForeignKey(to="main.User", null=False, blank=False, on_delete=models.PROTECT)
    rules = models.JSONField(default=list)

    class Meta:
        db_table = "group"
        verbose_name = "group"
        verbose_name_plural = "groups"

    def __str__(self):
        return self.group_name
    
class UserGroup(BaseModel):
    '''pivot table for both the user and the group'''
    user = models.ForeignKey(to="main.User", on_delete=models.DO_NOTHING, null=True, blank=True)
    group = models.ForeignKey(to="main.Group", on_delete=models.DO_NOTHING, null=True, blank=True)
    user_role = models.CharField(max_length=5000, choices=GroupRoles.choices, default=GroupRoles.MEMBER)

    def __str__(self):
        return f"{self.user.email}:{self.group.group_name}"
    
    class Meta:
        verbose_name = "user_group"
        verbose_name_plural = "user_groups"
        db_table = "user_group"



class Message(BaseModel):
    '''models all messages: both in group and personal'''
    content = models.TextField(max_length=(50*2000), null=False, blank=False)
    by = models.ForeignKey(to="main.User", on_delete=models.DO_NOTHING, null=True, blank=True, related_name="messages", related_query_name="messages")
    to = models.ForeignKey(to="main.User", on_delete=models.DO_NOTHING, null=True, blank=True, related_name="sent_to_me", related_query_name="sent_to_me")
    group = models.ForeignKey(to="main.Group", on_delete=models.DO_NOTHING, null=True, blank=True, related_name="messages", related_query_name="messages")

    def __str__(self):
        return f"{self.content[:20]}..."
    

    class Meta:
        verbose_name = "messsage"
        verbose_name_plural = "messages"
        db_table = "messages"
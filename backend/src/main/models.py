from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
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
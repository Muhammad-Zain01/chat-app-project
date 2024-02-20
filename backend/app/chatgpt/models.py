from django.db import models

# Create your models here.


class ChatHistory(models.Model):
    input = models.TextField()
    output = models.TextField()
    username = models.TextField(default="") 

    class Meta:
        db_table = "chat_history"

from django.db import models

class Todo(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField(blank=True)
    is_completed = models.BooleanField(default=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

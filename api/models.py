from django.db import models

# Create your models here.

class Note (models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    # def __str__(self):
    #     return self.body[0:50]
    
    class Meta:
        ordering = ['-created_at']
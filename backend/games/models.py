from django.db import models

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

class Language(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

class Publisher(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

class Developer(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

class Game(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='games/')
    cost = models.DecimalField(max_digits=7, decimal_places=2)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    tags = models.ManyToManyField(Tag)
    genres = models.ManyToManyField(Genre)
    languages = models.ManyToManyField(Language)
    date_release = models.DateField()
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    developer = models.ForeignKey(Developer, on_delete=models.CASCADE)
    features = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

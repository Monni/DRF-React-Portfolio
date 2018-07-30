from itertools import chain

from django.contrib.contenttypes.fields import GenericRelation, GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.core.validators import FileExtensionValidator, validate_image_file_extension
from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=64)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, related_name='tags')
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return self.name


class Media(models.Model):
    tags = GenericRelation(Tag)
    date = models.DateTimeField(auto_now_add=True)

    # Below the mandatory fields for generic relation
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()


class Image(Media):
    file = models.ImageField(upload_to='uploads/images',
                             max_length=255,
                             null=True,
                             validators=[validate_image_file_extension])


class Document(Media):
    file = models.FileField(upload_to='uploads/documents',
                            max_length=255,
                            null=False,
                            validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


class AbstractActivity(models.Model):
    # TODO video
    location = models.CharField(max_length=64)
    tags = GenericRelation(Tag)
    images = GenericRelation(Image)
    documents = GenericRelation(Document)

    class Meta:
        abstract = True

    @property
    def media(self):
        return sorted(
            chain(self.images.get_queryset(), self.documents.get_queryset()),
            key=lambda media: media.date, reverse=False)


class Event(AbstractActivity):
    name = models.CharField(max_length=64)
    description = models.TextField()
    date = models.DateTimeField()
    placement = models.CharField(max_length=64, null=True)

    def __str__(self):
        return '{} ({})'.format(self.name, self.placement)


class Project(AbstractActivity):
    name = models.CharField(max_length=64)
    title = models.CharField(max_length=255)
    description = models.TextField()
    events = models.ManyToManyField(Event, related_name='projects')


class Career(AbstractActivity):
    # TODO should I have a relation with projects?

    WORK = 'WRK'
    EDUCATION = 'EDU'
    CERTIFICATE = 'CRT'
    OTHER = 'OTH'
    TYPE_CHOICES = (
        (WORK, 'Work'),
        (EDUCATION, 'Education'),
        (CERTIFICATE, 'Certificate'),
        (OTHER, 'Other')
    )

    name = models.CharField(max_length=64)
    description = models.TextField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    type = models.CharField(max_length=3, choices=TYPE_CHOICES)


class PageHeader(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(max_length=65535)
    image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='page_header')

    def __str__(self):
        return self.title


class PageContent(models.Model):
    title = models.CharField(max_length=255)  # 256 Bytes
    content = models.TextField(max_length=65535)  # 64 Kilobytes
    display_order = models.IntegerField()
    images = GenericRelation(Image)
    documents = GenericRelation(Document)

    @property
    def media(self):
        return sorted(
            chain(self.images.get_queryset(), self.documents.get_queryset()),
            key=lambda media: media.date, reverse=False)

    def __str__(self):
        return self.title


class Page(models.Model):

    HOME = 'HOME'
    RESUME = 'RESUME'
    PROJECTS = 'PROJECTS'
    PAGE_NAME_CHOICES = (
        (HOME, 'Home'),
        (RESUME, 'Resume'),
        (PROJECTS, 'Projects')
    )

    page_name = models.CharField(max_length=10, choices=PAGE_NAME_CHOICES, null=True)
    header = models.ForeignKey(PageHeader, on_delete=models.CASCADE, related_name='page')
    content = models.ManyToManyField(PageContent, related_name='page')

    def __str__(self):
        return self.page_name

from itertools import chain

from django.contrib.contenttypes.fields import GenericRelation, GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.core.validators import FileExtensionValidator, validate_image_file_extension
from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=64)

    # Mandatory fields for generic relation
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, related_name='tags')
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return self.name


class AbstractMedia(models.Model):
    tags = GenericRelation(Tag)
    date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255, null=True)

    # Mandatory fields for generic relation
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()

    class Meta:
        abstract = True

    def __str__(self):
        return self.description


class Image(AbstractMedia):
    file = models.ImageField(upload_to='uploads/images',
                             max_length=255,
                             null=True,
                             validators=[validate_image_file_extension])


class Video(AbstractMedia):
    file = models.URLField(max_length=255,
                           null=False)


class Document(AbstractMedia):
    file = models.FileField(upload_to='uploads/documents',
                            max_length=255,
                            null=False,
                            validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


class AbstractActivity(models.Model):
    location = models.CharField(max_length=64)
    tags = GenericRelation(Tag)
    images = GenericRelation(Image)
    videos = GenericRelation(Video)
    documents = GenericRelation(Document)

    class Meta:
        abstract = True

    @property
    def media(self):
        return sorted(
            chain(self.images.get_queryset(), self.documents.get_queryset(), self.videos.get_queryset()),
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
    # TODO relation with projects. Not top priority.

    WORK = 'work'
    EDUCATION = 'education'
    CERTIFICATE = 'certificates'
    OTHER = 'other'
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
    type = models.CharField(max_length=12, choices=TYPE_CHOICES)

    def __str__(self):
        return '{} ({})'.format(self.name, self.type)


class Page(models.Model):

    HOME = 'HOME'
    RESUME = 'RESUME'
    PROJECTS = 'PROJECTS'
    PAGE_NAME_CHOICES = (
        (HOME, 'Home'),
        (RESUME, 'Resume'),
        (PROJECTS, 'Projects')
    )

    page_name = models.CharField(max_length=10,
                                 choices=PAGE_NAME_CHOICES,
                                 null=True)

    def __str__(self):
        return self.page_name


class PageHeader(models.Model):
    """
    TODO: Page header looks similar to page content in front.
    Maybe use title only in document title and remove field content
    along with positioning on top of page content in UI.
    """
    title = models.CharField(max_length=255)
    content = models.TextField(max_length=65535)
    image = GenericRelation(Image, on_delete=models.CASCADE)
    page = models.OneToOneField(Page,
                                on_delete=models.CASCADE,
                                related_name='header')

    def __str__(self):
        return self.title


class PageContent(models.Model):
    title = models.CharField(max_length=255)  # 256 Bytes
    content = models.TextField(max_length=65535)  # 64 Kilobytes
    display_order = models.IntegerField()
    images = GenericRelation(Image)
    documents = GenericRelation(Document)
    page = models.ForeignKey(Page,
                             on_delete=models.CASCADE,
                             related_name='content')

    @property
    def media(self):
        return sorted(
            chain(self.images.get_queryset(), self.documents.get_queryset()),
            key=lambda media: media.date, reverse=False)

    def __str__(self):
        return self.title

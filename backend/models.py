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


class Education(AbstractActivity):
    EDUCATION = 'EDU'
    CERTIFICATE = 'CRT'
    TYPE_CHOICES = (
        (EDUCATION, 'Education'),
        (CERTIFICATE, 'Certificate')
    )

    name = models.CharField(max_length=64, null=False, blank=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    period_start = models.DateField()
    period_end = models.DateField(null=True, blank=True)
    type = models.CharField(max_length=3, choices=TYPE_CHOICES, null=False, blank=False)  # TODO check choices


class Career(AbstractActivity):
    # TODO should I have a relation with projects?

    WORK = 'WORK'
    OTHER = 'OTHER'
    TYPE_CHOICES = (
        (WORK, 'Work'),
        (OTHER, 'Other')
    )

    name = models.CharField(max_length=64)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    type = models.CharField(max_length=3, choices=TYPE_CHOICES)

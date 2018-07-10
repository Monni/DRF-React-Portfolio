from django.shortcuts import render

# Create your views here.
from django.utils.functional import cached_property
from rest_framework import viewsets
from rest_framework.exceptions import ValidationError

from backend.models import Project, Event, Career, PageContent
from backend.serializers import ProjectSerializer, EventSerializer, CareerSerializer, PageContentSerializer


class ProjectViewset(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects
    #def get_queryset(self):
    #    if hasattr(self.kwargs, 'project_pk'):
    #        try:
    #            return Project.objects.get(pk=self.kwargs['project_pk'])
    #        except Project.DoesNotExist:
    #            raise ValidationError(detail='Project not found.')
    #    return Project.objects


class EventViewset(viewsets.ModelViewSet):
    queryset = Event.objects
    serializer_class = EventSerializer


class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects
    serializer_class = CareerSerializer


class PageContentViewSet(viewsets.ModelViewSet):
    serializer_class = PageContentSerializer

    def get_queryset(self):
        if self.kwargs.get('page_name'):
            return PageContent.objects.filter(page_name=self.kwargs['page_name'])
        return PageContent.objects

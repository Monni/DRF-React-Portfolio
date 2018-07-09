from django.shortcuts import render

# Create your views here.
from django.utils.functional import cached_property
from rest_framework import viewsets
from rest_framework.exceptions import ValidationError

from backend.models import Project, Event, Education, Career
from backend.serializers import ProjectSerializer, EventSerializer, EducationSerializer, CareerSerializer


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


class EducationViewset(viewsets.ModelViewSet):
    queryset = Education.objects
    serializer_class = EducationSerializer

class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects
    serializer_class = CareerSerializer

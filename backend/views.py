from rest_framework import viewsets

from backend.models import Project, Event, Career, Page, Image
from backend.serializers import ProjectSerializer, EventSerializer, CareerSerializer, PageSerializer, ImageSerializer


class ProjectViewset(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects


class EventViewset(viewsets.ModelViewSet):
    queryset = Event.objects
    serializer_class = EventSerializer


class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects
    serializer_class = CareerSerializer


class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects
    lookup_field = "page_name"
    serializer_class = PageSerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects
    serializer_class = ImageSerializer

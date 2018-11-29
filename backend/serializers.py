from collections import OrderedDict

from rest_framework_json_api import serializers
from rest_framework_json_api.utils import get_resource_type_from_instance

from backend.models import Project, Event, Career, Page, PageHeader, PageContent, Image


class MediaListingSerializer(serializers.ResourceRelatedField):
    def to_representation(self, value):
        if getattr(self, 'pk_field', None) is not None:
            pk = self.pk_field.to_representation(value.pk)
        else:
            pk = value.pk

        resource_type = self.get_resource_type_from_included_serializer()
        if resource_type is None or not self._skip_polymorphic_optimization:
            resource_type = get_resource_type_from_instance(value)

        return OrderedDict([('type', resource_type), ('id', str(pk)), ('file', value.file)])


class BaseModelSerializer(serializers.HyperlinkedModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    media = MediaListingSerializer(many=True, read_only=True)


class ProjectSerializer(BaseModelSerializer):
    events = serializers.HyperlinkedIdentityField(many=True, view_name='event-detail')

    class Meta:
        model = Project
        fields = '__all__'


class EventSerializer(BaseModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class CareerSerializer(BaseModelSerializer):
    class Meta:
        model = Career
        fields = '__all__'


class PageHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageHeader
        exclude = ('id',)

    image = serializers.HyperlinkedIdentityField(read_only=True,
                                                 view_name='image-detail')


class PageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageContent
        exclude = ('id',)

    media = MediaListingSerializer(many=True, read_only=True)


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        exclude = ('id',)

    header = PageHeaderSerializer(read_only=True)
    content = PageContentSerializer(read_only=True, many=True)


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

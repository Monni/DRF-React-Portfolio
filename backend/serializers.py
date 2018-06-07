from collections import OrderedDict

from rest_framework_json_api import serializers
from rest_framework_json_api.utils import get_resource_type_from_instance

from backend.models import Project, Education, Event


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


class EducationSerializer(BaseModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

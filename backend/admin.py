from django.contrib import admin

# Register your models here.
from backend.models import Project, Event, Document, Image, Tag, Career, PageContent, Page, PageHeader

admin.site.register(Project)
admin.site.register(Event)
admin.site.register(Document)
admin.site.register(Image)
admin.site.register(Tag)
admin.site.register(Career)
admin.site.register(Page)
admin.site.register(PageContent)
admin.site.register(PageHeader)

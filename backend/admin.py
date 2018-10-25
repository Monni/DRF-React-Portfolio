from django.contrib import admin

# Register your models here.
from backend.models import Project, Event, Document, Image, Tag, Career, PageContent, Page, PageHeader


class PageContextAdmin(admin.ModelAdmin):
    list_display = ['title', 'pages']

    @staticmethod
    def pages(page_header):
        """
        Show all pages where PageHeader is used in.
        """
        return ', '.join([page.page_name for page in page_header.page.all()])


admin.site.register(Project)
admin.site.register(Event)
admin.site.register(Document)
admin.site.register(Image)
admin.site.register(Tag)
admin.site.register(Career)
admin.site.register(Page)
admin.site.register(PageContent, PageContextAdmin)
admin.site.register(PageHeader, PageContextAdmin)

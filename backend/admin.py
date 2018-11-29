from django.contrib import admin

# Register your models here.
from nested_admin.nested import NestedGenericTabularInline, NestedModelAdmin, \
    NestedTabularInline

from backend.models import Project, Event, Document, Image, Tag, Career, PageContent, Page, PageHeader, Video


class PageContextAdmin(admin.ModelAdmin):
    list_display = ['title', 'pages']

    @staticmethod
    def pages(page_header):
        """
        TODO should this be a model class property? Would it be needed elsewhere?
        TODO rename page_header. Page content uses this as well.
        Show all pages where PageHeader is used in.
        """
        return ', '.join([page.page_name for page in page_header.page.all()])


class MediaAdmin(admin.ModelAdmin):
    list_display = ['file', 'description', 'tags']


class PageHeaderImageInline(NestedGenericTabularInline):
    model = Image
    max_num = 1


class PageHeaderInline(NestedTabularInline):
    model = PageHeader
    inlines = [PageHeaderImageInline]
    max_num = 1


class PageContentInline(NestedTabularInline):
    model = PageContent
    sortable_field_name = 'display_order'
    extra = 1


class PageAdmin(NestedModelAdmin):
    inlines = [
        PageHeaderInline,
        PageContentInline
    ]

admin.site.register(Project)
admin.site.register(Event)
admin.site.register(Document)
admin.site.register(Image)
admin.site.register(Video)
admin.site.register(Tag)
admin.site.register(Career)
admin.site.register(Page, PageAdmin)
admin.site.register(PageContent, PageContextAdmin)
admin.site.register(PageHeader, PageContextAdmin)

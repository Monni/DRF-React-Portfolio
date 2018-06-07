"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.routers import SimpleRouter

from backend.views import ProjectViewset, EventViewset, EducationViewset


class APIRouter(SimpleRouter):  # TODO move to another file
    def __init__(self):
        self.trailing_slash = '/?'
        super(SimpleRouter, self).__init__()


router = APIRouter()

router.register('projects', ProjectViewset)
#router.register('projects/(?P<project_pk>[0-9])/$', ProjectViewset, base_name='projects')

router.register('events', EventViewset)

router.register('education', EducationViewset)

urlpatterns = router.urls
urlpatterns += [
    path('admin/', admin.site.urls),

]

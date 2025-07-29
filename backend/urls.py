from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from portfolio.views import ExperienceViewSet, ProjectViewSet

router = routers.DefaultRouter()
router.register(r'experience', ExperienceViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]


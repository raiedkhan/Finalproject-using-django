from django.conf.urls import include, url
from django.contrib import admin
from django.urls import include, path
from project import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    url(r'^home/$',views.home,name="home"),
    path(r'^admin/', admin.site.urls),
    url(r'^signup/$',views.signup,name="signup"),
    url(r'^clickbutton/$',views.clickbutton,name="clickbutton"),
    url(r'^tictac/$',views.tictac,name="tictac"),    
    url(r'^imagegallery/$',views.imagegallery,name="imagegallery"),    
    url(r'^videogallery/$',views.videogallery,name="videogallery"),    
    url(r'^signtube/$',views.signtube,name="signtube"),
]

urlpatterns+=staticfiles_urlpatterns();
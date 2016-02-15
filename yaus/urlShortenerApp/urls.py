# coding:utf8
from django.conf.urls import patterns, url
from urlShortenerApp import views

urlpatterns = patterns('',
                       url(r'^$', views.index, name='index'),
                       )

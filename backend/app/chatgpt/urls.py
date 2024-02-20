from django.urls import path
from chatgpt.views import ChatView, UserView, AuthView, VerifyUser

urlpatterns = [
    path('chat/', ChatView.as_view(), name="chat"),
    path('users/', UserView.as_view(), name="users"),
    path('verify-user/', VerifyUser.as_view(), name="users"),
    path('auth/', AuthView.as_view(), name="auth"),
]
from rest_framework import views, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from chatgpt.serializers import ChatSerializer, UserSerializer, AuthSerializer
from chatgpt.models import ChatHistory


class ChatView(views.APIView):
    serializer_class = ChatSerializer
    authentication_classes = [TokenAuthentication]
    def get(self, request, format=None):
        qs = ChatHistory.objects.all()
        serializer = self.serializer_class(qs, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        username = request.user.username
        post_data = request.data
        post_data['username'] = username
        serializer = self.serializer_class(data=post_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserView(views.APIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyUser(views.APIView):
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]

    def post(self, request, format=None):
        username = request.user
        qs = User.objects.filter(username=username)
        serializer = self.serializer_class(qs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class AuthView(ObtainAuthToken):
    serializer_class = AuthSerializer
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .serializers import *

# Create your views here.

@api_view(['GET'])
def get_info(request):
    if request.method == 'GET':
        social = Social.objects.all()
        link = Link.objects.all()
        event = Event.objects.all()
        serializer = SocialSerializer(social, many=True)
        serializer2 = LinkSerializer(link, many=True)
        serializer3 = EventSerializer(event, many=True)
        return JsonResponse({'Social': serializer.data, 'Links': serializer2.data, 'Events': serializer3.data})
    else:
        return JsonResponse({'message': 'Method not allowed'})
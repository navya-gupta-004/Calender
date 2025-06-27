from rest_framework import serializers
from .models import * 

#naam isliye likhe kyuki frontend javascript library me ye name mention h aur source ka name Database ke name jaise hai

class AppointmentSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')
    start = serializers.DateField(source='start_date')
    end = serializers.DateField(source='end_date')
    classNames = serializers.CharField(source='status')

    class Meta: 
        model = Appointments
        fields = ('id','start','classNames', 'end','title')

# from rest_framework import serializers
# from .models import Appointments

# class AppointmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Appointments
#         fields = ['id', 'name', 'start_date', 'end_date']

    

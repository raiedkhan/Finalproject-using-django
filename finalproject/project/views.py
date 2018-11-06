from django.shortcuts import render

def home(request):
	return render(request,'files/index.html')
def signup(request):
	return render(request,'files/signup.html')
def clickbutton(request):
	return render(request,'files/clickbutton.html')	
def tictac(request):
	return render(request,'files/tictac.html')	
def imagegallery(request):
	return render(request,'files/gallery.html')
def videogallery(request):
	return render(request,'files/mytube.html')
def signtube(request):
	return render(request,'files/signtube.html')
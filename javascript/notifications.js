Notification.requestPermission(); 

        var data = { 
    Name: "Malvern Prime News Notification ",
    NewEP: "A New Episode is now available ", 
    newjob: "A New Job offer has opended ", 
    webLocation: "https://www.malvernprimenews.cf" 
} 

var e = new Notification(data.Name, {
     body: data.NewEP,
     icon: "https://www.bobstewart.com.au/media/20889/malvern.jpg", 
    }); 
    
    e.onclick = function() { location.href = data.webLocation }
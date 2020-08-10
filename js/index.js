var app= {
    
    
    capture:function() {
    navigator.camera.getPicture(onSucess, onFail, {
quality:50,
         destination Type:Camera.destinationType.DATA_URL,
        salvarToPhotoAlbum:true,
        cameraDirection:Camera.Direction.FRONT,
        targetheigth:1000,
        targetwhidth:1000,
    });
        function onSucess(imageDATA)
        var image=Document.getElementyByID('minhaimagem');
        image.sty.display="block";
        image.src="data.image/jpeg,base64," + imagedata;
    }
    
    function onfail(message) {
    alert('failed because:' + message);
    
}

}

};
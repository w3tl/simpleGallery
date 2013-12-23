simpleGallery is a Responsive jQuery &amp; CSS3 image gallery

#### [Click here to see the demo](http://w3tl.github.io/simpleGallery/)

## How to install:


1. Download simpleGallery 

2. Included jQuery library (example):
	
	```html
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	```

3. Insert the following code before end of ```</head>``` tag:
	
	```html
	<!-- simpleGallery CSS file -->
    <link rel="stylesheet" href="path/to/simpleGallery.css">
	<!-- simpleGallery js file -->
	<script type="text/javascript" src="path/to/jquery.simpleGallery.js"></script>
	```

4. Insert the following code after the ```<body>``` tag:

	```html
	<section class="gallery">
            <img src="img/1.jpg" data-full="img/1.jpg" alt="img1"/>
            <img src="img/2.jpg" data-full="img/2.jpg" alt="img2"/>
            <img src="img/3.jpg" data-full="img/3.jpg" alt="img3"/>
            <img src="img/4.jpg" data-full="img/4.jpg" alt="img4"/>
     </section>
	```
	where **data-full** - *path to original image*
5. Now you need to call the plugin with your gallery ID-attribute (#gallery).

    ```javascript
    $(document).ready(function(){
        $('.gallery').gallery();
    });
    ```

 ### Done!

License
------

This project is licensed under the [MIT license](http://opensource.org/licenses/MIT).


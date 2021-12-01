# Lab 9

We talked about the steps that we could possibly take to deploy a website. I want you to think about the combination of those things that you would consider if you had to deploy your website. This is a good thinking exercise to do because you gain insight to what all of the different steps entail and are responsible for. Write out what parts you would use below and describe why. It doesn't have to be the most detailed but personally what would you want to do? (I'm not looking for perfect but it should be a working configuration. Assuming all of the website code is done. I don't need to hear about that unless its for the certificate or web server).

<!-- Answer Down Here -->
to begin with, you need to start by installing all terminal based mods to run your website and continuoisly update it thrugh terminal, this would inclue node, express, init, and other possible installments (like mongoose if you were to connect to a database).
To layout, you are going to need 3 folders that are commonly named, routes, and views, with a app.js file outside of all now 
existing files. 

Routes:
- we will have a file that connects to express 
- A file that routes to one of our ejs files. (can have multiple if mutiple pages need to be gotten to)

Views:
- We will have a partials folder(can be named whatever), which which contain ejs on headers, footers, bodies and all that jazz
- Next we will commonly have an a file that is being routed to from routes. This is were we make the link to connect and
anything else we wantto be on this page to make it pretty

App.js:
- This is the file that will contain all links and make the use and listen to connect our website to a localhost online.


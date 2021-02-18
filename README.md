# Apprentissage Machine et Traitement de langage naturelle arabe  
## how to start the application  
start the server with strawberry 
```
$ cd server
$ strawberry server App
```
start the web client with react

```
$ cd client
$ npm start
```

## install dependencies and packages  
in the server 
```
$ cd server
$ pip install strawberry-graphql  
$ pip install uvicorn  
$ pip install beautifulsoup4  
$ pip install requests  
$ pip install nltk
$ pip install pandas  
$ pip install sklearn  
```

in the web client  
```
$ cd client
$ npm install
```
  
## Use  
this application has one page with three section :   
* Scrapping  
* NLP   
* Sentiment Analysis & FakeNews Detect (Covid-19)  
  
### Scrapping  
 enter a url and click the scrapp button  
some exemples :  
![scraping-img](/images/arabicScraping.png)
   
![scraping-img](/images/englishScrapping.png)  
  
### NLP 
you can enter a test arabic or english and use the differents services like : tokenization, stemmin, lemitizing ...  
 
exemples :  
  
![scraping-img](/images/arabicSteming.png)  
  
![scraping-img](/images/englishSteming.png)  
  
### Sentiment analysis & Fakeews Detect about Covid-19  
you can enter texts and have a result  laki the following :  
  
![scraping-img](/images/sentimentAndFakeNews.png) 

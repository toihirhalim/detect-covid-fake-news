from nltk.sentiment import SentimentIntensityAnalyzer

sia = SentimentIntensityAnalyzer()


def get_sentiment(text):
    return sia.polarity_scores(text)
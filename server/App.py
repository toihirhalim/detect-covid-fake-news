import strawberry
from Scrapping import get_text
from Tokenize import tokenize_by_words, tokenize_by_sentences
from StopWords import remove_stop_words_and_numerics
from typing import List


@strawberry.type
class Query:
    @strawberry.field
    def scrapping(self, url: str) -> str:
        return get_text(url)

    @strawberry.field
    def tokenize(self, text: str,language: str = "arabic", words: bool = True , stop_words: bool = True) -> List[str]:
        if words:
            tokens = tokenize_by_words(text)
            if stop_words:
                return remove_stop_words_and_numerics(tokens, language)
            return tokens

        return tokenize_by_sentences(text)


schema = strawberry.Schema(query=Query)
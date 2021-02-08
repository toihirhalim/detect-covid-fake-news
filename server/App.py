import strawberry
from Scrapping import get_text
from Tokenize import tokenize_by_words, tokenize_by_sentences
from typing import List


@strawberry.type
class Query:
    @strawberry.field
    def scrapping(self, url: str) -> str:
        return get_text(url)

    @strawberry.field
    def tokenize(self, text: str, words: bool = True ) -> List[str]:
        if words:
            return tokenize_by_words(text)

        return tokenize_by_sentences(text)


schema = strawberry.Schema(query=Query)
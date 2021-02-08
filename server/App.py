import strawberry
from Scrapping import get_text


@strawberry.type
class Query:
    @strawberry.field
    def scrapping(self, url: str) -> str:
        return get_text(url)


schema = strawberry.Schema(query=Query)
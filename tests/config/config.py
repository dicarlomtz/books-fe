import json


class TestData:
    BASE_URL = 'http://127.0.0.1:5173'

    """Register Page"""
    NAME = 'Test Test'
    USERNAME = 'tests'
    EMAIL = 'test@test.com'
    PASSWORD = 'Tests_123'

    """Books Page"""
    BOOK_SEARCH_TITLE = 'Harry Potter'
    BOOK_SEARCH_AUTHOR = 'Rowling'
    BOOK_SEARCH_PUBLISHED_YEAR = 2015

    """Create Book Page"""
    TITLE = "Harry Potter and the Philosopher's Stone"
    DESCRIPTION = 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at ' \
                  'Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting ' \
                  'him.'
    URL = 'https://www.amazon.com/ROWLING-J-K/dp/1408845644/'
    PUBLISHED_YEAR = 2015
    AVAILABLE = True
    COVER_IMAGE = None
    AUTHORS = ['J. K. Rowling']
    CO_AUTHORS = []

    """Update Book Page"""
    UPDATE_COVER_IMAGE = 'https://images-na.ssl-images-amazon.com/images/I/51MnBaafASL._SX423_BO1,204,203,200_.jpg'
    MODIFY_AVAILABLE = True


def store_book_id(book_url):
    json_book = {
        'book_id': book_url.split('/')[-1]
    }

    with open('test_book.json', 'w') as file_object:
        json.dump(json_book, file_object)


def get_book_id():
    file = open('test_book.json')
    data = json.load(file)

    return data['book_id']

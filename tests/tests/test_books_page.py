from config.config import TestData
from pages.books_page import BooksPage
from tests.test_base import BaseTest


class TestBooksPage(BaseTest):

    def test_create_link_visible(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_create_link_redirecting_correctly() == f'{TestData.BASE_URL}/books/create'

    def test_home_link_working(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_home_link_redirecting_correctly() == f'{TestData.BASE_URL}/'

    def test_books_visible(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.are_books_visible()

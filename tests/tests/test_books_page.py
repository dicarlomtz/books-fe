from pytest import mark

from config.config import TestData
from pages.books_page import BooksPage
from tests.test_base import BaseTest


@mark.run(order=3)
class TestBooksPage(BaseTest):

    def test_do_login(self):
        self.books_page = BooksPage(self.driver)
        self.books_page.do_login(TestData.EMAIL, TestData.PASSWORD)

    def test_create_link_redirecting_correctly(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_create_link_redirecting_correctly() == f'{TestData.BASE_URL}/books/create'

    def test_search_bar_visibility(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_pagination_visible()

    def test_books_grid_visibility(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.are_books_visible()

    def test_pagination_nav_visibility(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_pagination_visible()

    def test_do_search_book_by_title(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.do_search_book_by_title(TestData.BOOK_SEARCH_TITLE)

    @mark.skip
    def test_do_search_book_by_author(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.do_search_book_by_author(TestData.BOOK_SEARCH_AUTHOR)

    @mark.skip
    def test_do_search_book_by_published_year(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.do_search_book_by_published_year(TestData.BOOK_SEARCH_PUBLISHED_YEAR)

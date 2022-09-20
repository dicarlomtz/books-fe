from config.config import TestData
from pages.books_page import BooksPage
from tests.test_base import BaseTest


class TestBasePage(BaseTest):

    def test_books_page_title(self):
        self.books_page = BooksPage(self.driver)
        title = self.books_page.get_title(TestData.BOOKS_PAGE_TITLE)
        assert title == TestData.BOOKS_PAGE_TITLE

    def test_home_link_visible(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_home_link_visible()

    def test_news_link_visible(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_news_link_visible()

    def test_contact_link_visible(self):
        self.books_page = BooksPage(self.driver)
        assert self.books_page.is_contact_link_visible()

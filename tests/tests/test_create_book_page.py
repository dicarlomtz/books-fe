from pytest import mark

from config.config import TestData
from pages.create_book_page import CreateBookPage
from tests.test_base import BaseTest


@mark.run(order=1)
class TestCreateBooksPage(BaseTest):

    def test_create_book(self):
        self.create_book_page = CreateBookPage(self.driver)
        assert self.create_book_page.do_create_book(
            TestData.TITLE,
            TestData.DESCRIPTION,
            TestData.URL,
            TestData.PUBLISHED_YEAR,
            TestData.AVAILABLE,
            TestData.COVER_IMAGE,
            TestData.AUTHORS,
            TestData.CO_AUTHORS
        ) == f'{TestData.BASE_URL}/'

    def test_home_link_redirecting_correctly(self):
        self.create_book_page = CreateBookPage(self.driver)
        assert self.create_book_page.is_home_link_redirecting_correctly() == f'{TestData.BASE_URL}/'

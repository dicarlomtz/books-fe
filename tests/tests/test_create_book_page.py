from config.config import TestData
from pages.create_book_page import CreateBookPage
from tests.test_base import BaseTest


class TestCreateBooksPage(BaseTest):

    def test_create_book(self):
        self.create_book_page = CreateBookPage(self.driver)
        self.create_book_page.do_create_book(
            TestData.TITLE,
            TestData.DESCRIPTION,
            TestData.URL,
            TestData.PUBLISHED_YEAR,
            TestData.AVAILABLE,
            TestData.COVER_IMAGE,
            TestData.AUTHORS,
            TestData.CO_AUTHORS
        )

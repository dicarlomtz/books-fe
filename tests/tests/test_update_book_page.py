from pytest import mark

from config.config import TestData
from pages.update_book_page import UpdateBookPage
from tests.test_base import BaseTest


@mark.run(order=3)
class TestUpdateBookPage(BaseTest):

    def test_update_book(self):
        self.update_book_page = UpdateBookPage(self.driver)
        assert self.update_book_page.do_update_book(
            TestData.UPDATE_COVER_IMAGE,
            TestData.MODIFY_AVAILABLE
        ) == f'{TestData.BASE_URL}/'

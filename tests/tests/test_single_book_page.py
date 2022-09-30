from pytest import mark

from config.config import TestData, get_book_id
from pages.single_book_page import SingleBookPage
from tests.test_base import BaseTest


@mark.run(order=4)
class TestSingleBookPage(BaseTest):

    def test_edit_button_redirecting_correctly(self):
        self.single_book_page = SingleBookPage(self.driver)
        assert self.single_book_page.is_edit_button_redirecting_correctly() == f'{TestData.BASE_URL}/books/update/{get_book_id()}'

    def test_delete_book(self):
        self.single_book_page = SingleBookPage(self.driver)
        assert self.single_book_page.do_delete_book() == f'{TestData.BASE_URL}/'

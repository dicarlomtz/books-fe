from pytest import mark

from config.config import TestData
from pages.register_page import RegisterPage
from tests.test_base import BaseTest


@mark.run(order=1)
class TestRegisterPage(BaseTest):

    def test_register(self):
        self.register_page = RegisterPage(self.driver)
        self.register_page.do_register(
            TestData.NAME,
            TestData.USERNAME,
            TestData.EMAIL,
            TestData.PASSWORD
        )

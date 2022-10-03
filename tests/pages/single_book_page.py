import time

from selenium.webdriver.common.by import By

from config.config import TestData, get_book_id
from pages.base_page import BasePage


class SingleBookPage(BasePage):
    """By locators"""
    EMAIL = By.ID, 'email'
    PASSWORD = By.ID, 'password'
    LOGIN_BUTTON = By.XPATH, "//button[@type='submit']"
    EDIT_BUTTON = By.XPATH, "//a[contains(@class, 'MuiButton-containedSuccess')]"
    DELETE_BUTTON = By.XPATH, "//button[contains(@class, 'MuiButton-containedError')]"
    CONFIRMATION_BUTTON = By.XPATH, "//button[contains(. ,'Yes, delete it!')]"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/books/view/{get_book_id()}')

    def do_login(self, email, password):
        self.do_send_keys(self.EMAIL, email)
        self.do_send_keys(self.PASSWORD, password)

        self.do_click(self.LOGIN_BUTTON)
        time.sleep(0.5)

    def is_edit_button_redirecting_correctly(self):
        self.do_click(self.EDIT_BUTTON)
        return self.get_current_url()

    def do_delete_book(self):
        self.do_click(self.DELETE_BUTTON)
        time.sleep(0.5)

        self.do_click(self.CONFIRMATION_BUTTON)
        time.sleep(0.5)

        return self.get_current_url()

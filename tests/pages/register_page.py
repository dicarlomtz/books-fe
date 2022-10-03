import time

from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class RegisterPage(BasePage):
    """By locators"""
    NAME = By.ID, 'name'
    USERNAME = By.ID, 'username'
    EMAIL = By.ID, 'email'
    PASSWORD = By.ID, 'password'
    REGISTER_BUTTON = By.XPATH, "//button[@type='submit']"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/auth/register')

    def do_register(self, name, username, email, password):
        self.do_send_keys(self.NAME, name)
        self.do_send_keys(self.USERNAME, username)
        self.do_send_keys(self.EMAIL, email)
        self.do_send_keys(self.PASSWORD, password)

        self.do_click(self.REGISTER_BUTTON)

        time.sleep(0.5)
        return True

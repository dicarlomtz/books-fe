import time

from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class LoginPage(BasePage):
    """By locators"""
    EMAIL = By.ID, 'email'
    PASSWORD = By.ID, 'password'
    LOGIN_BUTTON = By.XPATH, "//button[@type='submit']"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/auth/login')

    def do_login(self, email, password):
        self.do_send_keys(self.EMAIL, email)
        self.do_send_keys(self.PASSWORD, password)

        self.do_click(self.LOGIN_BUTTON)
        time.sleep(0.5)

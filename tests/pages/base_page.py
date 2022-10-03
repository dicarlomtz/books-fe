import time

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec


class BasePage:
    """This class contains all the generic methods and utilities for all the pages"""

    def __init__(self, driver):
        self.driver = driver

    def do_click(self, by_locator):
        WebDriverWait(self.driver, 10).until(ec.visibility_of_element_located(by_locator)).click()

    def do_send_keys(self, by_locator, value):
        WebDriverWait(self.driver, 10).until(ec.visibility_of_element_located(by_locator)).send_keys(value)

    def is_visible(self, by_locator):
        element = WebDriverWait(self.driver, 10).until(ec.visibility_of_element_located(by_locator))
        return bool(element)

    def get_element_by_locator(self, by_locator):
        element = WebDriverWait(self.driver, 10).until(ec.visibility_of_element_located(by_locator))
        return element

    def get_all_elements_by_locator(self, by_locator):
        elements = WebDriverWait(self.driver, 10).until(ec.visibility_of_all_elements_located(by_locator))
        return elements

    def get_current_url(self):
        return self.driver.current_url

    def do_login(self, by_locator_email, by_locator_password, by_locator_button, email, password):
        self.do_send_keys(by_locator_email, email)
        self.do_send_keys(by_locator_password, password)

        self.do_click(by_locator_button)
        time.sleep(0.5)

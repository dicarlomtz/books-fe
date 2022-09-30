import time

from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class UpdateBookPage(BasePage):
    """By locators"""
    COVER_IMAGE = By.ID, 'cover_image'
    SAVE_BOOK_BUTTON = By.XPATH, "//button[@type='submit']"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/books/update/{TestData.BOOK_ID}')

    def do_update_book(self, cover_image):
        self.do_send_keys(self.COVER_IMAGE, cover_image)
        self.do_click(self.SAVE_BOOK_BUTTON)

        time.sleep(0.5)
        return self.get_current_url()

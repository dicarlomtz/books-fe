from pytest import fixture
from selenium import webdriver


@fixture(params=['firefox'], scope='class')
def init_driver(request):
    web_driver = webdriver.Chrome() if request.param == 'chrome' else webdriver.Firefox('/home/dicarlomtz/Downloads/geckodriver-v0.31.0-linux64/geckodriver')
    request.cls.driver = web_driver
    yield
    web_driver.close()

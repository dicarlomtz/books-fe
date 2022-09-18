from pytest import fixture
from selenium import webdriver


@fixture(params=['chrome'], scope='class')
def init_driver(request):
    web_driver = webdriver.Chrome() if request.param == 'chrome' else webdriver.Firefox()
    request.cls.driver = web_driver
    yield
    web_driver.close()

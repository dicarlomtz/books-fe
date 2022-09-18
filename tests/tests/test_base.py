from pytest import mark


@mark.usefixtures('init_driver')
class BaseTest:
    pass

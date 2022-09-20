## Books App - Tests

Make sure you are in the directory ```cd book-fe/tests/```

Install the [chromedriver](https://chromedriver.chromium.org/downloads) and add it to your path. If you are using Firefox, change the params value to ```firefox``` in the ```tests/conftest.py``` file and install the proper web driver.

Also, you need to have installed Python and activate a virtual environment:

|          | Windows                | MacOS                     | Linux                     |
|----------|------------------------|---------------------------|---------------------------|
| Create   | py -3 -m venv .venv    | python3 -m venv .venv     | python3 -m venv .venv     |
| Activate | .venv\scripts\activate | source .venv/bin/activate | source .venv/bin/activate |

Then, install the requirements with ```pip3 install -r requirements.txt```

To run the tests, execute ```pytest tests``` 

#

<a href="#">
    <img align="left" width="30" src="https://github.com/devicons/devicon/blob/master/icons/selenium/selenium-original.svg" alt="Selenium">
    <img align="left" width="30" src="https://github.com/devicons/devicon/blob/master/icons/pytest/pytest-original.svg" alt="pytest">
</a>
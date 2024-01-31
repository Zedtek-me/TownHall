FROM python:3
WORKDIR /backend
COPY ./backend /backend
COPY ./backend/requirements.txt /backend/requirements.txt
RUN python -m pip install -r requirements.txt --default-timeout=100
ENTRYPOINT [ "python", "src/manage.py", "runserver", "9000" ]
FROM python:3
WORKDIR /backend
RUN apt-get update -y
COPY . /backend
COPY ./requirements.txt /backend/requirements.txt
RUN python -m pip install -r requirements.txt --default-timeout=100
ENTRYPOINT [ "python", "-m", "manage", "runserver", "9000" ]
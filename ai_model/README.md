to install required dependencies to :

1>   pip install flask
2>then to start the prediction service in terminal do 
     export FLASK_APP=run.py
  then run
     flask run

3>the server  will run on localhost:5000 and give json response for two urls
 localhost:5000/groundwater_level -> for groundwater_level prediction
 localhost:5000/water_usage  -> for water_extraction prediction


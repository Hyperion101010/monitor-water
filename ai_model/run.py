from flask import Flask
import pickle
from sklearn.externals import joblib
from sklearn.linear_model import LinearRegression
from flask import jsonify

app = Flask(__name__)

@app.route('/groundwater_level',defaults={"res":0})
@app.route('/groundwater_level')
def get_groundwater():
    current_year = 2019
    #regressor = LinearRegression()
    #joblib.dump(regressor,'GroundWaterLevel.pkl')
    data = list()
    model = joblib.load("groundwater3.pkl") #ml 3  model for groundwater level prediction
    count = 1
    while count <= 10:
        current_year+=1
        sample_data = dict()
        sample_data['name'] = current_year
        sample_data['value'] = model.predict(current_year)
        sample_data['value'] = sample_data['value'].item(0)
        if model==None :
            sample_data['value']=0 #year(2020-2031)}
        data.append(sample_data)
        count+=1
    return jsonify(data)

@app.route('/water_usage',defaults={"res":0})
@app.route('/water_usage')
def get_water():
    current_year = 2019
    data = list()
    model = joblib.load("extraction6.pkl") #ml model for water usage(extraction)
    count = 1
    while count <= 10:
        current_year+=1
        sample_data = dict()
        sample_data['name'] = current_year
        sample_data['value'] = model.predict(current_year)
        sample_data['value'] = sample_data['value'].item(0)
        if model==None :
            sample_data['value']=0 #year(2020-2031)}
        data.append(sample_data)
        count+=1
    return jsonify(data)

if __name__=="__main__":
    try:
        app.run(debug=True)
    except:
        print("exception occured ,check your input")


"""
 1>for groudwater_level :
    url = http://localhost:5000/groundwater_level
    #this returns a list of 10 times denoting the years of uwater level
data = [{"name":2020,"value":6.6136792452830235},{"name":2021,"value":6.672877358490567},{"name":2022,"value":6.732075471698124},{"name":2023,"value":6.791273584905667},{"name":2024,"value":6.8504716981132106},{"name":2025,"value":6.909669811320768},{"name":2026,"value":6.968867924528311},{"name":2027,"value":7.028066037735854},{"name":2028,"value":7.087264150943398},{"name":2029,"value":7.146462264150955}]

 2>for water_extraction :
    url : http://localhost:5000/water_usage
    #this retuens a list of 10 times denoting the year of usage
data = [{"name":2020,"value":20.596462264150944},{"name":2021,"value":20.568867924528305},{"name":2022,"value":20.54127358490566},{"name":2023,"value":20.513679245283022},{"name":2024,"value":20.486084905660377},{"name":2025,"value":20.45849056603774},{"name":2026,"value":20.430896226415094},{"name":2027,"value":20.403301886792455},{"name":2028,"value":20.37570754716981},{"name":2029,"value":20.348113207547172}]
        """
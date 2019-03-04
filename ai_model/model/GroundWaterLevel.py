# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import sklearn
import pickle


# Importing the dataset
dataset = pd.read_csv('5.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values

# Splitting the dataset into the Training set and Test set
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train,y_train)

y_pred = regressor.predict(X_test)

plt.scatter(X_train,y_train,color ='red')
plt.plot(X_train,regressor.predict(X_train), color = 'blue')
plt.title('training set')
plt.savefig('1.png')
plt.show()

plt.scatter(X_test,y_test,color='blue')
plt.plot(X_train,regressor.predict(X_train), color = 'red')
plt.title('test set')
plt.savefig('2.png')
plt.show()

filename = 'GroundWaterLevel.sav'
pickle.dump(regressor, open(filename, 'wb'))


# Monitor-Water: A website to analyse water usage.

##### An award-winning prototype demonstrated at [SIH](https://www.sih.gov.in/sih2019) to [Central Ground Water Authority](http://cgwa-noc.gov.in/LandingPage/index.html).


In India it is a tedious effort to collect and log water usage reports in offline/paper format. This project is a digital water usage logging and analysis system for central officers and scientists.


### Features
1. Map visualisations of water usage data per each City/State in India,
2. User alerting system to officers for water overuse.
3. Plotting of different parameters like water usage metrics, mode of extraction, water level per area and many more.
3. AI regression model to predict water usage trends for next 10 years.

### Setting up the site:
- This application needs AngularJS and NodeJs (npm) dependencies to be installed on the host PC to run. Check package.json for more context.

1. Open a terminal in your project directory and run.
    ```
    node server.js
    ```
    - This will setup your backend server.

2. In a new terminal in same directory run.

    ```
    ng serve
    ```
    - This will setup your frontend server.

3. Open [https://127.0.0.1:4200](https://127.0.0.1:4200) in your browser to run the application.

4. Login using credentials:
    - Username:admin
    - Password:admin123

5. Check report on water usage using a valid user id:
    - Valid Noc id: 8451651656


### Here is an overview of the tool:

#### Home page:
![Screenshot](/images/1.png)

#### Configureation page:
![Screenshot](/images/3.png)

#### Region wise monitoring page:
![Screenshot](/images/4.png)

#### Analysis page:
![Screenshot](/images/5.png)

#### Real-life implementation:
![Screenshot](/images/6.png)

If you have any issue open a PR, let me know!
Open Source code, open minded work.

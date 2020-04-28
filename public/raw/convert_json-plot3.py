import sys
import csv
import pandas as pd
import numpy as np

#covid_norm2 = pd.read_csv('covid_norm2.csv')
covid_norm2 = pd.read_csv('covid-normalizado-2020-04-26.csv', decimal=',')
covid_norm2['date'] = pd.to_datetime(covid_norm2['date'], errors='coerce', format='%d/%m/%Y')

sorted_dates = covid_norm2["date"].unique()
sorted_dates.sort()
countries = covid_norm2["country"].unique()

result = []

'''

{
    date: '01-01-2020', USA: '0', 
}



'''
for date in sorted_dates:
    this_date = covid_norm2.loc[covid_norm2["date"]==date]
    
    line = {"date": pd.to_datetime(date).strftime('%m/%d') }

    for country in countries:
        media3 = this_date.loc[this_date["country"]==country,"media3days"]
        if not media3.empty:
            country_media3 = float(list(media3)[0])
        else:
            continue
        #country_media3 = float(list(media3)[0]) if not media3.empty else continue
        line.update({ 
            country: country_media3
        })

    result.append(line)


print(result)
dataf = pd.DataFrame(result)
print(dataf)
pd.DataFrame.from_dict(result).to_json(r'covid_norm-plot3.json', indent=4, orient="records")
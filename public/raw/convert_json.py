import sys
import csv
import pandas as pd
import numpy as np

#covid_norm2 = pd.read_csv('covid_norm2.csv')
covid_norm2 = pd.read_csv('cumulativo-2020-06-01.csv')
covid_norm2['date'] = pd.to_datetime(covid_norm2['date'], errors='coerce', format='%d/%m/%Y')

sorted_dates = covid_norm2["date"].unique()
sorted_dates.sort()
countries = covid_norm2["code"].unique()

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
        cumulative = this_date.loc[this_date["code"]==country,"cumulative"]
        country_cumulative = int(cumulative) if not cumulative.empty else 0
        line.update({ 
            country: country_cumulative 
        })

    result.append(line)


print(result)
dataf = pd.DataFrame(result)
print(dataf)
pd.DataFrame.from_dict(result).to_json(r'covid_norm-06-01.json', indent=4, orient="records")



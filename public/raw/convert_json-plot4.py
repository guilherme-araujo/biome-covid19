import sys
import csv
import pandas as pd
import numpy as np

#covid_norm2 = pd.read_csv('covid_norm2.csv')
covid_norm2 = pd.read_csv('deaths-2020-05-19.csv')
covid_norm2['date'] = pd.to_datetime(covid_norm2['date'], errors='coerce', format='%d/%m/%Y')

sorted_cumulative = covid_norm2["total"].unique()
sorted_cumulative.sort()
countries = covid_norm2["Code"].unique()

result = []

'''

{
    date: '01-01-2020', USA: '0', 
}



'''
for cumulative in sorted_cumulative:
    this_cumulative = covid_norm2.loc[covid_norm2["total"]==cumulative]
    
    line = {"cumulative": cumulative}

    for country in countries:
        cumulative = this_cumulative.loc[this_cumulative["Code"]==country,"daily"].unique()
        country_cumulative = int(cumulative[0]) if not cumulative.size==0 else np.nan
        line.update({ 
            country: country_cumulative 
        })

    result.append(line)


print(result)
dataf = pd.DataFrame(result)
print(dataf)
pd.DataFrame.from_dict(result).to_json(r'covid_norm-plot4-05-19.json', indent=4, orient="records")
import sys
import csv
import pandas as pd
import numpy as np

#covid_norm2 = pd.read_csv('covid_norm2.csv')
covid_norm2 = pd.read_csv('cumulativo-2020-04-26.csv')
sorted_cumulative = covid_norm2["cumulative"].unique()
sorted_cumulative.sort()
countries = covid_norm2["code"].unique()

result = []

'''

{
    cases: '233', USA: '74', 
}



'''
for cumulative in sorted_cumulative:
    this_cumulative = covid_norm2.loc[covid_norm2["cumulative"]==cumulative]
    
    line = {"cumulative": cumulative}

    for country in countries:
        cumulative = this_cumulative.loc[this_cumulative["code"]==country,"confirmed"].unique()
        country_cumulative = int(cumulative[0]) if not cumulative.size==0 else np.nan
        line.update({ 
            country: country_cumulative 
        })

    result.append(line)


print(result)
dataf = pd.DataFrame(result)
print(dataf)
pd.DataFrame.from_dict(result).to_json(r'covid_norm-plot2.json', indent=4, orient="records")



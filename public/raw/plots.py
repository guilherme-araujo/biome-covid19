import seaborn as sns
import sys
import csv
from statistics import stdev
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib as mpl

covid_norm = pd.read_csv('covid-normalizado-2020-04-26.csv', decimal=',')
covid_norm2 = pd.read_csv('cumulativo-2020-04-26.csv')
covid_deaths = pd.read_csv('deaths-2020-04-26.csv')

covid_norm2['date'] = pd.to_datetime(covid_norm2['date'], errors='coerce', format='%d/%m/%Y')
covid_norm['date'] = pd.to_datetime(covid_norm['date'], errors='coerce', format='%d/%m/%Y')
#covid_deaths['total'] = np.log(covid_deaths['total'].astype(float))
#covid_deaths['daily'] = np.log(covid_deaths['daily'].astype(float))
covid_deaths['total'] = covid_deaths['total'].replace({0: np.nan})
covid_deaths['daily'] = covid_deaths['daily'].replace({0: np.nan})


#sns.set(style="ticks", rc={"lines.linewidth": 0.9})
version_str = '0426'


fig_dims = (6, 4)
fig, ax = plt.subplots(figsize=fig_dims)

'''
#-----FIGURA 1-----
g = sns.lineplot(data=covid_norm2, x="date", y="cumulative", hue="country")


box = g.get_position()
g.set_position([box.x0, box.y0, box.width * 0.8, box.height * 1.1])
g.legend(loc='center right', bbox_to_anchor=(1.5, 0.5), ncol=1)

#ax.xaxis.set_major_locator(mdates.AutoDateLocator(minticks=20))
ax.set_xlim(covid_norm2['date'].min(), covid_norm2['date'].max())
ax.xaxis.set_major_locator(mdates.WeekdayLocator(byweekday=6) )
ax.xaxis.set_major_formatter(mdates.DateFormatter('%m-%d'))
ax.yaxis.set_major_formatter(mpl.ticker.StrMethodFormatter('{x:,.0f}'))
ax.set(xlabel="Date", ylabel="Total Cases (cumulative)" )

#fig.autofmt_xdate()
plt.setp(ax.get_xticklabels(), rotation=30, horizontalalignment='right')

plt.savefig(version_str+"-01.png", dpi=200, bbox_inches = "tight")'''


#-----FIGURA 2-----
'''
g = sns.lineplot(data=covid_norm2, x="cumulative", y="confirmed", hue="country", estimator=None)
ax.set(xscale="log", yscale="log")
ax.set(xlabel="Total cases (log scale)", ylabel="New Cases (log scale)" )

box = g.get_position()
g.set_position([box.x0, box.y0, box.width * 0.9, box.height])
g.legend(loc='center right', bbox_to_anchor=(1.45, 0.5), ncol=1)

#plt.show()
plt.savefig(version_str+"-02.png", dpi=200, bbox_inches = "tight")'''

'''
#-----FIGURA 3-----
fig, ax = plt.subplots()

covid_norm = covid_norm.dropna(thresh=1)
covid_norm['date'] = covid_norm['date'].map(lambda x: x.strftime('%m-%d'))
#covid_norm['media3days'] = covid_norm['media3days'].fillna(0)


def plot(x, y, data=None, label=None, **kwargs):    
    sns.lineplot(x, y, data=data, label=label, **kwargs)

#g = sns.lineplot(data=covid_norm, x="date", y="media3days", hue="Country", estimator=None)
g = sns.FacetGrid(covid_norm, col="country", col_wrap=3, sharex=False, sharey=False, hue="country")
#g = g.map(plt.plot, "date", "media3days")
g.map_dataframe(plot, 'date', 'media3days')

g.set_axis_labels('', '') 
g.set_titles('{col_name}')
#g.set(xlim=(covid_norm["date"].min(),covid_norm["date"].max() ))

for ax in g.axes.flatten():
    ax.tick_params(labelbottom=True)
    #ax.set(xlabel="Date", ylabel="Cases per 100 tests (average of three days)" )

# overall ylabel
g.fig.text(x=0.01, y=0.5, 
           verticalalignment='center', #make sure it's aligned at center vertically
           s='Cases per 100 tests (average of three days)', #this is the text in the ylabel
           size=12, #customize the fontsize if you will
           rotation=90) #vertical text

#overall xlabel
g.fig.text(x=0.5, y=0.01, 
           horizontalalignment='center', #make sure it's aligned at center horizontally
           s='Date', #this is the text in the xlabel
           size=12)

for ax in g.axes.flat:

    labels = ax.get_xticklabels()
    for i,l in enumerate(labels):
        if (i%3 != 0 ): labels[i] = ''
        ax.set_xticklabels(labels, rotation=90)

g.fig.tight_layout()

plt.subplots_adjust(left=0.075, right=1.0, top=1.0, bottom=0.13)
#ax.xaxis.set_major_locator(mdates.WeekdayLocator(byweekday=4) )
#ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))

#plt.show()

plt.savefig(version_str+"-03.png", dpi=200, bbox_inches = "tight")'''


# -----FIGURA 4------
#fig, ax = plt.subplots()

def plot(x, y, data=None, label=None, **kwargs):    
    g = sns.scatterplot(x, y, data=data, label=label, **kwargs)
    g.set(xscale='log')
    g.set(yscale='log')


g = sns.FacetGrid(covid_deaths, col="country", col_wrap=3, sharex=False, sharey=False, hue="country")

#g.set(yscale='log', xscale='log')
#g = g.map(plt.scatter, "total", "daily")
g.map_dataframe(plot, 'total', 'daily')



g.set_axis_labels('', '') 
g.set_titles('{col_name}')
#g.set(xlim=(covid_norm["date"].min(),covid_norm["date"].max() ))

for ax in g.axes.flatten():
    ax.tick_params(labelbottom=True)
    #ax.set(xlabel="Date", ylabel="Cases per 100 tests (average of three days)" )

# overall ylabel
g.fig.text(x=0.01, y=0.5, 
           verticalalignment='center', #make sure it's aligned at center vertically
           s='New Deaths (log scale)', #this is the text in the ylabel
           size=12, #customize the fontsize if you will
           rotation=90) #vertical text

#overall xlabel
g.fig.text(x=0.5, y=0.01, 
           horizontalalignment='center', #make sure it's aligned at center horizontally
           s='Total Deaths (log scale)', #this is the text in the xlabel
           size=12)

#g.fig.tight_layout()

#ax.set(xscale="log", yscale="log")

#plt.show()
plt.savefig(version_str+"-04.png", dpi=200, bbox_inches = "tight")
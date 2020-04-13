#### Covid-19 #####

# US data: https://covidtracking.com/us-daily/
# Others: https://ourworldindata.org/covid-testing


# install.packages("tidyverse", dependencies = TRUE)
# install.packages("readxl")
library(tidyverse)
theme_set(theme_bw())
library(lubridate)
library(readxl)
library(scales)


## 1. importing data -----------
covid_norm <- read_excel("COVID-normalizado_ed.xlsx")
str(covid_norm)

covid_norm2 <- read_excel("fig-1-2-2.xlsx")
str(covid_norm2)

# filter countries
covid_deaths <-  read_excel("fig-4.xlsx")
str(covid_deaths)


# 2. graph cumulative/date --------------
ggplot(covid_norm2, aes(date, cumulative, color = country)) +
  geom_line() +
  labs(title = "Cases Covid-19 by date, March 2020",
       x = "Date",
       y = "Total Cases (cumulative)",
       color = "Country") +
  scale_color_viridis_d() +
  scale_y_continuous(labels = comma)


# 3. graph cases/cumulative ----------
ggplot(covid_norm2, aes(cumulative, confirmed, color = country)) +
  geom_line() +
  scale_x_log10(labels = comma) +
  scale_y_log10(labels = comma) +
  labs(title = "Cases Covid-19 by total cases, March 2020",
       x = "Total Cases (cumulative, log10)",
       y = " New Cases",  
       color = "Country") +
  scale_color_viridis_d()


# 4. graph new cases ---------------------------
ggplot(covid_norm, aes(date, media3days, color = country)) +
  geom_line() +
  scale_y_continuous(labels = comma) +
  labs(title = "Normalized Cases Covid-19 by date, March 2020",
       y = "Cases / 100 tests") +
  facet_wrap(~country, scales = "free") +
  theme(axis.text.x = element_text(angle = 90, hjust = 1),
        legend.position = "none") +
  scale_color_viridis_d()


# 5. graph deaths ----------------
ggplot(covid_deaths, aes(total, daily, color=country)) +
  geom_point() +
  scale_x_log10(labels = comma) +
  scale_y_log10(labels = comma) +
  labs(title = "Deaths Covid-19  by total deaths, March 2020",
       x = "Total Deaths (cumulative, log10)", 
       y = "New Deaths (log scale)") +
  facet_wrap(~ country, scales = "free") +
  theme(axis.text.x = element_text(angle = 90, hjust = 1),
        legend.position = "none") +
  scale_color_viridis_d()


## end


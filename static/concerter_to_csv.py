import pandas as pd


tabela_chavetas = pd.read_excel('DATACSV.xlsx')


tabela_chavetas.to_csv('chavetas.csv',index=None,header= True)

tabela_chavetas = pd.read_csv('chavetas.csv',encoding="utf-8")
print(tabela_chavetas)
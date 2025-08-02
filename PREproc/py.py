import pandas as pd
import matplotlib.pyplot as plt
import json

# Данные
data = {
    'Месяц': ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    'Продажи': [150, 200, 250, 220, 300, 280]
}

df = pd.DataFrame(data)

# Сохраняем таблицу в JSON
df.to_json('./front/public/data.json', orient='records', force_ascii=False)

# Строим график
plt.figure(figsize=(8, 5))
plt.plot(df['Месяц'], df['Продажи'], marker='o', linestyle='-', color='skyblue')
plt.title('Продажи по месяцам')
plt.xlabel('Месяц')
plt.ylabel('Продажи (тыс. руб.)')
plt.grid(True)
plt.tight_layout()
plt.savefig('./front/public/plot.png')
plt.close()

# Ranking norm calculator

## Opis projektu 
Aplikacja SPA do liczenia norm potrzebnych do zdobycia  kategorii szachowych ustanowionych przez Polski Związek Szachowy.

## Wykorzystane narzędzia
- framework picoCSS
- biblioteka ReactJs

## Wzory:
Wzory które są wykorzystywane do obliczania norm:

$ R_s = \frac{n}{n+1} \sum_{i=1}^{n+1}{R_i} $ 
- $R_s$ - średni ranking turnieju dla zawodnika
- n - liczba przeciwników ocenianego zawodnika 
- $R_i$ - suma rankingów zawodnika i jego przeciwników 

$ R_u = R_s + \Delta R$
- $R_u$ - ranking uzyskany 
- $\Delta R$ - progress 

$ \Delta R = \frac{400}{n + 1} * (W - L) $
- n - liczba przeciwników 
- W - suma wygranych gier w zawodach
- L - suma przegranych gier w zawodach   

### Wzór który jest podany ale nie wystarczająco jasno opisany jak korzystać. 
$ N = \frac{n}{2} + \frac{n+1}{800} * (R_{min} - R_s) $
- N - obliczona punktowa norma klasyfikacyjna
- $R_{min}$ - rankingowa norma klasyfikacyjna
- $R_s$ - średni ranking turnieju


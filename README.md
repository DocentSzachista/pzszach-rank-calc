# Ranking norm calculator

## Opis projektu 
Aplikacja SPA zezwalająca na:
- liczenie norm potrzebnych do zdobycia  kategorii szachowych ustanowionych przez Polski Związek Szachowy.
- liczenie zmian rankingu FIDE 

## Wykorzystane narzędzia
- framework picoCSS
- biblioteka ReactJs

## Wzory:
### PzSzach
Wzory które są wykorzystywane do obliczania norm:

$R_s =\frac{n}{n+1} \sum_{i=1}{R_i}$ Gdzie i $\in <1; n+1>$

- $R_s$ - średni ranking turnieju dla zawodnika
- n - liczba przeciwników ocenianego zawodnika 
- $R_i$ - suma rankingów zawodnika i jego przeciwników 

$R_u = R_s + \Delta R$
- $R_u$ - ranking uzyskany 
- $\Delta R$ - progress 

$\Delta R = \frac{400}{n + 1} * (W - L)$
- n - liczba przeciwników 
- W - suma wygranych gier w zawodach
- L - suma przegranych gier w zawodach   

### Wzór który jest podany ale nie wystarczająco jasno opisany jak korzystać. 
$N = \frac{n}{2} + \frac{n+1}{800} * (R_{min} - R_s)$
- N - obliczona punktowa norma klasyfikacyjna
- $R_{min}$ - rankingowa norma klasyfikacyjna
- $R_s$ - średni ranking turnieju
### FIDE
$E_A=\frac{1}{1+10^\frac{R_O - R_P}{400}}$
- $E_A$ - spodziewany wynik 
- $R_O$ - ranking przeciwnika
- $R_P$ - ranking gracza

$R_C=R_P + K*(S - E_A)$
- $R_C$ - zmiana rankingu
- K - współczynnik statystyczny, można go sprawdzić na stronie FIDE bądź na serwisie turniejowym
- S - Wynik spotkania


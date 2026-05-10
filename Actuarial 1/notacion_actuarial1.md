# Notación Actuarial 1 — Convención Argentina

## Argumentos: punto y coma vs coma

- `E(x; t)` → argumentos separados por **punto y coma**: `x` es edad, `t` es **plazo**
- `E(x, y)` → argumentos separados por **coma**: ambos son **edades**
- Son formas equivalentes: `E(x; t) = E(x, x+t)`

---

## Factor de Actualización Actuarial (F.A.A.)

| Notación | Descripción |
|---|---|
| `E(x; t)` | Valor actual actuarial de $1 pagadero al asegurado de edad `x` al cabo de `t` años, condicionado a supervivencia |
| `E(x, x+t)` | Forma equivalente con edades |

**Fórmulas:**

$$E(x;t) = v^t \cdot p(x;t) = \frac{l(x+t)}{l(x)} \cdot v^t$$

$$E(x;t) = \frac{D(x+t)}{D(x)}$$

$$E(x;t) = (1-d)^t \cdot [1 - q(x;0;t)]$$

**Recurrencia:**

$$E(x;t) = \prod_{s=0}^{t-1} E(x+s; 1)$$

$$E(x,z) = E(x,y) \cdot E(y,z)$$

**Valores singulares:**

$$E(x;0) = 1 \qquad E(x;\omega - x) = 0 \qquad 0 < E(x;t) < 1$$

---

## Factor de Capitalización Actuarial (F.C.A.)

| Notación | Descripción |
|---|---|
| `E⁻¹(x; t)` | Valor final actuarial de $1 colocado a edad `x`, cobrado a edad `x+t` por sobrevivientes |
| `E⁻¹(x, x+t)` | Forma equivalente con edades |

**Fórmulas:**

$$E^{-1}(x;t) = (1+i)^t \cdot p^{-1}(x;t) = (1+i)^t \cdot \frac{l(x)}{l(x+t)}$$

$$E^{-1}(x;t) = \frac{D(x)}{D(x+t)}$$

$$E^{-1}(x;t) = (1+i)^t \cdot [1 + ib(x;0;t)]$$

**Recurrencia:**

$$E^{-1}(x;t) = \prod_{s=0}^{t-1} E^{-1}(x+s; 1)$$

**Valores singulares:**

$$E^{-1}(x;0) = 1 \qquad E^{-1}(x;\omega-x) \to \infty \quad (\nexists) \qquad 1 < E^{-1}(x;t) < \infty$$

---

## Probabilidades biométricas

| Notación | Descripción |
|---|---|
| `p(x; t)` | Probabilidad de que una persona de edad `x` sobreviva `t` años |
| `p(x, y)` | Ídem, con edades: probabilidad de llegar de edad `x` a edad `y` |
| `q(x; 0; t)` | Probabilidad de que una persona de edad `x` fallezca antes de `t` años |
| `p⁻¹(x; t)` | Factor de capitalización biométrico = `l(x) / l(x+t)` |

**Relaciones:**

$$p(x;t) = 1 - q(x;0;t) \qquad p(x;t) = \frac{l(x+t)}{l(x)}$$

$$p(x,z) = p(x,y) \cdot p(y,z)$$

$$p(x;t) = \prod_{s=0}^{t-1} p(x+s; 1)$$

---

## Valor de conmutación D

$$D(z) = v^z \cdot l(z)$$

Se utiliza para expresar el F.A.A. y el F.C.A. en función de valores de tabla:

$$E(x;t) = \frac{D(x+t)}{D(x)} \qquad E^{-1}(x;t) = \frac{D(x)}{D(x+t)}$$

---

## Descuentos actuariales

| Notación | Descripción |
|---|---|
| `D(x; 0; t)` | Descuento actuarial total |
| `Db(x; 0; t)` | Descuento biométrico = `q(x; 0; t)` |
| `Df(0; t; i)` | Descuento financiero = `1 - vᵗ` |

**Relación entre descuentos:**

$$D(x;0;t) = 1 - E(x;t)$$

$$D_A = D_F + D_B - D_B \times D_F \implies D_A < D_F + D_B$$

---

## Intereses actuariales

| Notación | Descripción |
|---|---|
| `Ib(x; 0; t)` | Interés biométrico = `p⁻¹(x;t) - 1` = `q(x;0;t) / (1 - q(x;0;t))` |
| `If(0; t; i)` | Interés financiero = `(1+i)ᵗ - 1` |

**Relación entre intereses:**

$$I_A = I_F + I_B + I_B \times I_F \implies I_A > I_F + I_B$$

---

## Tabla de mortalidad y leyes

| Notación | Descripción |
|---|---|
| `l(x)` | Número de sobrevivientes a edad `x` |
| `l(x+t)` | Sobrevivientes a edad `x+t` |
| `ω` | Edad límite (`l(ω) = 0`) |
| `i` | Tasa de interés técnica (Argentina: **4% efectivo anual**) |
| `v` | Factor de descuento financiero = `1/(1+i)` |
| `d` | Tasa de descuento = `1 - v` |
| `μ` | Tasa de mortalidad instantánea (dominio continuo) |

**Leyes de mortalidad usadas en la materia:**

- Tabla CSO 80
- Ley lineal: $l_x = l_0 \cdot \dfrac{\omega - x}{\omega}$
- Ley exponencial: $l_x = l_0 \cdot A^x$ con $A < 1$ (usar $\omega \to \infty$)

---

## Convenciones generales

- Si no se menciona condición de cobro → el pago es **cierto** (factor financiero puro, sin aleatoriedad)
- Tasa técnica en Argentina: **i = 4% efectivo anual**
- Tabla de mortalidad de referencia: **CSO 80**
- El saldo en `t` siempre es **al final del período**; saldo en `t=0` es siempre 0

# El Repositorio Actuarial

Repositorio educativo de matemática actuarial y análisis numérico, desarrollado como material de apoyo para la enseñanza de estas disciplinas en la Universidad de Buenos Aires (UBA).

## 📋 Descripción

Este proyecto contiene recursos educativos estructurados por temas, incluyendo:

- **Teoría matemática** con demostraciones rigurosas
- **Ejercicios prácticos** para reforzar conceptos
- **Recursos complementarios** para profundizar el aprendizaje
- **Contenido interactivo** con fórmulas matemáticas renderizadas

## 📚 Contenidos

### Análisis Numérico
- **Polinomios de Bernoulli**
  - 4 propiedades fundamentales con demostraciones completas
  - Integral en [0;1] 
  - Relación complementaria
  - Recursividad de orden 1
  - Práctica de ejercicios

## 🗂️ Estructura del Proyecto

```
actuarial-repository/
├── README.md
├── style.css                      # Estilos globales
├── script.js                      # JavaScript global
├── index.html                     # Página principal
├── materias/
│   ├── analisis-numerico.html    # Índice de Análisis Numérico
│   ├── polinomios-bernoulli.html # Contenido de Polinomios de Bernoulli
│   ├── AN/
│   │   └── Bernoulli/
│   │       ├── Bernoulli_1.pdf   # Propiedad 1
│   │       ├── Bernoulli_2.pdf   # Propiedad 2
│   │       ├── Bernoulli_3.pdf   # Propiedad 3
│   │       ├── Bernoulli_4.pdf   # Propiedad 4
│   │       ├── bernoulli-integral-01.pdf
│   │       ├── bernoulli-relacion-complementaria.pdf
│   │       ├── bernoulli-recursivo-orden-1.pdf
│   │       └── bernoulli-practica.pdf
│   └── ... (otras materias)
└── ... (otros recursos)
```

## 🚀 Características

- ✅ **Contenido educativo riguroso** - Demostraciones algebraicas paso a paso
- ✅ **Notación matemática profesional** - Renderización con MathJax
- ✅ **Interfaz clara y accesible** - Diseño minimalista enfocado en contenido
- ✅ **Secciones expandibles** - Navegación interactiva por temas
- ✅ **Recursos en PDF** - Documentos originales para cada tema
- ✅ **Optimizado para velocidad** - Carga rápida y eficiente

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos responsivos
- **JavaScript** - Interactividad (sin dependencias externas)
- **MathJax 3** - Renderización de fórmulas matemáticas
- **PDF** - Documentos con demostraciones detalladas

## 💻 Cómo usar

### Localmente
1. Clona el repositorio:
```bash
git clone https://github.com/rafa-datri/actuarial-repository
cd actuarial-repository
```

2. Abre `index.html` en tu navegador, o usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

3. Navega a `http://localhost:8000` en tu navegador

### En GitHub Pages
El repositorio está disponible en: https://github.com/rafa-datri/actuarial-repository

## 📖 Contenido por Tema

### Polinomios de Bernoulli
Los polinomios de Bernoulli B_v^n(x) son fundamentales en análisis numérico. Este módulo cubre:

**Propiedades fundamentales:**
- Propiedad 1: Bernoulli de grado cero - B₀ⁿ(x) = 1
- Propiedad 2: Bernoulli de orden cero - Bᵥ⁰(x) = xᵛ
- Propiedad 3: Derivada respecto a x - D Bᵥⁿ(x) = v Bᵥ₋₁ⁿ(x)
- Propiedad 4: Operador diferencia - Δ Bᵥⁿ(x) = v Bᵥ₋₁ⁿ⁻¹(x)

**Recursos complementarios:**
- Integral de Bernoulli en el intervalo [0;1]
- Relación complementaria entre polinomios
- Recursividad para orden 1
- Práctica de ejercicios

## 🎓 Uso Educativo

Este repositorio está diseñado para:
- Estudiantes de matemática actuarial y análisis numérico
- Docentes que buscan material de referencia riguroso
- Profesionales que necesitan recordar propiedades fundamentales

Todas las demostraciones incluyen pasos algebraicos explícitos sin simplificaciones, permitiendo seguir el razonamiento completo.

## 📝 Licencia

Este proyecto es de uso educativo libre para fines académicos y de enseñanza.

## 👤 Autor

Rafael Datri

**Contacto:** [GitHub](https://github.com/rafa-datri)

## 🔄 Estado del Proyecto

- ✅ Polinomios de Bernoulli: Completo
- 🚧 Análisis Numérico: En desarrollo
- 🚧 Otros temas: Planificados

---

**Última actualización:** Mayo 2026

*Si encuentras errores o tienes sugerencias de mejora, puedes abrir un issue en el repositorio.*

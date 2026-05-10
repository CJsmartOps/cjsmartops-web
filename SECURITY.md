# Política de Seguridad — CJsmartOps

## Reporte de Vulnerabilidades

Si descubrís una vulnerabilidad de seguridad en la plataforma CJsmartOps, contactanos de inmediato.

**No abras un issue público.**  
Escribí a: **info@cjsmartops.com.ar**

## Alcance

Este repositorio contiene únicamente el frontend institucional (landing page).  
No contiene código de agentes, infraestructura defensiva, datos de clientes, ni secretos operativos.

## Prácticas de Seguridad

- **Sin secretos en el código**: todos los tokens, claves y credenciales están cifrados con Fernet AES en el VPS
- **Sin dependencias externas innecesarias**: solo Next.js, React, Tailwind CSS y utilidades de UI
- **Dependabot activo**: alertas de seguridad y actualizaciones automáticas habilitadas
- **Escaneo de secretos**: GitHub secret scanning + push protection activos
- **Branch protection**: `main` requiere PR review, bloquea force push y protege contra eliminación
- **Solo squash merge**: historial limpio, sin commits de merge ruidosos

## Versiones Soportadas

| Versión | Soportada |
|---------|-----------|
| Último commit en `main` | ✅ |

## Proceso de Divulgación

1. Reporte recibido vía email
2. Acuse de recibo en 48 horas hábiles
3. Evaluación y corrección
4. Divulgación coordinada una vez parcheado

---

CJsmartOps — Defensa Contextual en Runtime

# 📚 Каталог Agent Skills

> Справочный документ. Полный перечень навыков (skills) для AI-агентов, распределённых по ролям команды.

---

## 1. Стандарт Agent Skills

**agentskills.io** — единый открытый формат для описания навыков AI-агентов.

Поддерживается основными инструментами:
- **OpenAI Codex**
- **Claude Code**
- **Gemini CLI**
- **Cursor**

Формат навыка — директория с обязательным файлом `SKILL.md` (YAML frontmatter + markdown):

```
skill-name/
├── SKILL.md          # Обязательно — описание, инструкции, метаданные
├── scripts/          # Опционально — вспомогательные скрипты
├── references/       # Опционально — справочные материалы
└── assets/           # Опционально — изображения, примеры
```

---

## 2. Источники навыков

| Источник | Описание | Ссылка |
|---|---|---|
| OpenAI Skills Catalog | 35+ проверенных skills от OpenAI | [github.com/openai/skills](https://github.com/openai/skills) |
| Product Manager Skills | 47 skills для PM | [github.com/deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) |
| Skill Registry | Каталог с фильтрацией | [skillregistry.dev](https://skillregistry.dev) |
| Agent Skills CC | 1000+ community skills | [agent-skills.cc](https://agent-skills.cc) |
| MCP Market | Директория skills | [mcpmarket.com/tools/skills](https://mcpmarket.com/tools/skills) |

---

## 3. Навыки по ролям

### Product Owner

| Skill | Что делает | Источник |
|---|---|---|
| `agile-product-owner` | Sprint planning, backlog management | skillregistry.dev |
| `brainstorm-stories` | Брейншторм идей для user stories | deanpeters/PM-Skills |
| `write-user-story` | Формулирование user stories | deanpeters/PM-Skills |
| `competitive-analysis` | Конкурентный анализ | deanpeters/PM-Skills |
| `jobs-to-be-done` | JTBD фреймворк | deanpeters/PM-Skills |

### Архитектор

| Skill | Что делает | Источник |
|---|---|---|
| `define-architecture` | Проектирование архитектуры | **Создать свой** |
| `review-architecture` | Проверка архитектурной целостности PR | **Создать свой** |
| `security-threat-model` | Моделирование угроз | openai/skills (curated) |

### UI/UX Дизайнер

| Skill | Что делает | Источник |
|---|---|---|
| `figma-design-system` | Создание дизайн-системы | openai/skills |
| `figma-generate-design` | Генерация дизайна по спецификации | openai/skills |
| `figma-implement-design` | Конвертация дизайна в код | openai/skills |
| `figma-generate-library` | Генерация компонентной библиотеки | openai/skills |
| `accessibility-auditor` | Аудит доступности (WCAG) | skillregistry.dev |

### Системный аналитик

| Skill | Что делает | Источник |
|---|---|---|
| `write-task-spec` | Технические спецификации | **Создать свой** |
| `validate-against-architecture` | Проверка на соответствие архитектуре | **Создать свой** |
| `notion-spec-to-implementation` | Связь спецификаций с реализацией | openai/skills |

### Разработчик

| Skill | Что делает | Источник |
|---|---|---|
| `frontend-skill` | Фронтенд-разработка | openai/skills |
| `doc` | Генерация документации | openai/skills |
| `gh-fix-ci` | Исправление CI ошибок | openai/skills |
| `security-best-practices` | Проверка кода на безопасность | openai/skills |
| `code-review` | Автоматический code review | community |

### QA

| Skill | Что делает | Источник |
|---|---|---|
| `playwright` | E2E тестирование | openai/skills |
| `playwright-interactive` | Интерактивное тестирование | openai/skills |
| `generate-tests` | Генерация тест-кейсов | **Создать свой** |
| `analyze-coverage` | Анализ покрытия | **Создать свой** |

---

## 4. Структура навыков в репозитории проекта

```
.agents/skills/
├── po/
│   ├── agile-product-owner/SKILL.md
│   ├── brainstorm-stories/SKILL.md
│   ├── write-user-story/SKILL.md
│   ├── competitive-analysis/SKILL.md
│   └── jobs-to-be-done/SKILL.md
├── architect/
│   ├── define-architecture/SKILL.md
│   ├── review-architecture/SKILL.md
│   └── security-threat-model/SKILL.md
├── designer/
│   ├── figma-design-system/SKILL.md
│   ├── figma-generate-design/SKILL.md
│   ├── figma-implement-design/SKILL.md
│   ├── figma-generate-library/SKILL.md
│   └── accessibility-auditor/SKILL.md
├── analyst/
│   ├── write-task-spec/SKILL.md
│   ├── validate-against-architecture/SKILL.md
│   └── notion-spec-to-implementation/SKILL.md
├── developer/
│   ├── frontend-skill/SKILL.md
│   ├── doc/SKILL.md
│   ├── gh-fix-ci/SKILL.md
│   ├── security-best-practices/SKILL.md
│   └── code-review/SKILL.md
└── qa/
    ├── playwright/SKILL.md
    ├── playwright-interactive/SKILL.md
    ├── generate-tests/SKILL.md
    └── analyze-coverage/SKILL.md
```

---

## 5. Установка навыков

### Из реестра (skill-installer)

```bash
# Установка конкретного навыка
$skill-installer agile-product-owner

# Через npx
npx codex-skills-registry@latest --skill=product/agile-product-owner --yes
```

### Из GitHub-репозитория

```bash
$skill-installer install https://github.com/deanpeters/Product-Manager-Skills
```

### Ручная установка

Скопировать директорию навыка в `.agents/skills/<role>/` в корне проекта.

---

## 6. Принцип работы с навыками

Следуйте трём шагам:

1. **Готовые** — возьмите существующий skill из каталога или реестра
2. **Адаптировать** — настройте под процессы вашей команды (AGENTS.md, промпты)
3. **Создать свои** — для уникальных задач напишите собственные навыки с нуля

> Большинство ролей в нашем справочнике имеют хотя бы один навык, помеченный как **«Создать свой»** — это точки, где стандартные решения не покрывают потребности, и команда должна разработать собственные навыки.

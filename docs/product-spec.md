# Product Spec: Learn With Me

## Problem statement
The current study plan for learning about Islam is difficult to understand, and the required books are hard to keep organized. The goal is to build a structured, approachable learning space where the plan and required materials live together and are easy to navigate.

## Primary users
- Learners following a structured plan and needing a clear, guided path.
- Self-directed learners who want to track progress and keep references organized.

## Core product goals
1. **Clarity**: Break a complex plan into digestible steps with clear milestones.
2. **Organization**: Keep books, notes, and plan steps connected in one place.
3. **Progress**: Make progress visible with completion states and gentle reminders.
4. **Flexibility**: Support multiple study plans and personal customization.

## Key features
### 1) Structured study plans
- **Plan builder** with sections, lessons, and sub-steps.
- **Milestones** for major checkpoints (e.g., finish a book, complete a module).
- **Difficulty tags** on steps (Beginner, Intermediate, Advanced).
- **Estimated time** per step and total plan duration.

### 2) Book and resource library
- **Upload & link books** to specific plan steps (Supabase Storage).
- **Metadata** per book: title, author, edition, language, difficulty, and tags.
- **Resource types**: book, article, lecture, podcast, notes.
- **Quick reference**: link to key chapters or pages needed for a step.

### 3) Learning workflow tools
- **Step checklists** with progress tracking.
- **Notes per step** and global notes per plan.
- **Reflection prompts** at milestones.
- **Reading schedule** generator for a step or entire plan.

### 4) Navigation & comprehension aids
- **Plan overview map** with visual hierarchy.
- **Glossary** for key terms (with searchable definitions).
- **Context cards** that explain why each step matters.
- **Prerequisite flags** for steps that must be completed first.

### 5) Personalization
- **Custom plan variants** (e.g., “time-limited” or “deep study”).
- **Language preference** for UI and resources.
- **Bookmarking** of steps or resources.

### 6) Accountability & reminders
- **Study streaks** (optional).
- **Daily/weekly goals** with gentle reminders.
- **Progress summaries** to show completed vs. remaining sections.

## Example user flow
1. Create or import a study plan.
2. Upload required books and link them to steps.
3. Follow steps with time estimates and checklists.
4. Add notes and reflections.
5. Track progress and see upcoming milestones.

## Information architecture
- **Dashboard**
  - Current plan summary
  - Progress stats
  - Upcoming milestones
- **Plans**
  - Plan list
  - Plan detail (overview, sections, steps)
- **Library**
  - Books/resources list
  - Book detail (metadata, linked steps)
- **Notes**
  - Notes by plan and step
- **Glossary**
  - Term list and definitions
- **Settings**
  - Profile, language, notifications

## Supabase data model (initial draft)
### Tables
- **plans**
  - id (uuid, pk)
  - title
  - description
  - created_by (fk -> auth.users)
  - created_at

- **plan_sections**
  - id (uuid, pk)
  - plan_id (fk)
  - title
  - position

- **plan_steps**
  - id (uuid, pk)
  - section_id (fk)
  - title
  - description
  - position
  - difficulty
  - estimated_minutes
  - prerequisite_step_id (nullable)

- **resources**
  - id (uuid, pk)
  - title
  - author
  - type (book/article/lecture/podcast/notes)
  - language
  - tags (text[])
  - storage_path
  - created_by (fk -> auth.users)
  - created_at

- **step_resources**
  - id (uuid, pk)
  - step_id (fk)
  - resource_id (fk)
  - reference_note (e.g., “Read chapter 2–3”)

- **step_notes**
  - id (uuid, pk)
  - step_id (fk)
  - body
  - created_by (fk -> auth.users)
  - created_at

- **glossary_terms**
  - id (uuid, pk)
  - term
  - definition
  - created_by (fk -> auth.users)
  - created_at

## Supabase auth & storage
- **Auth**: email/password, optional social login.
- **Storage buckets**: `books` (PDFs/epubs), `resources` (audio/video).
- **RLS policies**: users can only access their own plans/resources unless shared.

## MVP scope (first milestone)
- Create a plan with sections and steps.
- Upload books and link them to steps.
- Mark steps complete with progress tracking.
- Add notes per step.
- Simple dashboard showing progress and upcoming steps.

## Future enhancements
- Collaborative plans and shared libraries.
- AI-assisted summaries for long readings.
- Audio playback support for lectures.
- Mobile-first layout and offline mode.

# Echoid Website — Agent Loop

Bu protokol, Specs 01–06 implementation’ını fazlar halinde yürütür. Mevcut durum BUILDING’dir; açık tasarım kararları preview proposal olarak kaydedilir.

## Orchestrator

Codex orchestrator görevini üstlenir:

- Kullanıcının açık implementation talimatıyla loop’u başlatır.
- Fazları specs/README.md sırasına göre yönetir.
- Builder ve reviewer’a yalnızca ilgili fazın gerekli bağlamını verir.
- Builder → reviewer → fixer akışını takip eder.
- PASS olmadan sonraki fazı başlatmaz.
- Açık tasarım kararlarını design-locked.md içinde proposal olarak işaretler; bunları kullanıcı onayı gibi göstermez.
- Sonuçları active-run.md, backlog.md ve backloglog.md içinde güncel tutar.

## Roles

- [Orchestrator](roles/orchestrator.md)
- [Builder](roles/builder.md)
- [Reviewer](roles/reviewer.md)
- [Fixer](roles/fixer.md)

Agent’lar ortak artifact’lar üzerinden çalışır: ilgili spec, active-run.md, handoff kaydı, kod farkları ve test kanıtı.

## State flow

IDLE → READY → BUILDING → REVIEWING → PASS → sonraki faz için READY

REVIEWING → FAIL → FIXING → REVIEWING

Eksik gereksinim veya dış blokaj varsa BLOCKED durumuna geçilir ve backlog.md güncellenir. Aynı bulgu iki düzeltme turunda çözülemezse loop durur.

## Shared context

1. agents.md veya claude.md
2. const.md
3. brief.md
4. design-locked.md
5. specs/README.md ve etkin faz spec’i
6. active-run.md
7. Önceki handoff veya review raporu varsa

## Phase lifecycle

1. Orchestrator active-run.md içine fazı ve kapsamı yazar.
2. Builder yalnızca etkin spec kapsamındaki değişiklikleri yapar ve handoff kaydını doldurur.
3. Reviewer kod yazmadan kabul ölçütlerini ve kanıtları inceler.
4. PASS ise faz tamamlanır.
5. FAIL ise fixer yalnızca bulguları düzeltir; reviewer tekrar kontrol eder.
6. Orchestrator sonucu backloglog.md’ye işler ve sıradaki fazı hazırlar.

## Write boundaries

- Builder: etkin spec’in kapsamındaki kod ve gerekli teknik dokümantasyon.
- Reviewer: review/handoff raporu; production code’a dokunmaz.
- Fixer: reviewer bulgularını gidermek için gereken değişiklikler.
- Orchestrator: active-run.md, backlog.md, backloglog.md ve koordinasyon.
- Hiçbir agent const.md, brief.md veya kullanıcı tarafından onaylanmış kararı sessizce değiştiremez.
- Yeni bir gereksinim eksikse tahmin yürütme; BLOCKED kaydet.

## Definition of done

Bir faz; builder kapsamı bitirdiğinde, reviewer kabul ölçütlerini ve build/test kanıtını kontrol edip PASS verdiğinde tamamlanır. Açık limitler kaydedilir ve active-run.md güncellenir.

## Start gate

- State: PASS — first public release completed 2026-09-18.
- Completed: Specs 01–08, review, and Cloudflare Pages deployment.
- Production URL: https://echoid.pages.dev/.
- The user reviewed and explicitly approved the current site before publication. Review future production changes before pushing them to `main`.

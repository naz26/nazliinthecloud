---
layout: project.njk
title: "Serverless Cost Optimizer"
description: "A Lambda-based analyzer that surfaces cold starts, over-provisioned memory, and idle event rules."
date: 2025-06-30
repo: "https://github.com/<your-username>/serverless-cost-optimizer"
tags: ["aws", "lambda", "cost", "observability"]
---

### Overview
CLI + Lambda that scans CloudWatch metrics and produces a weekly report with actionable cost optimizations.

- Detects over-provisioned memory
- Highlights low-utilization functions
- Flags noisy cron rules

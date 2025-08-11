---
layout: default
title: "The Certification Diaries — Week 1: Hosts, Networks, and Not Losing It"
date: 2025-08-01
---

<section class="section">
  <div class="container">
    <h1>{{ page.title }}</h1>
    <p><em>Week 1 of my AWS Security Specialty journey with practical tips on keeping hosts secure, networks quiet, and avoiding common cloud pitfalls.</em></p>
    <hr/>
    <div class="content">
{{ "
The Certification Diaries: AWS Certified Security - Specialty Course.
Week 1 of my AWS Security Specialty journey with practical tips on keeping hosts secure, networks quiet, and avoiding common cloud pitfalls.

I started the AWS Security Specialty this week and, honestly, my brain wanted to back out so quickly, I got mental whiplash. I've started this blog series, \"The Certification Diaries\", to take you all along my certification journey and share insights and lessons I learn along the way.

## Host Security

- **No long-term access keys on the box** — IAM Roles only.
- **IMDSv2 or bust** — enable and require it.
- **Patch without babysitting** — SSM Patch Manager on a schedule.
- **Prefer Session Manager to SSH** — fewer open ports, audited access.
- **Encrypt by default** — enable EBS default encryption.
- **Least privilege everywhere** — tiny IAM policies, minimal packages/ports.
- **Central logs** — ship OS logs to CloudWatch Logs or your SIEM.
- **Known-good baselines** — AMI hardening pipeline / State Manager.

Some services that help: **Amazon Inspector**, **GuardDuty**, **CloudWatch Logs**.

## Network Security

The design I like is boring (good!):
- Only the **ALB** is public. App & data tiers in **private** subnets.
- Prefer **Security Groups** for day-to-day (stateful); keep **NACLs** for hard subnet-level denies.
- Use **VPC Endpoints** to keep service traffic private.
- SGs that reference SGs keep intent readable (ALB→App on 443, App→DB on DB port).

**Tight egress** + endpoints force apps to talk only where they should. Turn on **VPC Flow Logs** (and **ALB access logs**, **Route 53 Resolver query logs** when needed).

### Mini Lab (Free Tier)
1. Launch a t2.micro/t3.micro EC2 in a **private** subnet (Amazon Linux 2).
2. Attach an IAM role with `AmazonSSMManagedInstanceCore`. Connect via **Session Manager**.
3. Enable **VPC Flow Logs** on the ENI to CloudWatch (1‑day retention).
4. Intentionally over‑tighten a SG rule, watch `REJECT` in Flow Logs, then fix.
5. Clean up instance, SG, logs.

Thanks for reading — more weeks coming soon!
" | markdownify }}
    </div>
  </div>
</section>

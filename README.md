# devops-observability-platform
This contains a observability stack using Prometheus and Grafana to monitor the system
# DevOps Monitoring Stack

## Overview

Monitoring system using Prometheus and Grafana to observe application metrics.

## Components

* Prometheus (metrics collection)
* Grafana (visualization)
* Node Exporter (optional)

## Architecture

App → Prometheus → Grafana

## Features

* Real-time metrics scraping
* Dashboard visualization
* Target health monitoring

## How to Run

```bash
docker-compose up -d
```

## Dashboards
<img width="1470" height="956" alt="image" src="https://github.com/user-attachments/assets/69e6ef7d-6052-412e-877e-96c6e12a1ad2" />



## Issues Faced

* Prometheus target DOWN issue
* Metrics endpoint content-type error

## Fixes

* Corrected /metrics endpoint
* Fixed Prometheus scrape config

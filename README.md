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


## Issues Faced

* Prometheus target DOWN issue
* Metrics endpoint content-type error

## Fixes

* Corrected /metrics endpoint
* Fixed Prometheus scrape config

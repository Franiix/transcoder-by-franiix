# Transcoder file by Franiix

🇬🇧 **A simple, cross-platform video transcoder with web GUI.**  
🇮🇹 **Un convertitore video semplice, multipiattaforma con interfaccia web.**

## ✨ Features
- Convert video to H.265 or AV1 using CPU or NVIDIA GPU
- Supports `.mkv`, `.mp4`, `.avi`, `.mpeg`, `.mov`
- Real-time progress, logs, and ETA
- Parallel conversion with live WebSocket updates
- Web-based UI built with React + Flask
- Docker-ready monolithic container

## 🚀 Quick Start

```bash
docker compose up --build
```

Then visit: [http://localhost:5000](http://localhost:5000)

## 📂 Folder Structure

- `input/` → put your videos here
- `output/` → converted files
- `logs/` → per-job logs
- `frontend/` → React interface (built into backend)
- `backend/` → Flask backend with SocketIO
- `assets/` → logo & visual

## 🖼 Preview

![Logo](assets/logo.png)

## 📝 License

MIT – see LICENSE file.
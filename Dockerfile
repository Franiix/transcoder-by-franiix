FROM node:20 as frontend

WORKDIR /app
COPY frontend/ ./frontend
RUN cd frontend && npm install && npm run build

FROM python:3.11-slim

WORKDIR /app
COPY backend/ ./backend
COPY --from=frontend /app/frontend/dist ./backend/static

RUN pip install flask flask_socketio eventlet

EXPOSE 5000
CMD ["python", "backend/app.py"]
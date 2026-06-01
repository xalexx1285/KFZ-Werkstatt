"""Minimal backend stub.

The KRYOS landing page is a pure static frontend experience (no backend logic).
This lightweight FastAPI app only exists to keep the supervisor 'backend'
process healthy and expose a simple health check.
"""
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="KRYOS Static Landing API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "kryos-landing"}

<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Auth & Messaging API

A minimal NestJS API implementing token-based authentication and internal messaging, built by Iheb Belhaj for a hiring task design challenge.

## Description

This project is a TypeScript-based NestJS API developed to meet the requirements of a hiring task. It provides a simple token-based authentication system and internal messaging functionality for a small business dashboard, using in-memory storage and Swagger for API documentation.

## Features
- **Login Endpoint**: `POST /auth/login` accepts an email and returns a mock JWT token (no password required).
- **User Profile Endpoint**: `GET /auth/me` returns a sample user profile, protected by JWT authentication.
- **Messaging Endpoints**:
  - `POST /messages`: Sends a message to another user, stored in-memory.
  - `GET /messages`: Retrieves messages sent or received by the authenticated user.
- **Authentication**: Uses JWT-based authentication with NestJS guards.
- **Input Validation**: Utilizes `class-validator` for robust input validation.
- **API Documentation**: Swagger UI available at `/api`.

## Project Setup

```bash
# Install dependencies
npm install

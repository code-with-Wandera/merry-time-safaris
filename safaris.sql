CREATE DATABASE IF NOT EXISTS merry_time_africa;
USE merry_time_africa;

-- Destinations Table (for dedicated destination landing pages)
CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Safaris Table (for catalog items)
CREATE TABLE IF NOT EXISTS safaris (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    destinations_summary VARCHAR(255) NOT NULL,
    starting_price DECIMAL(10,2) NOT NULL,
    accommodation VARCHAR(100),
    highlights TEXT, -- Comma-separated or JSON list of highlights
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enquiries Table (for the Tailor-Made & booking forms)
CREATE TABLE IF NOT EXISTS enquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    whatsapp VARCHAR(30),
    travelers INT NOT NULL,
    travel_dates VARCHAR(100),
    destinations_interest VARCHAR(255),
    approximate_budget VARCHAR(50),
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    country VARCHAR(50),
    trip_taken VARCHAR(150),
    rating INT DEFAULT 5,
    review_text TEXT NOT NULL,
    platform_link VARCHAR(255),
    client_photo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
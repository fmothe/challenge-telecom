import request from 'supertest';
import app from '../index';

describe('Weather API Endpoints', () => {
    it('should fetch location data', async () => {
      const res = await request(app).get('/v1/location');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('city');
    });
  
    it('should fetch current weather data', async () => {
      const res = await request(app).get('/v1/current/London');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('weather');
    });
  
    it('should fetch 5-day weather forecast data', async () => {
      const res = await request(app).get('/v1/forecast/London');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('list');
    });
  });
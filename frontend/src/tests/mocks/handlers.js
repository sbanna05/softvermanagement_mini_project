import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/tasks', () => {
    return HttpResponse.json([
      { task_id: '1', title: 'Mock Task', status: 'done' }
    ]);
  }),

  http.post('/tasks', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { task_id: '2', ...body, status: 'under review' },
      { status: 201 }
    );
  }),
];

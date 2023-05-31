import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubRepositoriesService {
  async fetchRepositories() {
    const cacheName: string = 'Repositories';
    const url: string =
      'https://api.github.com/users/benjamin-wall/repos?sort=created&direction=desc';

    try {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(url);

      if (cachedResponse) {
        const data = await cachedResponse.json();
        console.log('Cached Data: ', data);
        return data;
      } else {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const clonedResponse = response.clone();
        const data = await response.json();

        cache.put(url, clonedResponse);

        console.log('Data from network: ', data);
        return data;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
      } else {
        console.error('An unknown error occurred.');
      }
    }
  }
}

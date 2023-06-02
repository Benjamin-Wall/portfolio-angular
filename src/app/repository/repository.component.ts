import { Component } from '@angular/core';
import { GithubRepositoriesService } from '../github-repositories.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent {
  repositories: any[] = [];
  filteredRepositories: any[] = [];
  selectedFilter: string = 'default';
  searchTerm: string = '';

  constructor(private githubRepos: GithubRepositoriesService) {}

  async ngOnInit() {
    if (this.searchTerm === '') {
      this.repositories = await this.githubRepos.fetchRepositories();
      this.filteredRepositories = this.repositories;
    }
  }

  advancedSearch() {
    switch (this.selectedFilter) {
      case 'default':
        this.filteredRepositories = this.repositories.filter((repository) =>
          repository.name
            .toLowerCase()
            .startsWith(this.searchTerm.toLowerCase())
        );
        break;

      case 'stars':
        this.filteredRepositories = this.repositories
          .filter((repository) =>
            repository.name
              .toLowerCase()
              .startsWith(this.searchTerm.toLowerCase())
          )
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;

      case 'forks':
        this.filteredRepositories = this.repositories
          .filter((repository) =>
            repository.name
              .toLowerCase()
              .startsWith(this.searchTerm.toLowerCase())
          )
          .sort((a, b) => b.forks - a.forks);
        break;
    }
  }
}

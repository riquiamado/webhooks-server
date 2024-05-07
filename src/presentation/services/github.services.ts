import { GithubIssues } from '../../interface/github-issues.interface'
import { GithubStart } from '../../interface/github-start.interface'

export class GithubService {
  constructor() {}

  onStart(payload: GithubStart): string {
    const { action, sender, repository, starred_at } = payload
    return `User ${sender.login} ${action} star on ${repository.full_name}`
  }
  onIssue(payload: GithubIssues): string {
    const { action, issue } = payload
    if (action === 'opened') {
      return `An issue as opened with this title ${issue.title}`
    }
    if (action === 'closed') {
      return `An issue as closed with this title ${issue.user.login}`
    }
    if (action === 'reopened') {
      return `An issue as reopened with this title ${issue.user.login}`
    }
    return `Unhandled action for the issue event ${action} `
  }
}

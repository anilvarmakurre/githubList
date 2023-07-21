import Loader from 'react-loader-spinner'
import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    githubData: [],
    status: 'Initial',
  }

  componentDidMount() {
    this.getGithubData()
  }

  getGithubData = async () => {
    this.setState({status: 'Loading'})
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`

    const response = await fetch(url)
    console.log(activeId)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const dataList = data.popular_repos
      console.log(data)
      console.log(dataList)
      const filteredData = dataList.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({githubData: filteredData, status: 'Success'})
    } else {
      this.setState({status: 'Failure'})
    }
  }

  onUpdateGithub = id => {
    this.setState({activeId: id}, this.getGithubData)
  }

  render() {
    const {githubData, status} = this.state
    return (
      <ul className="bg-container">
        <div className="top-container">
          <h1 className="top-head">Popular</h1>
        </div>
        <li className="middle-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              languageFiltersData={each}
              key={each.language}
              onUpdateGithub={this.onUpdateGithub}
            />
          ))}
        </li>
        <li className="bottom-container">
          {status === 'Loading' ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            githubData.map(each => (
              <RepositoryItem githubList={each} key={each.id} status={status} />
            ))
          )}
        </li>
      </ul>
    )
  }
}
export default GithubPopularRepos

import './index.css'

const RepositoryItem = props => {
  const {githubList, status} = props

  const {name, forksCount, starsCount, avatarUrl} = githubList

  const successPage = () => (
    <ul className="respo-bg">
      <li className="respo-inner">
        <img className="respo-image" src={avatarUrl} alt={name} />
      </li>

      <li className="respo-inner">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="respo-para">{starsCount} stars</p>
      </li>
      <li className="respo-inner">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="respo-para">{forksCount} forks</p>
      </li>
      <li className="respo-inner">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="respo-para">{forksCount} open issues</p>
      </li>
    </ul>
  )

  const failurePage = () => (
    <li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something Went Wrong</h1>
    </li>
  )

  switch (status) {
    case 'Failure':
      return failurePage()
    case 'Success':
      return successPage()
    default:
      return null
  }
}

export default RepositoryItem

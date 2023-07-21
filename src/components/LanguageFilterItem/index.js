import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, onUpdateGithub} = props
  const {id, language} = languageFiltersData

  const updateLanguage = () => {
    onUpdateGithub(id)
  }
  return (
    <ul className="language-bg">
      <button
        className="button"
        type="button"
        value={id}
        onClick={updateLanguage}
      >
        {language}
      </button>
    </ul>
  )
}

export default LanguageFilterItem

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <div className="Work-Icons">
          <a href="https://www.linkedin.com/in/mauriciolizama/" rel="noreferrer noopener" target="_blank">
            <AiFillLinkedin className="Circle-Icon Icon" size={40} />
          </a>
          <a href="https://github.com/mlizama11" rel="noreferrer noopener" target="_blank">
            <AiFillGithub className="Circle-Icon Icon" size={40} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
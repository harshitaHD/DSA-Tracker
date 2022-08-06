import React from 'react'

export default function Header() {
  let Style = {
    border: "2px solid red"
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={Style}>
      <div className="container-fluid">
        <a className="navbar-brand  text-light" href="#">DSA450</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light fw-bold" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light fw-bold" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light fw-bold" href="#"><i class="bi bi-person-bounding-box"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

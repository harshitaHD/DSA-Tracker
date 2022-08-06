import React from "react";
import '../assets/css/SideNav.css'

export default function SideNav() {
  let Style = {
    border: "2px solid red"
  }
  return (
    <>
      <div>
        <div className="button-collapse">
          <i className="bi bi-list btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"></i>
        </div>
        <div className="collapse" id="collapseWidthExample">
          <nav className="navbar bg-dark navbar-dark sidebar" style={Style}>
            <ul className="nav flex-column justify-content-start">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Home
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Array
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Matrix
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  String
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Searching and Sorting
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Linked List
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Binary Trees
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Binary Search Trees
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Greedy
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Backtracking
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Stacks and Queues
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Heap
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Graph
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Trie
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Dynamic Programming
                </a>
              </li>
              <hr className="dropdown-divider text-light" />
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Bit Manipulation
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

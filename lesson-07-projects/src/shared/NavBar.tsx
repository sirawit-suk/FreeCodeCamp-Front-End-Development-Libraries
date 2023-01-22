import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Menu } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  faBars,
  faCaretUp,
  faCoffee,
  faCrosshairs,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  NAVIGATIONS,
  NAVIGATION_EXTENDS,
} from '../constants/navigations-constant';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function NavBar() {
  const { pathname: currentPath } = useLocation();

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-screen top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={NAVIGATION_EXTENDS.home.path}>
                    <FontAwesomeIcon
                      className="scale-90 block h-8 w-auto lg:hidden text-gray-300"
                      icon={faCoffee}
                    />
                    <FontAwesomeIcon
                      className="scale-90 hidden h-8 w-auto lg:block text-gray-300"
                      icon={faCoffee}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {Object.keys(NAVIGATIONS).map((key) => (
                      <Link
                        key={key}
                        to={NAVIGATIONS[key].path}
                        className={classNames(
                          NAVIGATIONS[key].path === currentPath
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={
                          NAVIGATIONS[key].path === currentPath
                            ? 'page'
                            : undefined
                        }
                      >
                        {NAVIGATIONS[key].name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="p-2 bg-slate-700 rounded-md text-white text-sm">
                  {import.meta.env.DEV && 'DEV'}
                  {import.meta.env.PROD && 'PROD'}
                </div>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <a
                        href="https://github.com/sirawit-suk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/56272903?v=4"
                          alt=""
                        />
                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {Object.keys(NAVIGATIONS).map((key) => (
                <Disclosure.Button
                  key={NAVIGATIONS[key].name}
                  as="a"
                  href={NAVIGATIONS[key].path}
                  className={classNames(
                    NAVIGATIONS[key].path === currentPath
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={
                    NAVIGATIONS[key].path === currentPath ? 'page' : undefined
                  }
                >
                  {NAVIGATIONS[key].name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

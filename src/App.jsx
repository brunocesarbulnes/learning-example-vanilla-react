import { useEffect } from "react"

export function App() {
  useEffect(() => {
    DDS.SideNav(document.getElementById("sidenav-280165170"));
    DDS.Search(document.getElementById("search-538502087"));
    DDS.ActionMenu(document.getElementById("actionmenu-1"));
    DDS.ActionMenu(document.getElementById("actionmenu-2"));
    DDS.ActionMenu(document.getElementById("actionmenu-3"));


    const laptopSalesData = [
      { year: "Jan", XPS: 10, latitude: 30 },
      { year: "Feb", XPS: 32, latitude: 18 },
      { year: "Mar", XPS: 28, latitude: 32 },
      { year: "Apr", XPS: 38, latitude: 20 },
      { year: "May", XPS: 31, latitude: 28 },
      { year: "Jun", XPS: 44, latitude: 26 },
    ];

    DDV.Line({ target: "#laptop-sales", data: laptopSalesData });

    const salesRepresentativeData = [
      { year: "Jan", "Sales representative": 0 },
      { year: "Feb", "Sales representative": 11 },
      { year: "Mar", "Sales representative": 8 },
      { year: "Apr", "Sales representative": 18 },
    ];

    DDV.Line({ target: "#sales-representative", data: salesRepresentativeData, legend: { position: "bottom", inactive: true } });

    const salesWebsite = [
      { year: "Jan", "Website": 10 },
      { year: "Feb", "Website": 3 },
      { year: "Mar", "Website": 17 },
      { year: "Apr", "Website": 11 },
    ];

    DDV.Line({ target: "#sales-website", data: salesWebsite, legend: { position: "bottom", inactive: true } });

    const salesOthers = [
      { year: "Jan", "Others": 17 },
      { year: "Feb", "Others": 9 },
      { year: "Mar", "Others": 12 },
      { year: "Apr", "Others": 4 },
    ];

    DDV.Line({ target: "#sales-others", data: salesOthers, legend: { position: "bottom", inactive: true } });

    const datepicker = document.getElementById("datepicker");
    DDS.DatePicker(datepicker);

    const revenueXPS = document.getElementById("revenue-xps");
    DDS.ProgressBar(revenueXPS, { currentValue: 50 });

    const revenuePrecision = document.getElementById("revenue-precision");
    DDS.ProgressBar(revenuePrecision, { currentValue: 75 });

    const revenueLatitude = document.getElementById("revenue-latitude");
    DDS.ProgressBar(revenueLatitude, { currentValue: 25 });

    const feedbackComment = document.getElementById("feedback-comment");
    DDS.TextArea(feedbackComment);

    const data = [
      {
        columns: [{ value: "Pedro" }, { value: "Premier" }, { value: "pedro@dell.com" }, { value: "XPS" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Pedro" }, { value: "AI/ML" }, { value: "pedro@dell.com" }, { value: "Precision" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Nathan" }, { value: "UMF" }, { value: "nathan@dell.com" }, { value: "Precision" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Azhar" }, { value: "Premier" }, { value: "azhar@dell.com" }, { value: "XPS" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Azhar" }, { value: "AI/ML" }, { value: "azhar@dell.com" }, { value: "XPS" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Luis" }, { value: "GC" }, { value: "luis@dell.com" }, { value: "XPS" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Nathan" }, { value: "DSA" }, { value: "nathan@dell.com" }, { value: "Precision" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Azhar" }, { value: "OSC" }, { value: "azhar@dell.com" }, { value: "Latitude" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Felipe" }, { value: "UMF" }, { value: "felipe@dell.com" }, { value: "XPS" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
      {
        columns: [{ value: "Luis" }, { value: "Premier" }, { value: "luis@dell.com" }, { value: "Latitude" }, { value: "$918.12" }],
        expandable: true,
        expandableContent: "Expandable row with string as example",
      },
    ];

    const columns = [{ value: "Name" }, { value: "Team" }, { value: "E-mail" }, { value: "Unit sold" }, { value: "Value", align: "end" }];

    const salesRepresentativeReportTable = document.getElementById("sales-representative-report-table");
    DDS.Table(salesRepresentativeReportTable, {
      data,
      columns,
      expandableRows: true,
      subscribe: ["sales-representative-report-table-pagination"],
      pagination: { currentPage: 1, rowsPerPage: 6 },
    });

    const paginationElement = document.getElementById("sales-representative-report-table-pagination");
    DDS.Pagination(paginationElement, {
      subscribe: ["sales-representative-report-table"],
    });
  }, []);

  return (
    <div className="dds__template--productivity dds__body-3">
      <header className="dds__masthead dds__py-0 dds__px-4 dds__elevation-1 ">
        <div className="dds__masthead-top-left-ctnr dds__d-flex">
          <div className="masthead-menu-logo">
            <a href="#mh-main" className="dds__skip-navigation">Skip to Main Content</a>
            <div className="logo-container dds__pl-0  dds__pr-2 dds__pt-2">
              <a href="/" aria-label="Dell Technologies" className="logo-link dds__my-2 dds__py-1">
                <svg className="dellTechLogo mh-show-DeskTop-Tab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1017 132">
                  <path d="M1015 84.89c0-12.23-6.8-17.66-20.39-20.38-13.58-2.71-21.73-4.08-21.73-13.58 0-6.79 5.43-10.87 14.95-10.87 12.23 0 16.3 5.43 16.3 12.23l1.36 1.36h5.43l1.36-1.36c0-13.58-10.87-19.02-24.46-19.02-14.95 0-23.09 8.15-23.09 17.67 0 10.87 8.15 16.3 21.73 19.02 13.59 2.72 20.38 4.08 20.38 14.95 0 6.79-4.07 12.23-17.66 12.23-12.23 0-17.66-6.8-17.66-14.95l-1.36-1.36h-5.43l-1.36 1.36c0 12.23 9.51 21.74 25.81 21.74 17.66-.02 25.82-8.17 25.82-19.04m-58.42-13.58l1.35-1.36v-4.07c0-19.02-10.87-32.61-29.89-32.61s-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.72 8.15-8.15 13.59-19.02 13.59-17.67 0-23.1-16.3-23.1-24.45l1.36-1.36h48.92zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.74-23.09 16.3 0 21.74 13.58 21.74 23.09l-1.36 1.36zm-59.78 36.68V35.97l-1.36-1.36h-5.43l-1.36 1.36v65.22l1.36 1.36h5.43l1.36-1.36zm0-78.8v-8.15l-1.36-1.36h-5.43l-1.36 1.36v8.15l1.36 1.36h5.43l1.36-1.36zm-51.62 74.73c-13.59 0-21.74-9.51-21.74-28.53s8.15-28.53 21.74-28.53c13.58 0 21.73 9.51 21.73 28.53 0 19.01-8.15 28.53-21.73 28.53m21.73-4.08c0 17.66-4.08 31.25-20.38 31.25-12.23 0-16.3-5.43-17.66-12.23l-1.36-1.36h-5.43l-1.36 1.36c1.36 10.87 9.51 19.02 25.81 19.02 17.67 0 28.53-10.87 28.53-38.04V35.97l-1.36-1.36h-4.08l-1.36 1.36-1.36 8.16h-1.36c-2.71-5.43-9.51-10.87-21.74-10.87-19.02 0-28.53 14.95-28.53 35.33 0 20.37 9.51 35.32 28.53 35.32 12.23 0 19.02-5.43 21.74-10.87h1.37zm-88.3-52.98c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.24-12.23 31.24-35.32s-13.58-35.33-31.24-35.33c-17.67 0-31.25 12.23-31.25 35.33 0 23.09 13.59 35.32 31.25 35.32m-40.76-2.72V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.37zm-48.9-61.13c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.25-12.23 31.25-35.32s-13.59-35.33-31.25-35.33-31.25 12.23-31.25 35.33c0 23.09 13.59 35.32 31.25 35.32m-39.4-2.72V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.67 4.08-21.74 10.87h-1.36l-1.35-8.16-1.36-1.36h-4.08l-1.36 1.36v65.22l1.36 1.36h5.44l1.35-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.43l1.36-1.36zm-69.29 0V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.66 4.08-21.74 10.87h-1.36V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.44l1.35-1.36zm-116.83-32.6c0-19.02 9.51-28.53 23.09-28.53s19.02 8.15 20.37 16.3l1.36 1.36h5.44l1.36-1.36c-1.36-13.58-12.23-23.09-28.53-23.09-17.66 0-31.24 10.87-31.24 35.33 0 24.45 13.58 35.32 31.24 35.32 16.3 0 27.17-9.51 28.53-23.09l-1.36-1.36h-5.44l-1.36 1.36c-1.36 8.15-6.79 16.3-20.37 16.3-13.59-.01-23.09-9.53-23.09-28.54m-14.95 2.72l1.36-1.36v-4.07c0-19.02-10.87-32.61-29.9-32.61-19.01 0-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.71 8.15-8.15 13.59-19.02 13.59-17.66 0-23.09-16.3-23.09-24.45l1.36-1.36h48.91zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.73-23.09 16.31 0 21.74 13.58 21.74 23.09l-1.35 1.36zm-36.61-51.63V8.81l-1.36-1.36h-70.65l-1.36 1.36v4.08l1.36 1.36h29.89l1.36 1.36v85.59l1.36 1.36h5.43l1.36-1.36V15.6l1.36-1.36h29.89l1.36-1.36zM322.2 83.65v18.9h-61.35V7.45h21.6v76.2h39.75zm-283.65 18.9c22.13 0 40.73-15.12 46.03-35.58l53.8 42.03 53.77-42.01v35.56h61.35v-18.9h-39.75V7.45h-21.6v35.56L140.58 83.3l-11.53-9.01L153.73 55l26.88-21-15.34-12-51.58 40.3-11.53-9.01L153.73 13 138.38 1l-53.8 42.03c-5.3-20.46-23.9-35.58-46.03-35.58H0v95.1h38.55zM21.6 83.65v-57.3h16.95C52.88 26.35 64.5 39.18 64.5 55S52.88 83.65 38.55 83.65H21.6z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="masthead-search">
            <div className="search-display dds__mt-2 dds__pt-1 dds__mx-5 dds__px-3">
              {/* <form className="search-form dds__pt-1">
                <span className="icon-search dds__icon dds__icons dds__icon--search"></span>
                <label htmlFor="search" hidden="">Search</label>
                <input type="text" id="search" value="" placeholder="Search" autoComplete="off" aria-autoComplete="both" aria-controls="search-results" aria-label="search" className="search-input" />
              </form> */}

              <div className="dds__search dds__search--sm search-form" id="search-538502087" data-dds="search" role="search">
                <label id="search-label-654209547" htmlFor="search-control-654209547" className="dds__label dds__sr-only">Search!</label>
                <div className="dds__search__wrapper">
                  <input
                    type="search"
                    className="dds__search__control"
                    name="search-control-654209547"
                    id="search-control-654209547"
                    autoComplete="off"
                    placeholder="Search input"
                    aria-labelledby="search-label-654209547"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dds__msthd-top-right-ctnr dds__d-flex">
          <div className="dds__d-flex">
            <button className="dds__button dds__button--tertiary masthead-menu-item" id="actionmenu-1-trigger" data-target="contact-container" aria-label="Contact Us" aria-haspopup="true" aria-expanded="false" role="button">
              <span className="dds__icon dds__icons dds__icon--alarm-bell icon"></span>
              <span className="menu-button-label dds__p-2">Notifications</span>
              <span className="dds__icon dds__icons dds__icon--chevron-down icon-chevron"></span>
            </button>
            <div className="dds__action-menu" data-dds="action-menu" data-trigger="#actionmenu-1-trigger" id="actionmenu-1">
              <div className="dds__action-menu__container" tabIndex="-1" role="presentation" aria-hidden="true">
                <ul className="dds__action-menu__menu" role="menu" tabIndex="-1">
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>All list</span>
                    </button>
                  </li>
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>Child Item</span>
                    </button>
                  </li>
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>My messages</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dds__d-flex">
            <button className="dds__button dds__button--tertiary masthead-menu-item" id="actionmenu-2-trigger" data-target="contact-container" aria-label="Contact Us" aria-haspopup="true" aria-expanded="false" role="button">
              <span className="dds__icon dds__icons dds__icon--user icon"></span>
              <span className="menu-button-label dds__p-2">Personal</span>
              <span className="dds__icon dds__icons dds__icon--chevron-down icon-chevron"></span>
            </button>
            <div className="dds__action-menu" data-dds="action-menu" data-trigger="#actionmenu-2-trigger" id="actionmenu-2">
              <div className="dds__action-menu__container" tabIndex="-1" role="presentation" aria-hidden="true">
                <ul className="dds__action-menu__menu" role="menu" tabIndex="-1">
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>User info</span>
                    </button>
                  </li>
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>Password</span>
                    </button>
                  </li>
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dds__d-flex">
            <button className="dds__button dds__button--tertiary masthead-menu-item" id="actionmenu-3-trigger" data-target="contact-container" aria-label="Contact Us" aria-haspopup="true" aria-expanded="false" role="button">
              <span className="dds__icon dds__icons dds__icon--globe-simple icon"></span>
              <span className="menu-button-label dds__p-2">Communications</span>
              <span className="dds__icon dds__icons dds__icon--chevron-down icon-chevron"></span>
            </button>
            <div className="dds__action-menu" data-dds="action-menu" data-trigger="#actionmenu-3-trigger" id="actionmenu-3">
              <div className="dds__action-menu__container" tabIndex="-1" role="presentation" aria-hidden="true">
                <ul className="dds__action-menu__menu" role="menu" tabIndex="-1">
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>Send a message</span>
                    </button>
                  </li>
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>Inside Dell</span>
                    </button>
                  </li>
                  <li className="dds__action-menu__item" role="none">
                    <button type="button" role="menuitem" tabIndex="-1" aria-checked="false" onClick={() => alert('Child click')}>
                      <span className="dds__icon dds__icons dds__icon--document"></span>
                      <span>Teams channels</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="dds__side-nav__wrapper" data-dds="side-nav" id="sidenav-280165170" aria-label="Side Navigation example">
        <section className="dds__side-nav">
          <ul className="dds__side-nav__menu">
            <li className="dds__side-nav__item">
              <a href="javascript:void(0)">
                <span className="dds__icon dds__side-nav__icon dds__icon--home" aria-hidden="true"></span>
                <span>Home</span>
              </a>
            </li>

            <li className="dds__side-nav__group">
              <button type="button" aria-haspopup="true" aria-expanded="false">
                <span className="dds__icon dds__side-nav__icon dds__icon--toolbox" aria-hidden="true"></span>
                <span>Getting Started</span>
              </button>

              <ul className="dds__side-nav__menu">
                <li className="dds__side-nav__group">
                  <button type="button" aria-haspopup="true" aria-expanded="false">
                    <span className="dds__icon dds__side-nav__icon dds__icon--stack" aria-hidden="true"></span>
                    <span>Components</span>
                  </button>

                  <ul className="dds__side-nav__menu">
                    <li className="dds__side-nav__item">
                      <a href="javascript:void(0)">
                        <span>Vanilla</span>
                      </a>
                    </li>
                    <li className="dds__side-nav__item">
                      <a href="javascript:void(0)">
                        <span>Banner</span>
                      </a>
                    </li>
                    <li className="dds__side-nav__item">
                      <a href="javascript:void(0)">
                        <span>Web Components</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Figma</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="dds__side-nav__group">
              <button type="button" aria-haspopup="true" aria-expanded="false">
                <span className="dds__icon dds__side-nav__icon dds__icon--puzzle" aria-hidden="true"></span>
                <span>Updates</span>
              </button>

              <ul className="dds__side-nav__menu">
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Component Status</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="dds__side-nav__group">
              <button type="button" aria-haspopup="true" aria-expanded="false">
                <span className="dds__icon dds__side-nav__icon dds__icon--stack" aria-hidden="true"></span>
                <span>Foundations</span>
              </button>

              <ul className="dds__side-nav__menu">
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Color</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Elevation</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Grid</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Typography</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="dds__side-nav__group">
              <button type="button" aria-haspopup="true" aria-expanded="false">
                <span className="dds__icon dds__side-nav__icon dds__icon--objects" aria-hidden="true"></span>
                <span>Components</span>
              </button>

              <ul className="dds__side-nav__menu">
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Badge</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Banner</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Breadcrumb</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Button</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Card</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Carousel</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Checkbox</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Divider &amp; Container</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Drawer</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Dropdown</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Filter</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Footer</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Form</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Link</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>List</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Loading Icon</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Masthead</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Message Bar</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Modal</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Nav</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Notification</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Pagination</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Popover</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Product Stack</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Progress</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Radio Button</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Rating</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Select</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>ShowHide</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Side Nav</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Slider</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Tab</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Table</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Tag</span>
                  </a>
                </li>
                <li className="dds__side-nav__item">
                  <a href="javascript:void(0)">
                    <span>Tooltip</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <div className="dds__side-nav__toggle">
          <button type="button" aria-label="collapse side navigation">
            <span className="dds__icon dds__side-nav__icon dds__icon--chevron-left"></span>
          </button>
          <button type="button" aria-label="expand side navigation">
            <span className="dds__icon dds__side-nav__icon dds__icon--chevron-right"></span>
          </button>
        </div>
      </nav>
      <main className="dds__py-5">
        {/* BEGIN CONTENT */}
        <div className="dds__container-fluid">
          {/* First Row */}
          <div className="dds__row dds__align-items-center">
            <div className="dds__col-2 dds__col--lg dds__mb-4">
              <h2>Dashboard</h2>
            </div>
            <div className="dds__col-auto dds__col--lg-auto dds__mb-4" style={{ width: '164px' }}>
              <div className="dds__date-picker dds__date-picker--sm" id="datepicker">
                <div className="dds__date-picker__wrapper">
                  <input type="text" className="dds__date-picker__input" placeholder="Enter the date" required="" maxLength="256" id="date-picker-control" name="date-picker-name" />
                  <div id="date-picker-invalid" className="dds__date-picker__invalid-feedback">Invalid date</div>
                </div>
              </div>
            </div>
            <div className="dds__col-auto dds__col--lg-auto dds__mb-4">
              <button className="dds__button dds__button--sm dds__button--secondary">
                <span className="dds__icon dds__icon--dashboard dds__button__icon--start" aria-hidden="true"></span>
                Customize dashboard
              </button>
            </div>
          </div>
          {/* Second Row */}
          <div className="dds__row">
            <div className="dds__col-2 dds__col--lg-8 dds__mb-3">
              <div className="dds__box dds__p-4">
                <h5 className="dds__mb-0">Laptop sales</h5>
                <p className="dds__body-3 dds__neutral-gray dds__mb-4">Total laptops sold during the beginning of 2023.</p>
                <div data-ddv="line" id="laptop-sales" style={{ minHeight: "200px" }}></div>
              </div>
            </div>
            <div className="dds__col-2 dds__col--lg-4 dds__mb-3">
              <div className="dds__box dds__p-4">
                <h5 className="dds__mb-4">Links</h5>
                <ul className="dds__list dds__list--unstyled dds__p-0">
                  <li role="listitem" className="dds__mb-4">
                    <a className="dds__link--standalone" href="https://delldesignsystem.com">
                      <span className="dds__icon dds__icon--download dds__mr-1" aria-hidden="true"></span>
                      Product catalog ‘23
                    </a>
                  </li>
                  <li role="listitem" className="dds__mb-4">
                    <a className="dds__link--standalone" href="https://delldesignsystem.com">
                      <span className="dds__icon dds__icon--download dds__mr-1" aria-hidden="true"></span>
                      Marketing campaign
                    </a>
                  </li>
                  <li role="listitem" className="dds__mb-4">
                    <a className="dds__link--standalone" href="https://delldesignsystem.com">
                      <span className="dds__icon dds__icon--download dds__mr-1" aria-hidden="true"></span>
                      ‘22 sales report
                    </a>
                  </li>
                  <li role="listitem" className="dds__mb-4">
                    <a className="dds__link--standalone" href="https://delldesignsystem.com">
                      <span className="dds__icon dds__icon--pop-up-arrow-corner dds__mr-1" aria-hidden="true"></span>
                      Marketing website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Third Row */}
          <div className="dds__row">
            <div className="dds__col-2 dds__mb-3">
              <div className="dds__box dds__p-4">
                <h5 className="dds__mb-0">Sales by platform</h5>
                <p className="dds__body-3 dds__neutral-gray dds__mb-4">Sales separated by platform during the Q1 ‘23.</p>
                <div className="dds__row">
                  <div className="dds__col-2 dds__col--lg-4">
                    <strong className="dds__body-3 dds__font-weight-700">Sales representative</strong>
                    <div data-ddv="line" id="sales-representative" style={{ minHeight: "200px" }}></div>
                  </div>
                  <div className="dds__col-2 dds__col--lg-4">
                    <strong className="dds__body-3 dds__font-weight-700">Website</strong>
                    <div data-ddv="line" id="sales-website" style={{ minHeight: "200px" }}></div>
                  </div>
                  <div className="dds__col-2 dds__col--lg-4">
                    <strong className="dds__body-3 dds__font-weight-700">Others</strong>
                    <div data-ddv="line" id="sales-others" style={{ minHeight: "200px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth Row */}
          <div className="dds__row">
            <div className="dds__col-2 dds__col--lg-8 dds__mb-3">
              <div className="dds__box dds__p-4">
                <h5 className="dds__mb-4">Revenue growth Q1</h5>
                <div className="dds__mb-4 dds__p-4" style={{ backgroundColor: "var(--gray-100)" }}>
                  <div className="dds__row dds__align-items-center">
                    <div className="dds__col-2 dds__col--lg-auto">
                      <div className="dds__custom-card-number dds__mr-5">
                        <span className="dds__icon dds__icon--cart dds__mr-1"></span>
                        <span className="dds__subtitle-1 dds__font-weight-500">1000</span>
                        <p>Sales</p>
                      </div>
                    </div>
                    <div className="dds__col-2 dds__col--lg">
                      <div className="dds__custom-card-number">
                        <span className="dds__icon dds__icon--currency-coins dds__mr-1"></span>
                        <span className="dds__subtitle-1 dds__font-weight-500">UDS 1,000.00</span>
                        <p>Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="revenue-xps" className="dds__progress-bar dds__mb-3" data-dds="progress-bar">
                  <span id="revenue-xps-label" className="dds__progress-bar__label">XPS</span>
                  <div className="dds__progress-bar__indicator" role="progressbar" aria-labelledby="revenue-xps-label" aria-describedby="revenue-xps-label"></div>
                </div>
                <div id="revenue-precision" className="dds__progress-bar dds__mb-3" data-dds="progress-bar">
                  <span id="revenue-precision-label" className="dds__progress-bar__label">Precision</span>
                  <div className="dds__progress-bar__indicator" role="progressbar" aria-labelledby="revenue-precision-label" aria-describedby="revenue-precision-label"></div>
                </div>
                <div id="revenue-latitude" className="dds__progress-bar" data-dds="progress-bar">
                  <span id="revenue-latitude-label" className="dds__progress-bar__label">Latitude</span>
                  <div className="dds__progress-bar__indicator" role="progressbar" aria-labelledby="revenue-latitude-label" aria-describedby="revenue-latitude-label"></div>
                </div>
              </div>
            </div>
            <div className="dds__col-2 dds__col--lg-4 dds__mb-3">
              <div className="dds__box dds__p-4">
                <h5 className="dds__mb-4">Send Feedback</h5>
                <label className="dds__label dds__label--required">Rating</label>
                <div className="dds__d-flex dds__mb-4">
                  <span className="dds__icon dds__icon--star dds__subtitle-1 dds__mr-1" style={{ color: "var(--blue-600)" }}></span>
                  <span className="dds__icon dds__icon--star dds__subtitle-1 dds__mr-1" style={{ color: "var(--blue-600)" }}></span>
                  <span className="dds__icon dds__icon--star dds__subtitle-1 dds__mr-1" style={{ color: "var(--blue-600)" }}></span>
                  <span className="dds__icon dds__icon--star dds__subtitle-1 dds__mr-1" style={{ color: "var(--blue-600)" }}></span>
                  <span className="dds__icon dds__icon--star dds__subtitle-1 dds__mr-1" style={{ color: "var(--blue-600)" }}></span>
                </div>
                <div id="feedback-comment" className="dds__text-area__container dds__mb-4" data-dds="text-area">
                  <div className="dds__text-area__header">
                    <label id="feedback-comment-label" htmlFor="feedback-comment-control" className="dds__label dds__label--required">Comment</label>
                  </div>
                  <div className="dds__text-area__wrapper">
                    <textarea className="dds__text-area" name="feedback-comment-name" id="feedback-comment-control" aria-required="true" aria-labelledby="feedback-comment-label" required=""></textarea>
                    <small id="feedback-comment-invalid" className="dds__invalid-feedback">Error text</small>
                  </div>
                </div>
                <button className="dds__button dds__button--sm">Submit</button>
              </div>
            </div>
          </div>
          {/* Fifth Row */}
          <div className="dds__row">
            <div className="dds__col-2">
              <div className="dds__box dds__p-4 dds__mb-4">
                <div className="dds__row">
                  <div className="dds__col-2 dds__col--lg">
                    <h5 className="dds__mb-0">Sales representative report</h5>
                    <p className="dds__body-3 dds__neutral-gray dds__mb-4">Details about each sale during Q1 ‘23</p>
                  </div>
                  <div className="dds__col-2 dds__col--lg-auto">
                    <button className="dds__button dds__button--sm dds__button--secondary">
                      <span className="dds__icon dds__icon--download dds__button__icon--start" aria-hidden="true"></span>
                      Download .CSV
                    </button>
                  </div>
                </div>
                <div role="table" id="sales-representative-report-table" data-dds="table" className="dds__table dds__table--horizontal dds__table--compact"></div>
                <div className="dds__pagination" data-dds="pagination" id="sales-representative-report-table-pagination" role="navigation">
                  <div className="dds__pagination__summary">
                    <label className="dds__pagination__per-page-label" htmlFor="pagination-per-page-table-236610119-pagination">Items per page</label>
                    <div className="dds__select dds__select--sm dds__pagination__per-page-select" data-dds="select">
                      <div className="dds__select__wrapper">
                        <select className="dds__select__field" id="pagination-per-page-table-236610119-pagination">
                          <option value="6">6</option>
                          <option value="8">8</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </div>
                    <div className="dds__pagination__range" aria-live="polite">
                      <span className="dds__pagination__range-start"></span>
                      –
                      <span className="dds__pagination__range-end"></span>
                      <span className="dds__pagination__range-total-label">
                        of
                        <span className="dds__pagination__range-total"></span>
                        items
                      </span>
                    </div>
                  </div>
                  <div className="dds__pagination__nav">
                    <button type="button" className="dds__button dds__button--tertiary dds__button--sm dds__button__icon dds__pagination__first-page" aria-label="First page"></button>
                    <button type="button" className="dds__button dds__button--tertiary dds__button--sm dds__pagination__prev-page" aria-label="Previous page">
                      <span className="dds__pagination__prev-page-label">Previous</span>
                    </button>
                    <div className="dds__pagination__page-range">
                      <label className="dds__pagination__page-range-label" htmlFor="pagination-current-page-table-236610119-pagination">Page</label>
                      <div className="dds__input-text__container dds__input-text__container--sm">
                        <div className="dds__input-text__wrapper dds__pagination__page-range-current-wrapper">
                          <input className="dds__input-text dds__pagination__page-range-current" type="text" id="pagination-current-page-table-236610119-pagination" />
                        </div>
                      </div>
                      <div className="dds__pagination__page-range-total-label">
                        of
                        <span className="dds__pagination__page-range-total"></span>
                      </div>
                    </div>
                    <button type="button" className="dds__button dds__button--tertiary dds__button--sm dds__pagination__next-page" aria-label="Next page">
                      <span className="dds__pagination__next-page-label">Next</span>
                    </button>
                    <button type="button" className="dds__button dds__button--tertiary dds__button--sm dds__button__icon dds__pagination__last-page" aria-label="Last page"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* END CONTENT */}
      <footer className="dds__default-footer dds__py-4">
        <nav className="dds__container dds__px-5  dds__pb-1" role="navigation">
          <ul role="list" className="footer-navigation dds__py-1">
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Dell.com</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">DellTechnologies.com</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Dell Premier</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Partner Program</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Support</a>
            </li>
          </ul>
        </nav>
        <nav className="dds__container dds__px-5" role="navigation">
          <ul role="list" className="dds__py-1">
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2"><span aria-hidden="true">©</span> 2023 Dell Inc.</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Terms & Conditions</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Privacy Statement</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Legal & Regulatory</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Social Impact</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Product Recycling</a>
            </li>
            <li role="listitem" className="dds__mr-5">
              <a role="link" href="#" target="_blank" className="dds__py-2 dds__my-2">Anti-Slavery & Human Tracking</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

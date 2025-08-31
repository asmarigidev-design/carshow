import React from 'react';
// استایل‌های fullPage.js - fullPage.js styles
import 'fullpage.js/dist/fullpage.css';
// کامپوننت FullPage شامل هشت سکشن - FullPage component contains eight sections
import FullPage from "./FullPage";
// آیکون‌های Font Awesome - Font Awesome icons
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <FullPage />
    </>
  );
}

export default App;

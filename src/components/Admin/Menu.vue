<template>
  <div
    class="menu-admin dark:bg-black-900 fixed bottom-0 w-[calc(100%-1rem)] border-t bg-white"
  >
    <ul class="menu-list">
      <li>
        <router-link to="/admin-report" class="menu-link">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5232 8.43748H8.54416L13.1921 13.0673C13.3697 13.2443 13.6621 13.2586 13.8447 13.0872C14.983 12.0191 15.7659 10.5791 15.9956 8.96043C16.035 8.68328 15.8041 8.43748 15.5232 8.43748ZM15.0577 6.53902C14.8153 3.03918 12.0077 0.242468 8.49415 0.00105939C8.22592 -0.0173978 8.00004 0.207898 8.00004 0.475674V7.03121H14.5815C14.8503 7.03121 15.0762 6.80621 15.0577 6.53902ZM6.58828 8.43748V1.48555C6.58828 1.20576 6.34151 0.975777 6.06357 1.01504C2.55859 1.5084 -0.120524 4.55853 0.00418191 8.21394C0.132417 11.9681 3.37741 15.0466 7.14798 14.9995C8.63033 14.981 10 14.5052 11.1262 13.7095C11.3586 13.5454 11.3739 13.2047 11.1724 13.004L6.58828 8.43748Z"
              fill="#555556"
            />
          </svg>
          <p>Показатели</p>
        </router-link>
      </li>
      <li>
        <router-link to="/admin-catalog" class="menu-link">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="menu-svg-2"
          >
            <path
              d="M1.88126 7.01245V9.8187C1.88126 12.625 3.00626 13.75 5.81251 13.75H9.18126C11.9875 13.75 13.1125 12.625 13.1125 9.8187V7.01245"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.49999 7.5C8.64374 7.5 9.48749 6.56875 9.37499 5.425L8.96249 1.25H6.04374L5.62499 5.425C5.51249 6.56875 6.35624 7.5 7.49999 7.5Z"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.4437 7.5C12.7062 7.5 13.6312 6.475 13.5062 5.21875L13.3312 3.5C13.1062 1.875 12.4812 1.25 10.8437 1.25H8.9375L9.375 5.63125C9.48125 6.6625 10.4125 7.5 11.4437 7.5Z"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.52499 7.5C4.55624 7.5 5.48749 6.6625 5.58749 5.63125L5.72499 4.25L6.02499 1.25H4.11874C2.48124 1.25 1.85624 1.875 1.63124 3.5L1.46249 5.21875C1.33749 6.475 2.26249 7.5 3.52499 7.5Z"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 10.625C6.45625 10.625 5.9375 11.1438 5.9375 12.1875V13.75H9.0625V12.1875C9.0625 11.1438 8.54375 10.625 7.5 10.625Z"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Каталоги</p>
        </router-link>
      </li>
      <li>
        <router-link to="/create" class="menu-link">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="menu-svg-2"
          >
            <path
              d="M14.375 11.25C14.375 11.7188 14.2437 12.1625 14.0125 12.5375C13.8812 12.7625 13.7125 12.9625 13.5188 13.125C13.0813 13.5187 12.5062 13.75 11.875 13.75C11.1125 13.75 10.4313 13.4063 9.98125 12.8688C9.96875 12.85 9.95 12.8375 9.9375 12.8188C9.8625 12.7313 9.79375 12.6375 9.7375 12.5375C9.50625 12.1625 9.375 11.7188 9.375 11.25C9.375 10.4625 9.7375 9.75625 10.3125 9.3C10.7437 8.95625 11.2875 8.75 11.875 8.75C12.5 8.75 13.0625 8.97498 13.5 9.35623C13.575 9.41248 13.6437 9.48127 13.7062 9.55002C14.1187 10 14.375 10.5938 14.375 11.25Z"
              stroke="#555556"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.8062 11.2374H10.9437"
              stroke="#555556"
              stroke-width="0.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.875 10.325V12.1937"
              stroke="#555556"
              stroke-width="0.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.98123 4.65002L7.49998 7.84376L12.9812 4.66875"
              stroke="#555556"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 13.5063V7.83752"
              stroke="#555556"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5062 5.73125V9.26877C13.5062 9.30002 13.5062 9.32499 13.5 9.35624C13.0625 8.97499 12.5 8.75001 11.875 8.75001C11.2875 8.75001 10.7437 8.95626 10.3125 9.30001C9.73749 9.75626 9.37499 10.4625 9.37499 11.25C9.37499 11.7188 9.50625 12.1625 9.7375 12.5375C9.79375 12.6375 9.86249 12.7313 9.93749 12.8188L8.79375 13.45C8.08125 13.85 6.91874 13.85 6.20624 13.45L2.86874 11.6C2.11249 11.1813 1.49374 10.1313 1.49374 9.26877V5.73125C1.49374 4.86875 2.11249 3.81876 2.86874 3.40001L6.20624 1.55C6.91874 1.15 8.08125 1.15 8.79375 1.55L12.1312 3.40001C12.8875 3.81876 13.5062 4.86875 13.5062 5.73125Z"
              stroke="#555556"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Добавить</p>
        </router-link>
      </li>
      <li>
        <a href="#" class="menu-link">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5375 6.52494L12.925 9.13744C12.4 11.3937 11.3625 12.3062 9.41251 12.1187C9.10001 12.0937 8.76251 12.0374 8.40001 11.9499L7.35001 11.6999C4.74376 11.0812 3.93751 9.79369 4.55001 7.18119L5.16251 4.56244C5.28751 4.03119 5.43751 3.56869 5.62501 3.18744C6.35626 1.67494 7.60001 1.26869 9.68751 1.76244L10.7313 2.00619C13.35 2.61869 14.15 3.91244 13.5375 6.52494Z"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.41252 12.1187C9.02502 12.3812 8.53752 12.6 7.94377 12.7937L6.95627 13.1187C4.47502 13.9187 3.16876 13.25 2.36251 10.7687L1.56251 8.3C0.762515 5.81875 1.42501 4.50625 3.90626 3.70625L4.89376 3.38125C5.15001 3.3 5.39376 3.23125 5.62501 3.1875C5.43751 3.56875 5.28751 4.03125 5.16251 4.5625L4.55001 7.18125C3.93751 9.79375 4.74377 11.0812 7.35002 11.7L8.40001 11.95C8.76251 12.0375 9.10002 12.0937 9.41252 12.1187Z"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.89999 5.3313L10.9312 6.10005"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.28751 7.75L9.10001 8.2125"
              stroke="#555556"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Журналы</p>
        </a>
      </li>
      <li>
        <a href="#" class="menu-link">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 7.5C9.22589 7.5 10.625 6.10089 10.625 4.375C10.625 2.64911 9.22589 1.25 7.5 1.25C5.77411 1.25 4.375 2.64911 4.375 4.375C4.375 6.10089 5.77411 7.5 7.5 7.5Z"
              stroke="#8D8E90"
              stroke-opacity="0.6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.8688 13.75C12.8688 11.3313 10.4625 9.375 7.50003 9.375C4.53753 9.375 2.13129 11.3313 2.13129 13.75"
              stroke="#8D8E90"
              stroke-opacity="0.6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Профиль</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

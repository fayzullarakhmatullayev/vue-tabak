<template>
  <div class="dark:bg-black-900 fixed top-0 z-50 w-[calc(100%-1rem)] bg-white">
    <div class="relative flex h-16 items-center justify-between">
      <div class="back">
        <div
          class="back-inner"
          @click="$router.go(-1)"
          v-if="$store.state.isBackOpen"
        >
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0.999999L1 6L5 11"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Назад</span>
        </div>
      </div>
      <svg
        width="23"
        height="28"
        viewBox="0 0 23 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="23" height="28" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_275_5391"
              transform="translate(0 -0.00258459) scale(0.00657895 0.00540414)"
            />
          </pattern>
          <image
            id="image0_275_5391"
            width="152"
            height="186"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAC6CAYAAABSpoQcAAAAAXNSR0IArs4c6QAAE5dJREFUeF7tnY21HrURhrUVJK6AUEFCBYQKgAqACsAVBCoAV0BcQXAFgQoCFcRUAB0o57VHjti7K82ftNJ+0jk+1/bdH+3o0cxoNJK2sMobCcQY/xJC+HMIIf3Ef+PvZ+U1/QI/fw8hvN62DT9XySSwPZo0Yox/CyGkP+/R30sgSUX0M2ALIfwaQviRwMP/PWS5NWAxRmikv9OfvxJM+L/eBZoNkP0SQvhh2zaA9xDldoCRhvo4A2vUhgRk/wwh/LRtWzK3o9ZVXa9bAEb+02chhM8rfpNEUNA6yafK/57MqbdZ/e6OsE0LGJk/QPUJaSsJPOlaaA6YLvhLyXeCs87SKFSHNCiACf4ghAC/DmZZW95otm3bXmofMNJ90wGWaauvaNQnkScg+omc7x9bjvpijIAM0Gk7ACD/IYTwggu8RBC9rp0GMGqwfwi1A0wbGglQwbm+LIxA9YcJ/1BhxuGrfTMjaMMDpgQLZuYbmL0roTrTEgbYpgNtWMDIFH4v0FjQTi9CCN+NCFUBNmg1+JISv20a0IYDjBznL0MIXzP9hCnB2n8bdSh8M2DjFHw3OhM09bBlKMBijHCIobU4wdBbgOUAGgYDX4wavB0CMIU5hOP+fEanl6tqFBptSLN5OWAxxmQOOVpr6N7KhUdyXYwRPhpGz5zA7nDyuQww8rVgDmEWOQWBx69mcuA5H8W5RqHNvh7FN7sEMJov/BezV8LXQgwIUykPXWKMGARAm3EKgsqfXu1GdAeMTCIXFqh8COlh010OBgEIZ6Bzcl2KS+XXFbAY47cwc5zuR9M5EM5l0XdmPbtfRibz30wLgPphQMTt1K7f0wUw8rcgECT6cQrm37ggcp53u2sUkF3ilzUHTCEI+FvcIOvtwJF8kEK2CMw+l7zDem1TwBQCWHAJW1QhY8QQEZjt4no0A0w4UoRYF1xCuNLlCsgwaPqoB2RNACO44HNxRjqQE1JpPlXKd932dlUU/FuJzLtA5g6YojchFPFBj950dxIp6o/gNbcg6fIj7sWa61wBU8IFVc1KUdZ84KPdE2NEOALTb9yC9OwvuBdLr3MDTAEX6oo4F5zOVRwlEGOEqZTklzUbXXoC9h9BnGs59Y5A7R9FnR3twfWB8YgmwVgXwIQRenwMVu6831DGD/9oyq3DlJKkwF1xXRRsBizGiMlXaWD0/eV3Sdpdd63CH0NsDAMuN5/YBBgNjaGKJaWpUympyN2vpSk6tA8nlyyJwzV8oQZM6dSjZ6xRY0eylabSzem3AIYUXe4ChSTSz++yYrkjI+ZXKUaVeKeLP6YCTBHQW469GRP9A5SjSpcAuBgwpWmEdJb20jNivlOYDZveZzaVGsA0pnGFJcyI2B5ADv9/hbExs6kUAaY0jUt72dhwu1upxUymUgoYeoBkyLt8Lzc87A8yaDF1KhUbMGVAdWkvOxeuT1AEX/F+BGARHBcnKbIAU45ClvZyRcPnYbSzDybDpUXl8HMB0zj2+IAVtZc2Y4frlXEx1Ew8xVcFjLQXfC9NEVdI85J1j0wCMUas2MISQmkRKwwOYFrt1TxbUiqddf1bCRicfbEWKwJm1F4rsDow0QYzKVqzWgNMq73EpA/cFresmiGmKRpR1gDTxL3QIMs8Do4lmcnflNVkx8VOATMQjjov86hsuZ63Gczk79u2PePUtQSYNMc+f98aPXKkf/E1htEkas5K5zkETJmpmsSlmtjOTkG7WOxur09px8Me9WcIurLdoDPALM69OFZCQ2fJ5mpuFHR8UDpxLR1f84v3AgvNt8QY4YdJVh/lr3lWmz46A0zr3OPln2zb9kr6sdSb0lo+fPCVx+9Jq2+5Hqt4sDb0lediC26FDH4YXlFd6vYEMKPadA9PZKdiSNOzuTIe6bp0xB9gE08saz5EOfmdXlWNFhwBZjGP7NGFVBiKjXC5r4DJQsPixLX8mOSj+6FZ82OXoWXxb+7GetI6NT+fSLkohG0mjwCzmMcq0VwJn11nHPnsH4t9stChTIViSoAMJh6HXUmW7dfe3XT/e+NsDepelOEfADOOHvEydgCuJtXS7xVbFZ09zgWw/cOp0QCZ9Ayis3pCs2ILzCZnSBod/eKgbg8YNv2XbP+zF4jKwdfA5qTJmgCWf4+zaW+yrtTo6BfDUnvAsJcB92CEIy6w7LzbluNGwVTVuwb8gmlHqjnka/XX3M8NiDFa/O7iwG4PmCUmErZtq6b/ODcazJAmOzNVo7kGOzCfyMXCfh7a2FN6pNuu0Q7W4FSO74Bw8L9w+CfOrO5ajFqsO2AQjmFt6V62qqD2AfSwWtKdePLHnKbw5IBZX9J8BHlErjGOcwlgBBk0GGYvJLsRHonADFlL5ZIDJt16sUlvkqo/YxznMsDSdyrXKrrK3pi6g7qcxj9zwKTbLu4/skuI4iQkoF0zcDlgpM085mFNPpkxVHHq6OeAWdJzuo7IDiCLUs1H1w8BmCNkrBSaE1fDEmDHIw9DVDlg2kZK9VV/nBKOd7fFGLXCGQYwgswaLlAv8zcOllD9w4nvN4A5OHl4zALM2FOUOxLu36o61MIhFnY42EiAWeNJpzbYKHPW7XfRYFlnl5zYcSQjcWd3AAwZIE+C9Akw6xQRPrKafMaiRXHRnQBz8sfEptJhNHsYB02AmUcxvaP4OYc3BAwxMunmvaZRvQNgh3OSCTBrDKz7NNGdASMtZrUqovWLDtNFhwwkwKyjl2aJhhyLeTcNlr7ZITZVTWnO3mUF+tBNSoBZsyhUK4k48HCuuTFgVteFPX1nXAebmunJcsUEmDWKvwDj9AThNQ5TOOzw0QKs0Dh31WDki1k7P2sKzzinuzTYCZ9DRfKP6uigWVjWxWE12aG2XCbSYdGH0PKJLncyk9WtHBZgD2oincxkdTS5AHtswKyjyWpSYmvAVphCZLj6XuzQ+FU/zOEdEMppmMIaaK1+QMsmufMokkwkpo60m8Ul0Rfnih0GE00BW5H8lj3obUqVNuct1ay4pNAJsCcQr8nuwUeR2VSO1Y0phmQ8ADtKeHBL11nZFG1VmEO+VnEk6TDZXcymsC5ZO7S/bUX+/6cbzMfwgdZMg1lHksWIvkO6TjEfDMvZpYe77/mpBvNaAfcggFmzHYr72xvXl6JpDyfWk4n0GKWI03S9gFuAsSRZjIU5mOBDgPNVRaZ9KWr7RLFEoLxoAcYSXA0w66T6+aoiirXMvC5SO4SfyQezmsiaD2YF7NCCeW4dwEoLYfU14UVLg7EEVgNM20mLgdwcMO0Rb+kF1fkulhgUFz0IYNb2qcXBLAuvWXtTWEeSl2zfROZd2/tmMpHWMMXpIMxhn9bT1Oxcg2EkiYbSbox22Xzkg2gw68qv07lIh4nuU/O73+HQ6uhdsvj2QQCzTBUV54odpolOteMeMKsa7rpHaxblfgQTaRnlHy7rz+TXTDvuAbPuUXGJT/MgGszihNfmIS2Wq7g0bg+Y1Q8THberGDAe3nJ3wBx2P6ql6li0YzH8cXTSRzOavYDaP+cBALOEKIqDL4dFJcUpwiPALBHjSxIPHwAwi4Nfm+S2uEXVyMERYNaJ7+6O/gMAZpknLma5GPPAqsH1w4MTjNspVpdIeZvKOwNmDCEUR48UpLZox2oGzRlglgTE6kctwPgSiDE2BcCwg0/VPOIrzwCzjCa7+2F31WDGKZzqzjrG0SkrueEQMFKdluBbVXXy+3D9yhsDZllOWPWFjf4XK4O5BJhldMGiu44O74o7AmbUXlXnm5SINiTFev6picymELQVqKpnHjq8q24KmFb2rDMljfEvtoU61WBEuEWLsVQoD6HyVXcDLMaI4/4wL6wpn27b9kPtRsPolOXcp/cXATOq0W5m8k6A9XC8jeGJzyVHO3MA04YsuiUg3gUw4zmS7Hlgg38n0l5VH8zBF2Pb6ppKL/3+DoCR5kLMC0cvS8vLbdswxccqBvMo0l4SwLS+GLtXsSRzctHsgMUYPwshICykySYWwUXmUZM/J9ZebMAMvpjoMAAtZLMCRiM5OPTIltAUcQc2pEeLtZcUMK0Wa+7szwgYNfT3SpOItlPN+SpXcKtOcBMBRlpME1lursVmAozAgtZCh9UUxLkQivhZerPBuVeHnKqjyPwjSKVrVh6p1CtXgDMA5gAWxPEC8bFt29BpxUWpvUwWSAQYaTFNdqXKQeRKcETAqDNirSnCPHDiNQ58EsGPIQQ0NH6qilJ7iY8F3FdODJjB4W+mxUYAjBoQQL1HUOHvFqggajNYqcGV2svcZlrAEKvBQgGJAJv5YgbAvqFG5GqFFKP6E3ZUDiHgJ0DC/0tkUXof5ARTCMda7GcdPVipvdgT2qWPUQFmMJUme372IQbAuGC1vg6m6BVBpTaDBflIB2esCXOOUNSAEWTSiqN3Ik8JH+BWJgQMmumnEAJ+IvPEVR65YJXay20GxgqY5uhf91SeCQEDUBgNvnTrZScPijFK1zy6WhkTYKTFNP4YK6WEK3wDYEhr+SV7DzoM/KrkU3n6Vkefo45pcWSjmHNUB1TP6mMGjCCTrqV0dfgNgFW3OshGhwg3fGiIvJeYgKuByLwqvlVw7JG0yJ08d/O78vq4AEaQSTdOcTOVLQHbNx4FTNGhENvyLK4NLFyN1MQ3hnDcAFM6/ar5tING12QH4DFVDVYYmUEzoFN5gwbfDOETdVFkxLq6LE00WHqoYtFudfVLTdI9NdgB3C1A+27btue17z4xjdKdKl06eVMfLH84TZHA9uNDOcVsGq4ELOtYmLy2ZEfsZYV4GDQL2y9TZMS6jhiPGtvVRGbCxmhMChk0GVuYO6i7m8gT7eGtzRAnQ0yqKhfq2AhJcJ365nC5+2BGTcYW5gg+WEk1O5z7kz+eJRdhvKsLXE0BI6dfqslYwhwdMPp2jDS/dZqjLMolxgjTzM3J7wZXc8AykymZUhJDNoIPVnC44Sp4TIQ/CeuQWQTEQ8LVDTDq0ZI4GSCDg8uaoxsVMPpuDHa8IHs3uhQOpuDDYbSIjt61NHHyz75AuNkGe3Q5MmANIENHxRwmN0rfdDqqRmtXwDJhc9f/QTjoecWl8KMD1gAyaCSO2RVZghosmt93B4yEjaE0HFPuwodidHsGwOi7tSuzNG1ryt/XvPDonksAy5x/iV+GwCOmdp74ZbMAlo0u0blaFWg3jBSxkPfycilgmTaT+BNP8qhmAkwx4JFActoJJQ/xvPZywJTaDD4ZfLM32mw2wKjO2v2/jtp/KK2VV3AYwBTaDLdg2I3MA64G3DeOOpvC2ssVUzulV5oTBqzfc3b/UIBl2gyBQ6x+5syrQYtxrjuSwWWAUYfycvrV2RetwErPHRKwTJsl0FrJ4VLA6Dst25TncnFbqOEp7GEBy7SZd4ZCLr9LACPz+CWFabihmlq7m1dh116g+f3wgB2A5pkX3w0wSrVG3QGUF1T7Nu86kc0BbhrAdqChgbg+WkkOTQAjDQXNC6DS/hScyDunzWrXqHfCqT1Y8/vpAMs/0mEBBob3mE7BTyxfg5nBH/wbJ5acTrZT9iiqA5DSH+xLAfi1gw5NG+7vcVtM41GZqQHLtJo2o9VDhh7PQIAUsb1fQwhw+q1lGId/AWZtSt390JAACtsHYLHru5RoxaKZoxoM4/AvwHSASO9Cg0NLwRzjNLqa6ZXuXHRUnyEc/kcHDFoE2sNjq4DkuwEimDr8G3/H5nvVRRs731KSBHAGe7PFtJLe9eiAHY4idw78mTyTFsJgQARQrYEcp5Eud/gXYBekEdcAw+8N243vH3+pw78AGxQwgsxjGqnp/ri1zrIAGxswzdZYQzn8C7CBASMt5uXwI8Lv6ivWtBd+vwAbHDCCTLpL4VHbu2zqy4Eqv2YBNgdgXnlj3R3+BdgEgJEWk6yOP1M03cMWC7B5AEM2huYYnz1sTfcD279sATYJYKTFNMf47NvcdX/cmk+2AJsIMEeHv1sO/wJsPsCmcvgXYJMBRloMq7aR028pXRz+BdicgHk5/ObT1GqEL8AmBGwmh38BNilgBJnH9gNNExMXYHMD5uXwN1uJtACbGLAZHP4F2PyADe3wL8AmB2x0h38BdgPAHB1+9wj/Auw+gEkPwToLYbmm9CzAbgKYo8Pvumj30QHrmrpSi3pbf0/L3TxSetxM5aMD1jTIaAVGc/9oy93uAthvzIMJ9m32Yts25FjdqsQYPSbDXUzl9ICRWQBgmnLJQghNRSX3OJpKs3zuAJhluuTSRakSaKTXCs+FKj3e5KfeATBrGvGzK9YLSoHRXO+0FRRSrBG6wEYu4nIHwKwZBaYeKpZ4xxtoExePraDYJ9/tP29qwEiAGJZbSpfMTksFLfc6mkrxQbGo9+yAeawVhBxco9cWIFrc62QqUTWx0z8tYDFGHNLgdWqZqne2gKHFMx33GxNDNiVgZBq15xOdtaFb9LoFJNZnOgZgURX2qW7TAdYIrtR+xYNPrY189f1OAdj0GXD8nxytOLWTT70Qm7K1PNTgD0cFXg2F9/sd/bFUtTcn3p1tbDyFBiOwcLJHqyNYjtqxKDjvhu/1PMfQRV5lxMogL0y9/WEH7SEBIyEAJuQ4fXz1yRm0pz1OAvn5DkFZZ39s3zdgAV6SrF4PA1iMESuVEZW/8hgWriJBL/1q27ZX3BtGu87ZHzv7vN9HAuwT0lajtcVZfV5u24bR1LQlxojtOXG+UrPyPwWACugoVQt3AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
      <div class="flex items-center">
        <div class="relative mr-3">
          <span
            class="bg-blueish absolute -top-2 -right-1.5 rounded-full px-1.5 text-xs font-semibold leading-5 text-white"
          >
            2
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 22"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-black-900 h-6 w-6 dark:stroke-white"
          >
            <path d="M1 21H19" />
            <path
              d="M3.59998 7.38H2C1.45 7.38 1 7.83 1 8.38V17C1 17.55 1.45 18 2 18H3.59998C4.14998 18 4.59998 17.55 4.59998 17V8.38C4.59998 7.83 4.14998 7.38 3.59998 7.38Z"
            />
            <path
              d="M10.8002 4.19H9.2002C8.6502 4.19 8.2002 4.64 8.2002 5.19V17C8.2002 17.55 8.6502 18 9.2002 18H10.8002C11.3502 18 11.8002 17.55 11.8002 17V5.19C11.8002 4.64 11.3502 4.19 10.8002 4.19Z"
            />
            <path
              d="M17.9999 1H16.3999C15.8499 1 15.3999 1.45 15.3999 2V17C15.3999 17.55 15.8499 18 16.3999 18H17.9999C18.5499 18 18.9999 17.55 18.9999 17V2C18.9999 1.45 18.5499 1 17.9999 1Z"
            />
          </svg>
        </div>
        <div class="relative mr-3">
          <span
            class="absolute -top-2 -right-1.5 rounded-full bg-red-500 px-1.5 text-xs font-semibold leading-5 text-white"
          >
            2
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 22"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-black-900 h-6 w-6 dark:stroke-white"
          >
            <path
              d="M9.02009 1.91C5.71009 1.91 3.02009 4.6 3.02009 7.91V10.8C3.02009 11.41 2.76009 12.34 2.45009 12.86L1.30009 14.77C0.590088 15.95 1.08009 17.26 2.38009 17.7C6.69009 19.14 11.3401 19.14 15.6501 17.7C16.8601 17.3 17.3901 15.87 16.7301 14.77L15.5801 12.86C15.2801 12.34 15.0201 11.41 15.0201 10.8V7.91C15.0201 4.61 12.3201 1.91 9.02009 1.91Z"
            />
            <path
              d="M10.8699 2.2C10.5599 2.11 10.2399 2.04 9.90992 2C8.94992 1.88 8.02992 1.95 7.16992 2.2C7.45992 1.46 8.17992 0.940002 9.01992 0.940002C9.85992 0.940002 10.5799 1.46 10.8699 2.2Z"
            />
            <path
              d="M12.02 18.06C12.02 19.71 10.67 21.06 9.02002 21.06C8.20002 21.06 7.44002 20.72 6.90002 20.18C6.36002 19.64 6.02002 18.88 6.02002 18.06"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>

import React from 'react';
import gda from '../../../assets/images/gda.jpg';
import dataFiscal from '../../../assets/images/data.jpg';

export default function FooterContainer(props) {
    
    return (
        <footer>
            <div className="lay">
                <section className="row footer-header">
                    <section className="col-desksm-4 col-desk-6 footer-header__logo">
                        <a href="https://www.lanacion.com.ar/" className="">
                            <i className="logo-la-nacion"></i>
                        </a>
                    </section>
                    <section className="col-12 col-desksm-4 col-desk-3 footer-header__redes">
                        <a href="https://www.facebook.com/lanacion" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
                        <a href="https://twitter.com/LANACION" target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i></a>
                        <a href="https://www.instagram.com/lanacioncom/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                        <a href="http://servicios.lanacion.com.ar/herramientas/rss/ayuda" target="_blank" rel="noopener noreferrer"><i className="icon-rss"></i></a>
                    </section>
                    <section className="col-12 col-desksm-4 col-desk-3 footer-header__app">
                        <a href="https://play.google.com/store/apps/details?id=app.lanacion.activity&amp;hl=es_419" target="_blank" rel="noopener noreferrer" className="app_play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35" viewBox="0 0 120 35">
                            <defs>
                                <lineargradient id="a" x1="60.827%" x2="26.926%" y1="4.947%" y2="71.916%">
                                    <stop offset="0%" stopColor="#00A0FF"></stop>
                                    <stop offset=".657%" stopColor="#00A1FF"></stop>
                                    <stop offset="26.01%" stopColor="#00BEFF"></stop>
                                    <stop offset="51.22%" stopColor="#00D2FF"></stop>
                                    <stop offset="76.04%" stopColor="#00DFFF"></stop>
                                    <stop offset="100%" stopColor="#00E3FF"></stop>
                                </lineargradient>
                                <lineargradient id="b" x1="107.622%" x2="-130.536%" y1="50.016%" y2="50.016%">
                                    <stop offset="0%" stopColor="#FFE000"></stop>
                                    <stop offset="40.87%" stopColor="#FFBD00"></stop>
                                    <stop offset="77.54%" stopColor="#FFA500"></stop>
                                    <stop offset="100%" stopColor="#FF9C00"></stop>
                                </lineargradient>
                                <lineargradient id="c" x1="86.253%" x2="-50.188%" y1="30.544%" y2="137.67%">
                                    <stop offset="0%" stopColor="#FF3A44"></stop>
                                    <stop offset="100%" stopColor="#C31162"></stop>
                                </lineargradient>
                                <lineargradient id="d" x1="-18.77%" x2="42.12%" y1="-12.973%" y2="34.805%">
                                    <stop offset="0%" stopColor="#32A071"></stop>
                                    <stop offset="6.85%" stopColor="#2DA771"></stop>
                                    <stop offset="47.62%" stopColor="#15CF74"></stop>
                                    <stop offset="80.09%" stopColor="#06E775"></stop>
                                    <stop offset="100%" stopColor="#00F076"></stop>
                                </lineargradient>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <rect width="119.862" height="35" fill="#5A5A5A" rx="3"></rect>
                                <g fillRule="nonzero">
                                    <path fill="#FFF" d="M60.299 19.04c-1.72 0-3.123 1.305-3.123 3.096 0 1.785 1.404 3.096 3.123 3.096 1.718 0 3.123-1.31 3.123-3.096 0-1.791-1.405-3.095-3.123-3.095zm0 4.976c-.944 0-1.756-.772-1.756-1.88 0-1.114.812-1.879 1.756-1.879.943 0 1.755.765 1.755 1.88 0 1.107-.82 1.879-1.755 1.879zm-6.817-4.975c-1.718 0-3.123 1.304-3.123 3.095 0 1.785 1.405 3.096 3.123 3.096 1.719 0 3.123-1.31 3.123-3.096 0-1.791-1.404-3.095-3.123-3.095zm0 4.975c-.943 0-1.755-.772-1.755-1.88 0-1.114.812-1.879 1.755-1.879.944 0 1.756.765 1.756 1.88 0 1.107-.812 1.879-1.756 1.879zm-8.103-4.021v1.311h3.16c-.096.736-.345 1.282-.718 1.654-.46.459-1.177.961-2.435.961-1.945 0-3.467-1.559-3.467-3.496 0-1.938 1.522-3.497 3.467-3.497a3.35 3.35 0 0 1 2.377.94l.929-.925c-.79-.75-1.836-1.326-3.313-1.326-2.662 0-4.9 2.156-4.9 4.815 0 2.651 2.238 4.815 4.9 4.815 1.44 0 2.523-.466 3.371-1.348.87-.867 1.141-2.09 1.141-3.074 0-.306-.022-.59-.073-.823h-4.44v-.007zm33.138 1.02c-.256-.692-1.046-1.974-2.662-1.974-1.602 0-2.933 1.253-2.933 3.095 0 1.734 1.317 3.096 3.086 3.096a3.085 3.085 0 0 0 2.59-1.37l-1.061-.706c-.351.517-.834.86-1.529.86-.694 0-1.192-.32-1.506-.94l4.161-1.712-.146-.35zm-4.242 1.034c-.036-1.195.929-1.806 1.624-1.806.54 0 1.002.27 1.155.655l-2.779 1.151zm-3.379 3.001h1.368v-9.105h-1.368v9.105zm-2.238-5.317h-.051c-.307-.365-.892-.692-1.638-.692-1.558 0-2.984 1.362-2.984 3.11 0 1.734 1.426 3.089 2.984 3.089.738 0 1.33-.328 1.638-.707h.044v.444c0 1.188-.636 1.821-1.66 1.821-.834 0-1.353-.597-1.565-1.1l-1.193.496c.344.823 1.251 1.828 2.758 1.828 1.601 0 2.954-.94 2.954-3.227V19.23h-1.294v.503h.007zm-1.572 4.283c-.944 0-1.734-.787-1.734-1.865 0-1.093.79-1.887 1.734-1.887.929 0 1.66.802 1.66 1.887.007 1.078-.724 1.865-1.66 1.865zm17.838-8.071h-3.27v9.105h1.368v-3.453h1.91c1.513 0 2.998-1.092 2.998-2.826 0-1.733-1.5-2.826-3.006-2.826zm.03 4.385h-1.94v-3.125h1.94c1.023 0 1.6.845 1.6 1.559s-.577 1.566-1.6 1.566zm8.44-1.304c-.988 0-2.012.437-2.436 1.391l1.214.503c.256-.503.738-.67 1.243-.67.702 0 1.426.422 1.433 1.173v.094a3.064 3.064 0 0 0-1.426-.35c-1.309 0-2.633.715-2.633 2.048 0 1.216 1.068 2.003 2.268 2.003.914 0 1.426-.408 1.74-.889h.044v.707h1.317v-3.49c.007-1.617-1.207-2.52-2.765-2.52zm-.17 4.99c-.445 0-1.067-.226-1.067-.772 0-.7.775-.97 1.448-.97.6 0 .885.132 1.243.307a1.648 1.648 0 0 1-1.623 1.435zm7.739-4.793l-1.565 3.948h-.044l-1.624-3.948h-1.47l2.435 5.521-1.39 3.067h1.427l3.752-8.588h-1.521zM88.676 25.05h1.367v-9.105h-1.367v9.105z"></path>
                                    <path fill="url(#a)" d="M.64.41C.42.647.292 1.012.292 1.476v16.82c0 .472.128.837.346 1.065l.053.053L10.028 10v-.228L.692.357.64.411z" transform="translate(17.378 7.864)"></path>
                                    <path fill="url(#b)" d="M13.14 13.14L10.028 10V9.77l3.112-3.14.068.038 3.684 2.114c1.055.6 1.055 1.589 0 2.197l-3.684 2.114-.068.046z" transform="translate(17.378 7.864)"></path>
                                    <path fill="url(#c)" d="M13.208 13.094l-3.18-3.209L.639 19.36c.347.373.92.418 1.568.046l11-6.312" transform="translate(17.378 7.864)"></path>
                                    <path fill="url(#d)" d="M13.208 6.676L2.199.365C1.551-.008.98.038.632.411l9.396 9.474 3.18-3.209z" transform="translate(17.378 7.864)"></path>
                                    <g fill="#000">
                                        <path d="M30.517 20.89l-10.94 6.273c-.61.35-1.16.327-1.507.008l-.053.053.053.053c.354.32.897.342 1.507-.008l11.008-6.31-.068-.07z" opacity=".2"></path>
                                        <path d="M18.017 27.117c-.218-.235-.346-.6-.346-1.064v.114c0 .471.128.836.346 1.064l.053-.053-.053-.06z" opacity=".12"></path>
                                    </g>
                                    <path fill="#000" d="M34.27 18.738l-3.76 2.152.068.068 3.684-2.114c.528-.304.791-.7.791-1.095-.037.358-.301.715-.783.989z" opacity=".12"></path>
                                    <path fill="#FFF" d="M19.577 8.335l14.693 8.426c.475.273.746.623.791.988 0-.395-.264-.798-.791-1.095L19.577 8.23c-1.055-.6-1.914-.099-1.914 1.118v.114c0-1.224.867-1.726 1.914-1.126z" opacity=".25"></path>
                                    <g fill="#FFF" stroke="#FFF" strokeWidth=".2">
                                        <path d="M39.902 11.837v-4.07h1.364c.685 0 1.236.19 1.646.563.41.38.618.868.618 1.472s-.208 1.092-.618 1.472c-.41.373-.954.563-1.639.563h-1.37zm.574-.502h.79c.514 0 .923-.135 1.229-.407.305-.271.454-.644.454-1.133 0-.481-.149-.854-.454-1.126-.306-.271-.708-.407-1.23-.407h-.79v3.073zM44.342 11.837v-4.07h.574v4.07zM47.203 11.926c-.328 0-.64-.095-.954-.292a1.346 1.346 0 0 1-.61-.814l.521-.19c.06.224.186.414.38.563.194.156.41.23.655.23.246 0 .462-.06.641-.176a.557.557 0 0 0 .268-.488c0-.224-.089-.4-.268-.523-.179-.122-.454-.237-.842-.346-.394-.115-.692-.257-.901-.44a.89.89 0 0 1-.306-.693c0-.291.127-.542.38-.76.254-.216.589-.325.991-.325.38 0 .686.088.924.258s.395.36.462.563l-.522.197a.691.691 0 0 0-.275-.36c-.15-.108-.335-.163-.574-.163a.92.92 0 0 0-.566.17c-.156.115-.231.25-.231.42 0 .15.075.279.216.387.142.102.358.197.633.278.224.068.403.13.552.19.149.061.298.143.447.244a1 1 0 0 1 .342.374c.075.149.12.325.12.522s-.045.373-.135.53a.987.987 0 0 1-.357.365 1.837 1.837 0 0 1-.99.278zM50.093 11.837h-.573v-4.07h1.52c.38 0 .707.115.983.346.276.23.417.516.417.868 0 .346-.141.638-.417.869-.276.23-.604.346-.983.346h-.947v1.641zm0-2.15h.961a.785.785 0 0 0 .582-.224.672.672 0 0 0 .216-.488.702.702 0 0 0-.216-.489.785.785 0 0 0-.582-.224h-.96v1.425zM56.82 11.308c-.439.414-.983.618-1.638.618-.656 0-1.2-.204-1.64-.618a1.975 1.975 0 0 1-.662-1.506c0-.597.216-1.099.655-1.506.44-.414.984-.617 1.64-.617.647 0 1.191.203 1.638.617.44.414.663.916.663 1.506 0 .597-.223 1.1-.656 1.506zm-2.853-.339c.328.305.738.455 1.215.455.476 0 .886-.15 1.214-.455.328-.305.499-.692.499-1.167 0-.475-.164-.861-.5-1.167-.327-.305-.737-.454-1.213-.454-.477 0-.887.15-1.215.454-.328.306-.499.692-.499 1.167 0 .475.164.862.5 1.167zM58.28 11.837v-4.07h.7l2.176 3.168h.023l-.023-.787V7.767h.574v4.07h-.596L58.862 8.52h-.023l.023.787v2.53zM62.75 11.837v-4.07h.574v4.07zM64.352 11.837v-4.07h1.617c.35 0 .655.109.909.312.253.21.387.475.387.794a.797.797 0 0 1-.164.509.988.988 0 0 1-.44.332v.02c.224.068.403.184.544.353a.88.88 0 0 1 .216.584c0 .332-.134.61-.402.827-.283.23-.596.34-.968.34h-1.699zm.574-2.326h1.043a.72.72 0 0 0 .521-.197.574.574 0 0 0 .194-.428.574.574 0 0 0-.194-.427.667.667 0 0 0-.499-.197h-1.065v1.249zm0 1.824h1.154c.224 0 .403-.067.537-.21.134-.142.208-.292.208-.461a.593.593 0 0 0-.216-.455.778.778 0 0 0-.558-.21h-1.133v1.336h.008zM68.181 11.837v-4.07h.574v3.568h1.937v.502zM74.022 8.269h-2.034v1.289h1.833v.488h-1.833v1.29h2.034v.501h-2.608v-4.07h2.608zM79.036 8.269h-2.034v1.289h1.832v.488h-1.832v1.29h2.034v.501h-2.608v-4.07h2.608zM79.93 11.837v-4.07h.7l2.175 3.168h.022l-.022-.787V7.767h.574v4.07h-.596L80.51 8.52h-.023l.023.787v2.53z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        </a>
                        <a href="https://apps.apple.com/ar/app/la-nacion/id410689702" target="_blank" rel="noopener noreferrer" className="app_ios">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35" viewBox="0 0 120 35">
                                <g fill="none" fillRule="evenodd">
                                    <rect width="119.862" height="35" fill="#5A5A5A" rx="3"></rect>
                                    <g fill="#FFF" fillRule="nonzero">
                                        <path d="M31.47 16.317a4.008 4.008 0 0 1 1.9-3.36 4.08 4.08 0 0 0-3.217-1.746c-1.354-.142-2.667.814-3.356.814-.704 0-1.766-.8-2.91-.776a4.284 4.284 0 0 0-3.606 2.208c-1.56 2.71-.396 6.691 1.097 8.881.748 1.073 1.621 2.27 2.764 2.228 1.118-.046 1.536-.715 2.886-.715 1.337 0 1.73.715 2.895.688 1.2-.02 1.956-1.077 2.677-2.16a8.884 8.884 0 0 0 1.225-2.502 3.87 3.87 0 0 1-2.354-3.56zM29.268 9.771a3.952 3.952 0 0 0 .9-2.825c-1 .106-1.924.585-2.587 1.343a3.76 3.76 0 0 0-.922 2.72 3.3 3.3 0 0 0 2.61-1.238z"></path>
                                        <g>
                                            <path d="M45.607 21.851h-3.816l-.916 2.716h-1.617l3.615-10.048h1.68l3.614 10.048h-1.644l-.916-2.716zm-3.42-1.253h3.024l-1.49-4.408h-.043l-1.492 4.408zM55.974 20.905c0 2.276-1.214 3.739-3.046 3.739a2.473 2.473 0 0 1-2.297-1.282h-.035v3.629h-1.498v-9.75h1.45v1.219h.028a2.587 2.587 0 0 1 2.324-1.296c1.853 0 3.074 1.47 3.074 3.74zm-1.54 0c0-1.484-.764-2.459-1.93-2.459-1.144 0-1.914.996-1.914 2.459 0 1.476.77 2.464 1.915 2.464 1.165 0 1.929-.968 1.929-2.464zM64.008 20.905c0 2.276-1.214 3.739-3.046 3.739a2.473 2.473 0 0 1-2.297-1.282h-.035v3.629h-1.498v-9.75h1.45v1.219h.028a2.587 2.587 0 0 1 2.324-1.296c1.853 0 3.074 1.47 3.074 3.74zm-1.54 0c0-1.484-.764-2.459-1.929-2.459-1.145 0-1.915.996-1.915 2.459 0 1.476.77 2.464 1.915 2.464 1.165 0 1.93-.968 1.93-2.464zM69.318 21.767c.111.997 1.076 1.651 2.394 1.651 1.263 0 2.171-.654 2.171-1.553 0-.78-.548-1.247-1.845-1.567l-1.298-.313c-1.838-.446-2.692-1.309-2.692-2.71 0-1.733 1.506-2.924 3.643-2.924 2.116 0 3.566 1.191 3.615 2.925h-1.512c-.09-1.003-.917-1.608-2.124-1.608s-2.033.612-2.033 1.504c0 .71.528 1.128 1.818 1.448l1.103.272c2.054.487 2.908 1.316 2.908 2.785 0 1.88-1.492 3.058-3.865 3.058-2.22 0-3.72-1.15-3.817-2.968h1.534zM78.7 15.507v1.734h1.388v1.191H78.7v4.039c0 .627.278.92.888.92.165-.003.33-.015.493-.035v1.184a4.1 4.1 0 0 1-.832.07c-1.478 0-2.055-.558-2.055-1.979v-4.199h-1.061v-1.19h1.061v-1.735H78.7zM80.892 20.905c0-2.306 1.352-3.754 3.462-3.754 2.116 0 3.463 1.448 3.463 3.754 0 2.311-1.34 3.753-3.463 3.753s-3.462-1.442-3.462-3.753zm5.398 0c0-1.582-.722-2.515-1.936-2.515s-1.936.94-1.936 2.515c0 1.587.722 2.513 1.936 2.513s1.936-.926 1.936-2.513zM89.052 17.241h1.43v1.247h.034c.2-.803.932-1.355 1.756-1.324.172 0 .344.019.513.057v1.406a2.088 2.088 0 0 0-.673-.09 1.507 1.507 0 0 0-1.167.482c-.3.324-.444.763-.395 1.203v4.345h-1.498v-7.326zM99.693 22.415c-.201 1.33-1.492 2.243-3.143 2.243-2.123 0-3.441-1.428-3.441-3.719 0-2.298 1.325-3.788 3.378-3.788 2.02 0 3.29 1.392 3.29 3.614v.515H94.62v.09c-.048.546.14 1.086.515 1.483.376.397.904.613 1.449.593a1.65 1.65 0 0 0 1.686-1.03h1.422zm-5.065-2.186h3.65c.027-.49-.15-.97-.49-1.322a1.752 1.752 0 0 0-1.3-.537 1.845 1.845 0 0 0-1.316.54c-.35.35-.545.824-.544 1.319z"></path>
                                        </g>
                                        <g>
                                            <path d="M40.243 9.581c0-1.675.83-2.71 2.165-2.71.999-.053 1.868.725 2 1.79h-.744c-.129-.628-.658-1.067-1.256-1.042-.863 0-1.403.756-1.403 1.962 0 1.203.54 1.958 1.406 1.958.576.047 1.102-.353 1.253-.952h.743c-.15 1.04-1.02 1.78-1.996 1.7-1.336 0-2.168-1.034-2.168-2.706zM45.224 10.212c-.062-.7.25-1.376.805-1.746a1.618 1.618 0 0 1 1.812 0c.555.37.867 1.047.805 1.746.063.7-.248 1.377-.804 1.748-.555.37-1.259.37-1.814 0-.556-.371-.867-1.049-.804-1.748zm2.686 0c0-.846-.354-1.34-.974-1.34-.622 0-.972.494-.972 1.34 0 .851.35 1.342.972 1.342.62 0 .974-.494.974-1.342zM49.607 8.264h.689v.62h.054c.186-.457.62-.736 1.082-.695.358-.03.708.118.952.4.245.282.356.669.304 1.05v2.524h-.716V9.832c0-.627-.253-.938-.783-.938a.804.804 0 0 0-.644.28.937.937 0 0 0-.222.708v2.28h-.716V8.265zM55.122 8.189c.816 0 1.349.408 1.419 1.095h-.687c-.066-.286-.326-.469-.732-.469-.4 0-.704.204-.704.508 0 .233.184.38.577.477l.603.15c.69.172 1.013.49 1.013 1.064 0 .733-.636 1.224-1.503 1.224-.863 0-1.426-.42-1.49-1.11h.718c.127.338.453.54.789.487.446 0 .763-.215.763-.527 0-.232-.17-.383-.533-.476l-.633-.157c-.69-.176-1.01-.509-1.01-1.089 0-.69.59-1.177 1.41-1.177zM57.515 7.612l.836-1.231h.84l-.936 1.231h-.74zm.074.652h.713v3.899h-.713v-3.9zM59.417 12.553h.732c.06.283.364.465.847.465.596 0 .95-.304.95-.82v-.748h-.054c-.229.427-.661.68-1.12.655-.926 0-1.498-.77-1.498-1.937 0-1.188.579-1.969 1.506-1.969.469-.017.908.248 1.139.688h.057v-.623h.686v3.93c0 .892-.65 1.458-1.676 1.458-.907 0-1.493-.437-1.57-1.1zm2.542-2.388c0-.777-.374-1.275-.983-1.275-.617 0-.963.498-.963 1.275 0 .777.346 1.274.963 1.274.613 0 .983-.494.983-1.274zM66.861 12.163h-.69v-.62h-.056c-.188.461-.63.741-1.096.695a1.137 1.137 0 0 1-.946-.4 1.329 1.329 0 0 1-.304-1.043V8.264h.717v2.33c0 .63.236.931.762.931a.792.792 0 0 0 .666-.26.926.926 0 0 0 .23-.72V8.263h.717v3.899zM71.07 11.11c-.2.735-.863 1.21-1.572 1.128a1.597 1.597 0 0 1-1.271-.59 1.86 1.86 0 0 1-.405-1.423 1.89 1.89 0 0 1 .404-1.428c.32-.39.784-.613 1.269-.608 1.01 0 1.618.74 1.618 1.965v.269h-2.562v.043c-.022.289.07.575.254.788a.929.929 0 0 0 .713.329.854.854 0 0 0 .863-.473h.689zm-2.519-1.257h1.833a.983.983 0 0 0-.238-.717.846.846 0 0 0-.655-.292.896.896 0 0 0-.668.292c-.177.19-.275.449-.272.717zM72.108 6.742h.716v5.42h-.716zM73.82 10.212c-.063-.7.249-1.376.804-1.746a1.618 1.618 0 0 1 1.812 0c.555.37.867 1.047.805 1.746.063.7-.248 1.377-.804 1.748-.555.37-1.259.37-1.814 0-.556-.371-.867-1.049-.804-1.748zm2.685 0c0-.846-.354-1.34-.974-1.34-.622 0-.972.494-.972 1.34 0 .851.35 1.342.972 1.342.62 0 .974-.494.974-1.342zM83.238 11.11c-.2.735-.863 1.21-1.572 1.128a1.597 1.597 0 0 1-1.271-.59 1.86 1.86 0 0 1-.405-1.423 1.89 1.89 0 0 1 .404-1.428c.321-.39.784-.613 1.269-.608 1.01 0 1.618.74 1.618 1.965v.269H80.72v.043c-.023.289.069.575.253.788a.929.929 0 0 0 .713.329.854.854 0 0 0 .863-.473h.69zM80.72 9.853h1.832a.983.983 0 0 0-.238-.717.846.846 0 0 0-.655-.292.896.896 0 0 0-.668.292c-.177.19-.275.449-.271.717zM84.243 8.264h.69v.62h.053c.186-.457.62-.736 1.082-.695.358-.03.708.118.953.4.244.282.356.669.303 1.05v2.524h-.716V9.832c0-.627-.253-.938-.783-.938a.804.804 0 0 0-.644.28.937.937 0 0 0-.222.708v2.28h-.716V8.265zM93.468 11.11c-.201.735-.863 1.21-1.572 1.128a1.597 1.597 0 0 1-1.272-.59 1.86 1.86 0 0 1-.404-1.423 1.89 1.89 0 0 1 .404-1.428c.32-.39.783-.613 1.268-.608 1.01 0 1.619.74 1.619 1.965v.269h-2.562v.043c-.023.289.07.575.253.788a.929.929 0 0 0 .713.329.854.854 0 0 0 .863-.473h.69zm-2.519-1.257h1.832a.983.983 0 0 0-.238-.717.846.846 0 0 0-.655-.292.896.896 0 0 0-.667.292c-.177.19-.275.449-.272.717zM94.505 6.742h.716v5.42h-.716z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </section>
                </section>
                <section className="row footer-sitio">
                    <section className="col-desksm-9 col-deskxl-8 footer-sitio__links">
                        <a href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html" className="item_link">Mapa del sitio</a>
                        <a href="https://micuenta.lanacion.com.ar/ayuda" className="item_link">Ayuda</a>
                        <a href="https://micuenta.lanacion.com.ar/tyc" className="item_link">Términos y condiciones</a>
                        <a href="https://www.lanacion.in/#/" className="item_link">¿Cómo anunciar?</a>
                        <a href="https://suscripciones.lanacion.com.ar/suscribirme/" className="item_link">Suscribirse al diario impreso</a>
                    </section>
                    <section className="col-desksm-3 col-deskxl-4 footer-sitio__captcha">
                        <p>Protegido por re CAPTCHA: <a href="https://policies.google.com/terms?hl=es-419" target="_blank" rel="noopener noreferrer" className="condition">Condiciones</a> <a href="https://policies.google.com/privacy?hl=es-419" target="_blank" rel="noopener noreferrer" className="private">Privacidad</a></p> 
                        {/* <!--<section className="row ">
                            <section className="col-desksm-6 col-deskxl-7">
                                <p>Protegido por re CAPTCHA:</p>
                            </section>
                            <section className="col-desksm-6 col-deskxl-5">
                                <section className="row ">
                                    <section className="col-desksm-12 col-deskxl-6 link">
                                        <a href="https://policies.google.com/terms?hl=es-419" target="_blank" rel="noopener noreferrer" className="condition">Condiciones</a>
                                    </section>
                                    <section className="col-desksm-12 col-deskxl-6 link">
                                        <a href="https://policies.google.com/privacy?hl=es-419" target="_blank" rel="noopener noreferrer" className="private">Privacidad</a>
                                    </section>
                                </section>
                            </section>
                        </section>--> */}
                    </section>
                </section>
                <section className="row footer-copyright">
                    <section className="col-desksm-6 col-desk-6 footer-copyright__fiscal">
                        <p><img src={gda} alt="gda" className="img_gda" /> Miembro de GDA. Grupo de Diarios América <a href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx" target="_blank" rel="noopener noreferrer"><img src={dataFiscal} alt="Data fiscal" className="img_data-fiscal" /></a></p>

                        {/* <!--<section className="row fiscal_row">
                            <section className="col-3 col-desksm-2 col-desk-1 offset-desksm-1 offset-desk-3 logo-gda">
                                <a href=""><img src="https://static.glanacion.com/v2/ln/img/gda.jpg" alt="" className="img_gda"></a>
                            </section>
                            <section className="col-6 col-6 gda">
                                <p>Miembro de GDA. Grupo de Diarios América</p>
                            </section>
                            <section className="col-3 col-desksm-1 col-1 data-fiscal">
                                <a href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx" target="_blank" rel="noopener noreferrer"><img src="https://static.glanacion.com/v2/ln/img/data.jpg" alt="" className="img_data-fiscal"></a>
                            </section>
                        </section>--> */}
                    </section>
                    <section className="col-desksm-6 col-desk-6 footer-copyright__reserved">
                        <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
                    </section>
                </section>
            </div>
        </footer>
    )
}
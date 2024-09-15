export function renderContact(obj, index) {
  return `<li class="contact-group__item" data-contactId= ${index}>
                  <div class="contact__info"">${obj?.fullName}</div>
                  <div class="contact__phone-and-icons">
                    <div class="contact__phone-number">
                      ${obj?.phoneNumber}
                    </div>
                    <div class="contact__icons">
                      <div class="contact-icon contact-edit">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_11401_17)">
                            <path
                              opacity="0.3"
                              d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11401_17">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="contact-icon contact-delete">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_11401_26)">
                            <path
                              opacity="0.3"
                              d="M6.66664 20.3889C6.66664 21.55 7.61664 22.5 8.77775 22.5H17.2222C18.3833 22.5 19.3333 21.55 19.3333 20.3889V7.72222H6.66664V20.3889ZM9.26331 12.8733L10.7516 11.385L13 13.6228L15.2378 11.385L16.7261 12.8733L14.4883 15.1111L16.7261 17.3489L15.2378 18.8372L13 16.5994L10.7622 18.8372L9.27386 17.3489L11.5116 15.1111L9.26331 12.8733ZM16.6944 4.55556L15.6389 3.5H10.3611L9.30553 4.55556H5.61108V6.66667H20.3889V4.55556H16.6944Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11401_26">
                              <rect
                                width="25.3333"
                                height="25.3333"
                                fill="white"
                                transform="translate(0.333313 0.333313)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>`;
}

export function renderGroupItem(name, index) {
  return `<li class="group-list__item" data-groupId = "${index}">
              <label class="input-label">
                <input
                  type="text"
                  class="sidebar-input"
                  maxlength="25"
                  placeholder="Введите название"
                  value="${name || ""}"
                />
              </label>
              <div class="contact-icon contact-delete">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11401_26)">
                    <path
                      opacity="0.3"
                      d="M6.66664 20.3889C6.66664 21.55 7.61664 22.5 8.77775 22.5H17.2222C18.3833 22.5 19.3333 21.55 19.3333 20.3889V7.72222H6.66664V20.3889ZM9.26331 12.8733L10.7516 11.385L13 13.6228L15.2378 11.385L16.7261 12.8733L14.4883 15.1111L16.7261 17.3489L15.2378 18.8372L13 16.5994L10.7622 18.8372L9.27386 17.3489L11.5116 15.1111L9.26331 12.8733ZM16.6944 4.55556L15.6389 3.5H10.3611L9.30553 4.55556H5.61108V6.66667H20.3889V4.55556H16.6944Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11401_26">
                      <rect
                        width="25.3333"
                        height="25.3333"
                        fill="white"
                        transform="translate(0.333313 0.333313)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </li>`;
}

export function renderFirstOption() {
  return `<option value="" disabled selected hidden> Выберите группу</option>`;
}

export function renderOption(name) {
  return `<option value="${name}">${name}</option>`;
}

export function renderContactGroup(name) {
  return `<div class="contact-group" data-groupType = "${name}">
              <div class="contact-group__title">
                ${name}
              </div>
              <ul class="contact-group__list"></ul>`;
}

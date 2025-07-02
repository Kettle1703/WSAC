// при выборе 'студент' или 'другая должность' в выпадающем списке Должность будут отображены скрытые поля для заполнения данных
const positionSelect = document.getElementById('position');
const groupWrapper = document.getElementById('groupName-wrapper');
const groupInput = document.getElementById('groupName');
const otherJobContainer = document.getElementById('otherJob-container');
const otherJobInput = document.getElementById('otherJob');

positionSelect.addEventListener('change', () => {
  const value = positionSelect.value.trim().toLowerCase();
  if (value === 'студент') {
    groupWrapper.style.display = 'flex';
    groupInput.value = '';
  } else {
    groupWrapper.style.display = 'none';
    groupInput.value = '';
  }

  if (value === 'другая должность') {
    otherJobContainer.style.display = 'flex';
    otherJobInput.value = '';
  } else {
    otherJobContainer.style.display = 'none';
    otherJobInput.value = '';
  }
});
// Отображает скрытое поле ввода другой организации или вуза
const organizationSelect = document.getElementById('organization');
const otherOrgContainer = document.getElementById('otherOrganization-container');
const otherOrgInput = document.getElementById('otherOrganization');

organizationSelect.addEventListener('change', () => {
  if (organizationSelect.value === 'other') {
    otherOrgContainer.style.display = 'flex';
  } else {
    otherOrgContainer.style.display = 'none';
    otherOrgInput.value = '';
  }
});

const translations = {
  ru: {
    nav_home: "Главная",
    nav_reports: "Доклады",
    nav_authors: "Авторам",
    nav_contacts: "Контакты",
    nav_archive: "Архив",
    lang_label: "Язык",
    btn_login: "ВХОД",
    user_info: "Информация о пользователе",
    personal_data: "Личные данные",
    lastname: "Фамилия",
    firstname: "Имя",
    patronymic: "Отчество",
    birthdate: "Дата рождения",
    country: "Страна",
    city: "Город",
    professional_data: "Профессиональные данные",
    position_placeholder: "Должность",
    position_school: "школьник",
    position_student: "студент",
    position_phd: "аспирант",
    position_junior_researcher: "младший научный сотрудник",
    position_researcher: "научный сотрудник",
    position_senior_researcher: "старший научный сотрудник",
    position_associate_professor: "доцент",
    position_professor: "профессор",
    position_other: "другая должность",
    group_name: "Название группы",
    position: "должность",
    degree_placeholder: "Учёная степень",
    degree_candidate: "кандидат наук",
    degree_doctor: "доктор наук",
    degree_none: "без учёной степени",
    organization_placeholder: "Организация/ВУЗ",
    organization_pnipu: "ФГБОУ ВО «ПНИПУ»",
    organization_other: "другая Организация/ВУЗ",
    organization_label: "Организация/ВУЗ",
    fac_dep_lab: "Факультет/Кафедра/Лаборатория",
    contacts: "Контакты",
    phone: "Телефон",
    email: "Контактная почта",
    save_data: "Сохранить данные",
    actions: "Действия",
    application_list: "Список всех заявок",
    submit_application: "Подать заявку",
    change_password: "Сменить пароль",
    admin_panel: "Панель администратора",
    logout: "Выход из аккаунта",
    consent: "Согласие на обработку персональных данных"
  },
  en: {
    nav_home: "Home",
    nav_reports: "Reports",
    nav_authors: "For Authors",
    nav_contacts: "Contacts",
    nav_archive: "Archive",
    lang_label: "Language",
    btn_login: "LOGIN",
    user_info: "User Information",
    personal_data: "Personal Data",
    lastname: "Last Name",
    firstname: "First Name",
    patronymic: "Middle Name",
    birthdate: "Date of Birth",
    country: "Country",
    city: "City",
    professional_data: "Professional Data",
    position_placeholder: "Position",
    position_school: "School Student",
    position_student: "University Student",
    position_phd: "Postgraduate Student",
    position_junior_researcher: "Junior Researcher",
    position_researcher: "Researcher",
    position_senior_researcher: "Senior Researcher",
    position_associate_professor: "Associate Professor",
    position_professor: "Professor",
    position_other: "Other Position",
    group_name: "Group Name",
    position: "Position",
    degree_placeholder: "Academic Degree",
    degree_candidate: "Candidate of Sciences",
    degree_doctor: "Doctor of Sciences",
    degree_none: "No Degree",
    organization_placeholder: "Organization/University",
    organization_pnipu: "PNRPU",
    organization_other: "Other Organization/University",
    organization_label: "Organization/University",
    fac_dep_lab: "Faculty/Department/Lab",
    contacts: "Contacts",
    phone: "Phone",
    email: "Contact Email",
    save_data: "Save Data",
    actions: "Actions",
    application_list: "List of Applications",
    submit_application: "Submit Application",
    change_password: "Change Password",
    admin_panel: "Admin Panel",
    logout: "Log Out",
    consent: "Consent to Personal Data Processing"
  }
};

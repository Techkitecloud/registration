OC.L10N.register(
    "registration",
    {
    "Registration is not allowed with the following domains:" : "Для следующих доменов регистрация не разрешена:",
    "Registration is only allowed with the following domains:" : "Регистрация разрешена только для следующих доменов:",
    "A problem occurred sending email, please contact your administrator." : "Возникла ошибка отправки электронной почты. Пожалуйста, сообщите об этом администратору.",
    "The entered verification code is wrong" : "Введён неверный код подтверждения",
    "The verification failed." : "Подтверждение не выполнено.",
    "Invalid username policy regex" : "Некорректное регулярное выражение проверки имён пользователей",
    "Saved" : "Сохранено",
    "No such group" : "Эта группа отсуствует",
    "Register" : "Регистрация",
    "The email address you entered is not valid" : "Адрес электронной почты, введённый вами, недействителен",
    "Verify your %s registration request" : "Подтвердите ваш запрос на регистрацию на %s",
    "Registration" : "Регистрация",
    "Email address verified, you can now complete your registration." : "Ваш адрес эл.почты проверен, теперь вы можете завершить регистрацию.",
    "Click the button below to continue." : "Нажмите расположенную ниже кнопку для продолжения.",
    "Verification code: %s" : "Код подтверждения: %s",
    "Continue registration" : "Продолжить регистрацию",
    "New user \"%s\" has created an account on %s" : "Новый пользователь «%s» создал учётную запись на сервере %s",
    "New user registered" : "Новый пользователь зарегистрировался",
    "\"%1$s\" registered a new account on %2$s." : "«%1$s» зарегистрировал учётную запись на сервере %2$s.",
    "\"%1$s\" registered a new account on %2$s and needs to be enabled." : "Требуется подтверждение новой учётной записи «%1$s», созданной на сервере %2$s.",
    "Enable now" : "Включить сейчас",
    "A user has already taken this email, maybe you already have an account?" : "Кто-то уже использует эту электронную почту, возможно у вас уже есть учётная запись?",
    "You can <a href=\"%s\">log in now</a>." : "Вы можете <a href=\"%s\">войти сейчас</a>.",
    "Registration with this email domain is not allowed." : "Не допускается регистрация с использованием адреса эл. почты в этом домене.",
    "Please provide a valid display name." : "Пожалуйста, укажите подходящее отображаемое имя.",
    "Please provide a valid user name." : "Пожалуйста, укажите подходящее имя пользователя.",
    "The username you have chosen already exists." : "Выбранное имя пользователя уже существует.",
    "Unable to create user, there are problems with the user backend." : "Не удалось создать пользователя, обнаружены проблемы с пользовательским бэкэнд.",
    "Unable to set user email: " : "Не удалось установить адрес электронной почты пользователя:",
    "Registration app auto setup" : "Автоматически созданный токен приложения «Регистрация»",
    "This app allows users to self-register a new account using their e-mail address." : "Это приложение позволяет пользователям самостоятельно зарегистрировать новую учётную запись, используя адрес электронной почты.",
    "User registration\n\nThis app allows users to register a new account.\n\n# Features\n\n- Add users to a given group\n- Allow-list with email domains (including wildcard) to register with\n- Admins will be notified via email for new user creation or require approval\n- Supports Nextcloud's Client Login Flow v1 and v2 - allowing registration in the mobile Apps and Desktop clients\n\n# Web form registration flow\n\n1. User enters their email address\n2. Verification link is sent to the email address\n3. User clicks on the verification link\n4. User is lead to a form where they can choose their username and password\n5. New account is created and is logged in automatically" : "Регистрация пользователей\n\nЭто предложение позволяет регистрировать новые учётные записи.\n\n# Возможности:\n\n- Добавление пользователей в заданную группу;\n- Возможность задать список почтовых доменов, поддерживающий регулярные выражения, адреса эл. почты с которых могут быть использованы для регистрации;\n- Уведомления администраторов сервера о регистрации новых пользователей или о необходимости подтверждения регистрации;\n- Поддержка протоколов авторизации клиентов в Nextcloud версий 1 и 2 позволяет пользователям проходить регистрацию из мобильных приложений и приложений-клиентов для ПК.\n\n# Последовательность действий при регистрации:\n\n1. Ввод адреса эл. почты пользователем;\n2. Отправление сервером сообщения, содержащего ссылку для подтверждения этого адреса эл. почты;\n3. Переход пользователем по ссылке;\n4. Перенаправление пользователя на форму выбора имени пользователя и пароля;\n5. Создание учётной записи и автоматический вход в систему.",
    "Registered users default group" : "Группа по умолчанию для зарегистрировавшихся пользователей",
    "None" : "Не использовать",
    "Disable Email Verification" : "Отключить проверку адреса эл. почты",
    "Let user can register directly without email verification" : "Разрешить регистрацию без подтверждения адреса эл. почты",
    "Allowed email domains" : "Разрешённые домены эл. почты",
    "Enter a semicolon-separated list of allowed email domains, * for wildcard. Example: %s" : "Введите список разрешённых доменов через точку с запятой. Пример: %s",
    "Block listed email domains instead of allowing them" : "Использовать список для блокирования, а не для разрешения",
    "Show the allowed/blocked email domains to users" : "Разрешить пользователям просмотр списка разрешённых или запрещённых доменов",
    "Force email as login name" : "Принудительно использовать адрес эл. почты в качестве имени пользователя",
    "Username policy" : "Политика имён пользователей",
    "If configured, usernames will be validated through the regular expression. If the validation fails the user is prompted with a generic error. Make sure your regex is working correctly." : "Этот параметр позволяет выполнять проверку имён пользователей с использованием регулярных выражений. Если проверка не будет пройдена, пользователь получит соответствующее сообщение. Перед использованием убедитесь, что регулярное выражение работает верно.",
    "User instructions" : "Инструкции для пользователей",
    "Caution: The user instructions will not be translated and will therefore be displayed as configured below for all users regardless of their actual language." : "Предупреждение: инструкции для пользователей будут показаны без перевода и учёта языка пользователя именно в том виде, как они указаны ниже.",
    "Add additional user instructions (e.g. for choosing their usernames). If configured the text is displayed in the account creation step of the registration process." : "Возможно подготовить дополнительные инструкции для пользователей (например,  требования к выбору имени пользователя). Если эта функция используется, введённый текст будет показан при регистрации на шаге создания учёной записи.",
    "Add additional user instructions (e.g. for choosing their usernames). If configured the text is embedded in the the verification-Email." : "Введите дополнительные инструкции для пользователей (например, требования к выбору имени пользователя). Если эта функция используется, то введённый текст будет добавлен в эл. письма, отправляемые для подтверждения адреса эл. почты.",
    "Admin approval" : "Одобрение администратором",
    "Require admin approval" : "Требуется подтверждение администратором",
    "Enabling \"admin approval\" will prevent registrations from mobile and desktop clients to complete as the credentials can not be verified by the client until the user was enabled." : "При использовании параметра «Требуется подтверждение администратором», созданные учётные записи будут созданы, но не смогут использоваться пользователями для входа в систему до момента подтверждения регистрации администратором.",
    "Approval required" : "Требуется подтверждение",
    "Your account has been successfully created, but it still needs approval from an administrator." : "Ваша учётная запись была успешно создана, но она должна быть утверждена администратором.",
    "Email" : "Адрес эл. почты",
    "Continue" : "Продолжить",
    "Request verification link" : "Запросить ссылку для подтверждения",
    "Back to login" : "Вернуться на страницу входа",
    "Welcome, you can create your account below." : "Добро пожаловать, вы можете создать учётную запись ниже.",
    "Username" : "Имя пользователя",
    "Password" : "Пароль",
    "Create account" : "Создать учётную запись",
    "Verification code" : "Код подтверждения",
    "Verify" : "Подтвердить",
    "Your registration is pending. Please confirm your email address." : "Ваша регистрация не закончена. Пожалуйста, подтвердите ваш адрес электронной почты.",
    "There is already a pending registration with this email, a new verification email has been sent to the address." : "Регистрация с данным адресом электронной почты уже существует и не закончена, новое проверочное письмо было отправлено на данный адрес.",
    "Verification email successfully sent." : "Проверочное письмо успешно отправлено.",
    "Your account has been successfully created, you can <a href=\"%s\">log in now</a>." : "Ваша учётная запись была успешно создана, вы можете <a href=\"%s\">войти сейчас</a>.",
    "A new user \"%s\" has created an account on %s" : "Новый пользователь \"%s\" создал учётную запись на %s",
    "Registration is only allowed for the following domains: " : "Регистрация разрешена только для следующих доменов:",
    "Invalid verification URL. No registration request with this verification URL is found." : "Недействительный проверочный URL. Не найден запрос на регистрацию с таким проверочным URL.",
    "Failed to delete pending registration request" : "Не удалось удалить не завершённый запрос на регистрацию",
    "User registration\n\nThis app allows users to register a new account.\n\n# Flow\n\n1. User enters his/her email\n2. Verification link is sent to the email address\n3. User clicks on the verification link\n4. User is lead to a form where one can choose username and password\n5. New account is created and is logged in automatically\n\n# Features\n\n- Admin can specify which group the newly created users belong\n- Admin can limit the email domains allowed to register\n- Admin will be notified by email for new user creation\n\n# Donate\n\nSend Ethereum to `0x941613eBB948C2C547cb957B55fEB2609fa6Fe66`\nSend BTC to `33pStaSaf4sDUA8XBAHTq7ZDQpCVFQArxQ`" : "Регистрация пользователей\n\nЭто приложение позволяет новым пользователям создавать аккаунты\n\nПорядок действий\n\n1. Пользователь вводит свой адрес электронной почты\n2. Ссылка для подтверждения отправляется на адрес электронной почты\n3. Пользователь переходит по ссылке для подтверждения\n4. Пользователь заполняет форму, в которой указывает  имя пользователя и пароль\n5. Новая учетная запись создается и происходит автоматический вход\n\nОсобенности:\n- Администратор может указать группы, членом которых может стать новый пользователь\n- Администратор может ограничить почтовые домены, для которых разрешена регистрация\n- Администратор будет уведомлен сообщением по электронной почте о создании нового пользователя\n\nПожертвования\n\nПереводите Etherium на '0x941613eBB948C2C547cb957B55fEB2609fa6Fe66'\nПереводите BTC на `33pStaSaf4sDUA8XBAHTq7ZDQpCVFQArxQ`",
    "Default group that all registered users belong" : "Группа по умолчанию для всех зарегистрированных пользователей",
    "Allowed mail address domains for registration" : "Домены адресов электронной почты, разрешённые для регистрации",
    "Enter a semicolon-separated list of allowed domains. Example: owncloud.com;github.com" : "Введите список разрешённых доменов через точку с запятой. Пример: owncloud.com;github.com",
    "Require admin approval?" : "Требуется подтверждение администратора?",
    "Registration is only allowed for the following domains:" : "Регистрация разрешена только для следующих доменов:",
    "A new user \"%s\" has created an account on %s and awaits admin approbation" : "Новый пользователь \"%s\" создал учётную запись на %s и ожидает подтверждения администратора",
    "To create a new account on %s, just click the following link:" : "Чтобы создать учётную запись на %s, просто пройдите по следующей ссылке:",
    "Thank you for registering, you should receive a verification link in a few minutes." : "Спасибо за регистрацию, вы получите ссылку для подтверждения через несколько минут.",
    "Please re-enter a valid email address" : "Пожалуйста, повторно введите действующий адрес электронной почты",
    "You will receive an email with a verification link" : "Вы получите письмо со ссылкой для подтверждения"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");

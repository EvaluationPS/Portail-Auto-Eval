angular
    .module('portailAutoEval')
    .config(function ($stateProvider, $urlRouterProvider) {
        ///////////
        /* VIEWS */
        ///////////
        $stateProvider.state('main', {
            abstract: true,
            sticky: true
        });

        $stateProvider.state('home', {
            parent: 'main',
            url: '/home',
            title: 'Home',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/home/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'HomeCtrl'
                }
            }
        });
		
		$stateProvider.state('contacts', {
            parent: 'main',
            url: '/contacts',
            title: 'Contacts',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/contacts/contacts.html',
                    controller: 'ContactsCtrl',
                    controllerAs: 'ContactsCtrl'
                }
            }
        });


        $stateProvider.state('inscription', {
            parent: 'main',
            url: '/inscription',
            title: 'Registration',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/inscription/inscription.html',
                    controller: 'InscriptionCtrl',
                    controllerAs: 'InscriptionCtrl'
                }
            }
        });
        
        $stateProvider.state('evaluation', {
            parent: 'main',
            url: '/evaluation',
            title: 'Evaluation',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/evaluation/evaluation.html',
                    controller: 'EvaluationController',
                    controllerAs: 'EvaluationCtrl'
                }
            }
        });
        
        $stateProvider.state('consultation', {
            parent: 'main',
            url: '/consultation',
            title: 'Consultation',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/consultation/consultation.html',
                    controller: 'ConsultationController',
                    controllerAs: 'ConsultationController'
                }
            }
        });
        
        $stateProvider.state('formulaire', {
            parent: 'main',
            url: '/formulaire',
            title: 'Formulaire',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/formulaire/formulaire.html',
                    controller: 'FormulaireController',
                    controllerAs: 'FormulaireController'
                }
            }
        });
        
        $stateProvider.state('question', {
            parent: 'main',
            url: '/question',
            title: 'Question',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/question/question.html',
                    controller: 'QuestionController',
                    controllerAs: 'QuestionController'
                }
            }
        });
        
        $stateProvider.state('editFormulaire', {
            parent: 'main',
            url: '/editFormulaire',
            title: 'EditFormulaire',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/formulaire/editFormulaire.html',
                    controller: 'FormulaireController',
                    controllerAs: 'FormulaireController'
                }
            }
        });
        
        $stateProvider.state('editQuestion', {
            parent: 'main',
            url: '/editQuestion',
            title: 'EditQuestion',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/question/editQuestion.html',
                    controller: 'QuestionController',
                    controllerAs: 'QuestionController'
                }
            }
        });
        
        $stateProvider.state('connection', {
            parent: 'main',
            url: '/connection',
            title: 'Connection',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/connection/connection.html',
                    controller: 'ConnectionCtrl',
                    controllerAs: 'ConnectionCtrl'
                }
            }
        });
		
		$stateProvider.state('profil', {
            parent: 'connection',
            url: '/profil',
            title: 'My Account',
            reloadOnSearch: true,
            views: {
                'main@': {
                    templateUrl: '/profil/profil.html',
                    controller: 'ProfilCtrl',
                    controllerAs: 'ProfilCtrl'
                }
            }
        });
		
		$stateProvider.state('profilAdmin', {
            parent: 'connection',
            url: '/profilAdmin',
            title: 'Account of User',
            reloadOnSearch: true,
            views: {
                'main@': {
                    templateUrl: '/profil/profilAdmin.html',
                    controller: 'ProfilCtrl',
                    controllerAs: 'ProfilCtrl'
                }
            }
        });
        
        $stateProvider.state('about', {
            parent: 'main',
            url: '/about',
            title: 'A propos',
            reloadOnSearch: true,
            views: {
                'main@': {
                    templateUrl: '/about/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'AboutCtrl'
                }
            }
        });
		
		/*$stateProvider.state('cgu', {
            parent: 'main',
            url: '/cgu',
            title: 'Terms and Conditions',
            reloadOnSearch: false,
            views: {
                'main@': {
                    templateUrl: '/cgu/cgu.html',
                    controller: 'CguCtrl',
                    controllerAs: 'CguCtrl'
                }
            }
        });*/		
		

        ///////////////
        /* OTHERWISE */
        ///////////////
        //TODO 404
        $urlRouterProvider.otherwise('/home');
    });
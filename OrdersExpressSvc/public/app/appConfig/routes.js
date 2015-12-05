/*

(function () {
    var routeMap = [
        {
            state: 'otp',
            config: {
                url: '/otp',
                templateProvider: function ($http, otpWebMapApp) {
                    var url = './Home/Startup';

                    return $http.get(url).
                      then(function (response) {
                          var res = '';
                          if (response && response.data)
                              res = response.data;
                          else
                              res = 'No Data';
                          return res;
                      }, function (response) {
                          return 'Error, no data could be retrieved';
                      });
                }
            }
        },
        {
            state: 'otpHome',
            config: {
                url: '/home',
                template: '',
                parent: 'otp'
            }
        },
        {
            state: 'oneSourceProvision_ActiveWorkpapers_CheckedCombo',
            config: {
                url: '/ActiveWorkpapers.CheckedComboView:UniqueId',
                controller: 'otpActiveWorkpapers_checkedCombo',
                templateUrl: './app/oneSourceProvision/activeWorkpapers/checkedCombo.html',
                parent: 'otp'
            }
        },
        {
            state: 'oneSourceProvision_AutoLink_AutoLinkApportionmentTypeControl',
            config: {
                url: '/AutoLink.AutoLinkApportionmentTypeControlView:UniqueId',
                controller: 'otpAutoLink_autoLinkApportionmentTypeControl',
                templateUrl: './app/oneSourceProvision/autoLink/autoLinkApportionmentTypeControl.html',
                parent: 'otp'
            }
        },
    ];
    
    
    angular
            .module('otp')
            .constant('OTP_ROUTE_MAP', routeMap);
})();
*/



        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkFilingTypeControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkFilingTypeControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkFilingTypeControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkFilingTypeControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkFourQuartersControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkFourQuartersControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkFourQuartersControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkFourQuartersControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkMapsetCheckboxControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkMapsetCheckboxControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkMapsetCheckboxControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkMapsetCheckboxControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkMapsetControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkMapsetControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkMapsetControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkMapsetControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkRelatedDatasetControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkRelatedDatasetControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkRelatedDatasetControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkRelatedDatasetControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkReturnDatasetControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkReturnDatasetControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkReturnDatasetControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkReturnDatasetControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkSourceControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkSourceControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkSourceControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkSourceControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkTargetDatasetControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkTargetDatasetControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkTargetDatasetControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkTargetDatasetControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkTargetUnitControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkTargetUnitControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkTargetUnitControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkTargetUnitControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_AutoLink_AutoLinkYearControl',
        //    config: {
        //        url: '/AutoLink.AutoLinkYearControlView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkYearControl',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkYearControl.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_DatasetCreateInclusions',
        //    config: {
        //        url: '/DatasetCreateInclusionsView:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/datasetCreateInclusions.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_messageBox',
        //    config: {
        //        url: '/messageBoxView:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/messageBox.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'oneSourceProvision_messageBoxDefault',
        //    config: {
        //        url: '/messageBoxDefaultView:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/messageBoxDefault.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ActiveWorkpapers_ActiveWorkpaperUI',
        //    config: {
        //        url: '/ActiveWorkpapers.ActiveWorkpaperUIView:UniqueId',
        //        controller: 'otpActiveWorkpapers_activeWorkpaperUI',
        //        templateUrl: './app/oneSourceProvision/activeWorkpapers/activeWorkpaperUI.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ActiveWorkpapers_InputBox',
        //    config: {
        //        url: '/ActiveWorkpapers.InputBoxView:UniqueId',
        //        controller: 'otpActiveWorkpapers_inputBox',
        //        templateUrl: './app/oneSourceProvision/activeWorkpapers/inputBox.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ActiveWorkpapers_Loading',
        //    config: {
        //        url: '/ActiveWorkpapers.LoadingView:UniqueId',
        //        controller: 'otpActiveWorkpapers_loading',
        //        templateUrl: './app/oneSourceProvision/activeWorkpapers/loading.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ActiveWorkpapers_Workpaperselection',
        //    config: {
        //        url: '/ActiveWorkpapers.WorkpaperselectionView:UniqueId',
        //        controller: 'otpActiveWorkpapers_workpaperselection',
        //        templateUrl: './app/oneSourceProvision/activeWorkpapers/workpaperselection.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_AnalysisDatasets',
        //    config: {
        //        url: '/AnalysisDatasetsView:UniqueId',
        //        controller: 'otpAnalysisDatasets',
        //        templateUrl: './app/oneSourceProvision/analysisDatasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_AutoLink_AutoLinkUI',
        //    config: {
        //        url: '/AutoLink.AutoLinkUIView:UniqueId',
        //        controller: 'otpAutoLink_autoLinkUI',
        //        templateUrl: './app/oneSourceProvision/autoLink/autoLinkUI.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_BatchReportingJobs',
        //    config: {
        //        url: '/BatchReportingJobsView:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/batchReportingJobs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_BridgePreview',
        //    config: {
        //        url: '/BridgePreviewView:UniqueId',
        //        controller: 'otpBridgePreview',
        //        templateUrl: './app/oneSourceProvision/bridgePreview.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ClassGroupManagement',
        //    config: {
        //        url: '/ClassGroupManagementView:UniqueId',
        //        controller: 'otpClassGroupManagement',
        //        templateUrl: './app/oneSourceProvision/classGroupManagement.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ClassManagement',
        //    config: {
        //        url: '/ClassManagementView:UniqueId',
        //        controller: 'otpClassManagement',
        //        templateUrl: './app/oneSourceProvision/classManagement.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TempDiffAnalysis',
        //    config: {
        //        url: '/DataEntry_TempDiffAnalysisView:UniqueId',
        //        controller: 'otpDataEntryTempDiffAnalysis',
        //        templateUrl: './app/oneSourceProvision/dataEntry/tempDiffAnalysis.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Datasets',
        //    config: {
        //        url: '/DatasetsView:UniqueId',
        //        controller: 'otpDatasets',
        //        templateUrl: './app/oneSourceProvision/datasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DeferredRollforward',
        //    config: {
        //        url: '/DeferredRollforwardView:UniqueId',
        //        controller: 'otpDeferredRollforward',
        //        templateUrl: './app/oneSourceProvision/deferredRollforward.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_GlobalizationLibrary_CustomMessageBox',
        //    config: {
        //        url: '/GlobalizationLibrary.CustomMessageBoxView:UniqueId',
        //        controller: 'otpGlobalizationLibrary_customMessageBox',
        //        templateUrl: './app/oneSourceProvision/globalizationLibrary/customMessageBox.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_GroupManagment',
        //    config: {
        //        url: '/GroupManagmentView:UniqueId',
        //        controller: 'otpGroupManagment',
        //        templateUrl: './app/oneSourceProvision/groupManagment.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_JournalEntry_Profiles',
        //    config: {
        //        url: '/JournalEntry.ProfilesView:UniqueId',
        //        controller: 'otpJournalEntry_profiles',
        //        templateUrl: './app/oneSourceProvision/journalEntry/profiles.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_JournalEntry_UnitDetails',
        //    config: {
        //        url: '/JournalEntry.UnitDetailsView:UniqueId',
        //        controller: 'otpJournalEntry_unitDetails',
        //        templateUrl: './app/oneSourceProvision/journalEntry/unitDetails.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_MasterChartOfAccountImport',
        //    config: {
        //        url: '/MasterChartOfAccountImportView:UniqueId',
        //        controller: 'otpMasterChartOfAccountImport',
        //        templateUrl: './app/oneSourceProvision/masterChartOfAccountImport.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_MyReports_MyReportDatasetStep',
        //    config: {
        //        url: '/MyReports.MyReportDatasetStepView:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/myReports/myReportDatasetStep.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_MyReports_MyReportReportInfoStep',
        //    config: {
        //        url: '/MyReports.MyReportReportInfoStepView:UniqueId',
        //        controller: 'otpMyReports_myReportReportInfoStep',
        //        templateUrl: './app/oneSourceProvision/wizard/wizardContentFrame.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_MyReports_MyReportUnitStep',
        //    config: {
        //        url: '/MyReports.MyReportUnitStepView:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/myReports/myReportUnitStep.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Report',
        //    config: {
        //        url: '/ReportView:UniqueId',
        //        controller: 'otpReport',
        //        templateUrl: './app/oneSourceProvision/report.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_BatchReportSubmission',
        //    config: {
        //        url: '/BatchReportSubmissionView:UniqueId',
        //        controller: 'otpBatchReportSubmission',
        //        templateUrl: './app/oneSourceProvision/batchReportSubmission.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Confirmation',
        //    config: {
        //        url: '/ConfirmationView:UniqueId',
        //        controller: 'otpConfirmation',
        //        templateUrl: './app/oneSourceProvision/confirmation.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CombineStep2',
        //    config: {
        //        url: '/CreateDataset.CombineStep2View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/combineStep2.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CombineStep3',
        //    config: {
        //        url: '/CreateDataset.CombineStep3View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/combineStep3.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CopyStep21',
        //    config: {
        //        url: '/CreateDataset.CopyStep21View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/copyStep21.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CopyStep22',
        //    config: {
        //        url: '/CreateDataset.CopyStep22View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/copyStep22.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CopyStep2',
        //    config: {
        //        url: '/CreateDataset.CopyStep2View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/copyStep2.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CopyStep3',
        //    config: {
        //        url: '/CreateDataset.CopyStep3View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/copyStep3.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_OriginMappingDialog',
        //    config: {
        //        url: '/activeWorkpapers.OriginMappingView:UniqueId',
        //        controller: 'otpCreateDataset_createDataset',
        //        templateUrl: './app/oneSourceProvision/wizard/wizardContentFrame.html',//'./app/oneSourceProvision/activeWorkpapers/originMappingDialog.html'
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_CreateDataset',
        //    config: {
        //        url: '/CreateDataset.CreateDatasetView:UniqueId',
        //        controller: 'otpCreateDataset_createDataset',
        //        templateUrl: './app/oneSourceProvision/wizard/wizardContentFrame.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_RolloverStep21',
        //    config: {
        //        url: '/CreateDataset.RolloverStep21View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/rolloverStep21.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_RolloverStep22',
        //    config: {
        //        url: '/CreateDataset.RolloverStep22View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/rolloverStep22.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_RolloverStep2',
        //    config: {
        //        url: '/CreateDataset.RolloverStep2View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/rolloverStep2.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_CreateDataset_RolloverStep3',
        //    config: {
        //        url: '/CreateDataset.RolloverStep3View:UniqueId',
        //        controller: undefined,
        //        templateUrl: './app/oneSourceProvision/createDataset/rolloverStep3.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DeferredRollforwardColumn',
        //    config: {
        //        url: '/DeferredRollforwardColumnView:UniqueId',
        //        controller: 'otpDeferredRollforwardColumn',
        //        templateUrl: './app/oneSourceProvision/deferredRollforwardColumn.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_JournalEntry_JournalEntryProfile',
        //    config: {
        //        url: '/JournalEntry.JournalEntryProfileView:UniqueId',
        //        controller: 'otpJournalEntry_journalEntryProfile',
        //        templateUrl: './app/oneSourceProvision/journalEntry/journalEntryProfile.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_LockSubcons',
        //    config: {
        //        url: '/LockSubconsView:UniqueId',
        //        controller: 'otpLockSubcons',
        //        templateUrl: './app/oneSourceProvision/lockSubcons.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Name',
        //    config: {
        //        url: '/NameView:UniqueId',
        //        controller: 'otpName',
        //        templateUrl: './app/oneSourceProvision/name.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_PageSetupOptions',
        //    config: {
        //        url: '/PageSetupOptions:UniqueId',
        //        controller: 'otpPageSetup',
        //        templateUrl: './app/oneSourceProvision/pageSetup.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Password',
        //    config: {
        //        url: '/PasswordView:UniqueId',
        //        controller: 'otpPassword',
        //        templateUrl: './app/oneSourceProvision/password.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Subcon',
        //    config: {
        //        url: '/SubconView:UniqueId',
        //        controller: 'otpSubcon',
        //        templateUrl: './app/oneSourceProvision/subcon.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_TempDifference',
        //    config: {
        //        url: '/TempDifferenceView:UniqueId',
        //        controller: 'otpTempDifference',
        //        templateUrl: './app/oneSourceProvision/tempDifference.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Tier',
        //    config: {
        //        url: '/TierView:UniqueId',
        //        controller: 'otpTier',
        //        templateUrl: './app/oneSourceProvision/tier.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_User',
        //    config: {
        //        url: '/UserView:UniqueId',
        //        controller: 'otpUser',
        //        templateUrl: './app/oneSourceProvision/user.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Wizard_WizardContentFrame',
        //    config: {
        //        url: '/Wizard.WizardContentFrameView:UniqueId',
        //        controller: 'createDatasetController',
        //        templateUrl: './app/oneSourceProvision/wizard/wizardContentFrame.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_YesNoCancel',
        //    config: {
        //        url: '/YesNoCancelView:UniqueId',
        //        controller: 'otpYesNoCancel',
        //        templateUrl: './app/oneSourceProvision/yesNoCancel.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Subconsolidations',
        //    config: {
        //        url: '/SubconsolidationsView:UniqueId',
        //        controller: 'otpSubconsolidations',
        //        templateUrl: './app/oneSourceProvision/subconsolidations.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ctlHeader',
        //    config: {
        //        url: '/ctlHeaderView:UniqueId',
        //        controller: 'otpCtlHeader',
        //        templateUrl: './app/oneSourceProvision/ctlHeader.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_ctlPageNavigator',
        //    config: {
        //        url: '/ctlPageNavigatorView:UniqueId',
        //        controller: 'otpCtlPageNavigator',
        //        templateUrl: './app/oneSourceProvision/ctlPageNavigator.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_AfterTaxTempDifferences',
        //    config: {
        //        url: '/Admin.AfterTaxTempDifferencesView:UniqueId',
        //        controller: 'otpAdmin_afterTaxTempDifferences',
        //        templateUrl: './app/oneSourceProvision/admin/afterTaxTempDifferences.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Analysis_DatasetsSL',
        //    config: {
        //        url: '/Admin.Analysis_DatasetsSLView:UniqueId',
        //        controller: 'otpAdmin_analysisDatasetsSL',
        //        templateUrl: './app/oneSourceProvision/admin/analysisDatasetsSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Attachments_Global',
        //    config: {
        //        url: '/Admin.Attachments_GlobalView:UniqueId',
        //        controller: 'otpAdmin_attachmentsGlobal',
        //        templateUrl: './app/oneSourceProvision/admin/attachmentsGlobal.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_CompCats',
        //    config: {
        //        url: '/Admin.CompCatsView:UniqueId',
        //        controller: 'otpAdmin_compCats',
        //        templateUrl: './app/oneSourceProvision/admin/compCats.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Configurations',
        //    config: {
        //        url: '/Admin.ConfigurationsView:UniqueId',
        //        controller: 'otpAdmin_configurations',
        //        templateUrl: './app/oneSourceProvision/admin/configurations.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Countries',
        //    config: {
        //        url: '/Admin.CountriesView:UniqueId',
        //        controller: 'otpAdmin_countries',
        //        templateUrl: './app/oneSourceProvision/admin/countries.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_CountryRate',
        //    config: {
        //        url: '/Admin.CountryRateView:UniqueId',
        //        controller: 'otpAdmin_countryRate',
        //        templateUrl: './app/oneSourceProvision/admin/countryRate.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Credits',
        //    config: {
        //        url: '/Admin.CreditsView:UniqueId',
        //        controller: 'otpAdmin_credits',
        //        templateUrl: './app/oneSourceProvision/admin/credits.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Currency',
        //    config: {
        //        url: '/Admin.CurrencyView:UniqueId',
        //        controller: 'otpAdmin_currency',
        //        templateUrl: './app/oneSourceProvision/admin/currency.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_CurrencyRates',
        //    config: {
        //        url: '/Admin.CurrencyRatesView:UniqueId',
        //        controller: 'otpAdmin_currencyRates',
        //        templateUrl: './app/oneSourceProvision/admin/currencyRates.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DatasetMappingSL',
        //    config: {
        //        url: '/Admin.DatasetMappingSLView:UniqueId',
        //        controller: 'otpAdmin_datasetMappingSL',
        //        templateUrl: './app/oneSourceProvision/admin/datasetMappingSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DatasetsParams',
        //    config: {
        //        url: '/Admin.DatasetsParamsView:UniqueId',
        //        controller: 'otpAdmin_datasetsParams',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsParams.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DatasetsSL',
        //    config: {
        //        url: '/Admin.DatasetsSLView:UniqueId',
        //        controller: 'otpAdmin_datasetsSL',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DatasetStateInclusion',
        //    config: {
        //        url: '/Admin.DatasetStateInclusionView:UniqueId',
        //        controller: 'otpAdmin_datasetstateInclusion',
        //        templateUrl: './app/oneSourceProvision/admin/datasetStateInclusion.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Datasets_Active',
        //    config: {
        //        url: '/Admin.Datasets_ActiveView:UniqueId',
        //        controller: 'otpAdmin_datasetsActive',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsActive.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Datasets_CopyFilter',
        //    config: {
        //        url: '/Admin.Datasets_CopyFilterView:UniqueId',
        //        controller: 'otpAdmin_datasetsCopyFilter',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsCopyFilter.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Datasets',
        //    config: {
        //        url: '/Admin.DatasetsView:UniqueId',
        //        controller: 'otpAdmin_datasets',
        //        templateUrl: './app/oneSourceProvision/admin/datasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Datasets_Dialog_AWP_Mapping',
        //    config: {
        //        url: '/Admin.Datasets_Dialog_AWP_MappingView:UniqueId',
        //        controller: 'otpAdmin_datasetsDialogAWPMapping',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsDialogAWPMapping.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Datasets_Import',
        //    config: {
        //        url: '/Admin.Datasets_ImportView:UniqueId',
        //        controller: 'otpAdmin_datasetsImport',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsImport.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Datasets_Query',
        //    config: {
        //        url: '/Admin.Datasets_QueryView:UniqueId',
        //        controller: 'otpAdmin_datasetsQuery',
        //        templateUrl: './app/oneSourceProvision/admin/datasetsQuery.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Dataset_Map',
        //    config: {
        //        url: '/Admin.Dataset_MapView:UniqueId',
        //        controller: 'otpAdmin_datasetMap',
        //        templateUrl: './app/oneSourceProvision/admin/datasetMap.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Dataset_TaxAdjPayableMapping',
        //    config: {
        //        url: '/Admin.Dataset_TaxAdjPayableMappingView:UniqueId',
        //        controller: 'otpAdmin_datasetTaxAdjPayableMapping',
        //        templateUrl: './app/oneSourceProvision/admin/datasetTaxAdjPayableMapping.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DataSourceHistory',
        //    config: {
        //        url: '/Admin.DataSourceHistoryView:UniqueId',
        //        controller: 'otpAdmin_dataSourceHistory',
        //        templateUrl: './app/oneSourceProvision/admin/dataSourceHistory.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DeferredRollForwards_Class',
        //    config: {
        //        url: '/Admin.DeferredRollForwards_ClassView:UniqueId',
        //        controller: 'otpAdmin_deferredRollForwardsClass',
        //        templateUrl: './app/oneSourceProvision/admin/deferredRollForwardsClass.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_DeferredRollForwards_Tag',
        //    config: {
        //        url: '/Admin.DeferredRollForwards_TagView:UniqueId',
        //        controller: 'otpAdmin_deferredRollForwardsTag',
        //        templateUrl: './app/oneSourceProvision/admin/deferredRollForwardsTag.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_EventGroupsSL',
        //    config: {
        //        url: '/Admin.EventGroupsSLView:UniqueId',
        //        controller: 'otpAdmin_eventGroupsSL',
        //        templateUrl: './app/oneSourceProvision/admin/eventGroupsSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_EventsSL',
        //    config: {
        //        url: '/Admin.EventsSLView:UniqueId',
        //        controller: 'otpAdmin_eventsSL',
        //        templateUrl: './app/oneSourceProvision/admin/eventsSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_FTProfilesSL',
        //    config: {
        //        url: '/Admin.FTProfilesSLView:UniqueId',
        //        controller: 'otpAdmin_ftProfilesSL',
        //        templateUrl: './app/oneSourceProvision/admin/ftProfilesSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_GoogleAnalytics',
        //    config: {
        //        url: '/Admin.GoogleAnalyticsView:UniqueId',
        //        controller: 'otpAdmin_googleAnalytics',
        //        templateUrl: './app/oneSourceProvision/admin/googleAnalytics.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Groups',
        //    config: {
        //        url: '/Admin.GroupsView:UniqueId',
        //        controller: 'otpAdmin_groups',
        //        templateUrl: './app/oneSourceProvision/admin/groups.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_IFRSRollForwards',
        //    config: {
        //        url: '/Admin.IFRSRollForwardsView:UniqueId',
        //        controller: 'otpAdmin_ifrsRollForwards',
        //        templateUrl: './app/oneSourceProvision/admin/ifrsRollForwards.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_IntercoTxnTypes',
        //    config: {
        //        url: '/Admin.IntercoTxnTypesView:UniqueId',
        //        controller: 'otpAdmin_intercoTxnTypes',
        //        templateUrl: './app/oneSourceProvision/admin/intercoTxnTypes.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_InterimDatasets',
        //    config: {
        //        url: '/Admin.InterimDatasetsView:UniqueId',
        //        controller: 'otpAdmin_interimDatasets',
        //        templateUrl: './app/oneSourceProvision/admin/interimDatasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_JENumber',
        //    config: {
        //        url: '/Admin.JENumberView:UniqueId',
        //        controller: 'otpAdmin_jeNumber',
        //        templateUrl: './app/oneSourceProvision/admin/jeNumber.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_JournalEntries',
        //    config: {
        //        url: '/Admin.JournalEntriesView:UniqueId',
        //        controller: 'otpAdmin_journalEntries',
        //        templateUrl: './app/oneSourceProvision/admin/journalEntries.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_JournalEntryProfile',
        //    config: {
        //        url: '/Admin.JournalEntryProfileView:UniqueId',
        //        controller: 'otpAdmin_journalEntryProfile',
        //        templateUrl: './app/oneSourceProvision/admin/journalEntryProfile.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_LiabilityBuckets',
        //    config: {
        //        url: '/Admin.LiabilityBucketsView:UniqueId',
        //        controller: 'otpAdmin_liabilityBuckets',
        //        templateUrl: './app/oneSourceProvision/admin/liabilityBuckets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_LiabilityRollups',
        //    config: {
        //        url: '/Admin.LiabilityRollupsView:UniqueId',
        //        controller: 'otpAdmin_liabilityRollups',
        //        templateUrl: './app/oneSourceProvision/admin/liabilityRollups.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_LiabilityTxnTypes',
        //    config: {
        //        url: '/Admin.LiabilityTxnTypesView:UniqueId',
        //        controller: 'otpAdmin_liabilityTxnTypes',
        //        templateUrl: './app/oneSourceProvision/admin/liabilityTxnTypes.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_LicenseManager',
        //    config: {
        //        url: '/Admin.LicenseManagerView:UniqueId',
        //        controller: 'otpAdmin_licenseManager',
        //        templateUrl: './app/oneSourceProvision/admin/licenseManager.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_MasterChartOfAccountsImport',
        //    config: {
        //        url: '/Admin.MasterChartOfAccountsImportView:UniqueId',
        //        controller: 'otpAdmin_masterChartOfAccountsImport',
        //        templateUrl: './app/oneSourceProvision/admin/masterChartOfAccountsImport.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_NamePopup',
        //    config: {
        //        url: '/Admin.NamePopupView:UniqueId',
        //        controller: 'otpAdmin_namePopup',
        //        templateUrl: './app/oneSourceProvision/admin/namePopup.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_NOLRollForwards_Class',
        //    config: {
        //        url: '/Admin.NOLRollForwards_ClassView:UniqueId',
        //        controller: 'otpAdmin_nolRollForwardsClass',
        //        templateUrl: './app/oneSourceProvision/admin/nolRollForwardsClass.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_NOLRollForwards_Tag',
        //    config: {
        //        url: '/Admin.NOLRollForwards_TagView:UniqueId',
        //        controller: 'otpAdmin_nolRollForwardsTag',
        //        templateUrl: './app/oneSourceProvision/admin/nolRollForwardsTag.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_NOLTempDiffs',
        //    config: {
        //        url: '/Admin.NOLTempDiffsView:UniqueId',
        //        controller: 'otpAdmin_nolTempDiffs',
        //        templateUrl: './app/oneSourceProvision/admin/nolTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_OFRSetup',
        //    config: {
        //        url: '/Admin.OFRSetupView:UniqueId',
        //        controller: 'otpAdmin_ofrSetup',
        //        templateUrl: './app/oneSourceProvision/admin/ofrSetup.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Params',
        //    config: {
        //        url: '/Admin.ParamsView:UniqueId',
        //        controller: 'otpAdmin_params',
        //        templateUrl: './app/oneSourceProvision/admin/params.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Password',
        //    config: {
        //        url: '/Admin.PasswordView:UniqueId',
        //        controller: 'otpAdmin_password',
        //        templateUrl: './app/oneSourceProvision/admin/password.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_PermanentDifferences',
        //    config: {
        //        url: '/Admin.PermanentDifferencesView:UniqueId',
        //        controller: 'otpAdmin_permanentDifferences',
        //        templateUrl: './app/oneSourceProvision/admin/permanentDifferences.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_PTBIs',
        //    config: {
        //        url: '/Admin.PTBIsView:UniqueId',
        //        controller: 'otpAdmin_ptbIs',
        //        templateUrl: './app/oneSourceProvision/admin/ptbIs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Questionnaire_Query',
        //    config: {
        //        url: '/Admin.Questionnaire_QueryView:UniqueId',
        //        controller: 'otpAdmin_questionnaireQuery',
        //        templateUrl: './app/oneSourceProvision/admin/questionnaireQuery.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Questions',
        //    config: {
        //        url: '/Admin.QuestionsView:UniqueId',
        //        controller: 'otpAdmin_questions',
        //        templateUrl: './app/oneSourceProvision/admin/questions.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_ReportDatasets',
        //    config: {
        //        url: '/Admin.ReportDatasetsView:UniqueId',
        //        controller: 'otpAdmin_reportDatasets',
        //        templateUrl: './app/oneSourceProvision/admin/reportDatasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Roles',
        //    config: {
        //        url: '/Admin.RolesView:UniqueId',
        //        controller: 'otpAdmin_roles',
        //        templateUrl: './app/oneSourceProvision/admin/roles.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_RollForwards',
        //    config: {
        //        url: '/Admin.RollForwardsView:UniqueId',
        //        controller: 'otpAdmin_rollForwards',
        //        templateUrl: './app/oneSourceProvision/admin/rollForwards.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Rollups',
        //    config: {
        //        url: '/Admin.RollupsView:UniqueId',
        //        controller: 'otpAdmin_rollups',
        //        templateUrl: './app/oneSourceProvision/admin/rollups.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_StateAfterAppTempDiffs',
        //    config: {
        //        url: '/Admin.StateAfterAppTempDiffsView:UniqueId',
        //        controller: 'otpAdmin_stateAfterAppTempDiffs',
        //        templateUrl: './app/oneSourceProvision/admin/stateAfterAppTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_StateAfterTaxTempDiffs',
        //    config: {
        //        url: '/Admin.StateAfterTaxTempDiffsView:UniqueId',
        //        controller: 'otpAdmin_stateAfterTaxTempDiffs',
        //        templateUrl: './app/oneSourceProvision/admin/stateAfterTaxTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_StateRate',
        //    config: {
        //        url: '/Admin.StateRateView:UniqueId',
        //        controller: 'otpAdmin_stateRate',
        //        templateUrl: './app/oneSourceProvision/admin/stateRate.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_States',
        //    config: {
        //        url: '/Admin.StatesView:UniqueId',
        //        controller: 'otpAdmin_states',
        //        templateUrl: './app/oneSourceProvision/admin/states.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_StateTypes',
        //    config: {
        //        url: '/Admin.StateTypesView:UniqueId',
        //        controller: 'otpAdmin_stateTypes',
        //        templateUrl: './app/oneSourceProvision/admin/stateTypes.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_SubConsolAdder',
        //    config: {
        //        url: '/Admin.SubConsolAdderView:UniqueId',
        //        controller: 'otpAdmin_subConsolAdder',
        //        templateUrl: './app/oneSourceProvision/admin/subConsolAdder.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_SubConsolidations',
        //    config: {
        //        url: '/Admin.SubConsolidationsView:UniqueId',
        //        controller: 'otpAdmin_subConsolidations',
        //        templateUrl: './app/oneSourceProvision/admin/subConsolidations.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_SubConsolidationsSL',
        //    config: {
        //        url: '/Admin.SubConsolidationsSLView:UniqueId',
        //        controller: 'otpAdmin_subConsolidationsSL',
        //        templateUrl: './app/oneSourceProvision/admin/subConsolidationsSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_SubCon_Lock',
        //    config: {
        //        url: '/Admin.SubCon_LockView:UniqueId',
        //        controller: 'otpAdmin_subConLock',
        //        templateUrl: './app/oneSourceProvision/admin/subConLock.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Tag_Maint',
        //    config: {
        //        url: '/Admin.Tag_MaintView:UniqueId',
        //        controller: 'otpAdmin_tagMaint',
        //        templateUrl: './app/oneSourceProvision/admin/tagMaint.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TaxAccountsMap',
        //    config: {
        //        url: '/Admin.TaxAccountsMapView:UniqueId',
        //        controller: 'otpAdmin_taxAccountsMap',
        //        templateUrl: './app/oneSourceProvision/admin/taxAccountsMap.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TaxAdjustments',
        //    config: {
        //        url: '/Admin.TaxAdjustmentsView:UniqueId',
        //        controller: 'otpAdmin_taxAdjustments',
        //        templateUrl: './app/oneSourceProvision/admin/taxAdjustments.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TaxBasisLines',
        //    config: {
        //        url: '/Admin.TaxBasisLinesView:UniqueId',
        //        controller: 'otpAdmin_taxBasisLines',
        //        templateUrl: './app/oneSourceProvision/admin/taxBasisLines.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TaxBasisSubLines',
        //    config: {
        //        url: '/Admin.TaxBasisSubLinesView:UniqueId',
        //        controller: 'otpAdmin_taxBasisSubLines',
        //        templateUrl: './app/oneSourceProvision/admin/taxBasisSubLines.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TaxBasisTempDiffs',
        //    config: {
        //        url: '/Admin.TaxBasisTempDiffsView:UniqueId',
        //        controller: 'otpAdmin_taxBasisTempDiffs',
        //        templateUrl: './app/oneSourceProvision/admin/taxBasisTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TempDiffPostings',
        //    config: {
        //        url: '/Admin.TempDiffPostingsView:UniqueId',
        //        controller: 'otpAdmin_tempDiffPostings',
        //        templateUrl: './app/oneSourceProvision/admin/tempDiffPostings.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TemporaryDifferences',
        //    config: {
        //        url: '/Admin.TemporaryDifferencesView:UniqueId',
        //        controller: 'otpAdmin_temporaryDifferences',
        //        templateUrl: './app/oneSourceProvision/admin/temporaryDifferences.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Test',
        //    config: {
        //        url: '/Admin.TestView:UniqueId',
        //        controller: 'otpAdmin_test',
        //        templateUrl: './app/oneSourceProvision/admin/test.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_TSQueryDatabase',
        //    config: {
        //        url: '/Admin.TSQueryDatabaseView:UniqueId',
        //        controller: 'otpAdmin_tsQueryDatabase',
        //        templateUrl: './app/oneSourceProvision/admin/tsQueryDatabase.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_UDSParams',
        //    config: {
        //        url: '/Admin.UDSParamsView:UniqueId',
        //        controller: 'otpAdmin_udsParams',
        //        templateUrl: './app/oneSourceProvision/admin/udsParams.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Units',
        //    config: {
        //        url: '/Admin.UnitsView:UniqueId',
        //        controller: 'otpAdmin_units',
        //        templateUrl: './app/oneSourceProvision/admin/units.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_USDSParams',
        //    config: {
        //        url: '/Admin.USDSParamsView:UniqueId',
        //        controller: 'otpAdmin_usdsParams',
        //        templateUrl: './app/oneSourceProvision/admin/usdsParams.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_Users',
        //    config: {
        //        url: '/Admin.UsersView:UniqueId',
        //        controller: 'otpAdmin_users',
        //        templateUrl: './app/oneSourceProvision/admin/users.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_ViewAuditTrail',
        //    config: {
        //        url: '/Admin.ViewAuditTrailView:UniqueId',
        //        controller: 'otpAdmin_viewAuditTrail',
        //        templateUrl: './app/oneSourceProvision/admin/viewAuditTrail.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_ViewAuditTrailCategories',
        //    config: {
        //        url: '/Admin.ViewAuditTrailCategoriesView:UniqueId',
        //        controller: 'otpAdmin_viewAuditTrailCategories',
        //        templateUrl: './app/oneSourceProvision/admin/viewAuditTrailCategories.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Batch_Print',
        //    config: {
        //        url: '/Forms.Batch_PrintView:UniqueId',
        //        controller: 'otpForms_batchPrint',
        //        templateUrl: './app/oneSourceProvision/forms/batchPrint.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Batch_Print_Progress',
        //    config: {
        //        url: '/Forms.Batch_Print_ProgressView:UniqueId',
        //        controller: 'otpForms_batchPrintProgress',
        //        templateUrl: './app/oneSourceProvision/forms/batchPrintProgress.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_BridgePreview',
        //    config: {
        //        url: '/Forms.BridgePreviewView:UniqueId',
        //        controller: 'otpForms_bridgePreview',
        //        templateUrl: './app/oneSourceProvision/forms/bridgePreview.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_BridgePreviewHistory',
        //    config: {
        //        url: '/Forms.BridgePreviewHistoryView:UniqueId',
        //        controller: 'otpForms_bridgePreviewHistory',
        //        templateUrl: './app/oneSourceProvision/forms/bridgePreviewHistory.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Bridge_Execute',
        //    config: {
        //        url: '/Forms.Bridge_ExecuteView:UniqueId',
        //        controller: 'otpForms_bridgeExecute',
        //        templateUrl: './app/oneSourceProvision/forms/bridgeExecute.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_ActiveWorkpapers',
        //    config: {
        //        url: '/DataEntry.ActiveWorkpapersView:UniqueId',
        //        controller: 'otpDataEntry_activeWorkpapers',
        //        templateUrl: './app/oneSourceProvision/dataEntry/activeWorkpapers.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_AddNewTax',
        //    config: {
        //        url: '/DataEntry.AddNewTaxView:UniqueId',
        //        controller: 'otpDataEntry_addNewTax',
        //        templateUrl: './app/oneSourceProvision/dataEntry/addNewTax.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_AfterTaxTempDiffs',
        //    config: {
        //        url: '/DataEntry.AfterTaxTempDiffsView:UniqueId',
        //        controller: 'otpDataEntry_afterTaxTempDiffs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/afterTaxTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_AltProvAmounts',
        //    config: {
        //        url: '/DataEntry.AltProvAmountsView:UniqueId',
        //        controller: 'otpDataEntry_altProvAmounts',
        //        templateUrl: './app/oneSourceProvision/dataEntry/altProvAmounts.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Amort_Temp_Single',
        //    config: {
        //        url: '/DataEntry.Amort_Temp_SingleView:UniqueId',
        //        controller: 'otpDataEntry_amortTempSingle',
        //        templateUrl: './app/oneSourceProvision/dataEntry/amortTempSingle.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_APICPoolAmounts',
        //    config: {
        //        url: '/DataEntry.APICPoolAmountsView:UniqueId',
        //        controller: 'otpDataEntry_apicPoolAmounts',
        //        templateUrl: './app/oneSourceProvision/dataEntry/apicPoolAmounts.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_ATTempDiffBookTax',
        //    config: {
        //        url: '/DataEntry.ATTempDiffBookTaxView:UniqueId',
        //        controller: 'otpDataEntry_atTempDiffBookTax',
        //        templateUrl: './app/oneSourceProvision/dataEntry/atTempDiffBookTax.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_AWP_Choice',
        //    config: {
        //        url: '/DataEntry.AWP_ChoiceView:UniqueId',
        //        controller: 'otpDataEntry_awpChoice',
        //        templateUrl: './app/oneSourceProvision/dataEntry/awpChoice.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_BridgeMap',
        //    config: {
        //        url: '/DataEntry.BridgeMapView:UniqueId',
        //        controller: 'otpDataEntry_bridgeMap',
        //        templateUrl: './app/oneSourceProvision/dataEntry/bridgeMap.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_BridgeUnitMap',
        //    config: {
        //        url: '/DataEntry.BridgeUnitMapView:UniqueId',
        //        controller: 'otpDataEntry_bridgeUnitMap',
        //        templateUrl: './app/oneSourceProvision/dataEntry/bridgeUnitMap.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_DeferredAnalysis',
        //    config: {
        //        url: '/DataEntry.DeferredAnalysisView:UniqueId',
        //        controller: 'otpDataEntry_deferredAnalysis',
        //        templateUrl: './app/oneSourceProvision/dataEntry/deferredAnalysis.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_DshTab',
        //    config: {
        //        url: '/DataEntry.DshTabView:UniqueId',
        //        controller: 'otpDataEntry_dshTab',
        //        templateUrl: './app/oneSourceProvision/dataEntry/dshTab.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_FlowThrough',
        //    config: {
        //        url: '/DataEntry.FlowThroughView:UniqueId',
        //        controller: 'otpDataEntry_flowThrough',
        //        templateUrl: './app/oneSourceProvision/dataEntry/flowThrough.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_FTProfile',
        //    config: {
        //        url: '/DataEntry.FTProfileView:UniqueId',
        //        controller: 'otpDataEntry_ftProfile',
        //        templateUrl: './app/oneSourceProvision/dataEntry/ftProfile.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_InterimUnitDetails',
        //    config: {
        //        url: '/DataEntry.InterimUnitDetailsView:UniqueId',
        //        controller: 'otpDataEntry_interimUnitDetails',
        //        templateUrl: './app/oneSourceProvision/dataEntry/interimUnitDetails.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Jurisdiction',
        //    config: {
        //        url: '/DataEntry.JurisdictionView:UniqueId',
        //        controller: 'otpDataEntry_jurisdiction',
        //        templateUrl: './app/oneSourceProvision/dataEntry/jurisdiction.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Liability',
        //    config: {
        //        url: '/DataEntry.LiabilityView:UniqueId',
        //        controller: 'otpDataEntry_liability',
        //        templateUrl: './app/oneSourceProvision/dataEntry/liability.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_LockUnitsDataset',
        //    config: {
        //        url: '/DataEntry.LockUnitsDatasetView:UniqueId',
        //        controller: 'otpDataEntry_lockUnitsDataset',
        //        templateUrl: './app/oneSourceProvision/dataEntry/lockUnitsDataset.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_NOLTempDiffs',
        //    config: {
        //        url: '/DataEntry.NOLTempDiffsView:UniqueId',
        //        controller: 'otpDataEntry_nolTempDiffs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/nolTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Numbers',
        //    config: {
        //        url: '/DataEntry.NumbersView:UniqueId',
        //        controller: 'otpDataEntry_numbers',
        //        templateUrl: './app/oneSourceProvision/dataEntry/numbers.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_PayableSet',
        //    config: {
        //        url: '/DataEntry.PayableSetView:UniqueId',
        //        controller: 'otpDataEntry_payableSet',
        //        templateUrl: './app/oneSourceProvision/dataEntry/payableSet.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_PayableSumm',
        //    config: {
        //        url: '/DataEntry.PayableSummView:UniqueId',
        //        controller: 'otpDataEntry_payableSumm',
        //        templateUrl: './app/oneSourceProvision/dataEntry/payableSumm.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_PermDiffBookTax',
        //    config: {
        //        url: '/DataEntry.PermDiffBookTaxView:UniqueId',
        //        controller: 'otpDataEntry_permDiffBookTax',
        //        templateUrl: './app/oneSourceProvision/dataEntry/permDiffBookTax.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_PermDiffs',
        //    config: {
        //        url: '/DataEntry.PermDiffsView:UniqueId',
        //        controller: 'otpDataEntry_permDiffs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/permDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Planning',
        //    config: {
        //        url: '/DataEntry.PlanningView:UniqueId',
        //        controller: 'otpDataEntry_planning',
        //        templateUrl: './app/oneSourceProvision/dataEntry/planning.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Properties',
        //    config: {
        //        url: '/DataEntry.PropertiesView:UniqueId',
        //        controller: 'otpDataEntry_properties',
        //        templateUrl: './app/oneSourceProvision/dataEntry/properties.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_Provision',
        //    config: {
        //        url: '/DataEntry.ProvisionView:UniqueId',
        //        controller: 'otpDataEntry_provision',
        //        templateUrl: './app/oneSourceProvision/dataEntry/provision.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_PTBI',
        //    config: {
        //        url: '/DataEntry.PTBIView:UniqueId',
        //        controller: 'otpDataEntry_ptbi',
        //        templateUrl: './app/oneSourceProvision/dataEntry/ptbi.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_RTPPost',
        //    config: {
        //        url: '/DataEntry.RTPPostView:UniqueId',
        //        controller: 'otpDataEntry_rtpPost',
        //        templateUrl: './app/oneSourceProvision/dataEntry/rtpPost.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_State',
        //    config: {
        //        url: '/DataEntry.StateView:UniqueId',
        //        controller: 'otpDataEntry_state',
        //        templateUrl: './app/oneSourceProvision/dataEntry/state.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_StateAATempDiffsTax',
        //    config: {
        //        url: '/DataEntry.StateAATempDiffsTaxView:UniqueId',
        //        controller: 'otpDataEntry_stateAATempDiffsTax',
        //        templateUrl: './app/oneSourceProvision/dataEntry/stateAATempDiffsTax.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_StateATTempDiffs',
        //    config: {
        //        url: '/DataEntry.StateATTempDiffsView:UniqueId',
        //        controller: 'otpDataEntry_stateATTempDiffs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/stateATTempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_StatePermMods',
        //    config: {
        //        url: '/DataEntry.StatePermModsView:UniqueId',
        //        controller: 'otpDataEntry_statePermMods',
        //        templateUrl: './app/oneSourceProvision/dataEntry/statePermMods.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_StateTaxAdjs',
        //    config: {
        //        url: '/DataEntry.StateTaxAdjsView:UniqueId',
        //        controller: 'otpDataEntry_stateTaxAdjs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/stateTaxAdjs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_StateTempDiffsTax',
        //    config: {
        //        url: '/DataEntry.StateTempDiffsTaxView:UniqueId',
        //        controller: 'otpDataEntry_stateTempDiffsTax',
        //        templateUrl: './app/oneSourceProvision/dataEntry/stateTempDiffsTax.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TaxAdjs',
        //    config: {
        //        url: '/DataEntry.TaxAdjsView:UniqueId',
        //        controller: 'otpDataEntry_taxAdjs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/taxAdjs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TaxBasisLines',
        //    config: {
        //        url: '/DataEntry.TaxBasisLinesView:UniqueId',
        //        controller: 'otpDataEntry_taxBasisLines',
        //        templateUrl: './app/oneSourceProvision/dataEntry/taxBasisLines.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TempDiffBookTax',
        //    config: {
        //        url: '/DataEntry.TempDiffBookTaxView:UniqueId',
        //        controller: 'otpDataEntry_tempDiffBookTax',
        //        templateUrl: './app/oneSourceProvision/dataEntry/tempDiffBookTax.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TempDiffs',
        //    config: {
        //        url: '/DataEntry.TempDiffsView:UniqueId',
        //        controller: 'otpDataEntry_tempDiffs',
        //        templateUrl: './app/oneSourceProvision/dataEntry/tempDiffs.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TempDiff_Single',
        //    config: {
        //        url: '/DataEntry.TempDiff_SingleView:UniqueId',
        //        controller: 'otpDataEntry_tempDiffsingle',
        //        templateUrl: './app/oneSourceProvision/dataEntry/tempDiffSingle.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_TSQueryDatabase',
        //    config: {
        //        url: '/DataEntry.TSQueryDatabaseView:UniqueId',
        //        controller: 'otpDataEntry_tsQueryDatabase',
        //        templateUrl: './app/oneSourceProvision/dataEntry/tsQueryDatabase.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_UDS_Liability',
        //    config: {
        //        url: '/DataEntry.UDS_LiabilityView:UniqueId',
        //        controller: 'otpDataEntry_udsLiability',
        //        templateUrl: './app/oneSourceProvision/dataEntry/udsLiability.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntry_UnitTransferSL',
        //    config: {
        //        url: '/DataEntry.UnitTransferSLView:UniqueId',
        //        controller: 'otpDataEntry_unitTransferSL',
        //        templateUrl: './app/oneSourceProvision/dataEntry/unitTransferSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Document_Browser',
        //    config: {
        //        url: '/Forms.Document_BrowserView:UniqueId',
        //        controller: 'otpForms_documentBrowser',
        //        templateUrl: './app/oneSourceProvision/forms/documentBrowser.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Form_Progress',
        //    config: {
        //        url: '/Forms.Form_ProgressView:UniqueId',
        //        controller: 'otpForms_formProgress',
        //        templateUrl: './app/oneSourceProvision/forms/formProgress.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_AdminStateDetails',
        //    config: {
        //        url: '/Forms.AdminStateDetailsView:UniqueId',
        //        controller: 'otpForms_adminStateDetails',
        //        templateUrl: './app/oneSourceProvision/forms/adminStateDetails.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Attachments',
        //    config: {
        //        url: '/Forms.AttachmentsView:UniqueId',
        //        controller: 'otpForms_attachments',
        //        templateUrl: './app/oneSourceProvision/forms/attachments.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Attachments_OFR',
        //    config: {
        //        url: '/Forms.Attachments_OFRView:UniqueId',
        //        controller: 'otpForms_attachmentsOFR',
        //        templateUrl: './app/oneSourceProvision/forms/attachmentsOFR.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_AWP_Batch',
        //    config: {
        //        url: '/Forms.AWP_BatchView:UniqueId',
        //        controller: 'otpForms_awpBatch',
        //        templateUrl: './app/oneSourceProvision/forms/awpBatch.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Export_Datasets',
        //    config: {
        //        url: '/Forms.Export_DatasetsView:UniqueId',
        //        controller: 'otpForms_exportDatasets',
        //        templateUrl: './app/oneSourceProvision/forms/exportDatasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Export_Interim_Execute',
        //    config: {
        //        url: '/Forms.Export_Interim_ExecuteView:UniqueId',
        //        controller: 'otpForms_exportInterimExecute',
        //        templateUrl: './app/oneSourceProvision/forms/exportInterimExecute.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_FTCompMapping',
        //    config: {
        //        url: '/Forms.FTCompMappingView:UniqueId',
        //        controller: 'otpForms_ftCompMapping',
        //        templateUrl: './app/oneSourceProvision/forms/ftCompMapping.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_FormsAnalysisDetailBase',
        //    config: {
        //        url: '/FormsAnalysisDetailBaseView:UniqueId',
        //        controller: 'otpFormsAnalysisDetailBase',
        //        templateUrl: './app/oneSourceProvision/formsAnalysisDetailBase.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Import_Execute',
        //    config: {
        //        url: '/Forms.Import_ExecuteView:UniqueId',
        //        controller: 'otpForms_importExecute',
        //        templateUrl: './app/oneSourceProvision/forms/importExecute.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Interim_Export_Execute',
        //    config: {
        //        url: '/Forms.Interim_Export_ExecuteView:UniqueId',
        //        controller: 'otpForms_interimExportExecute',
        //        templateUrl: './app/oneSourceProvision/forms/interimExportExecute.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Interim_Import_Execute',
        //    config: {
        //        url: '/Forms.Interim_Import_ExecuteView:UniqueId',
        //        controller: 'otpForms_interimImportExecute',
        //        templateUrl: './app/oneSourceProvision/forms/interimImportExecute.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_JobHistory',
        //    config: {
        //        url: '/Forms.JobHistoryView:UniqueId',
        //        controller: 'otpForms_jobHistory',
        //        templateUrl: './app/oneSourceProvision/forms/jobHistory.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_Framework_New',
        //    config: {
        //        url: '/Main.Framework_NewView:UniqueId',
        //        controller: 'otpMain_frameworkNew',
        //        templateUrl: './app/oneSourceProvision/main/frameworkNew.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_Log',
        //    config: {
        //        url: '/Main.LogView:UniqueId',
        //        controller: 'otpMain_log',
        //        templateUrl: './app/oneSourceProvision/main/log.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_Login',
        //    config: {
        //        url: '/Main.LoginView:UniqueId',
        //        controller: 'otpMain_login',
        //        templateUrl: './app/oneSourceProvision/main/login.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_Report',
        //    config: {
        //        url: '/Main.ReportView:UniqueId',
        //        controller: 'otpMain_report',
        //        templateUrl: './app/oneSourceProvision/main/report.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_ReportLiability',
        //    config: {
        //        url: '/Main.ReportLiabilityView:UniqueId',
        //        controller: 'otpMain_reportLiability',
        //        templateUrl: './app/oneSourceProvision/main/reportLiability.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_ReportLiability_USD',
        //    config: {
        //        url: '/Main.ReportLiability_USDView:UniqueId',
        //        controller: 'otpMain_reportLiabilityUSD',
        //        templateUrl: './app/oneSourceProvision/main/reportLiabilityUSD.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_ReportSL',
        //    config: {
        //        url: '/Main.ReportSLView:UniqueId',
        //        controller: 'otpMain_reportSL',
        //        templateUrl: './app/oneSourceProvision/main/reportSL.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Main_Splash',
        //    config: {
        //        url: '/Main.SplashView:UniqueId',
        //        controller: 'otpMain_splash',
        //        templateUrl: './app/oneSourceProvision/main/splash.html',
        //        parent: 'otp'
        //    }
        //},
        // {
        //     state: 'OneSourceProvision_Main_Start',
        //     config: {
        //         url: '/Main.StartView:UniqueId',
        //         controller: 'otpMain_start',
        //         templateUrl: './app/oneSourceProvision/main/start.html',
        //         parent: 'otp'
        //     }
        // },
        //{
        //    state: 'OneSourceProvision_ReviewEdit',
        //    config: {
        //        url: '/compareDatasets',
        //        controller: 'otpCompareDatasetsController',
        //        templateUrl: './app/features/reviewAndCompareMyDatasets/compareDatasets.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_RatesPopup',
        //    config: {
        //        url: '/Forms.RatesPopupView:UniqueId',
        //        controller: 'otpForms_ratesPopup',
        //        templateUrl: './app/oneSourceProvision/forms/ratesPopup.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Transport_Impact_Execute',
        //    config: {
        //        url: '/Forms.Transport_Impact_ExecuteView:UniqueId',
        //        controller: 'otpForms_transportImpactExecute',
        //        templateUrl: './app/oneSourceProvision/forms/transportImpactExecute.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_UnitFactorsForm',
        //    config: {
        //        url: '/Forms.UnitFactorsFormView:UniqueId',
        //        controller: 'otpForms_unitFactorsForm',
        //        templateUrl: './app/oneSourceProvision/forms/unitFactorsForm.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferConfirmationStep',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferConfirmationStepView:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferConfirmationStep',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransferConfirmationStep.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferPayReviewStep',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferPayReviewStepView:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferPayReviewStep',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransferPayReviewStep.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferStep1',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferStep1View:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferStep1',
        //        templateUrl: './app/oneSourceProvision/wizard/wizardContentFrame.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferStep2',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferStep2View:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferStep2',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransferStep2.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferStep3',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferStep3View:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferStep3',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransferStep3.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferStep4',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferStep4View:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferStep4',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransferStep4.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransferTdReviewStep',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferTdReviewStepView:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransferTdReviewStep',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransferTdReviewStep.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UnitTransfer_UnitTransfer',
        //    config: {
        //        url: '/UnitTransfer.UnitTransferView:UniqueId',
        //        controller: 'otpUnitTransfer_unitTransfer',
        //        templateUrl: './app/oneSourceProvision/unitTransfer/unitTransfer.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_UserManagment',
        //    config: {
        //        url: '/UserManagmentView:UniqueId',
        //        controller: 'otpUserManagment',
        //        templateUrl: './app/oneSourceProvision/userManagment.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Admin_ManageDataset',
        //    config: {
        //        url: '/my-datasets', //'/OneSourceProvision.TaxStream.Forms.Admin_ManageDataset:UniqueId',
        //        controller: 'otpConfigureDatasetsController',
        //        templateUrl: './app/features/configureDatasets/configureDatasets.html',
        //        parent: 'otp'
        //    }
        //},

        //{
        //    state: 'OneSourceProvision_Admin_ConfigureUnits',
        //    config: {
        //        url: '/TaxStream.Forms.Admin_ConfigureUnits:datasetId:datasetName',
        //        controller: 'otpConfigureDatasetsUnitsController',
        //        templateUrl: './app/features/configureDatasets/configureDatasetsUnits.html',
        //        resolve: {
        //            datasetId: function ($stateParams) {
        //                return [
        //                    {
        //                        datasetId: "$stateParams.datasetId",
        //                        datasetName: "$stateParams.datasetName"
        //                    }
        //                ];
        //            }
        //        },
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_Settings',
        //    config: {
        //        url: '/OneSourceProvision_TaxStream_Forms_Settings:UniqueId',
        //        controller: 'otpSettingsController',
        //        templateUrl: './app/shared/settings/settings.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_Forms_NewLockUnlock',
        //    config: {
        //        url: '/TaxStream.Forms.NewLockUnlock:UniqueId',
        //        controller: 'OneSourceProvision.TaxStream.Forms.Admin_CurrencyRatesController',
        //        templateUrl: './app/features/configureDatasets/modifiedLockUnlock.html',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_DataEntryComponents',
        //    config: {
        //        url: '/components',
        //        controller: 'otpDataEntryController',
        //        parent: 'otp'
        //    }
        //},
        //{
        //    state: 'OneSourceProvision_LeadSheet',
        //    config: {
        //        url: '/leadsheets',
        //        controller: 'otpLeadSheetController',
        //        templateUrl: './app/features/reviewAndCompareMyDatasets/lead-sheet.html',
        //        parent: 'otp'
        //    }
        //},
        // {
        //     state: 'OneSourceProvision_Admin_Dataset_Units',
        //     config: {
        //         url: '/manage-units', //'/OneSourceProvision.TaxStream.Forms.Admin_Units:UniqueId',
        //         controller: 'otpManageUnitsController',
        //         templateUrl: './app/features/manageUnits/manageUnits.html',
        //         parent: 'otp'
        //     }
        // }


import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
    AUTH_INFO,
    EMP_INFO,
    IS_OPEN_MAIN_MENU,
    IS_DRAG_EVENT_CALENDAR,
    ORGANIZATION_TEAM,
    MASTER_EMPLOYEE_DATA,
    MASTER_ALL,

    CALENDAR_MASTER_EVENTS_DATA,
    CALENDAR_MASTER_BRANCH_LOCATION_DATA,

    DOCUMENT_MASTER_CATEGORY 
} from './master'

import {
    CALENDAR_EVENT_DATA,
    CALENDAR_EVENT_NON_CONFIRM,
    IS_LOAD_CALENDAR_EVENT
} from './calendar'

import { 
    DOCUMENTSCAN_GET_BAISCINFO,
    DOCUMENTSCAN_DASHBOARD,
    DOCUMENTSCAN_MISSINGDOC,
    DOCUMENTSCAN_RETURNCODE,
    DOCUMENTSCAN_GRID_MESSAGE,
    // DOCUMENTSCAN_CREATE_RETURNCODE,
    // DOCUMENTSCAN_CREATE_MESSAGE,
    DOCUMENTSCAN_RETURNCODE_VERIFY,
    LOAD_MASTER_RETURNREASON,
    LOAD_RETURNCODE_BUNDLE,   
    LOAD_MASTER_RETURNSTATUS,
    CREATE_RETURNCODE_BUNDLE,
    DOCUMENTSCAN_GET_BORROWER

} from './document'

export default combineReducers({
    routing: routerReducer,

    AUTH_INFO,
    EMP_INFO,
    IS_OPEN_MAIN_MENU,
    IS_DRAG_EVENT_CALENDAR,

    MASTER_ALL,

    ORGANIZATION_TEAM,
    MASTER_EMPLOYEE_DATA,

    CALENDAR_MASTER_EVENTS_DATA,
    CALENDAR_EVENT_NON_CONFIRM,
    CALENDAR_MASTER_BRANCH_LOCATION_DATA,

    CALENDAR_EVENT_DATA,
    CALENDAR_EVENT_NON_CONFIRM,
    IS_LOAD_CALENDAR_EVENT,

    DOCUMENTSCAN_GET_BAISCINFO,
    DOCUMENTSCAN_GET_BORROWER,
    DOCUMENTSCAN_DASHBOARD,
    DOCUMENTSCAN_MISSINGDOC,
    DOCUMENTSCAN_RETURNCODE,
    // DOCUMENTSCAN_GRID_MESSAGE,
    // DOCUMENTSCAN_CREATE_RETURNCODE,
    // DOCUMENTSCAN_CREATE_MESSAGE,
    DOCUMENTSCAN_RETURNCODE_VERIFY,
    LOAD_RETURNCODE_BUNDLE,
    CREATE_RETURNCODE_BUNDLE,

    LOAD_MASTER_RETURNSTATUS,
    LOAD_MASTER_RETURNREASON,
    DOCUMENT_MASTER_CATEGORY 

})

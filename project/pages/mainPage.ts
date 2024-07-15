import BaseForm from '@framework/form/baseForm';
import { ElementFactory } from '@framework/elements';

class MainPage extends BaseForm {
    private static dashboardSidebarLabel  = ElementFactory.getLabel('.dashboard-sidebar', 'Dashboard-sidebar label');

    constructor() {
        super(MainPage.dashboardSidebarLabel, 'Main page');
    }
}

export default new MainPage();

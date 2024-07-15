import { Page } from '@playwright/test';

/**
 * Utility class for sharing page instance between test steps
 */
class PageProvider {
    private static page: Page;

    /**
     * Set page instance
     * 
     * @param page - Page fixture value
     */
    static setPage(page: Page) {
        this.page = page;
    }

    /**
     * Get page instance
     * 
     * @returns Page instance
     */
    static getPage(): Page {
        return this.page;
    }
}

export default PageProvider;

const { browserAction, tabs, storage } = browser;

const storageKey = "saved-tabs";

const imgSizes = [48, 96, 128];

enum Images {
    Save = "img/button_save",
    Restore = "img/button_restore"
}

const save = async (): Promise<void> => {
    const tabList = await tabs.query({ currentWindow: true });
    const urlList = tabList.map(tab => tab.url).filter((url): url is string => !!url);

    storage.sync.set({
        [storageKey]: urlList
    });
    
    tabs.create({ index: 0 });
    const idList = tabList.map(tab => tab.id).filter((id): id is number => !!id);
    tabs.remove(idList);
}

const restore = (urls: string[], currentTab: number): void => {
    urls.map((url, i) =>
        tabs.create({
            index: currentTab + 1 + i,
            url
        })
    );

    storage.sync.remove(storageKey);
}

const updateIcon = (urls: string[] | undefined): void => {
    const img = urls 
        ? Images.Restore 
        : Images.Save;

    const path = imgSizes.reduce((acc, size) => ({
        ...acc,
        [size]: `${img}_${size}.png`
    }), {});

    browserAction.setIcon({ path });
    browserAction.setBadgeText({ text: urls ? `${urls.length}` : null });
}

browserAction.onClicked.addListener(async ({ index }) => {
    const { [storageKey]: urls } = await storage.sync.get(storageKey);
    urls ? restore(urls, index) : save();
});

storage.onChanged.addListener(({ [storageKey]: urls }) => (
    urls.oldValue === urls.newValue || updateIcon(urls.newValue)
));

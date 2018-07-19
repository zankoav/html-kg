import './accordion-mixed.scss';
"use strict";

(function () {
    var ACCORDION = 'accordion',
        ACCORDION_ITEM = 'accordion__item',
        ACCORDION_ITEM_BUTTON = 'accordion__item-button',
        ACCORDION_ITEM_BUTTON_ACTIVE = 'accordion__item-button--active',
        ACCORDION_ITEM_PANEL_SHOW = 'accordion__item-panel--show';
    var accordions = document.getElementsByClassName(ACCORDION);
    for (var i = 0; i < accordions.length; i++) {
        var accordionItems = accordions[i].getElementsByClassName(ACCORDION_ITEM);
        for (var j = 0; j < accordionItems.length; j++) {
            var obj = accordionItems[j];
            var accordionButton = obj.getElementsByClassName(ACCORDION_ITEM_BUTTON)[0];
            accordionButton.addEventListener('click', activatePanel, false);
        }
    }

    function clearAccordion(accordion) {
        var activeButton = accordion.getElementsByClassName(ACCORDION_ITEM_BUTTON_ACTIVE)[0];
        var activePanel = accordion.getElementsByClassName(ACCORDION_ITEM_PANEL_SHOW)[0];
        if (activeButton) {
            activeButton.classList.remove(ACCORDION_ITEM_BUTTON_ACTIVE);
        }
        if (activePanel) {
            activePanel.removeAttribute('style');
            activePanel.classList.remove(ACCORDION_ITEM_PANEL_SHOW);
        }
    }

    function activatePanel() {
        clearAccordion(this.parentNode.parentNode);
        this.classList.toggle(ACCORDION_ITEM_BUTTON_ACTIVE);
        var panel = this.nextElementSibling;
        panel.classList.toggle(ACCORDION_ITEM_PANEL_SHOW);
        panel.style.height = 'initial';
        var panelHeights = panel.offsetHeight;
        panel.removeAttribute('style');
        setTimeout(function () {
            panel.style.height = panelHeights + 'px';
        }, 4);
    }
}());
// Funções para a demonstração aprimorada do template
// Alterna entre as visualizações moderna e original do Notion
document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre as views
    const navItems = document.querySelectorAll('.preview-nav-item');
    const previewViews = document.querySelectorAll('.preview-view');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active das navegações
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Adiciona active ao item clicado
            this.classList.add('active');
            
            // Obtém o ID da view para ativar
            const viewId = this.getAttribute('data-view');
            
            // Desativa todas as views
            previewViews.forEach(view => {
                view.classList.remove('active');
                view.classList.remove('fade-in');
            });
            
            // Ativa a view correspondente
            const targetView = document.getElementById(viewId + '-view');
            if (targetView) {
                targetView.classList.add('active');
                setTimeout(() => {
                    targetView.classList.add('fade-in');
                }, 50);
            }
        });
    });
    
    // Compatibilidade com a navegação por tabs antiga
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active de todos os botões
            tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Adiciona active ao botão clicado
            this.classList.add('active');
            
            // Obtém o ID da tab para ativar
            const tabId = this.getAttribute('data-tab');
            
            // Desativa todas as tabs
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Ativa a tab correspondente
            const targetTab = document.getElementById(tabId + '-tab');
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    // Responsividade para dispositivos móveis
    function adjustForMobile() {
        if (window.innerWidth <= 768) {
            // Ajustes específicos para mobile
            const pipelineCards = document.querySelectorAll('.pipeline-cards');
            pipelineCards.forEach(container => {
                container.style.overflowX = 'auto';
            });
            
            // Adiciona comportamento de toque para navegação
            const overflowContainers = document.querySelectorAll('.pipeline-grid, .calendar-grid');
            overflowContainers.forEach(container => {
                container.style.webkitOverflowScrolling = 'touch';
            });
        }
    }
    
    // Inicializa ajustes de responsividade
    adjustForMobile();
    
    // Atualiza em tempo real com redimensionamento
    window.addEventListener('resize', adjustForMobile);
    
    // Alternância entre a visualização moderna e a original do Notion
    const showModernBtn = document.getElementById('show-modern');
    const showOriginalBtn = document.getElementById('show-original');
    const modernView = document.getElementById('modern-view');
    const originalView = document.querySelector('.preview-container');
    
    if (showModernBtn && showOriginalBtn && modernView && originalView) {
        // Inicialmente esconder a visualização original
        originalView.style.display = 'none';
        
        showModernBtn.addEventListener('click', function() {
            showModernBtn.classList.add('active');
            showOriginalBtn.classList.remove('active');
            modernView.style.display = 'block';
            originalView.style.display = 'none';
        });
        
        showOriginalBtn.addEventListener('click', function() {
            showOriginalBtn.classList.add('active');
            showModernBtn.classList.remove('active');
            originalView.style.display = 'block';
            modernView.style.display = 'none';
        });
    }
    
    // Adiciona dica de demonstração
    const previewContainer = document.querySelector('.preview-container-enhanced');
    if (previewContainer) {
        const demoTip = document.createElement('div');
        demoTip.className = 'demo-highlight';
        demoTip.innerHTML = `
            <div class="demo-highlight-title">
                <i class="fas fa-lightbulb"></i> Dica de uso do template
            </div>
            <p class="demo-highlight-text">
                Este template CRM no Notion é totalmente personalizável! Você pode adicionar mais colunas ao pipeline, 
                criar novos tipos de registros, personalizar os formulários de cadastro e adaptar todo o sistema 
                conforme as necessidades específicas do seu negócio.
            </p>
        `;
        previewContainer.parentNode.appendChild(demoTip);
    }
});
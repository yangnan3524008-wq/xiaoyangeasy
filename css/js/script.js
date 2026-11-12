/* ========================================
   网站编辑面板样式 - 增强版
   ======================================== */

.admin-panel {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 5000;
}

.admin-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff0055, #00ffff);
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 0, 85, 0.3);
    transition: all 0.3s ease;
    z-index: 5001;
}

.admin-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 40px rgba(255, 0, 85, 0.5);
}

.admin-toggle:active {
    transform: scale(0.95);
}

/* 编辑面板 */
.admin-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    display: none;
    z-index: 5002;
    overflow-y: auto;
    padding: 20px;
    animation: fade-in 0.3s ease;
}

.admin-modal.show {
    display: flex;
    flex-direction: column;
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: sticky;
    top: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 5003;
}

.admin-header h2 {
    font-size: 2rem;
    background: linear-gradient(135deg, #ff0055, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
    margin: 0;
}

.admin-close {
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.admin-close:hover {
    background: rgba(255, 0, 85, 0.2);
    color: #ff0055;
}

/* 内容区域 */
.admin-content {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-bottom: 3rem;
}

@media (max-width: 1200px) {
    .admin-content {
        grid-template-columns: 1fr;
    }
}

/* 分区 */
.admin-section {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.admin-section:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
}

.admin-section h3 {
    font-size: 1.3rem;
    background: linear-gradient(135deg, #00ffff, #ff0055);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: 700;
}

/* ========== 背景类型选择 ========== */
.bg-type-selector {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
}

.type-option {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.type-option:hover {
    background: rgba(255, 255, 255, 0.1);
}

.type-option input {
    cursor: pointer;
}

.type-option input:checked + span {
    color: #ff0055;
    font-weight: 700;
}

.type-option span {
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

/* ========== 表单元素 ========== */
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-size: 0.9rem;
    color: #a0a0a0;
    margin-bottom: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.admin-input,
.admin-textarea {
    width: 100%;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: #e0e0e0;
    font-family: inherit;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.admin-input:focus,
.admin-textarea:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: #ff0055;
    box-shadow: 0 0 15px rgba(255, 0, 85, 0.3);
}

.admin-input::placeholder,
.admin-textarea::placeholder {
    color: rgba(160, 160, 160, 0.5);
}

.admin-textarea {
    resize: vertical;
    min-height: 80px;
    font-family: 'Courier New', monospace;
}

/* ========== 辅助文本 ========== */
.helper-text {
    font-size: 0.8rem;
    color: #a0a0a0;
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.format-image,
.format-video {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    font-size: 0.75rem;
}

.format-image {
    color: #00ffff;
    border: 1px solid rgba(0, 255, 255, 0.3);
}

.format-video {
    color: #ff0055;
    border: 1px solid rgba(255, 0, 85, 0.3);
}

/* ========== 字数统计 ========== */
.char-count {
    font-size: 0.75rem;
    color: #a0a0a0;
    margin-top: 0.3rem;
    text-align: right;
}

/* ========== 背景预览 ========== */
.bg-preview {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: linear-gradient(135deg, rgba(255, 0, 85, 0.2), rgba(0, 255, 255, 0.2));
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin: 1rem 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
}

.preview-placeholder {
    color: #a0a0a0;
    font-size: 1rem;
    text-align: center;
}

.bg-preview.with-image {
    background-size: cover;
    background-position: center;
}

.bg-preview.with-video {
    background: rgba(255, 0, 85, 0.1);
}

.bg-preview video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ========== 按钮 ========== */
.admin-btn-small {
    width: 100%;
    padding: 10px;
    background: rgba(0, 255, 255, 0.15);
    border: 1px solid rgba(0, 255, 255, 0.5);
    color: #00ffff;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    font-size: 0.95rem;
}

.admin-btn-small:hover {
    background: rgba(0, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.2);
}

.admin-btn-small:active {
    transform: translateY(0);
}

/* ========== 底部操作 ========== */
.admin-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    grid-column: 1 / -1;
}

.admin-btn-save,
.admin-btn-reset {
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
}

.admin-btn-save {
    background: linear-gradient(135deg, #ff0055, #ff00ff);
    color: white;
    box-shadow: 0 5px 20px rgba(255, 0, 85, 0.3);
}

.admin-btn-save:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 0, 85, 0.5);
}

.admin-btn-reset {
    background: rgba(255, 255, 255, 0.1);
    color: #a0a0a0;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.admin-btn-reset:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #e0e0e0;
    border-color: rgba(255, 255, 255, 0.3);
}

/* ========== 成功提示 ========== */
.admin-success {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 255, 100, 0.15);
    border: 1px solid rgba(0, 255, 100, 0.5);
    color: #00ff64;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    z-index: 6000;
    animation: slide-in-right 0.4s ease-out;
    font-weight: 600;
}

.admin-error {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 0, 85, 0.15);
    border: 1px solid rgba(255, 0, 85, 0.5);
    color: #ff0055;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    z-index: 6000;
    animation: slide-in-right 0.4s ease-out;
    font-weight: 600;
}

@keyframes slide-in-right {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ========== 响应式 ========== */
@media (max-width: 768px) {
    .admin-toggle {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        bottom: 20px;
        right: 20px;
    }

    .admin-modal {
        padding: 15px;
    }

    .admin-header h2 {
        font-size: 1.5rem;
    }

    .admin-content {
        grid-template-columns: 1fr;
    }

    .admin-actions {
        grid-template-columns: 1fr;
    }

    .bg-type-selector {
        flex-direction: column;
    }

    .type-option {
        justify-content: center;
    }
}

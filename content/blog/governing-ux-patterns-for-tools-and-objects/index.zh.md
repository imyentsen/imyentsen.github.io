---
title: "工具與物件的 UX Pattern 治理"
org: "Aize AS"
year: 2026
yearRange: "2025-2026"
desc: "在數位孿生產品中，工具決定使用者如何與數位孿生互動，物件則是數位孿生呈現的最基本資料。這個專案呈現我如何整合支離破碎的工具和物件，讓 UX patterns 清晰一致，並以 Design System 建立便於使用與維護的使用流程。"
slug: "/governing-ux-patterns-for-tools-and-objects"
coverImage: "cover.jpg"
highlightImage: "cover.jpg"
highlightVideo: "cover-card.mp4"
---

# 目標

這個專案的目標是整合數位孿生的 UX pattern，改進產品體驗。我們的數位孿生產品，是從 Aker Solutions（挪威的全球性工程與技術公司，客戶為能源產業）的軟體部門分拆出來。當時繼承了約 30 至 40 條產品線，是不同時期針對不同應用情境開發的解決方案。這導致整合其使用者體驗的過程困難重重，在此我要分享物件和工具相關 UX pattern 的整合過程，之所以會選擇它們，是因為我是專案的負責人，而它們對數位孿生也特別重要。

首先是**物件（Object）**。物件是數位孿生呈現的最基本資料。能源業數位孿生常見的物件包含實體物件（Tag）、工單（Work Order）、文件（Document）、異常（Anomaly）等。使用者必須仰賴跟這些物件互動，來完成工作。過往在工作流中，相同的物件往往沒有一致的外觀與互動，而相異的物件沒有一致的區分方式。這導致使用者的心智模型（Mental model）支離破碎，不必要地提升學習與使用成本，產品因此變得難用。

第二個案例是**工具（Tool）**。工具決定使用者如何與數位孿生互動，它們位於螢幕底部的 Toolbar，我們的七個產品團隊中，有四個設計了自己的工具，但我們缺乏一致性。這導致有些工具儘管相似，但在 Toolbar 的位置跟互動，會隨不同團隊而有差別。同一個工具可能有時在 Toolbar 左邊，有時在右邊。有時開啟 menu，有時卻打開 popover 或次要 toolbar，背後沒有一致規則。

![Placeholder：物件與工具，patterns 必須治理的兩個對象](./objectives.jpg)

Placeholder：物件與工具，我們的 patterns 必須治理的兩個對象。

# 我的角色

我主導並負責與工具和物件相關的 UX patterns，並與 Design System 團隊和七個 Product teams 合作。在 Design System 團隊中，我盤點了數位孿生的物件與工具，並重新設計相關的 tokens、components 與 patterns，與工程師合作交付。之後我與 Product teams 合作，建立相關 guidelines、agents skills 與原型。

![Placeholder：我在物件工作與後續 pattern 稽核工作中的角色](./role.jpg)

Placeholder：我在物件工作，以及後續 pattern 稽核工作中的角色。

# 挑戰

## 物件的呈現缺乏清晰的心智模型

由於原本的 30 至 40 條產品線是分別被開發出來，它們呈現物件的方式各有不同，反映原本組織的缺乏整合。

![Placeholder：同一種物件類型的數種 List 呈現方式並列](./challenge-objects.jpg)

Placeholder 同一種物件類型的數種 List 呈現方式並列。缺乏清晰邏輯的多樣性，傷害了我們的 UX。

這導致使用者流程中的認知碎片化。我們的使用者對能源產業的設備握有深厚的領域知識，而產品卻無法給他們一個與之相符的心智模型。重型資產的規劃、operation 與維護工作，全都仰賴使用者的心智模型。

## 工具的體驗凌亂不一致，且設計系統文件冗長難以閱讀

Toolbar 的問題成因不同。使用它的四個團隊各有自己的時程與目標。在先前，我們只對 Toolbar 在螢幕底端的整體位置有規範，但四個團隊（3D Viewer, 2D Viewer, Table view, Webapp）能自行設計內部。要改動 toolbar，就得安排會議或進行一段漫長的 async 往返。且我們的設計師分散在英國與挪威，有些同事一年只碰面一到兩次，很難有有機的直接溝通。

這導致 Toolbar 有許多不一致的體驗缺陷。舉例而言，由某個團隊主導的 toolbar 分區的順序是 layer control、tool、surface settings、overflow button；但在其他組的主導的產品其他區域，這個順序卻改變了。使用者也曾在先前的測試中告訴我們，這種不一致讓他們困惑。

![Placeholder：同一個 toolbar 在兩個產品區域中，區塊順序不同](./challenge-tools.jpg)

Placeholder：同一個 toolbar 在兩個產品區域中，區塊順序卻不相同。

我們同時也發現，設計系統 guidelines 在處理 patterns 時常常力有未逮。因為指引文件往往很長，長到人們不可能每次都有時間耐心讀完，就算讀完也吸收不了。

# 方法

## 1. 盤點數位孿生中的物件與工具

要處理物件的呈現，勢必先搞清楚數位孿生中的物件有哪些。我們選用 [OOUX 框架](https://www.ooux.com)作為盤點方法，並與不同團隊的利益相關者協作，建立這張地圖。它讓我們鳥瞰產品裡的所有物件，也逼迫我們對齊彼此理解——畢竟這是一個需要深厚前置知識的領域。

![Placeholder：協作建立的物件地圖](./objectmap.jpg)

Placeholder：協作建立的物件與工具地圖。

我們也清點所有的工具，並按照他們的特性分類，並與利益相關者溝通呈現與使用的優先順序。

這些地圖除了給我們清晰的概覽，也幫助我們預測未來需要考慮的新物件和 component 需求，進而確保當下的設計有擴充彈性（Scalability）。

## 2. 定義工作順位

以物件而言，我們選定 Data Label 與 List 相關的 component，作為兩項優先項目。兩者在數位孿生中無所不在，投資效益最大。以工具而言，因為 Components 已經在先前的工作中完成，我們專注在 patterns。

![Placeholder：依 components 在產品中的覆蓋範圍排定優先順序](./priorities.jpg)

Placeholder：依 components 在產品中的覆蓋範圍排定優先順序。

## 3. 開發效益高的 component

我們設計並開發了 **Data Label** 與一組 **List** components 作為試驗。它們同時驗證了物件導向的方法，也回應了產品團隊最迫切的需求。與此同時，我們也建立了相關的 alias tokens，確保後續的相關新 components 可以遵循同樣的視覺語言。

![Placeholder：試驗性的 Data Label 與 List component](./pilot.jpg)

Placeholder：試驗性的 Data Label 與 List component。

## 4. 以 pattern 治理 component

List 包含五個 components，Data Label 則有兩組 components。Toolbar 則牽涉到多種不同 buttons, menu, popover 等。我們需要 UX pattern 來幫助設計師理解哪一類 component 屬於哪一個產品區域、以什麼順序排列，以及允許跟禁止怎麼樣的互動發生。

![Placeholder：pattern 幫助設計師理解如何使用多種相關 component](./toolbar-pattern.jpg)

Placeholder：pattern 來幫助設計師理解哪一類 component 屬於哪一個產品區域、以什麼順序排列，以及允許怎麼樣的互動發生。

## 5. 以協作、迭代與審查逐步建立 pattern

僅僅提供 component 並不夠。我們與主管、設計師和開發者進行訪談與工作坊，建立互信、蒐集 component 使用的回饋。我們將橫越數個 component 的關鍵體驗 pattern 記錄下來，分別是與物件有關的 list 與 selection patterns，以及與工具有關的 toolbar pattern。這些 patterns 包含關鍵範例，讓它們可以被引用，也可以被改進。

## 6. 讓design system文件變成設計工具

一般而言， Design system 高度仰賴 documentation 來作為治理的基石。但隨產品成長，design system 文件變得越來越長，也越來越難讀，這使得審查變成 design system team 的專門技術。但很多時候，使用者需要的是即時能自行審查初步成果。

我嘗試使用 ai 解決這個問題。我們希望將靜態的文件，變成設計與開發團隊成員的動態工具。

我建立了兩個 agentic skills：Scraper and Audit。

第一個是 scraper skill，這個 skill 把 Figma 中既有的 design system 文件轉換成同時支援 Figma Agents 與 Codex。它不需要我們重做 guidelines，而是遵循既有的文件結構，把文字內容轉成 markdown，並把 guideline 的範例儲存成 png，以利 LLM 的視覺讀取並節省 token。

![Placeholder：guideline 擷取與稽核流程](./audit-skill.jpg)

Placeholder：guideline 擷取與稽核流程。

第二個 是 audit skill。它以 Scraper Skill 對使用者指定的設計進行審查。可以在 Figma 或是在 Codex 中執行。

![Placeholder：稽核輸出，以 annotation 形式放在 Figma 上](./audit-output.jpg)

Placeholder：稽核輸出，以 annotation 形式放在 Figma 上。

# 成果

## 數位孿生的物件呈現變得清晰易解

![Placeholder：Data Label 在 2D 與 3D 環境中的樣貌](./outcome-objects.jpg)

Placeholder：Data Label 在 2D 與 3D 環境中的樣貌。

**Data Label** component以強烈的視覺關聯標示不同物件類型，並連結到 List 等其他元素。它顯示 ID、描述與時間序列等關鍵資訊，支援單一、群組與叢集標籤三種形式，支援資料視覺化的色彩編碼，並能適應 2D 與 3D 的工業環境。

**List** components 則為物件導向的使用者旅程提供一致的結構，涵蓋搜尋結果、物件歷程與使用者自建資料夾，同時與 Data Label 保持視覺一致。它們具備定義明確的互動狀態、清晰的使用指南與可設定的替換操作；而它們的使用方式由 pattern 文件治理，確保一致。

兩者發布後都被廣泛採用，並取代了先前累積在軟體各處的各種自訂 component。

## 使用者獲得一致的工具列使用體驗

![Placeholder：Data Label 在 2D 與 3D 環境中的樣貌](./outcome-objects.jpg)

Placeholder：Toolbar 改善後的樣貌

我們將工具分類。並依照互動類型、優先順序建立基本的互動原則。我們也明確指出過往產品中容易出現的 ux pattern 並將其列入文件中。

## 導入 AI 加速 design system audit

![Placeholder：Data Label 在 2D 與 3D 環境中的樣貌](./outcome-objects.jpg)

Placeholder：Toolbar annotation

我以 toolbar patterns 進行 Scraper & Audit Skills 的測試：這兩個 skills 抓取了最新的 pattern，然後以 Annotation 的方式給予設計師的回饋，並提供 Design system 文件的原始資料來源。

以一個由產品組製作的 toolbar 設計草稿為例，AI 抓到了四個問題。我們希望藉此讓設計系統的審查更為高效、更為民主化，並減少消耗在會議上的工時。

除此之外，我們也發現 AI 的使用，指出既有 design system 的不足。比如：**模糊的 guidelines 會產出不一致的稽核結果：**Annotation 的品質，與它背後 guidelines 的清晰度高度相關。比如說，如果不寫清楚，**AI 無法分辨軟性的 optional 建議與硬性 mandatory 規則。**這有助於 design system 改進自身文件品質。

## 共同對齊的路線圖

![Placeholder：component 路線圖，Tree、Card 與 Tag](./outcome-roadmap.jpg)

Placeholder：component 路線圖。Tree、Card 與 Tag。

除了試驗性component之外，我們也設計了產品 roadmap 上後續 component 更新的框線圖與 guidelines，包含 Tree、Card 與 Tag。這讓利益相關者共享共同的發展目標。

---

# 備註

## 保密聲明

本文所有視覺素材均為說明本專案流程與成果而製作，不代表實際產品，並尊重公司的智慧財產權及客戶的商業機密。
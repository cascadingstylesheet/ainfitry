    <script>
        function openTab(tabId) {
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        }

        // Function to render PDF in a book-like format
        function renderPDF(pdfFile) {
            const viewer = document.getElementById('pdfViewer');
            pdfjsLib.getDocument(pdfFile).promise.then(function(pdf) {
                const numPages = pdf.numPages;
                for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                    pdf.getPage(pageNum).then(function(page) {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        const viewport = page.getViewport({ scale: 1.5 });

                        canvas.width = viewport.width;
                        canvas.height = viewport.height;

                        page.render({
                            canvasContext: context,
                            viewport: viewport
                        }).promise.then(function() {
                            const pdfPageDiv = document.createElement('div');
                            pdfPageDiv.classList.add('pdfPage');
                            pdfPageDiv.appendChild(canvas);
                            viewer.appendChild(pdfPageDiv);
                        });
                    });
                }
            });
        }

        // Load the embedded PDF
        const pdfFile = 'notes.pdf'; // Replace with your actual PDF file path
        renderPDF(pdfFile);
    </script>
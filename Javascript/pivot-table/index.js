var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
		url: 'https://localhost:7105/Elasticsearch',
          enableSorting: true,
          expandAll: false,
          dataSource: [],
          columns: [
            { name: 'State' }
          ],
          rows: [
            { name: 'Location' },
		  { name: 'Rainfall' }
          ],
          values: [
            { name: 'Wind Speed' },
            { name: 'Min Temperature' },
            { name: 'Max Temperature' },
          ],
          filters: []
	},
	showFieldList: true,
	width: '100%'
});
pivotObj.appendTo('#PivotView');
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const provinsi = () => {
	const dataProvinsi = async () => {
		try {
			// Apply chart themes
			am4core.useTheme(am4themes_animated)

			// Create chart instance
			const chart = am4core.create('provinsi', am4charts.XYChart)
			chart.responsive.enabled = true
			chart.topAxesContainer.paddingTop = 30

			// Add data
			chart.dataSource.url =
				'http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi'

			// Create Legend
			chart.legend = new am4charts.Legend()
			chart.legend.position = 'top'
			chart.legend.fontSize = 12

			const markerTemplate = chart.legend.markers.template
			markerTemplate.width = 15
			markerTemplate.height = 15
			chart.legend.labels.template.textDecoration = 'none'
			chart.legend.valueLabels.template.textDecoration = 'none'

			const as = chart.legend.labels.template.states.getKey('active')
			as.properties.textDecoration = 'line-through'

			// Create axes
			// Xaxis
			const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
			categoryAxis.dataFields.category = 'provinsi'
			categoryAxis.renderer.labels.template.horizontalCenter = 'right'
			categoryAxis.renderer.labels.template.verticalCenter = 'middle'
			categoryAxis.renderer.labels.template.rotation = -90
			categoryAxis.renderer.grid.template.strokeOpacity = 0
			categoryAxis.renderer.minGridDistance = 25
			categoryAxis.fontSize = 10
			categoryAxis.showOnInit = false

			const categoryAxis2 = chart.xAxes.push(new am4charts.CategoryAxis())
			categoryAxis2.renderer.opposite = true
			categoryAxis2.dataFields.category = 'provinsi'
			categoryAxis2.renderer.grid.template.disabled = true
			categoryAxis2.renderer.labels.template.disabled = true

			const axisTooltip = categoryAxis2.tooltip
			axisTooltip.background.fill = am4core.color('rgb(226, 63, 65)')
			axisTooltip.background.strokeWidth = 0
			axisTooltip.background.cornerRadius = 3

			categoryAxis2.adapter.add('getTooltipText', () => {
				let totalValue = 0
				chart.series.each(function (series) {
					totalValue += series.tooltipDataItem.valueY
				})
				return `Total Terkonfirmasi : [bold]${chart.numberFormatter.format(
					totalValue
				)}`
			})

			// Yaxis
			const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
			valueAxis.title.text = 'Jumlah Kasus'
			valueAxis.fontSize = 10
			valueAxis.title.fontSize = 15

			// Create series
			const series = chart.series.push(new am4charts.ColumnSeries())
			series.dataFields.valueY = 'meninggal'
			series.dataFields.categoryX = 'provinsi'
			series.name = 'Meninggal'
			series.tooltipText = '{name} : [bold]{valueY}'
			series.tooltip.pointerOrientation = 'vertical'
			series.tooltip.background.cornerRadius = 3
			series.tooltip.label.padding(6, 6, 6, 6)
			series.strokeWidth = 0
			series.fill = am4core.color('rgb(103, 112, 130)')
			series.stacked = true

			const series2 = chart.series.push(new am4charts.ColumnSeries())
			series2.dataFields.valueY = 'dirawat'
			series2.dataFields.categoryX = 'provinsi'
			series2.name = 'Kasus Aktif'
			series2.tooltipText = '{name} : [bold]{valueY}'
			series2.tooltip.pointerOrientation = 'vertical'
			series2.tooltip.background.cornerRadius = 3
			series2.tooltip.label.padding(6, 6, 6, 6)
			series2.strokeWidth = 0
			series2.fill = am4core.color('rgb(218, 189, 73)')
			series2.stacked = true

			const series3 = chart.series.push(new am4charts.ColumnSeries())
			series3.dataFields.valueY = 'sembuh'
			series3.dataFields.categoryX = 'provinsi'
			series3.name = 'Sembuh'
			series3.tooltipText = '{name} : [bold]{valueY}'
			series3.tooltip.pointerOrientation = 'vertical'
			series3.tooltip.background.cornerRadius = 3
			series3.tooltip.label.padding(6, 6, 6, 6)
			series3.strokeWidth = 0
			series3.fill = am4core.color('rgb(67, 156, 99)')
			series3.stacked = true

			chart.scrollbarX = new am4charts.XYChartScrollbar()
			chart.scrollbarX.series.push(series3)
			chart.scrollbarX.parent = chart.bottomAxesContainer

			const scrollAxis = chart.scrollbarX.scrollbarChart.xAxes.getIndex(0)
			scrollAxis.renderer.labels.template.disabled = true
			scrollAxis.renderer.grid.template.disabled = false

			chart.responsive.rules.push({
				relevant: function (target) {
					if (target.pixelWidth <= 400) {
						chart.legend.fontSize = 10
						markerTemplate.width = 13
						markerTemplate.height = 13

						categoryAxis.renderer.minGridDistance = 5
						categoryAxis.renderer.labels.template.rotation = -89.5
						categoryAxis.fontSize = 7

						valueAxis.fontSize = 8
						valueAxis.title.fontSize = 10

						return true
					}

					return false
				},
				state: function (target, stateId) {
					if (target instanceof am4charts.Chart) {
						const state = target.states.create(stateId)
						state.properties.paddingTop = 0
						state.properties.paddingRight = 17
						state.properties.paddingBottom = 0
						state.properties.paddingLeft = 0

						return state
					}

					return null
				}
			})

			// Add cursor
			chart.cursor = new am4charts.XYCursor()
		} catch (error) {
			console.log(error)
		}
	}

	dataProvinsi()
}

export default provinsi

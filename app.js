Highcharts.chart('container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: '10 PUSKESMAS DENGAN 9 (SEMBILAN) SESUAI STANDAR JENIS TENAGA KESEHATAN TERENDAH MENURUT PROVINSI TAHUN 2022',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.kemkes.go.id/id/home/"' +
            'target="_blank">Kementerian Kesehatan</a>',
        align: 'left'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Nakes (%)',
        // ['Papua', 7.6],
        // ['Papua Barat', 16.4],
        // ['Maluku', 18.9],
        // ['Nusa Tenggara Timur', 27.8],
        // ['Sulawesi Utara', 30.3],
        // ['Maluku Utara', 32.0],
        // ['Kalimantan Tengah', 33.3],
        // ['Bengkulu', 33.5]
        // ['Sumatera Utara', 38.5],
        // ['Lampung', 39.1]

        data: [
            {
                name: 'Papua',
                y: 7.6,
                sliced: true,
                selected: true
            },
            // ['Papua', 7.6],
            ['Papua Barat', 16.4],
            // {
            //     name: 'Xiaomi',
            //     y: 12,
            //     sliced: true,
            //     selected: true
            // },
            ['Maluku', 18.9],
            ['Nusa Tenggara Timur*', 27.8],
            ['Sulawesi Utara', 30.3],
            ['Maluku Utara', 32.0],
            ['Kalimantan Tengah', 33.3],
            ['Bengkulu', 33.5],
            ['Sumatera Utara', 38.5],
            ['Lampung', 39.1]
        ]
    }]
});

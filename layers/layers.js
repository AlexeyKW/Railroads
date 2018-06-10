ol.proj.get("EPSG:4326").setExtent([245.539526, -4074.347389, 6988.258229, -378.294814]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
    title: 'Субъекты РФ<br />\
    <img src="styles/legend/_0_0.png" /> -<br />\
    <img src="styles/legend/_0_1.png" /> Восточно-Сибирская<br />\
    <img src="styles/legend/_0_2.png" /> Горьковская<br />\
    <img src="styles/legend/_0_3.png" /> Дальневосточная<br />\
    <img src="styles/legend/_0_4.png" /> Западно-Сибирская<br />\
    <img src="styles/legend/_0_5.png" /> Калининградская<br />\
    <img src="styles/legend/_0_6.png" /> Красноярская<br />\
    <img src="styles/legend/_0_7.png" /> Куйбышевская<br />\
    <img src="styles/legend/_0_8.png" /> Московская<br />\
    <img src="styles/legend/_0_9.png" /> Октябрьская<br />\
    <img src="styles/legend/_0_10.png" /> Приволжская<br />\
    <img src="styles/legend/_0_11.png" /> Свердловская<br />\
    <img src="styles/legend/_0_12.png" /> Северная<br />\
    <img src="styles/legend/_0_13.png" /> Крымская<br />\
    <img src="styles/legend/_0_14.png" /> Северо-Кавказская<br />\
    <img src="styles/legend/_0_15.png" /> Юго-Восточная<br />\
    <img src="styles/legend/_0_16.png" /> Южно-Уральская<br />\
    <img src="styles/legend/_0_17.png" /> <br />'
        });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                title: '<img src="styles/legend/_1.png" /> Границы'
            });var format_2030_2 = new ol.format.GeoJSON();
var features_2030_2 = format_2030_2.readFeatures(json_2030_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2030_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2030_2.addFeatures(features_2030_2);var lyr_2030_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2030_2, 
                style: style_2030_2,
                title: '<img src="styles/legend/2030_2.png" /> Строительство после 2030'
            });var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__3.addFeatures(features__3);var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                title: '<img src="styles/legend/_3.png" /> Водоемы'
            });var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__4.addFeatures(features__4);var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                title: '<img src="styles/legend/_4.png" /> Реки'
            });var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__5.addFeatures(features__5);var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                title: '<img src="styles/legend/_5.png" /> Строящиеся ЖД'
            });var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__6.addFeatures(features__6);var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                title: '<img src="styles/legend/_6.png" /> Полигон скоростного движени на перспективу'
            });var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__7.addFeatures(features__7);var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                title: '<img src="styles/legend/_7.png" /> Строящиеся скоростные'
            });var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__8.addFeatures(features__8);var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                title: '<img src="styles/legend/_8.png" /> Строящиеся ВСМ'
            });var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__9.addFeatures(features__9);var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                title: '<img src="styles/legend/_9.png" /> Действующие'
            });var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__10.addFeatures(features__10);var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                title: '<img src="styles/legend/_10.png" /> Полигон скоростного движения'
            });var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__11.addFeatures(features__11);var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                title: '<img src="styles/legend/_11.png" /> Населенные пункты'
            });var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__12.addFeatures(features__12);var lyr__12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12, 
                style: style__12,
                title: '<img src="styles/legend/_12.png" /> Транспортные узлы'
            });var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__13.addFeatures(features__13);var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                title: '<img src="styles/legend/_13.png" /> Крупные траснпортные узлы'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr_2030_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);
var layersList = [baseLayer,lyr__0,lyr__1,lyr_2030_2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13];
lyr__0.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'CAPITAL': 'CAPITAL', 'railway': 'railway', 'Дирекция': 'Дирекция', });
lyr__1.set('fieldAliases', {'id': 'id', });
lyr_2030_2.set('fieldAliases', {'id': 'id', 'ЖД': 'ЖД', });
lyr__3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr__4.set('fieldAliases', {'id': 'id', 'Река': 'Река', });
lyr__5.set('fieldAliases', {'id': 'id', 'Маршр': 'Маршр', });
lyr__6.set('fieldAliases', {'id': 'id', 'Маршр': 'Маршр', });
lyr__7.set('fieldAliases', {'id': 'id', 'Маршр': 'Маршр', });
lyr__8.set('fieldAliases', {'id': 'id', 'Маршр': 'Маршр', });
lyr__9.set('fieldAliases', {'id': 'id', 'Дейст': 'Дейст', 'Колея': 'Колея', });
lyr__10.set('fieldAliases', {'id': 'id', 'Маршп': 'Маршп', });
lyr__11.set('fieldAliases', {'id': 'id', 'name': 'name', 'population': 'population', 'Аэропорт': 'Аэропорт', });
lyr__12.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'Аэропорт': 'Аэропорт', 'population': 'Население ', });
lyr__13.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'population': 'Население ', 'info': 'info', 'Аэропорт': 'Аэропорт', });
lyr__0.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'CAPITAL': 'TextEdit', 'railway': 'TextEdit', 'Дирекция': 'TextEdit', });
lyr__1.set('fieldImages', {'id': 'TextEdit', });
lyr_2030_2.set('fieldImages', {'id': 'TextEdit', 'ЖД': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'Река': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'Маршр': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'Маршр': 'TextEdit', });
lyr__7.set('fieldImages', {'id': 'TextEdit', 'Маршр': 'TextEdit', });
lyr__8.set('fieldImages', {'id': 'TextEdit', 'Маршр': 'TextEdit', });
lyr__9.set('fieldImages', {'id': 'TextEdit', 'Дейст': 'TextEdit', 'Колея': 'TextEdit', });
lyr__10.set('fieldImages', {'id': 'TextEdit', 'Маршп': 'TextEdit', });
lyr__11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'population': 'TextEdit', 'Аэропорт': 'TextEdit', });
lyr__12.set('fieldImages', {'id': 'Hidden', 'NAME': 'TextEdit', 'Аэропорт': 'TextEdit', 'population': 'TextEdit', });
lyr__13.set('fieldImages', {'id': 'Hidden', 'NAME': 'TextEdit', 'population': 'TextEdit', 'info': 'WebView', 'Аэропорт': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'CAPITAL': 'no label', 'railway': 'no label', 'Дирекция': 'no label', });
lyr__1.set('fieldLabels', {'id': 'no label', });
lyr_2030_2.set('fieldLabels', {'id': 'no label', 'ЖД': 'no label', });
lyr__3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', 'Река': 'no label', });
lyr__5.set('fieldLabels', {'id': 'no label', 'Маршр': 'no label', });
lyr__6.set('fieldLabels', {'id': 'no label', 'Маршр': 'no label', });
lyr__7.set('fieldLabels', {'id': 'no label', 'Маршр': 'no label', });
lyr__8.set('fieldLabels', {'id': 'no label', 'Маршр': 'no label', });
lyr__9.set('fieldLabels', {'id': 'no label', 'Дейст': 'no label', 'Колея': 'no label', });
lyr__10.set('fieldLabels', {'id': 'no label', 'Маршп': 'no label', });
lyr__11.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'population': 'no label', 'Аэропорт': 'no label', });
lyr__12.set('fieldLabels', {'NAME': 'no label', 'Аэропорт': 'no label', 'population': 'no label', });
lyr__13.set('fieldLabels', {'NAME': 'no label', 'population': 'no label', 'info': 'no label', 'Аэропорт': 'no label', });
lyr__13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
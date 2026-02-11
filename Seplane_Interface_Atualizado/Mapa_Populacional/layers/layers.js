var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Total_domicilios_particulares_1 = new ol.format.GeoJSON();
var features_Total_domicilios_particulares_1 = format_Total_domicilios_particulares_1.readFeatures(json_Total_domicilios_particulares_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_domicilios_particulares_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_domicilios_particulares_1.addFeatures(features_Total_domicilios_particulares_1);
var lyr_Total_domicilios_particulares_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_domicilios_particulares_1, 
                style: style_Total_domicilios_particulares_1,
                popuplayertitle: 'Total_domicilios_particulares',
                interactive: true,
    title: 'Total_domicilios_particulares<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_0.png" /> 0 - 81<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_1.png" /> 81 - 129<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_2.png" /> 129 - 167<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_3.png" /> 167 - 195<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_4.png" /> 195 - 226<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_5.png" /> 226 - 263<br />\
    <img src="styles/legend/Total_domicilios_particulares_1_6.png" /> 263 - 405<br />' });
var format_Percentual_domicilios_parti_2 = new ol.format.GeoJSON();
var features_Percentual_domicilios_parti_2 = format_Percentual_domicilios_parti_2.readFeatures(json_Percentual_domicilios_parti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentual_domicilios_parti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Percentual_domicilios_parti_2.addFeatures(features_Percentual_domicilios_parti_2);
var lyr_Percentual_domicilios_parti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Percentual_domicilios_parti_2, 
                style: style_Percentual_domicilios_parti_2,
                popuplayertitle: 'Percentual_domicilios_parti',
                interactive: true,
    title: 'Percentual_domicilios_parti<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_1.png" /> 0 - 0,0058<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_2.png" /> 0,0058 - 0,0112<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_3.png" /> 0,0112 - 0,0172<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_4.png" /> 0,0172 - 0,0261<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_5.png" /> 0,0261 - 0,0373<br />\
    <img src="styles/legend/Percentual_domicilios_parti_2_6.png" /> 0,0373 - 0,1328<br />' });
var format_Media_moradores_domicilios_parti_3 = new ol.format.GeoJSON();
var features_Media_moradores_domicilios_parti_3 = format_Media_moradores_domicilios_parti_3.readFeatures(json_Media_moradores_domicilios_parti_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Media_moradores_domicilios_parti_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Media_moradores_domicilios_parti_3.addFeatures(features_Media_moradores_domicilios_parti_3);
var lyr_Media_moradores_domicilios_parti_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Media_moradores_domicilios_parti_3, 
                style: style_Media_moradores_domicilios_parti_3,
                popuplayertitle: 'Media_moradores_domicilios_parti',
                interactive: true,
    title: 'Media_moradores_domicilios_parti<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_0.png" /> 0 - 2,6<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_1.png" /> 2,6 - 2,7<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_2.png" /> 2,7 - 2,8<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_3.png" /> 2,8 - 2,9<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_4.png" /> 2,9 - 3<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_5.png" /> 3 - 3,1<br />\
    <img src="styles/legend/Media_moradores_domicilios_parti_3_6.png" /> 3,1 - 3,6<br />' });
var format_Total_domicilios_coletivos_4 = new ol.format.GeoJSON();
var features_Total_domicilios_coletivos_4 = format_Total_domicilios_coletivos_4.readFeatures(json_Total_domicilios_coletivos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_domicilios_coletivos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_domicilios_coletivos_4.addFeatures(features_Total_domicilios_coletivos_4);
var lyr_Total_domicilios_coletivos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_domicilios_coletivos_4, 
                style: style_Total_domicilios_coletivos_4,
                popuplayertitle: 'Total_domicilios_coletivos',
                interactive: true,
    title: 'Total_domicilios_coletivos<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_1.png" /> 0 - 0<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_2.png" /> 0 - 0<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_3.png" /> 0 - 0<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_4.png" /> 0 - 0<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_5.png" /> 0 - 0<br />\
    <img src="styles/legend/Total_domicilios_coletivos_4_6.png" /> 0 - 3<br />' });
var format_Total_domicilios_particulares_5 = new ol.format.GeoJSON();
var features_Total_domicilios_particulares_5 = format_Total_domicilios_particulares_5.readFeatures(json_Total_domicilios_particulares_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_domicilios_particulares_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_domicilios_particulares_5.addFeatures(features_Total_domicilios_particulares_5);
var lyr_Total_domicilios_particulares_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_domicilios_particulares_5, 
                style: style_Total_domicilios_particulares_5,
                popuplayertitle: 'Total_domicilios_particulares',
                interactive: true,
    title: 'Total_domicilios_particulares<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_0.png" /> 0 - 113<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_1.png" /> 113 - 180<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_2.png" /> 180 - 213<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_3.png" /> 213 - 242<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_4.png" /> 242 - 282<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_5.png" /> 282 - 321<br />\
    <img src="styles/legend/Total_domicilios_particulares_5_6.png" /> 321 - 506<br />' });
var format_Total_domicilios_6 = new ol.format.GeoJSON();
var features_Total_domicilios_6 = format_Total_domicilios_6.readFeatures(json_Total_domicilios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_domicilios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_domicilios_6.addFeatures(features_Total_domicilios_6);
var lyr_Total_domicilios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_domicilios_6, 
                style: style_Total_domicilios_6,
                popuplayertitle: 'Total_domicilios',
                interactive: true,
    title: 'Total_domicilios<br />\
    <img src="styles/legend/Total_domicilios_6_0.png" /> 0 - 113<br />\
    <img src="styles/legend/Total_domicilios_6_1.png" /> 113 - 180<br />\
    <img src="styles/legend/Total_domicilios_6_2.png" /> 180 - 215<br />\
    <img src="styles/legend/Total_domicilios_6_3.png" /> 215 - 243<br />\
    <img src="styles/legend/Total_domicilios_6_4.png" /> 243 - 282<br />\
    <img src="styles/legend/Total_domicilios_6_5.png" /> 282 - 321<br />\
    <img src="styles/legend/Total_domicilios_6_6.png" /> 321 - 506<br />' });
var format_Total_pessoas_7 = new ol.format.GeoJSON();
var features_Total_pessoas_7 = format_Total_pessoas_7.readFeatures(json_Total_pessoas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_pessoas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_pessoas_7.addFeatures(features_Total_pessoas_7);
var lyr_Total_pessoas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_pessoas_7, 
                style: style_Total_pessoas_7,
                popuplayertitle: 'Total_pessoas',
                interactive: true,
    title: 'Total_pessoas<br />\
    <img src="styles/legend/Total_pessoas_7_0.png" /> 0 - 232<br />\
    <img src="styles/legend/Total_pessoas_7_1.png" /> 232 - 361<br />\
    <img src="styles/legend/Total_pessoas_7_2.png" /> 361 - 471<br />\
    <img src="styles/legend/Total_pessoas_7_3.png" /> 471 - 570<br />\
    <img src="styles/legend/Total_pessoas_7_4.png" /> 570 - 651<br />\
    <img src="styles/legend/Total_pessoas_7_5.png" /> 651 - 762<br />\
    <img src="styles/legend/Total_pessoas_7_6.png" /> 762 - 1269<br />' });
var format_Rural_8 = new ol.format.GeoJSON();
var features_Rural_8 = format_Rural_8.readFeatures(json_Rural_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_8.addFeatures(features_Rural_8);
var lyr_Rural_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_8, 
                style: style_Rural_8,
                popuplayertitle: 'Rural',
                interactive: true,
                title: '<img src="styles/legend/Rural_8.png" /> Rural'
            });
var format_Urbanda_9 = new ol.format.GeoJSON();
var features_Urbanda_9 = format_Urbanda_9.readFeatures(json_Urbanda_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urbanda_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urbanda_9.addFeatures(features_Urbanda_9);
var lyr_Urbanda_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urbanda_9, 
                style: style_Urbanda_9,
                popuplayertitle: 'Urbanda',
                interactive: true,
                title: '<img src="styles/legend/Urbanda_9.png" /> Urbanda'
            });
var format_ESTAB_DE_SAUDE_PA_10 = new ol.format.GeoJSON();
var features_ESTAB_DE_SAUDE_PA_10 = format_ESTAB_DE_SAUDE_PA_10.readFeatures(json_ESTAB_DE_SAUDE_PA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAB_DE_SAUDE_PA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAB_DE_SAUDE_PA_10.addFeatures(features_ESTAB_DE_SAUDE_PA_10);
var lyr_ESTAB_DE_SAUDE_PA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAB_DE_SAUDE_PA_10, 
                style: style_ESTAB_DE_SAUDE_PA_10,
                popuplayertitle: 'ESTAB_DE_SAUDE_PA',
                interactive: true,
                title: '<img src="styles/legend/ESTAB_DE_SAUDE_PA_10.png" /> ESTAB_DE_SAUDE_PA'
            });
var format_ESTAB_DE_ENSINO_PA_11 = new ol.format.GeoJSON();
var features_ESTAB_DE_ENSINO_PA_11 = format_ESTAB_DE_ENSINO_PA_11.readFeatures(json_ESTAB_DE_ENSINO_PA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAB_DE_ENSINO_PA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAB_DE_ENSINO_PA_11.addFeatures(features_ESTAB_DE_ENSINO_PA_11);
var lyr_ESTAB_DE_ENSINO_PA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAB_DE_ENSINO_PA_11, 
                style: style_ESTAB_DE_ENSINO_PA_11,
                popuplayertitle: 'ESTAB_DE_ENSINO_PA',
                interactive: true,
                title: '<img src="styles/legend/ESTAB_DE_ENSINO_PA_11.png" /> ESTAB_DE_ENSINO_PA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Total_domicilios_particulares_1.setVisible(false);lyr_Percentual_domicilios_parti_2.setVisible(false);lyr_Media_moradores_domicilios_parti_3.setVisible(false);lyr_Total_domicilios_coletivos_4.setVisible(false);lyr_Total_domicilios_particulares_5.setVisible(false);lyr_Total_domicilios_6.setVisible(false);lyr_Total_pessoas_7.setVisible(true);lyr_Rural_8.setVisible(false);lyr_Urbanda_9.setVisible(false);lyr_ESTAB_DE_SAUDE_PA_10.setVisible(true);lyr_ESTAB_DE_ENSINO_PA_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Total_domicilios_particulares_1,lyr_Percentual_domicilios_parti_2,lyr_Media_moradores_domicilios_parti_3,lyr_Total_domicilios_coletivos_4,lyr_Total_domicilios_particulares_5,lyr_Total_domicilios_6,lyr_Total_pessoas_7,lyr_Rural_8,lyr_Urbanda_9,lyr_ESTAB_DE_SAUDE_PA_10,lyr_ESTAB_DE_ENSINO_PA_11];
lyr_Total_domicilios_particulares_1.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'Total de Domicílios Particulares Ocupados': 'Total de Domicílios Particulares Ocupados', });
lyr_Percentual_domicilios_parti_2.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'Percentual de Domicílios Particulares Ocupados Imputados': 'Percentual de Domicílios Particulares Ocupados Imputados', 'v0007': 'v0007', });
lyr_Media_moradores_domicilios_parti_3.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'Média de moradores em Domicílios Particulares Ocupados': 'Média de moradores em Domicílios Particulares Ocupados', 'v0006': 'v0006', 'v0007': 'v0007', });
lyr_Total_domicilios_coletivos_4.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'Domicilios Coletivos': 'Domicilios Coletivos', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'v0004': 'v0004', });
lyr_Total_domicilios_particulares_5.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_MICRO': 'CD_MICRO', 'NM_MICRO': 'NM_MICRO', 'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'Domicilios Particulares': 'Domicilios Particulares', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'v0003': 'v0003', });
lyr_Total_domicilios_6.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'Domicilios': 'Domicilios', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'v0002': 'v0002', });
lyr_Total_pessoas_7.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'População': 'População', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'Densidade': 'Densidade', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0001': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0001', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0002': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0002', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0003': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0003', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0004': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0004', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0005': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0005', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0006': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0006', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0007': 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0007', });
lyr_Rural_8.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', });
lyr_Urbanda_9.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', });
lyr_ESTAB_DE_SAUDE_PA_10.set('fieldAliases', {'COD_UF': 'COD_UF', 'COD_MUN': 'COD_MUN', 'COD_ESPECI': 'COD_ESPECI', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NV_GEO_COO': 'NV_GEO_COO', });
lyr_ESTAB_DE_ENSINO_PA_11.set('fieldAliases', {'COD_UF': 'COD_UF', 'COD_MUN': 'COD_MUN', 'COD_ESPECI': 'COD_ESPECI', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NV_GEO_COO': 'NV_GEO_COO', });
lyr_Total_domicilios_particulares_1.set('fieldImages', {'fid': '', 'CD_SETOR': '', 'SITUACAO': '', 'CD_SIT': '', 'CD_TIPO': '', 'AREA_KM2': '', 'CD_REGIAO': '', 'NM_REGIAO': '', 'CD_UF': '', 'NM_UF': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_DIST': '', 'NM_DIST': '', 'CD_SUBDIST': '', 'NM_SUBDIST': '', 'CD_BAIRRO': '', 'NM_BAIRRO': '', 'CD_NU': '', 'NM_NU': '', 'CD_FCU': '', 'NM_FCU': '', 'CD_AGLOM': '', 'NM_AGLOM': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_CONCURB': '', 'NM_CONCURB': '', 'v0001': '', 'v0002': '', 'v0003': '', 'v0004': '', 'v0005': '', 'v0006': '', 'Total de Domicílios Particulares Ocupados': '', });
lyr_Percentual_domicilios_parti_2.set('fieldImages', {'fid': '', 'CD_SETOR': '', 'SITUACAO': '', 'CD_SIT': '', 'CD_TIPO': '', 'AREA_KM2': '', 'CD_REGIAO': '', 'NM_REGIAO': '', 'CD_UF': '', 'NM_UF': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_DIST': '', 'NM_DIST': '', 'CD_SUBDIST': '', 'NM_SUBDIST': '', 'CD_BAIRRO': '', 'NM_BAIRRO': '', 'CD_NU': '', 'NM_NU': '', 'CD_FCU': '', 'NM_FCU': '', 'CD_AGLOM': '', 'NM_AGLOM': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_CONCURB': '', 'NM_CONCURB': '', 'v0001': '', 'v0002': '', 'v0003': '', 'v0004': '', 'v0005': '', 'Percentual de Domicílios Particulares Ocupados Imputados': '', 'v0007': '', });
lyr_Media_moradores_domicilios_parti_3.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'Média de moradores em Domicílios Particulares Ocupados': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', });
lyr_Total_domicilios_coletivos_4.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'Domicilios Coletivos': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'v0004': 'Range', });
lyr_Total_domicilios_particulares_5.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'Range', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'Range', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_MICRO': 'Range', 'NM_MICRO': 'TextEdit', 'CD_MESO': 'Range', 'NM_MESO': 'TextEdit', 'CD_RGI': 'Range', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'Range', 'NM_RGINT': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'Range', 'v0002': 'Range', 'Domicilios Particulares': 'Range', 'v0004': 'Range', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'Range', 'v0003': 'Range', });
lyr_Total_domicilios_6.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'TextEdit', 'Domicilios': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'v0002': 'Range', });
lyr_Total_pessoas_7.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'População': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'Densidade': '', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0001': 'Range', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0002': 'Range', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0003': 'Range', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0004': 'Range', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0005': 'TextEdit', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0006': 'TextEdit', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0007': 'Range', });
lyr_Rural_8.set('fieldImages', {'CD_SETOR': '', 'SITUACAO': '', 'CD_SIT': '', 'CD_TIPO': '', 'AREA_KM2': '', 'CD_REGIAO': '', 'NM_REGIAO': '', 'CD_UF': '', 'NM_UF': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_DIST': '', 'NM_DIST': '', 'CD_SUBDIST': '', 'NM_SUBDIST': '', 'CD_BAIRRO': '', 'NM_BAIRRO': '', 'CD_NU': '', 'NM_NU': '', 'CD_FCU': '', 'NM_FCU': '', 'CD_AGLOM': '', 'NM_AGLOM': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_CONCURB': '', 'NM_CONCURB': '', });
lyr_Urbanda_9.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', });
lyr_ESTAB_DE_SAUDE_PA_10.set('fieldImages', {'COD_UF': '', 'COD_MUN': '', 'COD_ESPECI': '', 'LATITUDE': '', 'LONGITUDE': '', 'NV_GEO_COO': '', });
lyr_ESTAB_DE_ENSINO_PA_11.set('fieldImages', {'COD_UF': '', 'COD_MUN': '', 'COD_ESPECI': '', 'LATITUDE': '', 'LONGITUDE': '', 'NV_GEO_COO': '', });
lyr_Total_domicilios_particulares_1.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'v0003': 'hidden field', 'v0004': 'hidden field', 'v0005': 'hidden field', 'v0006': 'hidden field', 'Total de Domicílios Particulares Ocupados': 'inline label - always visible', });
lyr_Percentual_domicilios_parti_2.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'v0003': 'hidden field', 'v0004': 'hidden field', 'v0005': 'hidden field', 'Percentual de Domicílios Particulares Ocupados Imputados': 'inline label - always visible', 'v0007': 'hidden field', });
lyr_Media_moradores_domicilios_parti_3.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'v0003': 'hidden field', 'v0004': 'hidden field', 'Média de moradores em Domicílios Particulares Ocupados': 'inline label - always visible', 'v0006': 'hidden field', 'v0007': 'hidden field', });
lyr_Total_domicilios_coletivos_4.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'v0003': 'hidden field', 'Domicilios Coletivos': 'inline label - always visible', 'v0005': 'hidden field', 'v0006': 'hidden field', 'v0007': 'hidden field', 'v0004': 'hidden field', });
lyr_Total_domicilios_particulares_5.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_MICRO': 'hidden field', 'NM_MICRO': 'hidden field', 'CD_MESO': 'hidden field', 'NM_MESO': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'Domicilios Particulares': 'inline label - always visible', 'v0004': 'hidden field', 'v0005': 'hidden field', 'v0006': 'hidden field', 'v0007': 'hidden field', 'v0003': 'hidden field', });
lyr_Total_domicilios_6.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'Domicilios': 'inline label - always visible', 'v0003': 'hidden field', 'v0004': 'hidden field', 'v0005': 'hidden field', 'v0006': 'hidden field', 'v0007': 'hidden field', 'v0002': 'hidden field', });
lyr_Total_pessoas_7.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'População': 'inline label - always visible', 'v0002': 'hidden field', 'v0003': 'hidden field', 'v0004': 'hidden field', 'v0005': 'hidden field', 'v0006': 'hidden field', 'v0007': 'hidden field', 'Densidade': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0001': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0002': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0003': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0004': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0005': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0006': 'hidden field', 'Agregados_preliminares_por_setores_censitarios_BA — SETOR_v0007': 'hidden field', });
lyr_Rural_8.set('fieldLabels', {'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', });
lyr_Urbanda_9.set('fieldLabels', {'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'v0003': 'hidden field', 'v0004': 'hidden field', 'v0005': 'hidden field', 'v0006': 'hidden field', 'v0007': 'hidden field', });
lyr_ESTAB_DE_SAUDE_PA_10.set('fieldLabels', {'COD_UF': 'hidden field', 'COD_MUN': 'hidden field', 'COD_ESPECI': 'hidden field', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'NV_GEO_COO': 'hidden field', });
lyr_ESTAB_DE_ENSINO_PA_11.set('fieldLabels', {'COD_UF': 'hidden field', 'COD_MUN': 'hidden field', 'COD_ESPECI': 'hidden field', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'NV_GEO_COO': 'hidden field', });
lyr_ESTAB_DE_ENSINO_PA_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
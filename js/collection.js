let arregloEstilos = new Array()
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Lager", "Pilsner", "Republica Checa", "Malta limpia con el perfume especiado de lúpulo Sazz", "Malta dulce pinceladas de caramelo; Lúpulo Sazz"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Lager", "Dunkel de Munich", "Munich Alemania", "Maltosidad rica y compleja; sin aroma de lúpulo", "Rico, galleta tostada y maltosidad de caramelo, con sobretonos suaves de tostado"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Lager", "Bock", "Sur de Alemania", "Mucho de malta y una pincelada de tostado suaves", "Notas de galleta tostada y malta acaramelada; final suave dulce-amargo con notas de cacao"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Lager", "Kolsh", "Colonia Alemania", "Malta y pan, con un toque de lúpulo noble y algo de fruta", "Malta limpia y seca con un fondo de lúpulo"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Lager", "Weissbier", "Munich, Alemania", "Afrutado (chicle, platano) y especiado (clavo, pimienta)", "Ligero a grano, con textura de batido de leche; poco lúpulo, aunque estan saliendo versiones más lupuladas; muy carbonatada"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Ale", "Pale Ale", "Inglaterra", "Malta limpia con una buena dosis herbal por el lúpulo inglés", "Fresco (por el agua), malta avellanada, lúpulo especiado"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Ale", "Indian Pale Ale", "Inglaterra", "Lúpulo ingles especiado, con un agradable fondo de malta avellanada", "Mucha malta pero dominado por el lúpulo; deberia haber un equilibrio aún el los ejemplos más amargos"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Ale", "Irish Red Ale", "Irlanda", "Ligero a toffee dulce, con notas de tostado; poca influencia del lúpulo", "Toffee y algo de tostado suave, con final seco"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Ale", "Porter", "Inglaterra", "Maltoso tostado, generalmente con poco o sin nada de aroma a lúpulo", "Cremoso a malta tostada o torrefactada, lupulado o no"))
arregloEstilos.push(new Estilo(arregloEstilos.length + 1, "Ale", "Irish Stout", "Irlanda", "Fuerte como a café, debido a la cebada tostada; poco o sin aroma a lúpulo", "Tostado fuerte y mas bien amargo para su densidad. Un matíz ácido y algo cremoso debido a los copos de cebada no malteada"))

let arregloNiveles = new Array()
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Pilsner", "Medio", 1044, 1060, 4.2, 5.8, "Pálido a dorado profundo", 3, 6, "Medio", 30, 45))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Dunkel de Munich", "Medio", 1048, 1056, 4.5, 5.6, "Rubí a Castaño oscuro", 14, 18, "Medio", 18, 28))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Bock", "Muy pleno, rico", 1064, 1072, 6.3, 7.2, "Ambar a castaño oscuro", 14, 22, "Bajo", 20, 27))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Kolsh", "Muy pleno, rico", 1044, 1050, 4.4, 5.2, "Oro claro a medio", 3, 5, "Bajo a medio", 18, 30))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Weissbier", "Denso pero seco", 1044, 1052, 4.9, 5.6, "Ámbar pálido", 2, 6, "Bajo", 8, 15))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Pale Ale", "Muy seco a medio seco", 1048, 1060, 4.6, 6.2, "Ámbar mas o menos oscuro", 8, 18, "Medio a Alto", 25, 50))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Indian Pale Ale", "Fresco, seco, frecuentemente con la riqueza de la malta", 1050, 1060, 5.0, 7.5, "oro a ámbar", 6, 14, "Alto", 40, 60))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Irish Red Ale", "Seca fresca", 1036, 1046, 3.8, 5, "ámbar rojizo a rubí", 9, 14, "medio", 20, 28))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Porter", "medio", 1040, 1052, 4, 5.4, "pardo hasta casi negro", 18, 35, "bajo a medio-alto", 20, 40))
arregloNiveles.push(new Niveles(arregloNiveles.length + 1, "Irish Stout", "Seco", 1036, 1044, 4, 4.5, "Negra", 25, 40, "medio a fuerte", 25, 45))

for (let i = 0; i < arregloEstilos.length; i++) {
    arregloEstilos[i].setNivelesObjeto(arregloNiveles[i])
}
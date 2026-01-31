package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {

	// ROTAS
	fmt.Println("CONFIGURANDO ROTAS ")

	//-- arquivos estáticos do build
	fmt.Println(":::: carregando rotas de arquivos estáticos")
	http.Handle("/static/", http.FileServer(http.Dir("../build/")))
	http.Handle("/favicon.ico", http.FileServer(http.Dir("../build/")))
	http.Handle("/manifest.json", http.FileServer(http.Dir("../build/")))

	//--páginas
	fmt.Println(":::: carregando rotas de PÁGINAS")
	controllerIndex := func(w http.ResponseWriter, r *http.Request) {
		page, _ := template.ParseFiles("../build/index.html")
		page.Execute(w, nil)
	}

	http.HandleFunc("/", controllerIndex)

	//servidor
	fmt.Println("CONFIGURANDO SERVIDOR")

	if err := http.ListenAndServe(":8000", nil); err != nil {

		log.Fatal(err.Error())

	}

}

package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
)

func main() {

	// ROTAS
	log.Println("CONFIGURANDO ROTAS ARQUIVOS ESTÁTICOS")

	//-- arquivos estáticos do build
	http.Handle("/static/", http.FileServer(http.Dir("../build/")))
	http.Handle("/favicon.ico", http.FileServer(http.Dir("../build/")))
	http.Handle("/manifest.json", http.FileServer(http.Dir("../build/")))

	//--páginas
	log.Println("CONFIGURANDO ROTAS DE PÁGINAS")
	controllerIndex := func(w http.ResponseWriter, r *http.Request) {
		page, _ := template.ParseFiles("../build/index.html")
		page.Execute(w, nil)
	}

	http.HandleFunc("/", controllerIndex) // controla todas rotas que começam com '/' que não sejam especificadas

	//--API
	log.Println("CONFIGURANDO ROTAS DE API")
	controllerApi := func(w http.ResponseWriter, r *http.Request) {
		if err := json.NewEncoder(w).Encode(map[string]any{"Mensagem": "Ola API"}); err != nil {
			log.Println(err.Error())
		}

	}

	http.HandleFunc("/api/", controllerApi)

	//servidor
	log.Println("CONFIGURANDO SERVIDOR")

	if err := http.ListenAndServe(":8000", nil); err != nil {
		panic(err.Error())

	}

}

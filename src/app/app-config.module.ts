import { NgModule, InjectionToken } from '@angular/core';

// URLS
export let APP_CONFIG = new InjectionToken<AppUrl>('app.url');

export interface AppUrl {
    api_url: string;
}

export const API_URL: AppUrl = {
    api_url: 'https://swapi.dev/api/'
};

// MENU
export let APP_MENU = new InjectionToken<AppMenu>('app.menu');

export interface AppMenu {
  opciones: Array<any>
}

export const MENU: AppMenu = {
  opciones: [
    {
      titulo: 'Personajes',
      opcion: 'people'
    },
    {
      titulo: 'Vehículos',
      opcion: 'vehicles'
    },
    {
      titulo: 'Planetas',
      opcion: 'planets'
    }
  ]
}

// VALORES
export let APP_VALUES = new InjectionToken<AppValues>('app.values');

export interface  AppValues {
  titulosBusqueda: {
    people: string,
    films: string,
    starships: string,
    vehicles: string,
    species: string,
    planets: string
  };
  buscarPlaceHolder: {
    people: string,
    films: string,
    starships: string,
    vehicles: string,
    species: string,
    planets: string
  };
  columnasListado: {
    people: Array<any>,
    films: Array<any>,
    starships: Array<any>,
    vehicles: Array<any>,
    species: Array<any>,
    planets: Array<any>
  },
  campoOrdenListado: {
    people: string,
    films: string,
    starships: string,
    vehicles: string,
    species: string,
    planets: string
	},
	accionesListado: {
    people: Array<string>,
    films: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    species: Array<string>,
		planets: Array<string>
	},
	tituloListado: {
    people: string,
    films: string,
    starships: string,
    vehicles: string,
    species: string,
    planets: string
  },
  contieneDatoHogar: {
    people: boolean,
    films: boolean,
    starships: boolean,
    vehicles: boolean,
    species: boolean,
    planets: boolean
  },
	datosFicha: {
		people: Array<any>,
    films: Array<any>,
    starships: Array<any>,
    vehicles: Array<any>,
    species: Array<any>,
    planets: Array<any>
	}
}

export const VALUES: AppValues = {
  titulosBusqueda: {
    people: 'Busqueda de personajes',
    films: 'Busqueda de películas',
    starships: 'Busqueda de naves',
    vehicles: 'Busqueda de vehículos',
    species: 'Busqueda de especies',
    planets: 'Busqueda de planetas'
  },
  buscarPlaceHolder: {
    people: 'Buscar personajes...',
    films: 'Buscar películas...',
    starships: 'Buscar naves...',
    vehicles: 'Buscar vehículos...',
    species: 'Buscar especies...',
    planets: 'Buscar planetas...'
  },
	columnasListado: {
    people: [
      {
        titulo: 'Nombre',
        campo: 'name'
      },
      {
        titulo: 'Genero',
        campo: 'gender'
      }
    ],
		films: [
			{
				titulo: 'Episodio',
				campo: 'episode_id'
			},
			{
				titulo: 'Título',
				campo: 'title',
			},
			{
				titulo: 'Director',
				campo: 'director'
			}
    ],
    starships: [
      {
        titulo: 'Nombre',
        campo: 'name'
      },
      {
        titulo: 'Modelo',
        campo: 'model'
      }
    ],
    vehicles: [
      {
        titulo: 'Nombre',
        campo: 'name'
      },
      {
        titulo: 'Modelo',
        campo: 'model'
      }
    ],
		species: [
      {
          titulo: 'Nombre',
          campo: 'name'
      },
      {
          titulo: 'Clasificación',
          campo: 'classification'
      },
      {
          titulo: 'Designación',
        campo: 'designation'
      }
		],
		planets: [
      {
          titulo: 'Nombre',
          campo: 'name'
      },
      {
          titulo: 'Clima',
          campo: 'climate'
      },
      {
          titulo: 'Terreno',
        campo: 'terrain'
      }
		]
	},
  campoOrdenListado: {
    people: 'name',
    films: 'episode_id',
    starships: 'name',
    vehicles: 'name',
    species: 'name',
    planets: 'name'
	},
	accionesListado: {
    people: ['Ver personaje'],
    films: ['Ver película'],
    starships: ['Ver nave'],
    vehicles: ['Ver vehículo'],
    species: ['Ver especie'],
		planets: ['Ver planeta']
	},
	tituloListado: {
    people: 'Listado de personajes',
    films: 'Listado de películas',
    starships: 'Listado de naves',
    vehicles: 'Listado de vehículos',
    species: 'Listado de especies',
		planets: 'Listado de planetas'
  },
  contieneDatoHogar: {
    people: true,
    films: false,
    starships: false,
    vehicles: false,
    species: true,
    planets: false
  },
	datosFicha: {
		people: [
			{
				'campo': 'name',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Nombre',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'birth_year',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Año de nacimiento',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'eye_color',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Color ojos',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'gender',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Genero',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'hair_color',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Color pelo',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'height',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Alto',
				'subtitulo': '',
				'sufijoValor': 'cm.'
			},
			{
				'campo': 'mass',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Peso',
				'subtitulo': '',
				'sufijoValor': ' kg.'
			},
			{
				'campo': 'skin_color',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Color de piel',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'homeworld',
        'tipo': 'hogar',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Hogar',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'films',
        'tipo': 'lista',
        'campoLista': 'title',
				'masInfo': true,
				'titulo': 'Películas',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'species',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Especies',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'starships',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Naves',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'vehicles',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Vehículos',
				'subtitulo': '',
				'sufijoValor': ''
			}
		],
    films: [
      {
        'campo': 'episode_id',
        'tipo': 'texto',
        'campoLista': '',
        'masInfo': false,
        'titulo': 'Capítulo',
        'subtitulo': '',
        'sufijoValor': ''
      },
			{
				'campo': 'title',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Título',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'director',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Director',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'producer',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Productor',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'release_date',
        'tipo': 'fecha',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Estreno',
				'subtitulo': '',
				'sufijoValor': ''
      },
			{
				'campo': 'opening_crawl',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Introducción',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'species',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Especies',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'starships',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Naves',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'vehicles',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Vehículos',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'characters',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Personajes',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'planets',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Planetas',
				'subtitulo': '',
				'sufijoValor': ''
			}
		],
    	starships: [
			{
				'campo': 'name',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Nombre',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'model',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Modelo',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'starship_class',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Clase',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'manufacturer',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Fabricante',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'cost_in_credits',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Coste',
				'subtitulo': '',
				'sufijoValor': 'créditos galácticos'
			},
			{
				'campo': 'length',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Largo',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'crew',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
        'titulo': 'Tripulación',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'passengers',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Pasajeros',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'max_atmosphering_speed',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Velocidad máxima',
				'subtitulo': '(en atmósfera)',
				'sufijoValor': ''
			},
			{
				'campo': 'hyperdrive_rating',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Ratio hyperdrive',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'MGLT',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'MGLT',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'cargo_capacity',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Capacidad de carga',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'consumables',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Autonomía',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'films',
        'tipo': 'lista',
        'campoLista': 'title',
				'masInfo': true,
				'titulo': 'Películas',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'pilots',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Pilotos',
				'subtitulo': '',
				'sufijoValor': ''
			}
		],
    	vehicles: [
			{
				'campo': 'name',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Nombre',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'model',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Modelo',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'vehicle_class',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Clase',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'manufacturer',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Fabricante',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'length',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Largo',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'cost_in_credits',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Coste',
				'subtitulo': 'créditos galácticos',
				'sufijoValor': ''
			},
			{
				'campo': 'crew',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Tripulación',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'passengers',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Pasajeros',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'max_atmosphering_speed',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Velocidad máxima',
				'subtitulo': '(en atmósfera)',
				'sufijoValor': ''
			},
			{
				'campo': 'cargo_capacity',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Capacidad de carga',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'consumables',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Autonomía',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'films',
        'tipo': 'lista',
        'campoLista': 'title',
				'masInfo': true,
				'titulo': 'Películas',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'pilots',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Pilotos',
				'subtitulo': '',
				'sufijoValor': ''
			}
		],
    	species: [
			{
				'campo': 'name',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Nombre',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'classification',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Clasificación',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'designation',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Designación',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'average_height',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Altura media',
				'subtitulo': '',
				'sufijoValor': 'cm.'
			},
			{
				'campo': 'average_lifespan',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Esperanza de vida',
				'subtitulo': '',
				'sufijoValor': 'años'
			},
			{
				'campo': 'eye_colors',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Color de ojos',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'hair_colors',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Color de pelo',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'skin_colors',
        'tipo': 'valores',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Color de piel',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'language',
        'tipo': 'texto',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Lenguaje',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'homeworld',
        'tipo': 'hogar',
        'campoLista': '',
				'masInfo': false,
				'titulo': 'Hogar',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'people',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Personajes',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'films',
        'tipo': 'lista',
        'campoLista': 'title',
				'masInfo': true,
        'titulo': 'Películas',
				'subtitulo': '',
				'sufijoValor': ''
			}
		],
    	planets: [
			{
				'campo': 'name',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Nombre',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'diameter',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Diámetro',
				'subtitulo': '',
				'sufijoValor': ' km.'
			},
			{
				'campo': 'rotation_period',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Periodo de rotación',
				'subtitulo': '',
				'sufijoValor': ' horas'
			},
			{
				'campo': 'orbital_period',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Periodo de orbitación',
				'subtitulo': '',
				'sufijoValor': ' días'
			},
			{
				'campo': 'gravity',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Gravedad',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'population',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Población',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'climate',
				'tipo': 'valores',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Clima',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'terrain',
				'tipo': 'valores',
				'campoLista': '',
				'masInfo': false,
				'titulo': 'Terreno',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'surface_water',
				'tipo': 'texto',
				'campoLista': '',
				'masInfo': false,
				'titulo': '% de agua',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'residents',
        'tipo': 'lista',
        'campoLista': 'name',
				'masInfo': true,
				'titulo': 'Residentes',
				'subtitulo': '',
				'sufijoValor': ''
			},
			{
				'campo': 'films',
        'tipo': 'lista',
        'campoLista': 'title',
				'masInfo': true,
				'titulo': 'Películas',
				'subtitulo': '',
				'sufijoValor': ''
			}
		]
	}
};

// MODULO
@NgModule({
  providers: [
    {
      provide: APP_CONFIG,
      useValue: API_URL
    },
    {
      provide: APP_VALUES,
      useValue: VALUES
    },
    {
      provide: APP_MENU,
      useValue: MENU
    }
  ]
})
export class AppConfigModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pedrafilosofal',
    loadChildren: () => import('./filmes/pedrafilosofal/pedrafilosofal.module').then( m => m.PedrafilosofalPageModule)
  },
  {
    path: 'camarasecreta',
    loadChildren: () => import('./filmes/camarasecreta/camarasecreta.module').then( m => m.CamarasecretaPageModule)
  },
  {
    path: 'prisioneirodeazcaban',
    loadChildren: () => import('./filmes/prisioneirodeazcaban/prisioneirodeazcaban.module').then( m => m.PrisioneirodeazcabanPageModule)
  },
  {
    path: 'calicedefogo',
    loadChildren: () => import('./filmes/calicedefogo/calicedefogo.module').then( m => m.CalicedefogoPageModule)
  },
  {
    path: 'ordemdafenix',
    loadChildren: () => import('./filmes/ordemdafenix/ordemdafenix.module').then( m => m.OrdemdafenixPageModule)
  },
  {
    path: 'enigmadoprincipe',
    loadChildren: () => import('./filmes/enigmadoprincipe/enigmadoprincipe.module').then( m => m.EnigmadoprincipePageModule)
  },
  {
    path: 'reliquiasdamorte1',
    loadChildren: () => import('./filmes/reliquiasdamorte1/reliquiasdamorte1.module').then( m => m.Reliquiasdamorte1PageModule)
  },
  {
    path: 'reliquiasdamorte2',
    loadChildren: () => import('./filmes/reliquiasdamorte2/reliquiasdamorte2.module').then( m => m.Reliquiasdamorte2PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

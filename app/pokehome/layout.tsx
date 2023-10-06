'use client'
import 'app/global.css'
import Head from "next/head";
import SetHome from "@/components/SetHome";
import Cookies from '@/components/Cookies';
import * as cook from 'js-cookie';

export default function PokeHome({children}) {
  
  if (sessionStorage.getItem('token') == null || cook.default.get('token') == null) {
    // Redireccionar al usuario a la página de login si no tiene token
    window.location.href = '/login';
    // Puedes retornar null o cualquier otro contenido mientras se redirige
    return null;
  }
    return (
        <div>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/pro.ico" />
        </Head>
        <div>
          <SetHome />
        </div>
        <Cookies />
      </div>
    );
  }
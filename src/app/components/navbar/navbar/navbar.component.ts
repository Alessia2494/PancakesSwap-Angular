import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/models/modelNavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages:language[]=[
    {
      linguage:"العربي"
    },
    {
      linguage: "বাংলা"
    },
    {
      linguage: "English"
    },
    {
      linguage: "Deutsch"
    },
    {
      linguage: "Ελληνικά"
    },
    {
      linguage:"Español"
    },
    {
      linguage:"Suomalainen"
    },
    {
      linguage:"Filipino"
    },
    {
      linguage:"Français"
    },
    {
      linguage:"हिंदी"
    },
    {
      linguage:"Magyar"
    },
    {
      linguage:"Bahasa Indonesia"
    },
    {
      linguage:"Italiano"
    },
    {
      linguage:"日本語"
    },
    {
      linguage:"한국어"
    },
    {
      linguage:"Nederlands"
    },
    {
      linguage:"Polski"
    },
    {
      linguage:"Português(Brazil)"
    },
    {
      linguage:"Português"
    },
    {
      linguage:"Română"
    },
    {
      linguage:"Русский"
    },
    {
      linguage:"Svenska"
    },
    {
      linguage:"தமிழ்"
    },
    {
      linguage:"Türkçe"
    },
    {
      linguage:"Українська"
    },
   {
    linguage:"Tiếng Việt"
   },
   {
    linguage:"简体中文"
   },
   {
    linguage:"繁體中文"
   }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}

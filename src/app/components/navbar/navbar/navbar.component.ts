import { Component, OnInit } from '@angular/core';
import { language, trade, earn, win, nft, other, another } from 'src/app/models/modelNavbar';

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
 trades:trade[]=[
   {
     trade: "Exchange"
   },
   {
    trade: "Liquidity"
  },
 ]
 earns:earn[] = [
  {
    earn: "Farms",
    link: 'child/farms'
  },
  {
    earn: "Forms"
  },
  {
    earn: "Pools",
    link: 'child/pools'
  }
 ]
 wins:win[] = [
  {
    win:"Trading Competition"
  },
  {
   win: "Prediction (BETA)"
  },
  {
   win: "Lottery"
  }
 ]
 nfts: nft[] = [
  {
    nft: "Overview"
  },
  {
    nft: "Collections"
  },
  {
    nft:"Activity"
  }
 ]
 others:other[] = [
  {
    other: "Info"
  },
  {
    other: "IFO"
  },
  {
    other:"Voting"
  },
 ]
 anothers: another[] = [
  {
    another:"Blog",
    img: "assets/home_img/exit-img.png"
  },
  {
    another:"Docs",
    img: "assets/home_img/exit-img.png"
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}

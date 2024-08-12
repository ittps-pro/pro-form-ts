
import axios from 'axios'
import * as response from './response.json'


const Keenetic = (name) => {
}




let version = { "release": "4.00.C.7.0-0", 
"sandbox": "stable", 
"title": "4.0.7", "arch": "mips", "ndm": { 
  "exact": "0-2010d29", "cdate": "13 Nov 2023" }, 
  "bsp": { "exact": "0-4639062032", "cdate": "13 Nov 2023" }, 
  "ndw": { "version": "4.0.2.215", "features": "wifi_button,wifi5ghz,led_control,mimo5ghz,atf5ghz,dual_image,wifi_ft,wpa3,hwnat", "components": "base,cloudcontrol,corewireless,dhcpd,dns-filter,dot1x,igmp,ike-client,ipip,ipsec,l2tp,lang-en,lang-ru,miniupnpd,monitor,mws,nathelper-ftp,nathelper-pptp,nathelper-sip,ndmp,ndns,ntce,openvpn,opkg,opkg-kmod-tc,pingcheck,ppe,pppoe,pptp,proxy,snmp,ssh,sstp,sstp-server,trafficcontrol" }, "manufacturer": "Keenetic Ltd.", "vendor": "Keenetic", "series": "KN", "model": "Speedster (KN-3010)", "hw_version": "10308000", "hw_type": "router", "hw_id": "KN-3010", "device": "Speedster", "region": "EA", "description": "AVT-SPB" }

const ViewItem = (item, key) => {
  let ItemChildren = []
  return item
}

for (const key in version) {
  if (Object.prototype.hasOwnProperty.call(version, key)) {
    const element = version[key];

  }
}

// const CardsView = () =>
//  Object.keys(version["ndw"]).map((i,k) => <Card title={i} key={i}>
//  {i}
// </Card>

// )

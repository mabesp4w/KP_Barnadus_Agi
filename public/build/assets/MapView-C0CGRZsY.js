import{c as w}from"./createLucideIcon-DClICXk0.js";import{r,j as o}from"./app-DP5ESJv_.js";import{L as s}from"./leaflet-Cnm-s6sn.js";/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],W=w("calendar",I);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Z=w("globe",P);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],q=w("phone",V);delete s.Icon.Default.prototype._getIconUrl;s.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"});const m={osm:{name:"OpenStreetMap (Label Lengkap)",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abc"},positron:{name:"Positron (Light)",url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd"},voyager:{name:"Voyager (Colorful)",url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd"},dark:{name:"Dark Matter",url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd"}};function H({sekolahs:f=[],height:v="400px",centerLat:i=null,centerLng:p=null,zoom:c=13,highlightedSekolahId:h=null,isActive:k=!0}){const x=r.useRef(null),a=r.useRef(null),u=r.useRef([]),b=r.useRef(null),[l,j]=r.useState(!1),[g,C]=r.useState("osm"),_=-2.5333,N=140.7167,R=i&&parseFloat(i)?parseFloat(i):_,T=p&&parseFloat(p)?parseFloat(p):N,L=t=>({A:{label:"A",color:"#10b981"},B:{label:"B",color:"#3b82f6"},C:{label:"C",color:"#f59e0b"}})[t]||{label:"-",color:"#6b7280"};r.useEffect(()=>{if(!x.current||a.current)return;const t=s.map(x.current,{zoomControl:!0}).setView([R,T],c),e=m[g]||m.osm,n={attribution:e.attribution,maxZoom:19};e.subdomains&&(n.subdomains=e.subdomains),e.tms&&(n.tms=!0);const d=s.tileLayer(e.url,n).addTo(t);return b.current=d,a.current=t,j(!0),()=>{a.current&&u.current.forEach(y=>{y&&a.current.removeLayer(y)}),u.current=[],a.current&&(a.current.remove(),a.current=null)}},[]),r.useEffect(()=>{if(l&&a.current&&i&&p){const t=parseFloat(i),e=parseFloat(p);!isNaN(t)&&!isNaN(e)&&a.current.setView([t,e],c)}},[i,p,c,l]),r.useEffect(()=>{if(!l||!a.current||!f||f.length===0)return;u.current.forEach(e=>{e&&a.current.removeLayer(e)}),u.current=[];const t=[];if(f.forEach(e=>{const n=parseFloat(e.latitude),d=parseFloat(e.longitude);if(isNaN(n)||isNaN(d))return;const y=h&&e.id===h&&k,{label:z,color:A}=L(e.akreditasi),B=s.divIcon({className:"custom-marker-sekolah",html:`<div class="${y?"marker-focus":""}" style="
                    background-color: ${A};
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 2px solid #ffffff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 1;
                ">${z}</div>`,iconSize:[30,30],iconAnchor:[15,15],popupAnchor:[0,-12]}),$=s.marker([n,d],{icon:B}).addTo(a.current),E=S=>{const M={A:"#10b981",B:"#3b82f6",C:"#f59e0b",Belum:"#ef4444"};return M[S]||M.Belum},F=`
                <div style="
                    min-width: 280px;
                    max-width: 320px;
                    font-family: system-ui, -apple-system, sans-serif;
                ">
                    ${e.foto_utama?`
                        <div style="
                            margin-bottom: 12px;
                            overflow: hidden;
                            border-radius: 8px;
                            height: 120px;
                            width: 100%;
                        ">
                            <img 
                                src="/storage/${e.foto_utama}" 
                                alt="${e.nm_sekolah||"Sekolah"}"
                                style="
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                "
                            />
                        </div>
                    `:""}
                    <div style="
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        margin-bottom: 12px;
                    ">
                        <h3 style="
                            font-size: 16px;
                            font-weight: 700;
                            margin: 0;
                            color: #1f2937;
                            flex: 1;
                            margin-right: 8px;
                        ">${e.nm_sekolah||"Sekolah"}</h3>
                        ${e.akreditasi?`
                            <span style="
                                display: inline-block;
                                padding: 4px 8px;
                                border-radius: 4px;
                                font-size: 11px;
                                font-weight: 600;
                                background-color: ${E(e.akreditasi)};
                                color: white;
                                white-space: nowrap;
                            ">${e.akreditasi}</span>
                        `:""}
                    </div>
                    <div style="
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        font-size: 13px;
                        color: #6b7280;
                        margin-bottom: 12px;
                    ">
                        ${e.npsn?`
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-family: monospace;">${e.npsn}</span>
                            </div>
                        `:""}
                        ${e.kelurahan?`
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span>📍</span>
                                <span>${e.kelurahan.nm_kelurahan}${e.kelurahan.kecamatan?`, ${e.kelurahan.kecamatan.nm_kecamatan}`:""}</span>
                            </div>
                        `:""}
                        ${e.no_telp?`
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span>📞</span>
                                <span>${e.no_telp}</span>
                            </div>
                        `:""}
                        ${e.email?`
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span>✉️</span>
                                <span>${e.email}</span>
                            </div>
                        `:""}
                        ${e.website?`
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span>🌐</span>
                                <a href="${e.website}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: none;">
                                    ${e.website}
                                </a>
                            </div>
                        `:""}
                        ${e.thn_berdiri?`
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span>📅</span>
                                <span>Berdiri: ${e.thn_berdiri}</span>
                            </div>
                        `:""}
                    </div>
                    <a 
                        href="/sekolah/${e.id}"
                        style="
                            display: block;
                            width: 100%;
                            padding: 8px 16px;
                            background-color: #3b82f6;
                            color: white;
                            text-align: center;
                            text-decoration: none;
                            border-radius: 6px;
                            font-size: 14px;
                            font-weight: 500;
                            transition: background-color 0.2s;
                        "
                        onmouseover="this.style.backgroundColor='#2563eb'"
                        onmouseout="this.style.backgroundColor='#3b82f6'"
                    >
                        Lihat Detail
                    </a>
                </div>
            `;$.bindPopup(F,{maxWidth:350,className:"custom-popup-sekolah"}),u.current.push($),t.push([n,d])}),t.length>0)if(t.length===1)a.current.setView(t[0],c);else{const e=s.latLngBounds(t);a.current.fitBounds(e,{padding:[50,50]})}},[f,l,c,h,k]),r.useEffect(()=>{if(!l||!a.current||!b.current)return;const t=m[g]||m.osm;a.current.removeLayer(b.current);const e={attribution:t.attribution,maxZoom:19};t.subdomains&&(e.subdomains=t.subdomains),t.tms&&(e.tms=!0);const n=s.tileLayer(t.url,e).addTo(a.current);b.current=n},[g,l]);const O=t=>{C(t.target.value)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
                .custom-marker-sekolah {
                    background: transparent !important;
                    border: none !important;
                }
                .custom-popup-sekolah .leaflet-popup-content-wrapper {
                    border-radius: 8px;
                    padding: 0;
                }
                .custom-popup-sekolah .leaflet-popup-content {
                    margin: 0;
                    padding: 16px;
                }
                .custom-popup-sekolah .leaflet-popup-tip {
                    background: white;
                }
                @keyframes markerPulse {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 2px 8px rgba(0,0,0,0.35);
                    }
                    50% {
                        transform: scale(1.18);
                        box-shadow: 0 0 0 8px rgba(239, 68, 68, 0.18);
                    }
                }
                .marker-focus {
                    animation: markerPulse 1.4s ease-in-out infinite;
                }
            `}),o.jsxs("div",{className:"relative w-full overflow-hidden rounded-lg border border-base-300",style:{height:v},children:[o.jsx("div",{className:"absolute top-2 right-2 z-[1000]",children:o.jsx("select",{value:g,onChange:O,className:"select-bordered select select-sm bg-base-100 shadow-lg",style:{minWidth:"180px"},children:Object.entries(m).map(([t,e])=>o.jsx("option",{value:t,children:e.name},t))})}),o.jsx("div",{ref:x,className:"z-0 h-full w-full",style:{height:v}})]})]})}export{W as C,Z as G,H as M,q as P};

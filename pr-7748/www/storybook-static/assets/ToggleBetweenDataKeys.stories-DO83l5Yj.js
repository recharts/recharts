import{r as p,R as t}from"./iframe-C2FiVbx6.js";import{L as n}from"./LineChart-B-pDfouS.js";import{R as s}from"./zIndexSlice-CIwOLMY2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D1Z1SWnN.js";import{X as d}from"./XAxis-BpwUAM2i.js";import{Y as y}from"./YAxis-H-bG_GIE.js";import{L as u}from"./Legend-CeXqnuvF.js";import{L as h}from"./Line-S0l6mAcw.js";import{T as g}from"./Tooltip-BAhkDjqS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzRJf9wd.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DzJ8Skeq.js";import"./throttle-Cf_mfeUw.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dmh-LY51.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./CartesianAxis-LjFWWnk2.js";import"./Layer-BbCOnDJZ.js";import"./Text-DUuV2-iR.js";import"./ZIndexLayer-CyqrJVrU.js";import"./Label-oSfspIu2.js";import"./types-CTWOnDaX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D2fgVs1p.js";import"./uniqBy-83-1iH4D.js";import"./iteratee-D1g8o1KX.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-0SqF3Wbd.js";import"./Curve-r64DCwYW.js";import"./step-CFQC-oeW.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./ActivePoints-BoBRdB0i.js";import"./Dot-CKxlSMqI.js";import"./activeStyles-Cz6uJME2.js";import"./useAnimationId-DeWO3OMz.js";import"./ErrorBarContext-Bl0bf3v5.js";import"./SetGraphicalItem-CdikQP2n.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./useEffectiveDataKey-pHEaOl4p.js";import"./Cross-2MxY5Dn8.js";import"./Rectangle-COqz7K3J.js";import"./util-Dxo8gN5i.js";import"./Sector-CeBdb2pY.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};

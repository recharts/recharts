import{r as p,R as t}from"./iframe-BEGj1koH.js";import{L as n}from"./LineChart-DLeL4OTs.js";import{R as s}from"./zIndexSlice-CEJVfddR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CnGKMMdf.js";import{X as d}from"./XAxis-A5l93qYr.js";import{Y as y}from"./YAxis-pWnSqNwD.js";import{L as u}from"./Legend-BGEPhXJp.js";import{L as h}from"./Line-wcAYZAbC.js";import{T as g}from"./Tooltip-BlRYrkch.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyBgNckc.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DNGVPDPw.js";import"./throttle-9RbVUj4o.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./polarAxisSelectors-Bip_MddP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-80plsouy.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./Text-DjwfkybI.js";import"./ZIndexLayer-DF1RNmQW.js";import"./Label-D38IadvQ.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CiV49lwO.js";import"./uniqBy-C61gVEFe.js";import"./iteratee-BOHATSs8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hlvSyv9M.js";import"./step-Cc4Umos1.js";import"./dataEntryStyles-D0L-GBmA.js";import"./ActivePoints-htAl9rci.js";import"./Dot-CF8XQTEk.js";import"./activeStyles-BAv2bBi7.js";import"./useAnimationId-Dz0dpT6V.js";import"./ErrorBarContext-DjI-jDw7.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getRadiusAndStrokeWidthFromDot-CkygA61E.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./Cross-DnloOoyf.js";import"./Rectangle-Br2C5RSL.js";import"./util-Dxo8gN5i.js";import"./Sector-D3cUvRcp.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

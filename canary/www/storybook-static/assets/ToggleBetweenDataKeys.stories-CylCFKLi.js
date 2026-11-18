import{r as p,R as t}from"./iframe-DnRkZCcZ.js";import{L as n}from"./LineChart-DeDcGUB5.js";import{R as s}from"./zIndexSlice-DwWcIzrA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-hU5F1JD4.js";import{X as d}from"./XAxis-DPYXDMnu.js";import{Y as y}from"./YAxis-CL5uWkoX.js";import{L as u}from"./Legend-CA1OSly7.js";import{L as h}from"./Line-B-2uuZK0.js";import{T as g}from"./Tooltip-wJ4R_9Xj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9w9bgII.js";import"./resolveDefaultProps-CKyaaGET.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BG0FGZa0.js";import"./throttle-bNdHLYfF.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DjImCkyz.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./CartesianAxis-CI0fZc9H.js";import"./Layer-ziHQUSdD.js";import"./Text-CdYpRkXo.js";import"./ZIndexLayer-Cfgieq6O.js";import"./Label-DX2yrrpT.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DMMTuYam.js";import"./uniqBy-DI2IzLG0.js";import"./iteratee-guzWnx9p.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CMeF7NbT.js";import"./Curve-QoxdgH9q.js";import"./step-CKBO-I2d.js";import"./dataEntryStyles-BgjT13Al.js";import"./ActivePoints-CRsFnWGy.js";import"./Dot-CK54vFWX.js";import"./activeStyles-DRi4KJX5.js";import"./useAnimationId-p0AfOAw0.js";import"./ErrorBarContext-DvYBBAjF.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./useEffectiveDataKey-BIuaq2EX.js";import"./Cross-p5xAMhDn.js";import"./Rectangle-EcRxuzMl.js";import"./util-Dxo8gN5i.js";import"./Sector-BXNROzdl.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

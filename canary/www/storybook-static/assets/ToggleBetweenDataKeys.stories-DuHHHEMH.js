import{r as n,R as t}from"./iframe-B9NgERoL.js";import{L as p}from"./LineChart-BUiD6lRJ.js";import{R as s}from"./zIndexSlice-CeMrsmMa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ByMgXI7P.js";import{X as d}from"./XAxis-aLbTU0vL.js";import{Y as y}from"./YAxis-BZ7igdn9.js";import{L as u}from"./Legend-DLhTpBr2.js";import{L as h}from"./Line--rEciFbL.js";import{T as g}from"./Tooltip-C5co7ZAz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BIufO86S.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./throttle-DaANxDja.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./axisSelectors-Cp9fRWWc.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./d3-scale-CeApqfqF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1OHX_Vn.js";import"./chartDataContext-MrXPhuTJ.js";import"./CategoricalChart-BaN3vUEH.js";import"./CartesianAxis-CU4wTzgV.js";import"./Layer-C_3qb5EZ.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./Label-D0wu2lTJ.js";import"./ZIndexLayer-B-abFFm7.js";import"./types-fCUwHeLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-C6oyQ2HE.js";import"./symbol-BI0SklJ7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DIAEj78D.js";import"./uniqBy-par6alwm.js";import"./iteratee-zl5NzN92.js";import"./Curve-VzKcWA61.js";import"./step-D7ajG_sH.js";import"./AnimatedItems-C-FRFA-Z.js";import"./useAnimationId-Dul1SXp-.js";import"./ActivePoints-CC4YCm4F.js";import"./Dot-CinH8xYi.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getRadiusAndStrokeWidthFromDot-CFmXYxCt.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./Cross-Bl5UJ-0f.js";import"./Rectangle-jixavVBj.js";import"./util-Dxo8gN5i.js";import"./Sector-BMaFtHt3.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};

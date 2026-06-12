import{r as n,R as t}from"./iframe-Y7LdsWUd.js";import{L as p}from"./LineChart-WJ5j_Csb.js";import{R as s}from"./zIndexSlice-g6buOjPK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B14JXO8y.js";import{X as d}from"./XAxis-BEn1qEwo.js";import{Y as y}from"./YAxis-NkmeWl3a.js";import{L as u}from"./Legend-DrFEUgBN.js";import{L as h}from"./Line-BAxmXSR0.js";import{T as g}from"./Tooltip-Cng7Ygo_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bz-cSrDT.js";import"./index-468XY5rC.js";import"./index-D9y4Xpfg.js";import"./index-Bl2KzI3D.js";import"./index-BqhFnWN1.js";import"./immer-CTHxJNnh.js";import"./get-Bl7iuY_G.js";import"./renderedTicksSlice-_dHdD9iU.js";import"./axisSelectors-BKqrOX2w.js";import"./d3-scale-D0YrMM7V.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-EYxijulG.js";import"./isWellBehavedNumber-D670Qdyl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DUAWwhpK.js";import"./chartDataContext-DK8YFcnh.js";import"./CategoricalChart-BHdb9DL7.js";import"./CartesianAxis-1pwFs9AH.js";import"./Layer-CYliWRnL.js";import"./Text-c0cVIonZ.js";import"./DOMUtils-CMyDK0NY.js";import"./Label-B9hAjr1E.js";import"./ZIndexLayer-0MAyxgOl.js";import"./types-D3i7dddg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-ChF8_NYT.js";import"./symbol-DYEAVhaZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkAfi0ht.js";import"./uniqBy-PH-f1KA8.js";import"./iteratee-S0C_aG4j.js";import"./Curve-Bl41E8Lc.js";import"./step-Dw52zkwm.js";import"./AnimatedItems-BfJAUGfB.js";import"./useAnimationId-BlokCSh_.js";import"./ActivePoints-a2kVi7nQ.js";import"./Dot-CVhodtQ4.js";import"./RegisterGraphicalItemId-5Onr2PDk.js";import"./ErrorBarContext-D6wkc7ti.js";import"./GraphicalItemClipPath-BBsC6IJX.js";import"./SetGraphicalItem-rvXq_PhO.js";import"./getRadiusAndStrokeWidthFromDot-BgmRcAea.js";import"./ActiveShapeUtils-OWHYk5VD.js";import"./Cross-BKF9cuwV.js";import"./Rectangle-DJ2W9D_9.js";import"./Sector-C69Sioi8.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};

import{r as n,R as t}from"./iframe-DhtJ7XT9.js";import{L as p}from"./LineChart-BZXc6vgn.js";import{R as s}from"./zIndexSlice-Cyl_38qZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-o5LT8FK2.js";import{X as d}from"./XAxis-J3EL6z9G.js";import{Y as y}from"./YAxis-B01PX68r.js";import{L as u}from"./Legend-DoC9rE4X.js";import{L as h}from"./Line-E8j5PUVA.js";import{T as g}from"./Tooltip-CqpIeig5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW50izWv.js";import"./index-C3B0n__O.js";import"./index-oGt5PMWE.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./immer-C_Dt4QUB.js";import"./get-DhiNYMWj.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./isWellBehavedNumber-BgBeU-y_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./CartesianAxis-D_A7dWIR.js";import"./Layer-nlXR0D_W.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./Label-Dca6KvYU.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./types-CLlZJjoC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cw6loTNS.js";import"./symbol-DQZ6Kdkf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZY1ZAY4p.js";import"./uniqBy-B0VZpdkS.js";import"./iteratee-DWrV7Ekf.js";import"./Curve-Dqu8WPkG.js";import"./step-CPd-nqqu.js";import"./AnimatedItems-D0rQfZQx.js";import"./useAnimationId-LwDoReja.js";import"./ActivePoints-Dr8Ax-C8.js";import"./Dot-BJDprnUj.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./getRadiusAndStrokeWidthFromDot-Bj473EA9.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./Cross-B692zx-L.js";import"./Rectangle-aI9UNPH3.js";import"./Sector-DKGhGDOA.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

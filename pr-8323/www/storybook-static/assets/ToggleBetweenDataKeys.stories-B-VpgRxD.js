import{r as p,R as t}from"./iframe-J6essBJs.js";import{L as n}from"./LineChart-B8yxScDY.js";import{R as s}from"./zIndexSlice-BsmeZsA8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Kfur7uCV.js";import{X as d}from"./XAxis-Oxu4uJGF.js";import{Y as y}from"./YAxis-Ou9wZ7uM.js";import{L as u}from"./Legend-DlRQ2Vo9.js";import{L as h}from"./Line-Ct90HqVK.js";import{T as g}from"./Tooltip-C1-jMy0E.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQZiUgoa.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./axisSelectors-COh-2QwC.js";import"./throttle-rB4iKGhW.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./polarAxisSelectors-DoWbS56a.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-mCWeQZGc.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./CartesianAxis-BlggDoMg.js";import"./Layer-ePHruQv_.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./Label-DrwYb9eR.js";import"./types-B8ASDW8U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DkB_uy8_.js";import"./symbol-CVLBGIRz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CGfgSTTk.js";import"./uniqBy-W156VtsH.js";import"./iteratee-DWpXed5n.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Jh2oIQpE.js";import"./Curve-BL_nBUj1.js";import"./step-B4vSzXfO.js";import"./dataEntryStyles-BOxNMiFO.js";import"./ActivePoints-C9YqKELU.js";import"./Dot-CUXpspz7.js";import"./activeStyles-Bv4vkUPt.js";import"./useAnimationId-TXNHUPXz.js";import"./ErrorBarContext-BsKM5vJT.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./useEffectiveDataKey-XIQJdOoE.js";import"./Cross-DNXGbAQ8.js";import"./Rectangle-D7oaCIG9.js";import"./util-Dxo8gN5i.js";import"./Sector-ClYZ4T35.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

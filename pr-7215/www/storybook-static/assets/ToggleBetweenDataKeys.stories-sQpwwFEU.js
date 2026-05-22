import{u as n,e as t}from"./iframe-Cag7wSRv.js";import{L as p}from"./LineChart-xYtqufeh.js";import{g as s}from"./arrayEqualityCheck-DIS5wzHQ.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-wXhfwOo8.js";import{X as d}from"./XAxis-DXJVCfkD.js";import{Y as u}from"./YAxis-DZYkeOGX.js";import{L as y}from"./Legend-B_IahfCm.js";import{L as h}from"./Line-DfIGhKaB.js";import{T as g}from"./Tooltip-CaZgP3kp.js";import{R as K}from"./RechartsHookInspector-BY5Jlwrh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./immer-284wn8VQ.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-D-tflLzN.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./CartesianAxis-BO6A-dYS.js";import"./Layer-BKYLP7Ft.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./Label-C9zkgYEJ.js";import"./ZIndexLayer-DmSAjehE.js";import"./types-VwRdPpC4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dzilqv6U.js";import"./symbol-DLUhrThe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-e6GLcNBL.js";import"./uniqBy-Dt7fnwgv.js";import"./iteratee-Jm-FQi8d.js";import"./Curve-DBPrYDrF.js";import"./step-CkDKckf6.js";import"./AnimatedItems-CluPQFSi.js";import"./useAnimationId-DTrmZnPm.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./ErrorBarContext-CXe2vi8A.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./Cross-0JOGn5HY.js";import"./Rectangle-C4gj6xhs.js";import"./Sector-PQ9ghs0A.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";const kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,kt as default};

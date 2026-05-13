import{r as n,e as t}from"./iframe-DA7dsAjt.js";import{L as p}from"./LineChart-B00JAxeq.js";import{R as s}from"./arrayEqualityCheck-B2Tullra.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Q-EMfYy9.js";import{X as d}from"./XAxis-D3BVUN8u.js";import{Y as y}from"./YAxis-C4Bf-We3.js";import{L as h}from"./Legend-CIyYm_rT.js";import{L as u}from"./Line-0_vX2c1I.js";import{T as g}from"./Tooltip-Cgq-37v9.js";import{R as K}from"./RechartsHookInspector-DyuMbIeF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./immer-CgNeP4Cn.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./CartesianAxis-5nCOjy0L.js";import"./Layer-CA2bGkBA.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./Label-BbSyBdDv.js";import"./ZIndexLayer-CtisNWGZ.js";import"./types-BGlT9ghA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BhPyOpJM.js";import"./symbol-Cme7zaAq.js";import"./step-D3Kjh6oK.js";import"./useElementOffset-CMdfJDCv.js";import"./uniqBy-R1SES33n.js";import"./iteratee-bjfE0mcN.js";import"./ReactUtils-Cqv1MuoY.js";import"./ActivePoints-CYKlTQ6D.js";import"./Dot-B0m4Ez5e.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./ErrorBarContext-Exwfj4Ew.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./useAnimationId-Ow7TV2bH.js";import"./getRadiusAndStrokeWidthFromDot-DJFGm-Zo.js";import"./ActiveShapeUtils-WqUyYvVV.js";import"./isPlainObject-BtsggNmX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-tNMC4o.js";import"./Trapezoid-CUQqnsJW.js";import"./Sector-CYPQyxpp.js";import"./Curve-CSUb-Mmt.js";import"./Cross-qcppa6F_.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};

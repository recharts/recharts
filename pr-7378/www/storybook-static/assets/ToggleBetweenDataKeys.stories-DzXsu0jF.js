import{u as n,e as t}from"./iframe-oV1i-tzu.js";import{L as p}from"./LineChart-BLL1e2t0.js";import{g as s}from"./arrayEqualityCheck-Dfz61M-V.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-D9DyNXZ-.js";import{X as d}from"./XAxis-DW0bS2aQ.js";import{Y as u}from"./YAxis-BMPOd6W0.js";import{L as y}from"./Legend-CedVYhqN.js";import{L as h}from"./Line-DMYmk-zJ.js";import{T as g}from"./Tooltip-r9T7AQW9.js";import{R as K}from"./RechartsHookInspector-1T59QrJN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Saljze2a.js";import"./index-DdCYMcV3.js";import"./immer-Ct3YneiL.js";import"./hooks-B5b3yGZZ.js";import"./axisSelectors-BRcov9Qp.js";import"./d3-scale-BCcM-CgQ.js";import"./zIndexSlice-CXZMcCd3.js";import"./renderedTicksSlice-C78Emj3z.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DROGNedD.js";import"./chartDataContext-DEEDOj20.js";import"./CategoricalChart-otVHfWKe.js";import"./resolveDefaultProps-Cn2RP2Pv.js";import"./CartesianAxis-DOaYzv5V.js";import"./Layer-e51vonqH.js";import"./Text-rK0alIz0.js";import"./DOMUtils-DKzrOEzB.js";import"./Label-C9DqArbR.js";import"./ZIndexLayer-Hy5H_WVm.js";import"./types-BU-8R6yi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C83T-EWb.js";import"./symbol-VawIigOH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BMz-Idks.js";import"./uniqBy-Cgghj1Ul.js";import"./iteratee-DiVCWJOm.js";import"./Curve-DXadnWNX.js";import"./step-DajnNDky.js";import"./ReactUtils-wKdNeUqr.js";import"./ActivePoints-AO8q43pZ.js";import"./Dot-3SDu6TG_.js";import"./RegisterGraphicalItemId-CbsLevva.js";import"./ErrorBarContext-CHQ5Dpbn.js";import"./GraphicalItemClipPath-C89Feiin.js";import"./SetGraphicalItem-BZBmijvN.js";import"./useAnimationId-DCUIw60r.js";import"./getRadiusAndStrokeWidthFromDot-BdBvKBxs.js";import"./ActiveShapeUtils-CmSjpnmu.js";import"./Cross-BMtNyfs2.js";import"./Rectangle-Dox35F7s.js";import"./Sector-DiFKD5N7.js";import"./index-DHpYxSIP.js";import"./ChartSizeDimensions-COgON8GA.js";import"./OffsetShower-CXxqX1ML.js";import"./PlotAreaShower-DiLwgL_i.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};

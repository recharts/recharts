import{u as n,e as t}from"./iframe-Yt5kG58B.js";import{L as p}from"./LineChart-TRF0qMwX.js";import{g as s}from"./arrayEqualityCheck-CmivkQHU.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-C6yEJEor.js";import{X as d}from"./XAxis-BMPl7mYX.js";import{Y as u}from"./YAxis-fNPxfz24.js";import{L as y}from"./Legend-F4IN3yHj.js";import{L as h}from"./Line-DblcEqSB.js";import{T as g}from"./Tooltip-BcVnATUn.js";import{R as K}from"./RechartsHookInspector-Cviat0cY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNwUSHj6.js";import"./index-CCn_KrYt.js";import"./immer-CcDOB7WW.js";import"./hooks-DdT8YGKV.js";import"./axisSelectors-Cu_RAN-5.js";import"./d3-scale-ClNNBzhr.js";import"./zIndexSlice-pBWW2gMH.js";import"./renderedTicksSlice-CAjiTAMh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CbX7HdzJ.js";import"./chartDataContext-D89eDWXB.js";import"./CategoricalChart-LTsMGKb4.js";import"./resolveDefaultProps-unPLvkOT.js";import"./CartesianAxis-CkTrjpZB.js";import"./Layer-C5jjOkvS.js";import"./Text-Ch8634yl.js";import"./DOMUtils-BHiH0dNd.js";import"./Label-BnSyr1ay.js";import"./ZIndexLayer-V8l53dIn.js";import"./types-DbVT1P7h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-U--EO8M8.js";import"./symbol-CjsKKohT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrOONtSV.js";import"./uniqBy-D4Gfq8Pv.js";import"./iteratee-CA1CdI-j.js";import"./Curve-BqZs6d01.js";import"./step-C2PKa5KE.js";import"./ReactUtils-Jy4OurHq.js";import"./ActivePoints-BQ3lgqlU.js";import"./Dot-BBaQQz_u.js";import"./RegisterGraphicalItemId-u9uNYDRF.js";import"./ErrorBarContext-CIW2Opuu.js";import"./GraphicalItemClipPath-BVHUKTdw.js";import"./SetGraphicalItem-BQyEnfew.js";import"./useAnimationId-D8AADvXI.js";import"./getRadiusAndStrokeWidthFromDot-ew-Ir4iU.js";import"./ActiveShapeUtils-C6u69RRm.js";import"./Cross-C5tccwof.js";import"./Rectangle-7uU6IRNU.js";import"./Sector-CRzUL7tg.js";import"./index-BGUbPMKQ.js";import"./ChartSizeDimensions-DfUWMKem.js";import"./OffsetShower-DwOtQel9.js";import"./PlotAreaShower-C3hlHEsr.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

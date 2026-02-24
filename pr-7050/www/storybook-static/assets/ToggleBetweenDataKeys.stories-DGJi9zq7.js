import{r as n,e as t}from"./iframe-zwlZ9sO1.js";import{L as p}from"./LineChart-C89fHwF7.js";import{R as s}from"./arrayEqualityCheck-CJjag0zJ.js";import{C as c}from"./CartesianGrid-B642OziP.js";import{X as l}from"./XAxis-CnAuA4rg.js";import{Y as d}from"./YAxis-Dth2njTV.js";import{L as y}from"./Legend-C7lFPsh9.js";import{L as h}from"./Line-CfwUAClX.js";import{T as u}from"./Tooltip-C4PzfPF3.js";import{R as g}from"./RechartsHookInspector-DHSpqDma.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./immer-BiA4uk1x.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./zIndexSlice-oDtJWVOP.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./CartesianAxis--bPf-qQg.js";import"./Layer-BoZ3FYfy.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./Label-IHkKI2op.js";import"./ZIndexLayer-DApcsQWW.js";import"./types-B9pmE4ka.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ChQBVl9-.js";import"./symbol-By180QeN.js";import"./step-DUUdO3U1.js";import"./useElementOffset--1_J6-2R.js";import"./uniqBy-1QvvVmO8.js";import"./iteratee-BbsKG0i1.js";import"./ReactUtils-KsuQNZ47.js";import"./ActivePoints-DGPPefSL.js";import"./Dot-D8W5fYzP.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./ErrorBarContext-D80HzYFV.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./useAnimationId-BwEUZfoI.js";import"./getRadiusAndStrokeWidthFromDot-DJU7uBWj.js";import"./ActiveShapeUtils-DJB4inM1.js";import"./isPlainObject-DWYFOBoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsLE6Qwo.js";import"./Trapezoid-Dh6fdRWC.js";import"./Sector-1S-nbggX.js";import"./Curve-D-syDesq.js";import"./Cross-Dq7ZRpxr.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

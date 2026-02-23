import{r as n,e as t}from"./iframe-Cg8afp3P.js";import{L as p}from"./LineChart-DoZRGYR3.js";import{R as s}from"./arrayEqualityCheck-CdnxX3zW.js";import{C as c}from"./CartesianGrid-Dufe2PKF.js";import{X as l}from"./XAxis-CcHOaWFK.js";import{Y as d}from"./YAxis-B5L1n3Hm.js";import{L as y}from"./Legend-CfuybC4t.js";import{L as h}from"./Line-ix8re_Gh.js";import{T as u}from"./Tooltip-CU2EVBvY.js";import{R as g}from"./RechartsHookInspector-DBmCwbx2.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./immer-496O7mbU.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./zIndexSlice-BhrWtTkt.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./resolveDefaultProps-3HltEOEu.js";import"./CartesianAxis-BH2_JJNm.js";import"./Layer-YebNzFxt.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./Label-DvKY9pNQ.js";import"./ZIndexLayer-8TBIBWl0.js";import"./types-CMLysTZx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./step-CqAkm0lp.js";import"./useElementOffset-RqGPhtWN.js";import"./uniqBy-CzLOAIrK.js";import"./iteratee-C64KKsoF.js";import"./ReactUtils-Bs6wbtV4.js";import"./ActivePoints--aP-WW0G.js";import"./Dot-BEaF242C.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./ErrorBarContext-CYmUoBhN.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./useAnimationId-KzNTUIqt.js";import"./getRadiusAndStrokeWidthFromDot-TA9Ey7Di.js";import"./ActiveShapeUtils-C8ehvzet.js";import"./isPlainObject-exJkdHtC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-m1zl6eyw.js";import"./Trapezoid-CNmEBD2U.js";import"./Sector-DyLH-ktt.js";import"./Curve-kDork6Kh.js";import"./Cross-CHprlulN.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

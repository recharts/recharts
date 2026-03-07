import{r as n,e as t}from"./iframe-CxA-LBWH.js";import{L as p}from"./LineChart-CfBSWVSI.js";import{R as s}from"./arrayEqualityCheck-hJaoC2QB.js";import{C as c}from"./CartesianGrid-CezShP0V.js";import{X as l}from"./XAxis-re4pUrp8.js";import{Y as d}from"./YAxis-BcK0se4x.js";import{L as y}from"./Legend-IPlQg4g6.js";import{L as h}from"./Line-B90QZ5am.js";import{T as u}from"./Tooltip-Ct1RWYIG.js";import{R as g}from"./RechartsHookInspector-Ddvgytdy.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQKKXFhE.js";import"./index-Dk8ktJ0b.js";import"./immer-xqAoRSgx.js";import"./hooks-CIwzfPxR.js";import"./axisSelectors-OHI-Dqd0.js";import"./d3-scale-uVAmWtey.js";import"./zIndexSlice-BN1d4D77.js";import"./renderedTicksSlice-hESCiC9f.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsF2ziWs.js";import"./chartDataContext-BsA2334w.js";import"./CategoricalChart-B_RNqQJb.js";import"./resolveDefaultProps-CMH4rWNF.js";import"./CartesianAxis-D_h95VSX.js";import"./Layer-5LyTOX7F.js";import"./Text-BvZKJmQ_.js";import"./DOMUtils-BSZ8zVsl.js";import"./Label-CVqcP_87.js";import"./ZIndexLayer-N8IExBeW.js";import"./types-C0V6O8sH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-N7aoJg5C.js";import"./symbol-BbORdVVc.js";import"./step-o5fwVMRf.js";import"./useElementOffset-CHo4FhRx.js";import"./uniqBy-CTP89-yu.js";import"./iteratee-3I0YZJkI.js";import"./ReactUtils-B-8-Nq1R.js";import"./ActivePoints-CIo7jtJ2.js";import"./Dot-C9MXONQR.js";import"./RegisterGraphicalItemId-D9LaM4VI.js";import"./ErrorBarContext-CztBpvft.js";import"./GraphicalItemClipPath-BCMoGptD.js";import"./SetGraphicalItem-CRDshZRQ.js";import"./useAnimationId-aDbwOJad.js";import"./getRadiusAndStrokeWidthFromDot-CaSx4Wqq.js";import"./ActiveShapeUtils-BTPYOWGE.js";import"./isPlainObject-_PMt6I7e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B05RSUx1.js";import"./Trapezoid-DGB4adeR.js";import"./Sector-C9Xa9AX9.js";import"./Curve-C0Mvljc7.js";import"./Cross-CbF3xK_8.js";import"./index-DMMo74k-.js";import"./ChartSizeDimensions-BQWthli9.js";import"./OffsetShower-BxtkGnvp.js";import"./PlotAreaShower-lv5k_DaO.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

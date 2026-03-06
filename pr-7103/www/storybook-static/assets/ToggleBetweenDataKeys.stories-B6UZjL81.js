import{r as n,e as t}from"./iframe-I81QGiZ0.js";import{L as p}from"./LineChart-DP1mieV3.js";import{R as s}from"./arrayEqualityCheck-DEF1A1K9.js";import{C as c}from"./CartesianGrid-D0gWY7Nf.js";import{X as l}from"./XAxis-CQKq-ex8.js";import{Y as d}from"./YAxis-w5mY6Ink.js";import{L as y}from"./Legend-C2x900X2.js";import{L as h}from"./Line-CWvEZ8nS.js";import{T as u}from"./Tooltip-UxmMbkYs.js";import{R as g}from"./RechartsHookInspector-CY8GaMGS.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DhPN24j4.js";import"./index-MTHTVMV2.js";import"./immer-Bx-m2dTE.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./zIndexSlice-BTQopzha.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./resolveDefaultProps-CESK2sOz.js";import"./CartesianAxis-B00ihn4w.js";import"./Layer-nQYqqIOO.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./Label-LA2ogkfT.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./types-CpBHwU86.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-MCFH85eq.js";import"./symbol-B5gXRZo2.js";import"./step-DCb-mqT3.js";import"./useElementOffset-BIXhMv0f.js";import"./uniqBy-DtcJp7bW.js";import"./iteratee-Al1RcwZC.js";import"./ReactUtils-bl8BpOYM.js";import"./ActivePoints-D75FV8Tu.js";import"./Dot-BGO9lVtU.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./ErrorBarContext-6fNIAsL2.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./useAnimationId-BTiaxNBH.js";import"./getRadiusAndStrokeWidthFromDot-dbaSmHwq.js";import"./ActiveShapeUtils-C9oxgbzm.js";import"./isPlainObject-3DRjiOwk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSAz1yWp.js";import"./Trapezoid-BCwQCoIH.js";import"./Sector-CEDvP0Pt.js";import"./Curve-COcp6alG.js";import"./Cross-9H6MLiUO.js";import"./index-DG9lLNBE.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

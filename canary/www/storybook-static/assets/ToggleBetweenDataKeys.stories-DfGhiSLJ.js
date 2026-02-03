import{r as n,e as t}from"./iframe-BnXWjslm.js";import{L as p}from"./LineChart-B4Yx_Ldx.js";import{R as s}from"./arrayEqualityCheck-DUiNH6C9.js";import{C as c}from"./CartesianGrid-CKomsyf3.js";import{X as l}from"./XAxis-CmdVCSMA.js";import{Y as d}from"./YAxis-B7_xgRPt.js";import{L as y}from"./Legend-DQuskGTn.js";import{L as h}from"./Line-BPeNZJ5S.js";import{T as u}from"./Tooltip-DKfkT7Gz.js";import{R as g}from"./RechartsHookInspector-CJTq0Gdr.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BfUKOtD7.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./zIndexSlice-p0C6ErDf.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./CartesianAxis-RUdXwPBb.js";import"./Layer-A6Fuc82i.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./Label-Znit4TkG.js";import"./ZIndexLayer-BvBrZyR1.js";import"./types-TTX5RUO9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-yqo_ZORc.js";import"./Curve-Bkc50DRF.js";import"./useElementOffset-Da6MIgAg.js";import"./iteratee-xPJqHmHf.js";import"./ReactUtils-R08Tgf5F.js";import"./ActivePoints-C3JJMy4k.js";import"./Dot-D3x_k9xg.js";import"./RegisterGraphicalItemId-CW94G04M.js";import"./ErrorBarContext-CDqLcMo6.js";import"./GraphicalItemClipPath--41PL7k1.js";import"./SetGraphicalItem-jWEfPCy0.js";import"./useAnimationId-cDAtDGt9.js";import"./getRadiusAndStrokeWidthFromDot-QVWsL0nH.js";import"./ActiveShapeUtils-B_6IBG-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DiN3KyDm.js";import"./Trapezoid-DoyDZqd_.js";import"./Sector-CE4yIiKS.js";import"./Cross-C6rZ8te8.js";import"./index-BDMR2Hui.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./OffsetShower-CSNclTFq.js";import"./PlotAreaShower-Conl4mfo.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};

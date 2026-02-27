import{r as n,e as t}from"./iframe-DFGAofbe.js";import{L as p}from"./LineChart-CV4HquQN.js";import{R as s}from"./arrayEqualityCheck-ljAchZLP.js";import{C as c}from"./CartesianGrid-BvlU0hyK.js";import{X as l}from"./XAxis-B7s0I8c_.js";import{Y as d}from"./YAxis-BGW4Fg8K.js";import{L as y}from"./Legend-RvJlWvFg.js";import{L as h}from"./Line-BlnoO5ZS.js";import{T as u}from"./Tooltip-UooB0EhF.js";import{R as g}from"./RechartsHookInspector-DbJ87cdf.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BW69_AMP.js";import"./index-BuPlUYom.js";import"./immer-BNIFj7IH.js";import"./hooks-NQJeEPvo.js";import"./axisSelectors-wlNZvql0.js";import"./d3-scale-BORVzaI0.js";import"./zIndexSlice-ZGxvoLlb.js";import"./renderedTicksSlice-zWZrw6WL.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B919z8kN.js";import"./chartDataContext-3sHnV3LN.js";import"./CategoricalChart-DiTxXNb9.js";import"./resolveDefaultProps-BiW6MX56.js";import"./CartesianAxis-CchT0nWW.js";import"./Layer-DkQEAz0F.js";import"./Text-eVa9CtOa.js";import"./DOMUtils-Bb3CoATj.js";import"./Label-D3hyhnox.js";import"./ZIndexLayer-C2uBG0v5.js";import"./types-hODQJ_Fi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-smoeIwKM.js";import"./symbol-ChY4FcTv.js";import"./step-D87477lM.js";import"./useElementOffset-CKkFnPA9.js";import"./uniqBy-15P9Zh0w.js";import"./iteratee-BW6l5A-S.js";import"./ReactUtils-Zl7yFqa2.js";import"./ActivePoints-xqKHU-BS.js";import"./Dot-C8sJEI5Z.js";import"./RegisterGraphicalItemId-BoqMctej.js";import"./ErrorBarContext-CN4hBBfW.js";import"./GraphicalItemClipPath-CAWgOBcy.js";import"./SetGraphicalItem-BNO-bjOH.js";import"./useAnimationId-DLq-j523.js";import"./getRadiusAndStrokeWidthFromDot-CO84l42z.js";import"./ActiveShapeUtils-BldO5j8K.js";import"./isPlainObject-CgDaYdpj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXQZY0za.js";import"./Trapezoid-C7B2-ixr.js";import"./Sector-BpsG7dxK.js";import"./Curve-DUQRfqey.js";import"./Cross-YtxgBDXs.js";import"./index-C6DKtKjE.js";import"./ChartSizeDimensions-BkxkztHc.js";import"./OffsetShower-B3oZm6GE.js";import"./PlotAreaShower-CBxzL5FD.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-CQz6-rqU.js";import{L as p}from"./LineChart-BzkAH93K.js";import{R as s}from"./arrayEqualityCheck-B3hp3dy1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CR6vgPuV.js";import{X as d}from"./XAxis-CbqTpJSy.js";import{Y as y}from"./YAxis-BQnCi2Gr.js";import{L as h}from"./Legend-KW9mUM4i.js";import{L as u}from"./Line-CqVeTqkE.js";import{T as g}from"./Tooltip-BWO-9ZCX.js";import{R as K}from"./RechartsHookInspector-B2GPukyV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0t3ed1JS.js";import"./index-DcdNEEYJ.js";import"./immer-C1Ef071P.js";import"./hooks-Cv8BoRyK.js";import"./axisSelectors-bV92EhmM.js";import"./d3-scale-Dy1NrWss.js";import"./zIndexSlice-jdolFKYR.js";import"./renderedTicksSlice-D_gYaTKe.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KdDR_fN8.js";import"./chartDataContext-BrSsmPTw.js";import"./CategoricalChart-Cya9ekS6.js";import"./resolveDefaultProps-Bsy3ef9f.js";import"./CartesianAxis-BA0-wFGi.js";import"./Layer-aJdiXKbK.js";import"./Text-JvXAfe8A.js";import"./DOMUtils-2zTsLgWC.js";import"./Label-D5a5ehTh.js";import"./ZIndexLayer-D5ngjIV-.js";import"./types-XpdbXnbU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BXHTL0iF.js";import"./symbol-BurpkDKi.js";import"./step-DP79CAdJ.js";import"./useElementOffset-DOMlaDHk.js";import"./uniqBy-BpAtPS6e.js";import"./iteratee-Dac6CcmO.js";import"./ReactUtils-BqVg2WmD.js";import"./ActivePoints-C9xPRrJf.js";import"./Dot-DEN8tXMw.js";import"./RegisterGraphicalItemId-Ch1pO7WV.js";import"./ErrorBarContext-DgfGrsqm.js";import"./GraphicalItemClipPath-CPeTkZJp.js";import"./SetGraphicalItem-DB6-mG_s.js";import"./useAnimationId-DfRjeBwp.js";import"./getRadiusAndStrokeWidthFromDot-CpMo6JgK.js";import"./ActiveShapeUtils-DN6LeKsQ.js";import"./isPlainObject-rkdQ43EP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cna_W9G7.js";import"./Trapezoid-dmc5_bkF.js";import"./Sector-D8lvqTTS.js";import"./Curve-3nz25txP.js";import"./Cross-CPGx9Rms.js";import"./index-BGBLB-6R.js";import"./ChartSizeDimensions-CkcmSnfk.js";import"./OffsetShower-D1GSKoft.js";import"./PlotAreaShower-L499Q96k.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

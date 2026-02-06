import{r as n,e as t}from"./iframe-DxZX8v3W.js";import{L as p}from"./LineChart-Btq6VZCY.js";import{R as s}from"./arrayEqualityCheck-CHFkqTV_.js";import{C as c}from"./CartesianGrid-DQNeuEVT.js";import{X as l}from"./XAxis-DzPSb7qL.js";import{Y as d}from"./YAxis-CpMOxs2p.js";import{L as y}from"./Legend-BW6GuNFW.js";import{L as h}from"./Line-kMI0-8qe.js";import{T as u}from"./Tooltip-AYYQXPAP.js";import{R as g}from"./RechartsHookInspector-EozXGI-d.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./CartesianAxis-DPUMtDOy.js";import"./Layer-BPZWkKY5.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./Label-DcVTU5jd.js";import"./ZIndexLayer-u2cA8wLh.js";import"./types-DXQoRjfG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ByPpWVp2.js";import"./Curve-amoMOh-y.js";import"./useElementOffset-BYdkRgKD.js";import"./iteratee-Bw9xrDoj.js";import"./ReactUtils-BR0ZodR6.js";import"./ActivePoints-ChW3PNAb.js";import"./Dot-6gTSKkj_.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./ErrorBarContext-BbaI3C-C.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./useAnimationId-DTZHXicx.js";import"./getRadiusAndStrokeWidthFromDot-9yl6HY0F.js";import"./ActiveShapeUtils-umUGRO3f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZKdZP-LA.js";import"./Trapezoid-B8lDUleJ.js";import"./Sector-C4RYsjmR.js";import"./Cross-BYg9PL7z.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-BLLNbNku.js";import{L as p}from"./LineChart-Bu2RBxmJ.js";import{R as s}from"./arrayEqualityCheck-Co8h5dnX.js";import{C as c}from"./CartesianGrid-NLii9Zxh.js";import{X as l}from"./XAxis-raVyKb45.js";import{Y as d}from"./YAxis-DzinWbKB.js";import{L as y}from"./Legend-BkqJY-UH.js";import{L as h}from"./Line-D2kmSwWp.js";import{T as u}from"./Tooltip-gY9UEY3J.js";import{R as g}from"./RechartsHookInspector-0ZdSIZYh.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHcwqX8r.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./zIndexSlice-DcR9U4FZ.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./PolarUtils-DXjI68e5.js";import"./CartesianChart-BHDODL1m.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./CartesianAxis-ol8Jf5am.js";import"./Layer-BCxNAEKV.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./Label-BoL4zXeM.js";import"./ZIndexLayer-rdL7qpG4.js";import"./types-C2V5y-Kb.js";import"./Symbols-Uq5NG2Xk.js";import"./Curve-k7SSPeeE.js";import"./useElementOffset-DjqKUW3F.js";import"./iteratee-Cva4A5KP.js";import"./ReactUtils-DqoF2LGV.js";import"./ActivePoints--yuiW4Rq.js";import"./Dot-CQehOVCl.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./ErrorBarContext-HC4TQGzt.js";import"./GraphicalItemClipPath-B4KkXTlk.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./useAnimationId-Brx318jV.js";import"./getRadiusAndStrokeWidthFromDot-Duh5yQ_0.js";import"./ActiveShapeUtils-IKQ46J3H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1VmBLbJ.js";import"./Trapezoid-DMY00GCf.js";import"./Sector-BtcaLVg3.js";import"./Cross-DGcauU--.js";import"./index-Dyt5IQSl.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./OffsetShower-FR5I6nlk.js";import"./PlotAreaShower-B06uRIML.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};

import{r as n,e as t}from"./iframe-DerYKIzi.js";import{L as p}from"./LineChart-C2tezeGK.js";import{R as s}from"./arrayEqualityCheck-BjVe0Fqi.js";import{C as c}from"./CartesianGrid-Cj39R05K.js";import{X as l}from"./XAxis-Bgvn5DCx.js";import{Y as d}from"./YAxis-D6MwvlMv.js";import{L as y}from"./Legend-oOwdWAco.js";import{L as h}from"./Line-BHRwnsUf.js";import{T as u}from"./Tooltip-07R-OjPL.js";import{R as g}from"./RechartsHookInspector-6OICS92a.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./hooks-Bufm5eM3.js";import"./axisSelectors-D2mivk7c.js";import"./zIndexSlice-Dl8TZiao.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./CartesianAxis-CgnzR7dE.js";import"./Layer-D3SGVv1F.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./Label-Dcc5xZ5Y.js";import"./ZIndexLayer-B4AZig9C.js";import"./types-aH4hB60Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BsidgTnn.js";import"./Curve-HbHV5hCk.js";import"./useElementOffset-BQTTbTDB.js";import"./iteratee-B5c8PfHS.js";import"./ReactUtils-C811ViG8.js";import"./ActivePoints-CnKH4Xhf.js";import"./Dot-B8Z8LHGX.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./ErrorBarContext-B9auALKr.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./useAnimationId-Q_ju2aFP.js";import"./getRadiusAndStrokeWidthFromDot-JmC9apyq.js";import"./ActiveShapeUtils-BHypxLS_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2nS0zsop.js";import"./Trapezoid-BqTiWmsP.js";import"./Sector-KrvgbNAg.js";import"./Cross-QYzDDHEd.js";import"./index-Baa4xFqo.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./OffsetShower-CcEDeZ1H.js";import"./PlotAreaShower-lQ69SKO-.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

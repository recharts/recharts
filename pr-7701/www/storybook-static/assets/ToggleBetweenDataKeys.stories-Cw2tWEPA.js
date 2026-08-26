import{r as n,R as t}from"./iframe-B6gM4DBh.js";import{L as p}from"./LineChart-C5EN6pN8.js";import{R as s}from"./zIndexSlice-B4H70akx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BaXO-HzQ.js";import{X as d}from"./XAxis-BPzJdn5a.js";import{Y as y}from"./YAxis-d65xn9J2.js";import{L as u}from"./Legend-qAXQw7-7.js";import{L as h}from"./Line-DR958mka.js";import{T as g}from"./Tooltip-LOl6iYza.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D2vZVe4g.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D78GfHI7.js";import"./throttle-CinY1Cg6.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./isWellBehavedNumber-oWfLE68q.js";import"./d3-scale-CI-CA5sR.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./index-CgCBhtWH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./CartesianAxis-BQyu91wk.js";import"./Layer-BvISteiU.js";import"./Text-D8H4cfwv.js";import"./DOMUtils-BD82E1of.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./Label-uI-6_naX.js";import"./ZIndexLayer-C4neE0Nt.js";import"./types-B56u5L7u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B96vx3HZ.js";import"./symbol-DjIioEey.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_AujER3.js";import"./uniqBy-gLmjoiP9.js";import"./iteratee-DAM7e3NH.js";import"./Curve-BJ4EcGmY.js";import"./step-hz5YCF7J.js";import"./AnimatedItems-DoXh_8P-.js";import"./useAnimationId-B9APFvDh.js";import"./ActivePoints-Dyp1po5C.js";import"./Dot-DPENikpb.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./ErrorBarContext-BH6HTwRn.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./getRadiusAndStrokeWidthFromDot-B_TRGaiU.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Cw_vUoRT.js";import"./Rectangle-BJ2YLML2.js";import"./util-Dxo8gN5i.js";import"./Sector-Cy7n_hv5.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};

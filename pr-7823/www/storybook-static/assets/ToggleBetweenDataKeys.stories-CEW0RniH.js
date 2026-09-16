import{r as p,R as t}from"./iframe-BehVlOkm.js";import{L as n}from"./LineChart-C4IiSSV_.js";import{R as s}from"./zIndexSlice-CdmzvBWn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DbYBL1KB.js";import{X as d}from"./XAxis-CQVzim4L.js";import{Y as y}from"./YAxis-Ds0Z47iT.js";import{L as u}from"./Legend-CfuiwBwX.js";import{L as h}from"./Line-xZ_IkCzK.js";import{T as g}from"./Tooltip-BCrTZQqf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0yqzaTB4.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DyVT26JG.js";import"./throttle-3ebqMYzS.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./CartesianAxis-Dh9d1hc7.js";import"./Layer-Drrwe-kT.js";import"./Text-DdbsBRSW.js";import"./DOMUtils-DRfi6Z_9.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./Label-3Vi5DR-p.js";import"./ZIndexLayer-C8fMsiAz.js";import"./types-CAE_u7CX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DuGenZrt.js";import"./symbol-0ztgqzus.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dm1K4Zpo.js";import"./uniqBy-CS225_ZI.js";import"./iteratee-VXBxxD8z.js";import"./Curve-DIgGrV17.js";import"./step-DaHJvpwY.js";import"./AnimatedItems-DX3Aqvyi.js";import"./useAnimationId-PYM0HN7I.js";import"./ActivePoints-CSlqy7_R.js";import"./Dot-BJdMpeRo.js";import"./RegisterGraphicalItemId-B_HypSlK.js";import"./ErrorBarContext-BsuukL4-.js";import"./GraphicalItemClipPath-DHrIaKZQ.js";import"./SetGraphicalItem-ke9OEdFg.js";import"./getRadiusAndStrokeWidthFromDot-Dn20e6Na.js";import"./ActiveShapeUtils-DgsGKv18.js";import"./useGraphicalItemIdentity-CpoXyJzx.js";import"./Cross-CemypyqM.js";import"./Rectangle-BUmqWu2s.js";import"./util-Dxo8gN5i.js";import"./Sector-To5kSVm7.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};

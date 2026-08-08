import{r as n,R as t}from"./iframe-Dl6-w9Rh.js";import{L as p}from"./LineChart-BEZ5yb5N.js";import{R as s}from"./zIndexSlice-BRejfQU1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-inIx_fGG.js";import{X as d}from"./XAxis-DZSPPcQS.js";import{Y as y}from"./YAxis-Cc6mYSUk.js";import{L as u}from"./Legend-DCguHXy8.js";import{L as h}from"./Line-Bg3LAjcn.js";import{T as g}from"./Tooltip-B96OQLJ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./throttle-vxYlNOMT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BPD60Viv.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./CategoricalChart-Dp8ZNzIB.js";import"./CartesianAxis-Dak0cZYo.js";import"./Layer-DIMKS5Ou.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./Label-aNbwXPlv.js";import"./ZIndexLayer-DkX5oxcl.js";import"./types-Ddok_SrC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BXJ_hhZg.js";import"./symbol-D8WWhlr3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ch2YK_71.js";import"./uniqBy-BEve3nPb.js";import"./iteratee-BGBdQaeY.js";import"./Curve-DhmTjq3U.js";import"./step-vOQUBbeE.js";import"./AnimatedItems-D0kip4Wc.js";import"./useAnimationId-CYbASTF_.js";import"./ActivePoints-oADU3qVC.js";import"./Dot-uQmPoXZ1.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getRadiusAndStrokeWidthFromDot-IVUblMaM.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-C9tEHEHx.js";import"./Rectangle-DbSzEXWo.js";import"./util-Dxo8gN5i.js";import"./Sector-DXuRLzs8.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};

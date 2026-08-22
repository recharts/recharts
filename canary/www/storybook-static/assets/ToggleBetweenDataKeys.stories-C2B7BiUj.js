import{r as n,R as t}from"./iframe-DxWIhncV.js";import{L as p}from"./LineChart-Bz3a5dQH.js";import{R as s}from"./zIndexSlice-CvFttmX7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-KtGV8CEV.js";import{X as d}from"./XAxis-B9Vxe31q.js";import{Y as y}from"./YAxis-Dejd3ooC.js";import{L as u}from"./Legend-3EkegKR7.js";import{L as h}from"./Line-DhAbYBrl.js";import{T as g}from"./Tooltip-B7Cugqd8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5eKH7dT.js";import"./index-CHkzAMA5.js";import"./index-39_4eaUE.js";import"./index-OyYFMy4T.js";import"./index-BKRCm9JK.js";import"./throttle-C5bM6B-L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CaYZoQ6p.js";import"./resolveDefaultProps-V7Mvhtws.js";import"./isWellBehavedNumber-DTEIR8Fb.js";import"./d3-scale-DFkdR_XV.js";import"./renderedTicksSlice-CNtjsUso.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DMs5RbVK.js";import"./chartDataContext-BpCWz6pa.js";import"./CategoricalChart-CQ97Eg67.js";import"./CartesianAxis-Dlus29TQ.js";import"./Layer-BXKPNUYf.js";import"./Text-4TpGVjWK.js";import"./DOMUtils-B8BFdTtq.js";import"./useId-Dpmp0CEj.js";import"./useBackwardsCompatibleTheme-BcpIawcL.js";import"./Label-CAN8FPPW.js";import"./ZIndexLayer-A4oI6laB.js";import"./types-B27w_GlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-c414_eZ1.js";import"./symbol-BT_tAxdR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DN9igUSR.js";import"./uniqBy-CQWbYTwp.js";import"./iteratee-B5_1bLXa.js";import"./Curve-BX3Cphj_.js";import"./step-DblRmU4B.js";import"./AnimatedItems-Cm27eF4G.js";import"./useAnimationId-CS78eYs3.js";import"./ActivePoints-Dh0odHQM.js";import"./Dot-Bcw6SvmA.js";import"./RegisterGraphicalItemId-gsLQrx3F.js";import"./ErrorBarContext-Co5aZWql.js";import"./GraphicalItemClipPath-BD7TyuJB.js";import"./SetGraphicalItem-CWf4S0Af.js";import"./getRadiusAndStrokeWidthFromDot-Lj51QhJv.js";import"./ActiveShapeUtils-BEf0C1mK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DTx_di0k.js";import"./Rectangle-BxANarVw.js";import"./util-Dxo8gN5i.js";import"./Sector-DHQxOQJm.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};

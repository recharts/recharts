import{r as p,R as t}from"./iframe-IEvG1YpM.js";import{L as n}from"./LineChart-CbO-jNop.js";import{R as s}from"./zIndexSlice-Cihis5J4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CjJbgPpH.js";import{X as d}from"./XAxis-DtybEOgK.js";import{Y as y}from"./YAxis-Ci6Vvz28.js";import{L as u}from"./Legend-DdM0jFep.js";import{L as h}from"./Line-CUy9vJUP.js";import{T as g}from"./Tooltip-CuSaJkwq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcfL5xRi.js";import"./resolveDefaultProps-bAVDGQbe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Df8E9bUD.js";import"./throttle-By8-YJwd.js";import"./index-POEf-RyB.js";import"./index-CK_MpSkX.js";import"./isWellBehavedNumber-tc8VJoOF.js";import"./d3-scale-TRidtPn4.js";import"./index-BBOVdE4u.js";import"./index-DwR3lO_P.js";import"./renderedTicksSlice-CllAnVPd.js";import"./index-DdsMrJb_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DCzoDDQF.js";import"./chartDataContext-xd-wjTQ9.js";import"./CategoricalChart-DdwxNdAm.js";import"./CartesianAxis-CPXu2kHS.js";import"./Layer-BKPgTeR2.js";import"./Text-Dae-pI4X.js";import"./DOMUtils-DCB2CSvd.js";import"./useId-CcNvwQMQ.js";import"./useBackwardsCompatibleTheme-BUS5d1Jo.js";import"./Label-CuRdPt5D.js";import"./ZIndexLayer-DyfcVau_.js";import"./types-CuB5x_0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cj-zSnNx.js";import"./symbol-LU74KwaU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5R4rosy.js";import"./uniqBy-CGJXAfXB.js";import"./iteratee-ilBKujfJ.js";import"./Curve--AmmIjVJ.js";import"./step-DtrjPrha.js";import"./AnimatedItems-UW_5IIXp.js";import"./useAnimationId-qJZeznSq.js";import"./ActivePoints-C4j-E_4c.js";import"./Dot-Dp0Tai_6.js";import"./RegisterGraphicalItemId-CAU5eRLw.js";import"./ErrorBarContext-BWjTRxXS.js";import"./GraphicalItemClipPath-BuVEsdiO.js";import"./SetGraphicalItem-Du-9XCGr.js";import"./getRadiusAndStrokeWidthFromDot-DStXY72J.js";import"./ActiveShapeUtils-BSvyuOAY.js";import"./useGraphicalItemIdentity-BKM5eyt0.js";import"./Cross-D5MxY4H5.js";import"./Rectangle-BjOMJxA-.js";import"./util-Dxo8gN5i.js";import"./Sector-BZhYQRRH.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

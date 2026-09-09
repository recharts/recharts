import{r as p,R as t}from"./iframe-BPEJKbq8.js";import{L as n}from"./LineChart-CSALA5P1.js";import{R as s}from"./zIndexSlice-VIpuzkKp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Xu2UGrUL.js";import{X as d}from"./XAxis-Cj_7D1I7.js";import{Y as y}from"./YAxis-BtY2v5Bn.js";import{L as u}from"./Legend-C-9iC4T1.js";import{L as h}from"./Line-Ba6803Tc.js";import{T as g}from"./Tooltip-DvwRcFt3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DxqXjp29.js";import"./resolveDefaultProps-1un5xk9O.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DzMkLtRT.js";import"./throttle-DF-tIWsK.js";import"./index-DNcAR_Vs.js";import"./index-ButnEeUi.js";import"./isWellBehavedNumber-Buf-YS9M.js";import"./d3-scale-DEM8vz6k.js";import"./index-B4ESYIeG.js";import"./index-C5KHL6lo.js";import"./renderedTicksSlice-D_uQ_TZY.js";import"./index-KKugj82J.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ooyntLBz.js";import"./chartDataContext-B6O65UK4.js";import"./CategoricalChart-Btmr9H2l.js";import"./CartesianAxis-BsRH_pN4.js";import"./Layer-CtRRCC-v.js";import"./Text-DJ80zvuP.js";import"./DOMUtils-CHvDeV8q.js";import"./useId-b-JOMF6y.js";import"./useBackwardsCompatibleTheme-BiL5HnOV.js";import"./Label-L-zdkhzC.js";import"./ZIndexLayer-WSPcn9qV.js";import"./types-_BaiC61O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CU27xM1D.js";import"./symbol-y49qb0yv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6K-IQoth.js";import"./uniqBy-K0PFycK4.js";import"./iteratee-DTkDCoyb.js";import"./Curve-DXLcFLNV.js";import"./step-NWmRhsUj.js";import"./AnimatedItems-DyYNY1ib.js";import"./useAnimationId-BVUST1Us.js";import"./ActivePoints-iI1SWNnX.js";import"./Dot-BI_iFhuu.js";import"./RegisterGraphicalItemId-D7i3sBo8.js";import"./ErrorBarContext-D5cSQqKQ.js";import"./GraphicalItemClipPath-DkgmJC3z.js";import"./SetGraphicalItem-DABANGfl.js";import"./getRadiusAndStrokeWidthFromDot-NFmAqb_v.js";import"./ActiveShapeUtils-CnR2FwMp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BzqRf9RY.js";import"./Rectangle-B9LkdU9r.js";import"./util-Dxo8gN5i.js";import"./Sector-BYSuxIRU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

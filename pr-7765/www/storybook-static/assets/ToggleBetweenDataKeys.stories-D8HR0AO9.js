import{r as p,R as t}from"./iframe-ZGGTKsi4.js";import{L as n}from"./LineChart-D_-pLLZu.js";import{R as s}from"./zIndexSlice-DxfJO5SI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BDuAwTAR.js";import{X as d}from"./XAxis-DNlNZaF2.js";import{Y as y}from"./YAxis-D3HJo_sZ.js";import{L as u}from"./Legend-BVslAj_p.js";import{L as h}from"./Line-hyiuMJlU.js";import{T as g}from"./Tooltip-CzxrIFwv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./resolveDefaultProps-vV3khv5M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-sP9dBG4h.js";import"./throttle-DU3r4hZM.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./index-DsBTLunf.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./CartesianAxis-y6hYyFes.js";import"./Layer-yZG6HjYa.js";import"./Text-uTHCfqpL.js";import"./DOMUtils-KcdWyv8l.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./Label-CuL7W9s2.js";import"./ZIndexLayer-CnUQDGMu.js";import"./types-Cv_7IfEs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CuqLPjZz.js";import"./symbol-DyWpDIVN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcFou8CY.js";import"./uniqBy-BAAGpGDY.js";import"./iteratee-CoISyMF-.js";import"./Curve-BGLf-py4.js";import"./step-D_M_3p-d.js";import"./AnimatedItems-B0OCbKtI.js";import"./useAnimationId-BA-Y1lsT.js";import"./ActivePoints-DW5iFVK5.js";import"./Dot-DrTqTbYy.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./ErrorBarContext-DZHL-lpY.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getRadiusAndStrokeWidthFromDot-CtaK0aI-.js";import"./ActiveShapeUtils-CShJY30W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-C6TcwmRS.js";import"./Rectangle-tu1-I-Uk.js";import"./util-Dxo8gN5i.js";import"./Sector-BEKQ8BC4.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as p,R as t}from"./iframe-C0YxDW4G.js";import{L as n}from"./LineChart-CVcP0Aw_.js";import{R as s}from"./zIndexSlice-DZlnymAS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bb7zoqVW.js";import{X as d}from"./XAxis-Cpmqfpq_.js";import{Y as y}from"./YAxis-DweGkw3n.js";import{L as u}from"./Legend-C9ri1cZo.js";import{L as h}from"./Line-Cpl-VXWr.js";import{T as g}from"./Tooltip-zR4Uhk69.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./get-C2VjdU0L.js";import"./axisSelectors-nVTOJQip.js";import"./throttle-DOQHZSoJ.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./Label-gEQqlFEh.js";import"./ZIndexLayer-D7SEoPy2.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CbOdKhju.js";import"./symbol-CwLocrbc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";import"./Curve-ID0kLGRf.js";import"./step-BuTfKpR_.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./ActivePoints-mPjd9m9U.js";import"./Dot-DVL9KKRs.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getRadiusAndStrokeWidthFromDot-DYSx7Sm5.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./Cross-DLa943FX.js";import"./Rectangle-Cdyy37-n.js";import"./util-Dxo8gN5i.js";import"./Sector-iXZx7oIx.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

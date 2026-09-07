import{r as p,R as t}from"./iframe-s76JLJT4.js";import{L as n}from"./LineChart-CJ8Vc_OC.js";import{R as s}from"./zIndexSlice-BAzWj5Bm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BPGidQVt.js";import{X as d}from"./XAxis-oY-MxrDT.js";import{Y as y}from"./YAxis-Dp0QA8yk.js";import{L as u}from"./Legend-0Fenf7tV.js";import{L as h}from"./Line-cLMgFbkH.js";import{T as g}from"./Tooltip-CV4gO8AH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzmQgFdw.js";import"./resolveDefaultProps-BacpidNF.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BVRh__it.js";import"./throttle-DlYzKYH1.js";import"./index-D791KxLc.js";import"./index-u4HpiE5R.js";import"./isWellBehavedNumber-BfAJeodP.js";import"./d3-scale-3iO39mKP.js";import"./index-BP9e58dC.js";import"./index-5KrtyyBx.js";import"./renderedTicksSlice-YO-Fp9Ef.js";import"./index-v7GV83G6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHvBdOos.js";import"./chartDataContext-heFiBO7H.js";import"./CategoricalChart-Bnpv8dk8.js";import"./CartesianAxis-wofyjDXK.js";import"./Layer-S_x0F8ws.js";import"./Text-B6LThSxq.js";import"./DOMUtils-duej-PH-.js";import"./useId-DWgk4q6e.js";import"./useBackwardsCompatibleTheme-C6S0KGB6.js";import"./Label-BK0AZvtz.js";import"./ZIndexLayer-RER6T0Dj.js";import"./types-B1A5enlV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DXxFQ5Re.js";import"./symbol-Bivf0Ccg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEqwyN49.js";import"./uniqBy-Cdtb4h_K.js";import"./iteratee-C2acX8LZ.js";import"./Curve-q_CY-4KJ.js";import"./step-zmbHrnqa.js";import"./AnimatedItems-DJi7GpYq.js";import"./useAnimationId-Co4tnqM8.js";import"./ActivePoints-DcCT_xea.js";import"./Dot-bQR7q4wH.js";import"./RegisterGraphicalItemId-CojxeIbK.js";import"./ErrorBarContext-DjrrsITr.js";import"./GraphicalItemClipPath-4yehoiu3.js";import"./SetGraphicalItem-jdZDqL_N.js";import"./getRadiusAndStrokeWidthFromDot-DDb6xR6G.js";import"./ActiveShapeUtils-CMuKiAIO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-v4KNwmm3.js";import"./Rectangle-B7G5cTce.js";import"./util-Dxo8gN5i.js";import"./Sector-Sh4f_eZn.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

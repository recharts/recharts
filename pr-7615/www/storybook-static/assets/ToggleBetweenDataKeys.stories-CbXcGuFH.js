import{r as n,R as t}from"./iframe-BpT5bjyP.js";import{L as p}from"./LineChart-DdSVdZwc.js";import{R as s}from"./zIndexSlice-6ZjUmd8N.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B1jIu4dz.js";import{X as d}from"./XAxis-D1H3iiMu.js";import{Y as y}from"./YAxis-Bw_20RiP.js";import{L as u}from"./Legend-Ba6tYrFU.js";import{L as h}from"./Line-DAOOXY1c.js";import{T as g}from"./Tooltip-DKBl8YHf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./throttle-DrtrRvnQ.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-DruWQWhq.js";import"./axisSelectors-DSgRntKH.js";import"./resolveDefaultProps-DDabcDAr.js";import"./isWellBehavedNumber-C47drcC6.js";import"./d3-scale-CxG8NgTa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHxGC6l9.js";import"./chartDataContext-vyuuOWQ4.js";import"./CategoricalChart-B5HQoLMh.js";import"./CartesianAxis-3XWkAM0R.js";import"./Layer-JsFzk0bC.js";import"./Text-HFJbCo1I.js";import"./DOMUtils-DLC4sCDo.js";import"./Label-BW7muwsN.js";import"./ZIndexLayer-BeMfDg3A.js";import"./types-TjqF4iRF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DdG4jW4z.js";import"./symbol-BbcEI7QM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cr8-5ClZ.js";import"./uniqBy-B00lS2JO.js";import"./iteratee-DXhAWmJ8.js";import"./Curve-BfRxDj3b.js";import"./step-BYJgq2pg.js";import"./AnimatedItems-CJc5QMM0.js";import"./useAnimationId-C2b5i1-K.js";import"./ActivePoints-C2xP28N-.js";import"./Dot-C23HV8Lj.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./ErrorBarContext-DwESbJwv.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./graphicalItemIdentity-N_badT-U.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./Cross-Cp8Y5M1B.js";import"./Rectangle-CHZg89XO.js";import"./util-Dxo8gN5i.js";import"./Sector-CNKHsTkm.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};

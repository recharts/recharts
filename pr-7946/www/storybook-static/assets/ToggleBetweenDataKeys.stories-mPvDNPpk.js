import{r as p,R as t}from"./iframe-CbPFwm7l.js";import{L as n}from"./LineChart-eMSLsoi2.js";import{R as s}from"./zIndexSlice-cmGazbpI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-SNM1t51e.js";import{X as d}from"./XAxis-I1Z8SlwP.js";import{Y as y}from"./YAxis-CFuZPq2O.js";import{L as u}from"./Legend-BRTZe1bn.js";import{L as h}from"./Line-B24tAJlu.js";import{T as g}from"./Tooltip-CitDpTHX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C9c4OR_j.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-31esebaG.js";import"./throttle-CsRm63w_.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./d3-scale-CHJf7NcK.js";import"./index-Cvmqex35.js";import"./index-khK7m-8Q.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./index-CKBSX-em.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./CartesianAxis-CRYdmYpO.js";import"./Layer-BHHNaIH9.js";import"./Text-BOjecne3.js";import"./pageBackground-5oAWQhvG.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./Label-Dd7y5kyu.js";import"./ZIndexLayer-DJZ-23nf.js";import"./types-BHufKOgb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bu1nYSB-.js";import"./symbol-BML25sya.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQtr63ND.js";import"./uniqBy-CYNKKwCT.js";import"./iteratee-Cb_SGx_w.js";import"./Curve-CJ_YkHWB.js";import"./step-BRl-9aNd.js";import"./activeStyles-C0PrsAC0.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./ActivePoints-ED4u2pJ9.js";import"./Dot-D4Vk0xq6.js";import"./ErrorBarContext-CuPWqX0o.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./getRadiusAndStrokeWidthFromDot-DI6x_PKf.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";import"./Cross-CYLZd8JU.js";import"./Rectangle-DZKE4x95.js";import"./util-Dxo8gN5i.js";import"./Sector-vTLrJK9w.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

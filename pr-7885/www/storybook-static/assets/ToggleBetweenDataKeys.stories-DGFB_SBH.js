import{r as p,R as t}from"./iframe-CgcESoS_.js";import{L as n}from"./LineChart-BN4_IZ-e.js";import{R as s}from"./zIndexSlice-C9Cb6Bbs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-lHaZRYHs.js";import{X as d}from"./XAxis-DGXMp8Is.js";import{Y as y}from"./YAxis-Bq6E-73C.js";import{L as u}from"./Legend-BV0Dl49X.js";import{L as h}from"./Line-BSyeHdkf.js";import{T as g}from"./Tooltip-Vx7yLM8C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtWJJ1V3.js";import"./resolveDefaultProps-veeYoS0W.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C7-DsMGo.js";import"./throttle-CQ8B3fUq.js";import"./index-1XAen2V_.js";import"./index-D8jvDgL_.js";import"./isWellBehavedNumber-DhEFf9E-.js";import"./d3-scale-D8W7M27y.js";import"./index-BTxBwUxJ.js";import"./index-C9UQ_w7z.js";import"./renderedTicksSlice-B_kIuOFM.js";import"./index-jPmp1Ffa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTQK_Cp5.js";import"./chartDataContext-DUBSEFa9.js";import"./CategoricalChart-BFNKJgcW.js";import"./CartesianAxis-CyNZQ6so.js";import"./Layer-Dw6zZzpv.js";import"./Text-BcEh6RFZ.js";import"./DOMUtils-Cw9s48Kn.js";import"./useId-Dc2THN-S.js";import"./useBackwardsCompatibleTheme-BFuFikoj.js";import"./Label-_q8lYILX.js";import"./ZIndexLayer-DED1yjXT.js";import"./types-8FiI2U_s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Ckj8mUZ8.js";import"./symbol-CqfI7rOQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_ajIM7J.js";import"./uniqBy--75j5a0F.js";import"./iteratee-CDEjiyt4.js";import"./Curve-I_wsWTHV.js";import"./step-VHdIkk64.js";import"./AnimatedItems-tEo2zXLi.js";import"./useAnimationId-C9QrN9Yt.js";import"./ActivePoints-D3Y1-NiW.js";import"./Dot-Jzlb3m1I.js";import"./RegisterGraphicalItemId-BEYzOUyb.js";import"./ErrorBarContext-ZU3bae9x.js";import"./GraphicalItemClipPath-C3tOgX87.js";import"./SetGraphicalItem-D2ZPo27B.js";import"./getRadiusAndStrokeWidthFromDot-ChHrtsAw.js";import"./ActiveShapeUtils-Cy154cWG.js";import"./useGraphicalItemIdentity-ry1LG-EM.js";import"./Cross-vczDcpik.js";import"./Rectangle-C3dp6HRo.js";import"./util-Dxo8gN5i.js";import"./Sector-CGT0RCUX.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

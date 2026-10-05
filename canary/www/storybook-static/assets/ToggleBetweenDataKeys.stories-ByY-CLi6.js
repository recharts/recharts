import{r as p,R as t}from"./iframe-DzEunvJg.js";import{L as n}from"./LineChart-CscPSSOw.js";import{R as s}from"./zIndexSlice-CJoRXBvc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-1Yhvvtnk.js";import{X as d}from"./XAxis-C3LhqR3k.js";import{Y as y}from"./YAxis-V-QVlkzt.js";import{L as u}from"./Legend-CMUI5vkx.js";import{L as h}from"./Line-DMXo8AlH.js";import{T as g}from"./Tooltip-AonJcaxi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DKQAPH3P.js";import"./resolveDefaultProps-D1VbkECB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BmcAHay7.js";import"./throttle-vVnHJdwk.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./d3-scale-DAMVQCbA.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./index-XWQatYSr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./CartesianAxis-9IOHN060.js";import"./Layer-Cm7XhTpW.js";import"./Text-BLWA_Ab4.js";import"./DOMUtils-BmAhd2hZ.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./Label-CI5iW8Hf.js";import"./ZIndexLayer-C6u4DcMx.js";import"./types-BCX_XL2l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_2PPLeo.js";import"./symbol-BAde79R5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZZg8P8y.js";import"./uniqBy-U5OVK8cg.js";import"./iteratee-2YRKRIXZ.js";import"./Curve-DBPbpDEM.js";import"./step-BomzFh0-.js";import"./AnimatedItems-yUKoBMYs.js";import"./useAnimationId-CM641vkV.js";import"./ActivePoints-c4_lMKBx.js";import"./Dot-Dusyebbr.js";import"./RegisterGraphicalItemId-Yhhjp8dw.js";import"./ErrorBarContext-8mGbl9GN.js";import"./GraphicalItemClipPath-D_Kf5-kj.js";import"./SetGraphicalItem-XUxLk492.js";import"./getRadiusAndStrokeWidthFromDot-dltGhGap.js";import"./ActiveShapeUtils-1PCMWfFs.js";import"./useGraphicalItemIdentity-CP3wmpOS.js";import"./Cross-CerU926X.js";import"./Rectangle-B9EvpGaA.js";import"./util-Dxo8gN5i.js";import"./Sector-DeaxkxMY.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

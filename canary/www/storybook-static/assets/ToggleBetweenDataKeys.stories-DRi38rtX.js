import{r as p,R as t}from"./iframe-DpsH3FWg.js";import{L as n}from"./LineChart-Ca7hXLWf.js";import{R as s}from"./zIndexSlice-DpXR3r86.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-_4K2ems4.js";import{X as d}from"./XAxis-D8_Sc658.js";import{Y as y}from"./YAxis-BVDotbGx.js";import{L as u}from"./Legend-D7vb3GG_.js";import{L as h}from"./Line-BXZUAWkK.js";import{T as g}from"./Tooltip-B-xTPBdJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-WUMeUOBJ.js";import"./resolveDefaultProps-B653NMBN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cnsws1ta.js";import"./throttle-pd_IuHQK.js";import"./index-nXowbRrq.js";import"./index-DYUXUABx.js";import"./isWellBehavedNumber-CtQQO4KW.js";import"./d3-scale-Cs9sdONk.js";import"./index-CIajmslP.js";import"./index-DxSZbnRs.js";import"./renderedTicksSlice-DrH2a5-v.js";import"./index-CVZddw2l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C8K3fZMD.js";import"./chartDataContext-_uRDQIfr.js";import"./CategoricalChart-DsF0HvmF.js";import"./CartesianAxis-CWPiqkJL.js";import"./Layer-Btr6yg86.js";import"./Text-SIhZd4Wm.js";import"./DOMUtils-BqoTnLQ5.js";import"./useId-T5MCLwe8.js";import"./useBackwardsCompatibleTheme-Buw_TzFQ.js";import"./Label-3DC01MfC.js";import"./ZIndexLayer-DviGCp3_.js";import"./types-FBSj3Ggh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-saiSGD9Z.js";import"./symbol-C8mnB45c.js";import"./path-DyVhHtw_.js";import"./useElementOffset-eYeZo5wP.js";import"./uniqBy-BuW3nUeI.js";import"./iteratee-Burh-v8j.js";import"./Curve-CkFcG6My.js";import"./step-DUO82dEI.js";import"./AnimatedItems-BAz_Z0dD.js";import"./useAnimationId-CkVnF8is.js";import"./ActivePoints-8WobBp4l.js";import"./Dot-ykdJ8Wuo.js";import"./RegisterGraphicalItemId-Byr_SbEj.js";import"./ErrorBarContext-Dy-Oq2cq.js";import"./GraphicalItemClipPath--FUz8cke.js";import"./SetGraphicalItem-eZDMBVc_.js";import"./getRadiusAndStrokeWidthFromDot-BIoTJvPK.js";import"./ActiveShapeUtils-DHwgxjaA.js";import"./useGraphicalItemIdentity-DH6n4cBQ.js";import"./Cross-CV91Ua2U.js";import"./Rectangle-B1vLC_1K.js";import"./util-Dxo8gN5i.js";import"./Sector-BjUs49MP.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

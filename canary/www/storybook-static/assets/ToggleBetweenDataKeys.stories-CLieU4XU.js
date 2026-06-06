import{r as n,R as t}from"./iframe-CLfZCDGm.js";import{L as p}from"./LineChart-CoJwYRW-.js";import{R as s}from"./zIndexSlice-CA_idCig.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ch4Y-2GW.js";import{X as d}from"./XAxis-BYpmzEP_.js";import{Y as y}from"./YAxis-DF5Jxdkx.js";import{L as u}from"./Legend-BMsOzIeP.js";import{L as h}from"./Line-DeRPzJVR.js";import{T as g}from"./Tooltip-CZlwquR_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./immer-QRpJ3co-.js";import"./get-DkSz9-jm.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./CartesianAxis-CvEaQSy2.js";import"./Layer-Byvx6_V4.js";import"./Text-CGIrE8uN.js";import"./DOMUtils-BuwrxSLS.js";import"./Label-D3bkn6cZ.js";import"./ZIndexLayer-DyKLPJQn.js";import"./types-Dbi5OTiB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DJcNZ2_T.js";import"./symbol-GhOusqsO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Chf_8u6m.js";import"./uniqBy-j6nY3OwR.js";import"./iteratee-BdSYYQdu.js";import"./Curve-CEx7pPNr.js";import"./step-BvrgBlnG.js";import"./AnimatedItems-2Sc0l-_O.js";import"./useAnimationId-vAkCmZi7.js";import"./ActivePoints-DxCVVL9F.js";import"./Dot-B2U87Uh_.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./ErrorBarContext-ltXyVCQ2.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getRadiusAndStrokeWidthFromDot-Du9ACRIL.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./Cross-D-qn9QcR.js";import"./Rectangle-D_xKR8pa.js";import"./Sector-CoUWNXY1.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};

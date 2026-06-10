import{r as n,R as t}from"./iframe-R4QFQ0mF.js";import{L as p}from"./LineChart-CJFnlNGr.js";import{R as s}from"./zIndexSlice-BTkVJube.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cfb_rZdp.js";import{X as d}from"./XAxis-ByHGiOU3.js";import{Y as y}from"./YAxis-D-mO_MPY.js";import{L as u}from"./Legend-CElsNDhX.js";import{L as h}from"./Line-DLAu7BAy.js";import{T as g}from"./Tooltip-XFGz58wz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./immer-C5zbr-FM.js";import"./get-CX1Ejt3V.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./axisSelectors-CP1mQpG7.js";import"./d3-scale-CmSi9of_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./CategoricalChart-19q5KTev.js";import"./CartesianAxis-DvCYtJ7x.js";import"./Layer-C8zF3tZM.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./Label-gFQEPWtd.js";import"./ZIndexLayer-D26CDD8U.js";import"./types-CyqiaD7e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C4uiRQk0.js";import"./symbol-C_D4j-JV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B2eBjAqg.js";import"./uniqBy-CBOsBGNk.js";import"./iteratee-Bd9zYSkO.js";import"./Curve-NcOFJc9S.js";import"./step-E1t4k1kh.js";import"./AnimatedItems-yF_BXiw0.js";import"./useAnimationId-QtK1xgnL.js";import"./ActivePoints-CIJh5p82.js";import"./Dot-Yljeb2kx.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./ErrorBarContext-lGs_n3Xc.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getRadiusAndStrokeWidthFromDot-DLeAaRBg.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./Cross-Dhr5wkt7.js";import"./Rectangle-Bd4RpfP5.js";import"./Sector-CKoPMhEP.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

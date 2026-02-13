import{r as n,e as t}from"./iframe-7yPApSvt.js";import{L as p}from"./LineChart-BkCPChyr.js";import{R as s}from"./arrayEqualityCheck-BRhf3SEW.js";import{C as c}from"./CartesianGrid-Csd8Dh3x.js";import{X as l}from"./XAxis-D9IId5KY.js";import{Y as d}from"./YAxis-p892jm1t.js";import{L as y}from"./Legend-Dq2Vw5o0.js";import{L as h}from"./Line-CZDjkSNR.js";import{T as u}from"./Tooltip-CMbwh4so.js";import{R as g}from"./RechartsHookInspector-BsW7gU1Y.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BuUb30Xi.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./CartesianAxis-bgrWTzp1.js";import"./Layer-uYiMe6t4.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./Label-DRJZdylN.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./types-OVAUyZ3J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cj90JcMH.js";import"./Curve-DU3LHYbT.js";import"./useElementOffset-C_8-L3sE.js";import"./iteratee-DtH8F4-p.js";import"./ReactUtils-C9q2a11f.js";import"./ActivePoints-CY8-2aZT.js";import"./Dot-CTXw21tK.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./ErrorBarContext-DG4gMx-N.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./useAnimationId-DZFmgCE1.js";import"./getRadiusAndStrokeWidthFromDot-C3lHqLdB.js";import"./ActiveShapeUtils-CcCS4fKT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-VDS0PGUg.js";import"./Trapezoid-CDa1-n6T.js";import"./Sector-B6puIsbo.js";import"./Cross-DHHFHI5_.js";import"./index-CTyUbB7m.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};

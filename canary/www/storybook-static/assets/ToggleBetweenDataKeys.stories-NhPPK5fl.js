import{r as n,e as t}from"./iframe-BO2lV8Fr.js";import{L as p}from"./LineChart-DnhtAW_Y.js";import{R as s}from"./arrayEqualityCheck-BPZLCCv_.js";import{C as c}from"./CartesianGrid-okPqrjow.js";import{X as l}from"./XAxis-n0cJUWOz.js";import{Y as d}from"./YAxis-BHKkX64t.js";import{L as y}from"./Legend-CUzp1DrD.js";import{L as h}from"./Line-QXdRrMDG.js";import{T as u}from"./Tooltip-DSLeoLaw.js";import{R as g}from"./RechartsHookInspector-BaEmilk5.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnX2hcx7.js";import"./hooks-CyQEzp2Y.js";import"./axisSelectors-C55ZO64o.js";import"./zIndexSlice-OMKiStTn.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./PolarUtils-CZtkokJH.js";import"./CartesianChart-BlrMuAtJ.js";import"./chartDataContext-Dtblt1is.js";import"./CategoricalChart-mKGFwIoi.js";import"./CartesianAxis-wvny4geP.js";import"./Layer-IoZ0rL1L.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./Label-4EeKD-N4.js";import"./ZIndexLayer-CKe6oR6h.js";import"./types-uDYlV2go.js";import"./Symbols-BsRtfl74.js";import"./Curve-BbZIFp84.js";import"./useElementOffset-C67P8EXt.js";import"./iteratee-CKVmbhaC.js";import"./ReactUtils-CB6ifrXE.js";import"./ActivePoints-D9PJXPxG.js";import"./Dot-jMjXiq3a.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./ErrorBarContext-BB-sopap.js";import"./GraphicalItemClipPath-D6vjaQ-6.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./useAnimationId-B_L243Vk.js";import"./getRadiusAndStrokeWidthFromDot-DJdRuXTC.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./Trapezoid-DXmIi2NN.js";import"./Sector-BGeEC3JQ.js";import"./Cross-Cw0a3q2D.js";import"./index-Ci4CsAoU.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};

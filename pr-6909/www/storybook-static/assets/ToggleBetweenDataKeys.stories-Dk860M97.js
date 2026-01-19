import{r as n,e as t}from"./iframe-DvdxI6dC.js";import{L as p}from"./LineChart-Bd6Q8Hxn.js";import{R as s}from"./arrayEqualityCheck-DXUAObl0.js";import{C as c}from"./CartesianGrid-DGiABNyR.js";import{X as l}from"./XAxis-DJowtDGC.js";import{Y as d}from"./YAxis-Qq9BKQtQ.js";import{L as y}from"./Legend-ChiCCRwy.js";import{L as h}from"./Line-BdbR2_0r.js";import{T as u}from"./Tooltip-CYub55gM.js";import{R as g}from"./RechartsHookInspector-B_PrFdYH.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BLfZDcOn.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./zIndexSlice-JVJMXPV9.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./PolarUtils-BY4iZmOi.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./CartesianAxis-CptW6PK3.js";import"./Layer-QQplstvs.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./Label-zPyZ6EuZ.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./types-8AXfgSIv.js";import"./Symbols-BZsKNNtj.js";import"./Curve-BRTvsj-M.js";import"./useElementOffset-B-aJyaAb.js";import"./iteratee-CoefYKPX.js";import"./ReactUtils-DqWjpCBi.js";import"./ActivePoints-BSveXf-N.js";import"./Dot-DSDPr-6Z.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./ErrorBarContext-CaA_0bex.js";import"./GraphicalItemClipPath-DNpqs3F2.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./useAnimationId-Dy3gyKDZ.js";import"./getRadiusAndStrokeWidthFromDot-BCM2WAWf.js";import"./ActiveShapeUtils-CgduogxH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeQtanoQ.js";import"./Trapezoid-BNKT4KGX.js";import"./Sector-DWkTEbbM.js";import"./Cross-BGXGqWaa.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-Caz6nZ2I.js";import{L as p}from"./LineChart-DYX7Vvcr.js";import{R as s}from"./arrayEqualityCheck-CcFxY-Xq.js";import{C as c}from"./CartesianGrid-DoN3UDrT.js";import{X as l}from"./XAxis-Dd-oJpip.js";import{Y as d}from"./YAxis-BRCgxqg5.js";import{L as y}from"./Legend-DFlFw3ET.js";import{L as h}from"./Line-CqZ6cal9.js";import{T as u}from"./Tooltip-BIkCUAzI.js";import{R as g}from"./RechartsHookInspector-DDSzpp5A.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaD7RcsJ.js";import"./hooks-CDeGIHYi.js";import"./axisSelectors-CATtk_Ip.js";import"./zIndexSlice-BOArh4At.js";import"./renderedTicksSlice-Dm3Q4on6.js";import"./resolveDefaultProps-DAfTexXm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dac4qaSb.js";import"./chartDataContext-Ckz2ERDZ.js";import"./CategoricalChart-3KZweWrA.js";import"./CartesianAxis-DlMujoQ4.js";import"./Layer-B1GIAb1E.js";import"./Text-CLjo-AK5.js";import"./DOMUtils-CnTHdE3M.js";import"./Label-Ek7Phs8Z.js";import"./ZIndexLayer-BLDjT7Qj.js";import"./types-8IoGCZ4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C3i96Wdn.js";import"./Curve-B5Ob5vne.js";import"./useElementOffset-CTn0xDy-.js";import"./iteratee-DFXjnr9G.js";import"./ReactUtils-R8D9NurX.js";import"./ActivePoints-3_Sh9GV6.js";import"./Dot-UGjQcPgw.js";import"./RegisterGraphicalItemId-t2v7UQtx.js";import"./ErrorBarContext-BJza0ZIr.js";import"./GraphicalItemClipPath-Cv5KZpMj.js";import"./SetGraphicalItem-DOmEhcN0.js";import"./useAnimationId-DFkOU0Go.js";import"./getRadiusAndStrokeWidthFromDot-DzStaRem.js";import"./ActiveShapeUtils-D4vAh-I1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DOnXuvZA.js";import"./Trapezoid-z6JJWRCw.js";import"./Sector-0pp4XTlb.js";import"./Cross-BWbZyZ61.js";import"./index-BX6q2UKF.js";import"./ChartSizeDimensions-C4z1FuV2.js";import"./OffsetShower-BJHPKe79.js";import"./PlotAreaShower-BuE2Upo9.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};

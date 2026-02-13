import{r as n,e as t}from"./iframe-BdYBH0hQ.js";import{L as p}from"./LineChart-BahnHxKg.js";import{R as s}from"./arrayEqualityCheck-CnZHVnux.js";import{C as c}from"./CartesianGrid-CogLHW9f.js";import{X as l}from"./XAxis-C-6SXyUA.js";import{Y as d}from"./YAxis-i93sK3J3.js";import{L as y}from"./Legend-D6O1svQr.js";import{L as h}from"./Line-Dl92IfyZ.js";import{T as u}from"./Tooltip-BE7QlVB7.js";import{R as g}from"./RechartsHookInspector-XSvtem8K.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-92XHVlpU.js";import"./hooks-CxwMnTRQ.js";import"./axisSelectors-B830JJxv.js";import"./zIndexSlice-5OAeHe1c.js";import"./resolveDefaultProps-BV4LHELv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWPbPBgj.js";import"./chartDataContext-nXwfjN3A.js";import"./CategoricalChart-CVN3i_3c.js";import"./CartesianAxis-DtTXwL03.js";import"./Layer-CC1sQm5k.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./Label-nQ379wTM.js";import"./ZIndexLayer-D6TqYbdI.js";import"./types-CeaFy_xO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dfpy34Qh.js";import"./Curve-C1OuXXjt.js";import"./useElementOffset-JJ_3zRXD.js";import"./iteratee-DAeDwiVA.js";import"./ReactUtils-BSN6r0Fc.js";import"./ActivePoints-B5y_bpJR.js";import"./Dot-B2CiLsKD.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./ErrorBarContext-CAApCFPz.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./useAnimationId-D1PUvmFT.js";import"./getRadiusAndStrokeWidthFromDot-BackDSVj.js";import"./ActiveShapeUtils-BIp3i795.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EyNMCPiV.js";import"./Trapezoid-B53GEe_2.js";import"./Sector-DrjPStcI.js";import"./Cross-sCGbxVjq.js";import"./index-CsvAOYvG.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./OffsetShower-CHh6x2lZ.js";import"./PlotAreaShower-CNu2XHWT.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-DwqRYk2I.js";import{L as p}from"./LineChart-C3wj-ib0.js";import{R as s}from"./arrayEqualityCheck-DgzFlSOI.js";import{C as c}from"./CartesianGrid-CsOMLjge.js";import{X as l}from"./XAxis-Cyh_YOcY.js";import{Y as d}from"./YAxis-QYWka3EJ.js";import{L as y}from"./Legend-C5eJuXMe.js";import{L as h}from"./Line-C1vhcH5u.js";import{T as u}from"./Tooltip-CyQmKoLP.js";import{R as g}from"./RechartsHookInspector-DYt25tbN.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7VpHEZH.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./zIndexSlice-CZHcI390.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./CartesianAxis-0yio1lEn.js";import"./Layer-CKGvS6fh.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./Label-BBrY7asM.js";import"./ZIndexLayer-14WaUFCY.js";import"./types-DQBQm6yM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols--4uQfBg4.js";import"./Curve-MGg7iv1Z.js";import"./useElementOffset-BIde8PX1.js";import"./iteratee-Czloof4i.js";import"./ReactUtils-CSQ_QEna.js";import"./ActivePoints-DqfquW36.js";import"./Dot-NTY7DyyV.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./ErrorBarContext-DWBN2nFH.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./useAnimationId-BgtwKRIK.js";import"./getRadiusAndStrokeWidthFromDot-JPp-nKPZ.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./Cross-BlqNBQJ4.js";import"./index-B__3XDnp.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./OffsetShower-CMnq-Zau.js";import"./PlotAreaShower-DGemeH0F.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

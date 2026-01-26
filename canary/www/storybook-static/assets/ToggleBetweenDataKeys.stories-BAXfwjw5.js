import{r as n,e as t}from"./iframe-BtSIgQK6.js";import{L as p}from"./LineChart-CQcNo67O.js";import{R as s}from"./arrayEqualityCheck-DE2iBB4w.js";import{C as c}from"./CartesianGrid-D4eJIbAF.js";import{X as l}from"./XAxis-Duh47LNW.js";import{Y as d}from"./YAxis-Dja6peqA.js";import{L as y}from"./Legend-CP5oD3UX.js";import{L as h}from"./Line-DK5zDU5f.js";import{T as u}from"./Tooltip-ColOtzuE.js";import{R as g}from"./RechartsHookInspector-CTyYdRny.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-y4jP1OLx.js";import"./hooks-3j04d5vi.js";import"./axisSelectors-CGAxpLYE.js";import"./zIndexSlice-BxfsWazG.js";import"./resolveDefaultProps-tnH-YOXI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CbG0k6t0.js";import"./chartDataContext-DyC7E7bB.js";import"./CategoricalChart-CKsWezcf.js";import"./CartesianAxis-B7nPrlAA.js";import"./Layer-C0Jzn9sV.js";import"./Text-B5GBCwiW.js";import"./DOMUtils-1anFrXHc.js";import"./Label-CWG_XmjD.js";import"./ZIndexLayer-GjRfBXiF.js";import"./types-CCc-_PPP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DbTQ7A03.js";import"./Curve-CPkDoGPV.js";import"./useElementOffset-CWby9Xwm.js";import"./iteratee-ktsmYB4p.js";import"./ReactUtils-CkWZzFSr.js";import"./ActivePoints-DmeZ1ufV.js";import"./Dot-B1qpgIfY.js";import"./RegisterGraphicalItemId-B0VNE0Pd.js";import"./ErrorBarContext-COBKZW6S.js";import"./GraphicalItemClipPath-MWrfhZxI.js";import"./SetGraphicalItem-C03tHeu5.js";import"./useAnimationId-B8iQHdnT.js";import"./getRadiusAndStrokeWidthFromDot-BqZRZ_5P.js";import"./ActiveShapeUtils-8qEwWVM1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BdN80mGv.js";import"./Trapezoid-CtEgnRI2.js";import"./Sector-BRe1-FfM.js";import"./Cross-B_I98bz3.js";import"./index-D1fEpgHD.js";import"./ChartSizeDimensions-k7v_FXVx.js";import"./OffsetShower-4wP9Bq0X.js";import"./PlotAreaShower-FD68gciE.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

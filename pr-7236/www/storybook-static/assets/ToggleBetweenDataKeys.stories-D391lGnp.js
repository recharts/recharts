import{r as n,e as t}from"./iframe-JWSOvVZL.js";import{L as p}from"./LineChart-5WE08xqr.js";import{R as s}from"./arrayEqualityCheck-DJxJsIgg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-s-Nk-vBi.js";import{X as d}from"./XAxis-CiEGa-2H.js";import{Y as y}from"./YAxis-DRMcQ1t7.js";import{L as h}from"./Legend-DW6HVUWo.js";import{L as u}from"./Line-CuyuQhyf.js";import{T as g}from"./Tooltip-D24_GFJQ.js";import{R as K}from"./RechartsHookInspector-DbINuC6c.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_ZAgcFWH.js";import"./index-qboEQSUS.js";import"./immer-Cx8sbOuB.js";import"./hooks-D_fkqjif.js";import"./axisSelectors-BfW2jaQP.js";import"./d3-scale-Cvg0WP4x.js";import"./zIndexSlice-xDRQRS04.js";import"./renderedTicksSlice-D4Sds7TF.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6CEzPVWQ.js";import"./chartDataContext-CGNvCd4v.js";import"./CategoricalChart-XXxbMYfW.js";import"./resolveDefaultProps-Db3kyesD.js";import"./CartesianAxis-BBAUsbPY.js";import"./Layer-CVGwLCGQ.js";import"./Text-C1wuLOW9.js";import"./DOMUtils-BGNYNETS.js";import"./Label-Cxg_vq25.js";import"./ZIndexLayer-DKFbEZ_O.js";import"./types-B3dpB15X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CJQeMuDE.js";import"./symbol-CzcstGin.js";import"./step-NHTakNU6.js";import"./useElementOffset-CvtiAL57.js";import"./uniqBy-BLTAZ1cN.js";import"./iteratee-DMhTgxAn.js";import"./ReactUtils-qs-97Ac8.js";import"./ActivePoints-XzqbnO-t.js";import"./Dot-DDYCZ56V.js";import"./RegisterGraphicalItemId-7hQHg__D.js";import"./ErrorBarContext-Cka3vvlo.js";import"./GraphicalItemClipPath-BzNC4mI6.js";import"./SetGraphicalItem-Do9Jrivq.js";import"./useAnimationId-BDQqVS92.js";import"./getRadiusAndStrokeWidthFromDot-CGUx355X.js";import"./ActiveShapeUtils-DUqlRNnh.js";import"./isPlainObject-DAbDjRrv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dy9rRH3J.js";import"./Trapezoid-Np68xL8c.js";import"./Sector-DgiCwcle.js";import"./Curve-BSIyWE0E.js";import"./Cross-BdKM70vd.js";import"./index-B-NDJh2x.js";import"./ChartSizeDimensions-B0YZDNOc.js";import"./OffsetShower-Pl0lZwIc.js";import"./PlotAreaShower-CT6U6KfM.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};

import{r as n,e as t}from"./iframe-D44FkRcR.js";import{L as p}from"./LineChart-C-Ica-4g.js";import{R as s}from"./arrayEqualityCheck-CpHRyEoZ.js";import{C as c}from"./CartesianGrid-ZMyhlhKd.js";import{X as l}from"./XAxis-Bc7aqN4V.js";import{Y as d}from"./YAxis-B19HmFuc.js";import{L as y}from"./Legend-Cq3fip5T.js";import{L as h}from"./Line-CGS71pfF.js";import{T as u}from"./Tooltip-BAdN8Rfb.js";import{R as g}from"./RechartsHookInspector-BUut-YKB.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZxiJS72.js";import"./hooks-yX9SOuhB.js";import"./axisSelectors-DS2aNONq.js";import"./zIndexSlice-By2Q2sEz.js";import"./resolveDefaultProps-C9MxTna8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-MGBUmmtK.js";import"./chartDataContext-DR37Z2O8.js";import"./CategoricalChart-Dy6guSzL.js";import"./CartesianAxis-CQLQyo5l.js";import"./Layer-Cw02mn90.js";import"./Text-m6BVE9y3.js";import"./DOMUtils-DdnL5-6j.js";import"./Label-BDKklye7.js";import"./ZIndexLayer-6GEHbSGN.js";import"./types-BaOyAkY9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D2aKUPGo.js";import"./Curve-gEApNnTT.js";import"./useElementOffset-BhWAtdqB.js";import"./iteratee-CgLyGfPs.js";import"./ReactUtils-Dk5cr1D8.js";import"./ActivePoints-ClEt73cA.js";import"./Dot-CxuisgTC.js";import"./RegisterGraphicalItemId-Cmin2ECj.js";import"./ErrorBarContext-WrFhm3tP.js";import"./GraphicalItemClipPath-CVVuYceY.js";import"./SetGraphicalItem-DNNp47_y.js";import"./useAnimationId-B6KoK7rR.js";import"./getRadiusAndStrokeWidthFromDot-c3x0UpIy.js";import"./ActiveShapeUtils-CvDVndyY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuTYB5sP.js";import"./Trapezoid-B3gZXa3J.js";import"./Sector-CGH7Ttue.js";import"./Cross-b_theP-x.js";import"./index-D7ezxrhm.js";import"./ChartSizeDimensions-B61qSqob.js";import"./OffsetShower-BfGtxzWE.js";import"./PlotAreaShower-DA_KxbUr.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-Byw-Ecda.js";import{L as p}from"./LineChart-Bj3hMqsa.js";import{R as s}from"./arrayEqualityCheck-DJZ_H245.js";import{C as c}from"./CartesianGrid-Ulf2y6c_.js";import{X as l}from"./XAxis-DKuVnBhX.js";import{Y as d}from"./YAxis-CD7xJu8W.js";import{L as y}from"./Legend-BSRpbxl-.js";import{L as h}from"./Line-DgOW2saj.js";import{T as u}from"./Tooltip-BRMvzK7Q.js";import{R as g}from"./RechartsHookInspector-DU_Xges7.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./zIndexSlice-BBcvffed.js";import"./resolveDefaultProps-DghbljUc.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./CartesianAxis-C435YXcQ.js";import"./Layer-BCc3Ql-7.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./Label-BqnP7yRk.js";import"./ZIndexLayer-CyfG8XIl.js";import"./types-C-BvOMCj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BEvrU7lm.js";import"./Curve-Dgc9kazX.js";import"./useElementOffset-74fnwz2l.js";import"./iteratee-CQ84vpct.js";import"./ReactUtils-Cjy_uT2w.js";import"./ActivePoints-CxQ9IJdy.js";import"./Dot-DJVqn8HA.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./ErrorBarContext-Cl5G60_X.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./useAnimationId-QmVedw8X.js";import"./getRadiusAndStrokeWidthFromDot-1lozLBiZ.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cx7cLZFF.js";import"./Trapezoid-CmsPiWji.js";import"./Sector-DvNfR6cX.js";import"./Cross-rgfJvv30.js";import"./index-Bq4G09kn.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

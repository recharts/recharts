import{r as n,e as t}from"./iframe-EDkYpgFH.js";import{L as p}from"./LineChart-5wYMI8QQ.js";import{R as s}from"./arrayEqualityCheck-3I37HEG_.js";import{C as c}from"./CartesianGrid-Z31fTq1Q.js";import{X as l}from"./XAxis-DF72n0MP.js";import{Y as d}from"./YAxis-vzHqkzuu.js";import{L as y}from"./Legend--q2CyHQz.js";import{L as h}from"./Line-DRhsJ9p_.js";import{T as u}from"./Tooltip-D_lgDd-m.js";import{R as g}from"./RechartsHookInspector-CH0J_Gc_.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3m4uKer.js";import"./index-g2grDsWN.js";import"./immer-OU7Y0bVq.js";import"./hooks-9dyjFB2O.js";import"./axisSelectors-DuoLroUy.js";import"./d3-scale-Da0yFaRI.js";import"./zIndexSlice-CEaJbv0z.js";import"./renderedTicksSlice-tL_S_nSy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dj1xYMR5.js";import"./chartDataContext-D4KzV5Tt.js";import"./CategoricalChart-AyWzdtKe.js";import"./resolveDefaultProps-CektsYXT.js";import"./CartesianAxis-DB9dh0sL.js";import"./Layer-B_dQgSH5.js";import"./Text-_RLDIMGf.js";import"./DOMUtils-BmamCvsY.js";import"./Label-tpHL658P.js";import"./ZIndexLayer-CFOztK9t.js";import"./types-BIaRI4-l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Ba1mC9Fj.js";import"./symbol-DtUDp9_D.js";import"./step-CNqQtAg0.js";import"./useElementOffset-DyJYEhVf.js";import"./uniqBy-DMvZqfZa.js";import"./iteratee-kS0Ltc5a.js";import"./ReactUtils-pbZTnHEY.js";import"./ActivePoints-qcJtAAIs.js";import"./Dot-Ci-MCQ4Y.js";import"./RegisterGraphicalItemId-BmJCRqzh.js";import"./ErrorBarContext-BSOP-KRw.js";import"./GraphicalItemClipPath-LiQwpHfd.js";import"./SetGraphicalItem-DkwojxeX.js";import"./useAnimationId-BbddIEaK.js";import"./getRadiusAndStrokeWidthFromDot-DMXaZtjW.js";import"./ActiveShapeUtils-DdBu78Ro.js";import"./isPlainObject-MAh5iL27.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUAMyMnQ.js";import"./Trapezoid-Ce9uM3y7.js";import"./Sector-DxWTUroZ.js";import"./Curve-CaKiPo4V.js";import"./Cross-C_rZO8Td.js";import"./index-VaoQyGQZ.js";import"./ChartSizeDimensions-zH_0qASi.js";import"./OffsetShower-C_V4W_fW.js";import"./PlotAreaShower-DtLh3AKd.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

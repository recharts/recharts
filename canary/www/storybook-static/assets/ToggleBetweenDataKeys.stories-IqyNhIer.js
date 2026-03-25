import{r as n,e as t}from"./iframe-DzhPvN_j.js";import{L as p}from"./LineChart-CsmifEP3.js";import{R as s}from"./arrayEqualityCheck-BbmOyD_G.js";import{C as c}from"./CartesianGrid-CB07ijPG.js";import{X as l}from"./XAxis-DZpORi3T.js";import{Y as d}from"./YAxis-CJCzR98R.js";import{L as y}from"./Legend-uAOOqC4N.js";import{L as h}from"./Line-BC7PGKux.js";import{T as u}from"./Tooltip-CkK3FoC6.js";import{R as g}from"./RechartsHookInspector-DDr9RNlY.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRkniHVj.js";import"./index-Cw6ekdu2.js";import"./immer-DMYiXdM8.js";import"./hooks-Cd6CKD6W.js";import"./axisSelectors-OzG46XbO.js";import"./d3-scale-Cb1pH4Jp.js";import"./zIndexSlice-5RAhS0gW.js";import"./renderedTicksSlice-DXS4yQsn.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-poiqq0Wp.js";import"./chartDataContext-CN9Cvh4X.js";import"./CategoricalChart-CBxLoiN8.js";import"./resolveDefaultProps-D5C472LP.js";import"./CartesianAxis-CcEKfal4.js";import"./Layer-Ckqyyj_I.js";import"./Text-BqZmDUPE.js";import"./DOMUtils-vP3gppvy.js";import"./Label-CHDEQY5T.js";import"./ZIndexLayer-9g5l0O9I.js";import"./types-9iuX30XL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D_1r08sf.js";import"./symbol-pZVEj6PC.js";import"./step-DPzB36jn.js";import"./useElementOffset-FCvPp8XD.js";import"./uniqBy-Cr1l51kb.js";import"./iteratee-BZcK010Q.js";import"./ReactUtils-B8wQ0lPM.js";import"./ActivePoints-BQliTLi8.js";import"./Dot-CmLP1K6L.js";import"./RegisterGraphicalItemId-Cy7sjBKU.js";import"./ErrorBarContext-BWKSo9NZ.js";import"./GraphicalItemClipPath-Ca8NlFcX.js";import"./SetGraphicalItem-mQIOZYtb.js";import"./useAnimationId-Bm5L9VBy.js";import"./getRadiusAndStrokeWidthFromDot-Dzez4mct.js";import"./ActiveShapeUtils-BGxztl8t.js";import"./isPlainObject-D9nlrq_x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cFF1lzvY.js";import"./Trapezoid-CWsYalEn.js";import"./Sector-CP3wITBk.js";import"./Curve-Bg7OAFiB.js";import"./Cross-DkzHhjx5.js";import"./index-BwszIH2h.js";import"./ChartSizeDimensions-CZzZunh8.js";import"./OffsetShower-CS-dGikj.js";import"./PlotAreaShower-Ch9v7dMV.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

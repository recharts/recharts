import{r as n,e as t}from"./iframe-DbhhbAlo.js";import{L as p}from"./LineChart-9TYNzxzE.js";import{R as s}from"./arrayEqualityCheck-Lx_TMjyu.js";import{C as c}from"./CartesianGrid-S4-Vu-NK.js";import{X as l}from"./XAxis-DjIfDDta.js";import{Y as d}from"./YAxis-Dj1421bZ.js";import{L as y}from"./Legend-DEzUpdX0.js";import{L as h}from"./Line-DU9DHTcH.js";import{T as u}from"./Tooltip-DIj2Xmdl.js";import{R as g}from"./RechartsHookInspector-BSvxhUzi.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BqWeXDcR.js";import"./index-bP3uccvR.js";import"./immer-CXubSzbd.js";import"./hooks-rkaChWzj.js";import"./axisSelectors-CG6dK3nK.js";import"./d3-scale-CD7WeVUs.js";import"./zIndexSlice-tEJEPfMp.js";import"./renderedTicksSlice-Br_sCV6u.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-2XwRf_I_.js";import"./chartDataContext-BjOOHIMo.js";import"./CategoricalChart-lS70JkQC.js";import"./resolveDefaultProps-DqjP-SJZ.js";import"./CartesianAxis-DOxCqOnp.js";import"./Layer-BLRPCKMQ.js";import"./Text-9tx7qVgJ.js";import"./DOMUtils-CxI3YG9P.js";import"./Label-BD-AsMTb.js";import"./ZIndexLayer-BXjMifaG.js";import"./types-DCl9eSsv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C4vV8xjD.js";import"./symbol-PPpy3bVe.js";import"./step-B3CTsvyi.js";import"./useElementOffset-CbJZLsqP.js";import"./uniqBy-U5UIwqKu.js";import"./iteratee-CrbAK_cu.js";import"./ReactUtils-DlRYbFyy.js";import"./ActivePoints-DtxAI_Pv.js";import"./Dot-CgUaw4tF.js";import"./RegisterGraphicalItemId-CiV8HnYd.js";import"./ErrorBarContext-8lDTik7_.js";import"./GraphicalItemClipPath-Bl8bx72_.js";import"./SetGraphicalItem-CKtT4vYj.js";import"./useAnimationId-CLYn9ysU.js";import"./getRadiusAndStrokeWidthFromDot-CIAhrogS.js";import"./ActiveShapeUtils-BiQ2ESb_.js";import"./isPlainObject-D743ttwB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIGKSdSo.js";import"./Trapezoid-okY0yamA.js";import"./Sector-C3VJLfsw.js";import"./Curve-Dxoto--N.js";import"./Cross-a_jLjoDo.js";import"./index-BEJpunbk.js";import"./ChartSizeDimensions-BHCR1SDL.js";import"./OffsetShower-D8NGzvq1.js";import"./PlotAreaShower-CmMEUx8D.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

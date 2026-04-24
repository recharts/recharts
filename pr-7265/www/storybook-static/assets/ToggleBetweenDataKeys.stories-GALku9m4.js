import{r as n,e as t}from"./iframe-jbS-E__g.js";import{L as p}from"./LineChart-Rue16AiH.js";import{R as s}from"./arrayEqualityCheck-Bc6HaNgk.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6FefVEI.js";import{X as d}from"./XAxis-D2ruk6hB.js";import{Y as y}from"./YAxis-pXEMWudQ.js";import{L as h}from"./Legend-arlg7icL.js";import{L as u}from"./Line-Etl43fu5.js";import{T as g}from"./Tooltip-OajYP7Ju.js";import{R as K}from"./RechartsHookInspector-BHyXn1pK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./immer-1JIHG1sP.js";import"./hooks-BJbsnZ8W.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./CartesianAxis-DVvLgkRy.js";import"./Layer-D3-cQotP.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./Label-CqNEB3cA.js";import"./ZIndexLayer-C0UmvjN1.js";import"./types-KpzOghRu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";import"./step-CRkklqfM.js";import"./useElementOffset-CiRQlEhg.js";import"./uniqBy-CPO7hTdl.js";import"./iteratee-BUzB0L-p.js";import"./ReactUtils-CmIIaVE7.js";import"./ActivePoints-BAygIn8R.js";import"./Dot-B5SXOt0E.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./ErrorBarContext-BTnDLWKc.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./useAnimationId-Dl-7lH7S.js";import"./getRadiusAndStrokeWidthFromDot-BQh-5tcv.js";import"./ActiveShapeUtils-BRRS2IIP.js";import"./isPlainObject-CVxhLbCo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CttT3kPR.js";import"./Trapezoid-BNwixCzS.js";import"./Sector-C7-FdoJb.js";import"./Curve-BHonL5AG.js";import"./Cross-Bba4Q0Eg.js";import"./index-BLWb42Ez.js";import"./ChartSizeDimensions-BpE-Gxiy.js";import"./OffsetShower-BXbfoimB.js";import"./PlotAreaShower-CIgqmqyc.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

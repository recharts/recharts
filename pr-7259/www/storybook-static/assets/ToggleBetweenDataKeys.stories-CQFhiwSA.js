import{r as n,e as t}from"./iframe-DV9Ev_ie.js";import{L as p}from"./LineChart-CWANgsZj.js";import{R as s}from"./arrayEqualityCheck-DZA7w_Bp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BvxCy_xL.js";import{X as d}from"./XAxis-D2587yBO.js";import{Y as y}from"./YAxis-Bm2CKIBG.js";import{L as h}from"./Legend-bd7wrWHk.js";import{L as u}from"./Line-CHEmmSQ1.js";import{T as g}from"./Tooltip-B_wHQcSU.js";import{R as K}from"./RechartsHookInspector-lqIBTgi7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DhKJ-pN_.js";import"./index-Bky92Y6v.js";import"./immer-BixWiXhD.js";import"./hooks-DHdaviyJ.js";import"./axisSelectors-B_EYpjD9.js";import"./d3-scale-B-Q90L68.js";import"./zIndexSlice-BRPsmEL1.js";import"./renderedTicksSlice-DCke5O88.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cbu_0e1L.js";import"./chartDataContext-DSMYXZ4e.js";import"./CategoricalChart-DJtN3jt_.js";import"./resolveDefaultProps-Df82JNH7.js";import"./CartesianAxis-DWCZU6Tq.js";import"./Layer-BqOaf8xV.js";import"./Text--RFKRppg.js";import"./DOMUtils-CiIcfYdd.js";import"./Label--ztUVZ3i.js";import"./ZIndexLayer-C8euaCum.js";import"./types-8qlrq-tq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-H35j_AL3.js";import"./symbol-BxNtN3Tt.js";import"./step-Ct5f--oN.js";import"./useElementOffset-DH0zqrwg.js";import"./uniqBy-DQ9VqyX-.js";import"./iteratee-B0cPffwU.js";import"./ReactUtils-DkzvKT6G.js";import"./ActivePoints-BBkQSQpw.js";import"./Dot-CeMR27_E.js";import"./RegisterGraphicalItemId-fV7oEbJx.js";import"./ErrorBarContext-KDIj2oXC.js";import"./GraphicalItemClipPath-DvLqBiqP.js";import"./SetGraphicalItem-DIvDoWjl.js";import"./useAnimationId-CtSlzYdH.js";import"./getRadiusAndStrokeWidthFromDot-CJZz_FDP.js";import"./ActiveShapeUtils-Duc_m_vE.js";import"./isPlainObject-B3OPGy8K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FILpJ6On.js";import"./Trapezoid-sNlfsjwh.js";import"./Sector-C5qUq4cG.js";import"./Curve-BVz3ddlm.js";import"./Cross-CGoJbBzY.js";import"./index-ECRT-WFn.js";import"./ChartSizeDimensions-CdNN_o6b.js";import"./OffsetShower-BssOKB-O.js";import"./PlotAreaShower-BZvFi-F4.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

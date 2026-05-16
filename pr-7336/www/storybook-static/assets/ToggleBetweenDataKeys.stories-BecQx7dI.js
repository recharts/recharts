import{u as n,e as t}from"./iframe-pel8cYCN.js";import{L as p}from"./LineChart-Bv9PvkWa.js";import{g as s}from"./arrayEqualityCheck-C_lOmCrI.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-D4yy0Jh0.js";import{X as d}from"./XAxis-B599S9Vu.js";import{Y as u}from"./YAxis-BDsVqKg4.js";import{L as y}from"./Legend-BLh_lLO9.js";import{L as h}from"./Line-BwrWq8g2.js";import{T as g}from"./Tooltip-B_nY5tDG.js";import{R as K}from"./RechartsHookInspector-Dg66sE1s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSDFgvQ-.js";import"./index-BtBEICN3.js";import"./immer-BJQdivTr.js";import"./hooks-D-fRP47Y.js";import"./axisSelectors-Bb4Kms9I.js";import"./d3-scale-CX31JByl.js";import"./zIndexSlice-ymPJrgdD.js";import"./renderedTicksSlice-DOQ_XGYo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BlzYSjsM.js";import"./chartDataContext-Edg6lPwK.js";import"./CategoricalChart-B61I782z.js";import"./resolveDefaultProps-YrDhwYNk.js";import"./CartesianAxis-CHS0WdpC.js";import"./Layer-CNeytfD9.js";import"./Text-CYIA95SW.js";import"./DOMUtils-ctqdh0oB.js";import"./Label-LVsFLhHv.js";import"./ZIndexLayer-BvzXDAda.js";import"./types-Xh1xXsKt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DxzOQiX8.js";import"./symbol-D7iNy2hw.js";import"./step-DDfuaYno.js";import"./useElementOffset-DnweuCUb.js";import"./uniqBy-VTopnPt7.js";import"./iteratee-B40Sj4cN.js";import"./ReactUtils-MkRs3AIp.js";import"./ActivePoints-DvhKq6eb.js";import"./Dot-CC60-gqd.js";import"./RegisterGraphicalItemId-DwjBwfbK.js";import"./ErrorBarContext-DJfRhZLU.js";import"./GraphicalItemClipPath-BGEnX0Xy.js";import"./SetGraphicalItem-fB0iJna-.js";import"./useAnimationId-v_N6QXXH.js";import"./getRadiusAndStrokeWidthFromDot-Co4GzyJq.js";import"./ActiveShapeUtils-DNJLSjTo.js";import"./isPlainObject-CZCkl5XT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwHhsTLl.js";import"./Trapezoid-B96cM-TC.js";import"./Sector-CNApQaS1.js";import"./Curve-DUNlDEm2.js";import"./Cross-C9ZHuiSZ.js";import"./index-Db97PsMK.js";import"./ChartSizeDimensions-KFbSwMPV.js";import"./OffsetShower-D-gSoeld.js";import"./PlotAreaShower-BJPLXysn.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

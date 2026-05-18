import{u as n,e as t}from"./iframe-CW44RDCc.js";import{L as p}from"./LineChart-B0PpJA2W.js";import{g as s}from"./arrayEqualityCheck-Ua4xjAL-.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-xF5Cq0CK.js";import{X as d}from"./XAxis-BtxpyVu0.js";import{Y as u}from"./YAxis-DkqaPkGp.js";import{L as y}from"./Legend-e-pfRx1K.js";import{L as h}from"./Line-Cq678OID.js";import{T as g}from"./Tooltip-CQcTPDPp.js";import{R as K}from"./RechartsHookInspector-CE02yOZG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3a2SuVp.js";import"./index-q0MlqJm9.js";import"./immer-XdRVX9he.js";import"./hooks-PNvgBz41.js";import"./axisSelectors-CKeyOf07.js";import"./d3-scale-BVNpQg4a.js";import"./zIndexSlice-B0Fs0Bds.js";import"./renderedTicksSlice-m2ISnyyr.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CTskZI97.js";import"./chartDataContext-BIpjCG9Z.js";import"./CategoricalChart-BSsRNKhV.js";import"./resolveDefaultProps-DCGYFD7i.js";import"./CartesianAxis-BktLkXzl.js";import"./Layer-8Qf7pjam.js";import"./Text-B0bhoYGy.js";import"./DOMUtils-DcGI1ooU.js";import"./Label-CB32eiK0.js";import"./ZIndexLayer-DOf301bL.js";import"./types-B4uBrmm7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DPIxRI8N.js";import"./symbol-DbqMCeb2.js";import"./step-_iQ5Op8T.js";import"./useElementOffset-o3Roob9z.js";import"./uniqBy-p3yfjzxe.js";import"./iteratee-C366JI6E.js";import"./ReactUtils-D_YL06Q3.js";import"./ActivePoints-CzNqaTiV.js";import"./Dot-CJ1Gpj_u.js";import"./RegisterGraphicalItemId-C2nT64rB.js";import"./ErrorBarContext-CTE9_ggH.js";import"./GraphicalItemClipPath-2q24bU0-.js";import"./SetGraphicalItem--ChXDLvH.js";import"./useAnimationId-DAlITmll.js";import"./getRadiusAndStrokeWidthFromDot-BIUpFF8r.js";import"./ActiveShapeUtils-Sw9eCZBU.js";import"./isPlainObject-B7SWhIBJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Chq6EJDX.js";import"./Trapezoid-CMZodTaL.js";import"./Sector-CwAajl9S.js";import"./Curve-OVW22O2P.js";import"./Cross-DzegyrDh.js";import"./index-at3I6h66.js";import"./ChartSizeDimensions-O4pbDmZW.js";import"./OffsetShower-CmBjVyZD.js";import"./PlotAreaShower-9R2kP3z1.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

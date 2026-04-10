import{r as n,e as t}from"./iframe-DOn8u-oa.js";import{L as p}from"./LineChart-Co12xYy2.js";import{R as s}from"./arrayEqualityCheck-DYxn46f5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cc9CWBSh.js";import{X as d}from"./XAxis-CWQtfYm8.js";import{Y as y}from"./YAxis-B0Wqs0qU.js";import{L as h}from"./Legend-qa7kbH3a.js";import{L as u}from"./Line-Cuvi7l-9.js";import{T as g}from"./Tooltip-DCuj55Fj.js";import{R as K}from"./RechartsHookInspector-_EcWBN5R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Beeq_QLd.js";import"./index-TviLRVzQ.js";import"./immer-Bn8Wu2FH.js";import"./hooks-DyTxkSEO.js";import"./axisSelectors-RYA-f3bs.js";import"./d3-scale-CBg01hSj.js";import"./zIndexSlice-B2AKnG3y.js";import"./renderedTicksSlice-DoBNzF3G.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BOVmLEcH.js";import"./chartDataContext-dTDP7YNY.js";import"./CategoricalChart-Dpd8P6f3.js";import"./resolveDefaultProps-Dy27g2E0.js";import"./CartesianAxis-BlpnuS68.js";import"./Layer-05H6paB_.js";import"./Text-BwE_mk8T.js";import"./DOMUtils-CpIY6Kx5.js";import"./Label-BcScPf1_.js";import"./ZIndexLayer-y8FotD-G.js";import"./types-CESDZ_aX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-nNNN-42G.js";import"./symbol-DVcflbh7.js";import"./step-Cq5Zx23d.js";import"./useElementOffset-dL6NMTXG.js";import"./uniqBy-7x81275m.js";import"./iteratee-4veUQO7B.js";import"./ReactUtils-PhcFEJ80.js";import"./ActivePoints-COmAN0pa.js";import"./Dot-CRgfPISn.js";import"./RegisterGraphicalItemId-DTK05cjv.js";import"./ErrorBarContext-CXzlZi78.js";import"./GraphicalItemClipPath-BB5-oLdp.js";import"./SetGraphicalItem-BPar8aEt.js";import"./useAnimationId-DEVWAil3.js";import"./getRadiusAndStrokeWidthFromDot-Ep1HaBq8.js";import"./ActiveShapeUtils-heWrq4Qu.js";import"./isPlainObject-c8PgY5v_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DPJuAdjj.js";import"./Trapezoid-Bqkv6n3S.js";import"./Sector-BDm--b9P.js";import"./Curve-woVlpOcO.js";import"./Cross-BPpZB_TY.js";import"./index-DQsTRZku.js";import"./ChartSizeDimensions-C0-3hV0F.js";import"./OffsetShower-CB8ZCxWG.js";import"./PlotAreaShower-B8Dg5b0X.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

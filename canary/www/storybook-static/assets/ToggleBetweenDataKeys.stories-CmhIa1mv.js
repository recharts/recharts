import{u as n,e as t}from"./iframe-DJXOgax2.js";import{L as p}from"./LineChart-Bk6-07UJ.js";import{g as s}from"./arrayEqualityCheck-k7PS2xak.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-BAYEYSZr.js";import{X as d}from"./XAxis-9kxG52aU.js";import{Y as u}from"./YAxis-DRv5Ieqa.js";import{L as y}from"./Legend-DDuYu27N.js";import{L as h}from"./Line-DkveqOGp.js";import{T as g}from"./Tooltip-D8qot_hH.js";import{R as K}from"./RechartsHookInspector-s82vtdQF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaSgqIB_.js";import"./index-BNAJMwXV.js";import"./immer-2a_xTrdV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./zIndexSlice-B--1gOPM.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./CartesianAxis-BuS9D4Ek.js";import"./Layer-PAWXt2PX.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./Label-C8y2_6Vy.js";import"./ZIndexLayer-DVdyi4xb.js";import"./types-CX2SK57G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BMOYVBcW.js";import"./symbol-DR8oIFTo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BVFe881g.js";import"./uniqBy-CRMN3rmd.js";import"./iteratee-B_zfWqem.js";import"./Curve-BPyFb2hT.js";import"./step-Bwlnh61x.js";import"./ReactUtils-DyBcDzzn.js";import"./ActivePoints-kdx1y4B7.js";import"./Dot-BmjogDci.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./ErrorBarContext-Cq-5bVpD.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./useAnimationId-B1Sa6L7Z.js";import"./getRadiusAndStrokeWidthFromDot-CioYRZbs.js";import"./ActiveShapeUtils-TINQfrs9.js";import"./Cross-CH1kJFsZ.js";import"./Rectangle-oqaSBBRm.js";import"./Sector-C4IUCLNM.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};

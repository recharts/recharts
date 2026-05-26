import{u as n,e as t}from"./iframe-C389UKKQ.js";import{L as p}from"./LineChart-D8QJGyP4.js";import{g as s}from"./arrayEqualityCheck-Cu2SMg-k.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-CruiBcA5.js";import{X as d}from"./XAxis-CkTpgH_L.js";import{Y as u}from"./YAxis-DdPwtx1e.js";import{L as y}from"./Legend-CapyIZ6D.js";import{L as h}from"./Line-CTNqbcwQ.js";import{T as g}from"./Tooltip-TOls3Rtg.js";import{R as K}from"./RechartsHookInspector-CxbWCB6n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./immer-4pDlWF5t.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./zIndexSlice-DHdgWlAr.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./CartesianAxis-BfjJ9MKk.js";import"./Layer-BRJkvvA0.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./Label-BsU6QA-m.js";import"./ZIndexLayer-OX2yCAej.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DhEDlNLq.js";import"./symbol-B93tdxSz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6UXXDY4R.js";import"./uniqBy-CsNwgfvM.js";import"./iteratee-DHpBDbpq.js";import"./Curve-DBcCTjlE.js";import"./step-DbNUII7N.js";import"./ReactUtils-B3LU80BF.js";import"./ActivePoints-CgiRv0IS.js";import"./Dot-BzYUQbpy.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./useAnimationId-CxUXlcSZ.js";import"./getRadiusAndStrokeWidthFromDot-DD7Lnopo.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./Cross-C6FDWmVX.js";import"./Rectangle-Bdl90qEj.js";import"./Sector-DFxGAsB6.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

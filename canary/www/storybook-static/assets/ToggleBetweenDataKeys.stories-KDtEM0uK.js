import{u as n,e as t}from"./iframe-UdgfSgbV.js";import{L as p}from"./LineChart-CxMRlJlu.js";import{g as s}from"./arrayEqualityCheck-CicOt-ds.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-B6fmOyZU.js";import{X as d}from"./XAxis-B_T7-hQi.js";import{Y as u}from"./YAxis-CrK0nuKU.js";import{L as y}from"./Legend-DVK1ZQXW.js";import{L as h}from"./Line-E0LiBgep.js";import{T as g}from"./Tooltip-hJXcGorC.js";import{R as K}from"./RechartsHookInspector-CthRFnLf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-niwZzApw.js";import"./index-DugrSXtg.js";import"./immer-D2PrSKKY.js";import"./hooks-YBktsx8t.js";import"./axisSelectors-DMRIE0Wb.js";import"./d3-scale-UW9tFBgt.js";import"./zIndexSlice-BZq2EGul.js";import"./renderedTicksSlice-l1jYlYN2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cvpty9Rq.js";import"./chartDataContext-B4DzVMPi.js";import"./CategoricalChart-BUvemvV9.js";import"./resolveDefaultProps-DUahjl-e.js";import"./CartesianAxis-DTJQvBIX.js";import"./Layer-DfoJX-WM.js";import"./Text-O_rmI639.js";import"./DOMUtils-CEz4_y1m.js";import"./Label-GqUuXqgi.js";import"./ZIndexLayer--K-LA7QR.js";import"./types-BRerldyT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BptSPL3U.js";import"./symbol-BAGO6sGF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXFO69aB.js";import"./uniqBy-BduRBjZr.js";import"./iteratee-uG1rhi8b.js";import"./Curve-Wo73DpX8.js";import"./step-CLnk6C4J.js";import"./ReactUtils-CpmrlivC.js";import"./ActivePoints-Cj3Tq79L.js";import"./Dot-CQmWQFNO.js";import"./RegisterGraphicalItemId-BLtUrA1U.js";import"./ErrorBarContext-BYjQvvS7.js";import"./GraphicalItemClipPath-qHH5OIPj.js";import"./SetGraphicalItem-sqFy1wuC.js";import"./useAnimationId-_H_C4I0e.js";import"./getRadiusAndStrokeWidthFromDot-Db_XWe9X.js";import"./ActiveShapeUtils-fzwtdy4J.js";import"./Cross-DcHK8-yQ.js";import"./Rectangle-CVc3ss1Y.js";import"./Sector-D4_19HZY.js";import"./index-D9bwHzxQ.js";import"./ChartSizeDimensions-ql6F2UUA.js";import"./OffsetShower-DEkhdigp.js";import"./PlotAreaShower-Coz6Wn-z.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

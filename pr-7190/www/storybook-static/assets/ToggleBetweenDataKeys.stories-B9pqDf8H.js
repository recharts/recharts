import{r as n,e as t}from"./iframe-_tOEOrTB.js";import{L as p}from"./LineChart-CzYzsJ6j.js";import{R as s}from"./arrayEqualityCheck-B2ATAN_K.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-x0d5UvjV.js";import{X as d}from"./XAxis-B99ydacs.js";import{Y as y}from"./YAxis-MKkirg66.js";import{L as h}from"./Legend-DA3DQmc3.js";import{L as u}from"./Line-CSH30hMe.js";import{T as g}from"./Tooltip-FgVwiQpp.js";import{R as K}from"./RechartsHookInspector-BgNu5TE0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B4fVc8pz.js";import"./index-C8IxNL1D.js";import"./immer-Ctu7T9Ma.js";import"./hooks-Dxc4ftFI.js";import"./axisSelectors-C0eqwsIc.js";import"./d3-scale-BYOnugJI.js";import"./zIndexSlice-CWqmREsN.js";import"./renderedTicksSlice-C1VyvUnW.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BdgakOV8.js";import"./chartDataContext-Cj00HDaN.js";import"./CategoricalChart-uPJQTpzY.js";import"./resolveDefaultProps-QC90EbHK.js";import"./CartesianAxis-DXWYS4eF.js";import"./Layer-DKn_t_OY.js";import"./Text-CLhNqgF1.js";import"./DOMUtils-Dp_xH288.js";import"./Label-DY2hHCUB.js";import"./ZIndexLayer-CgC8xk-g.js";import"./types-0739cztl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CXub2t2y.js";import"./symbol-BgrsGtcm.js";import"./step-rG5mhkUn.js";import"./useElementOffset-BPo9O-tw.js";import"./uniqBy-P3VkkSyy.js";import"./iteratee-B2hoZeMP.js";import"./ReactUtils-D3WhBtDM.js";import"./ActivePoints-UW1fO4V4.js";import"./Dot-MLQan19h.js";import"./RegisterGraphicalItemId-Dse9b0HT.js";import"./ErrorBarContext-DwAJtrMz.js";import"./GraphicalItemClipPath-DkwW047q.js";import"./SetGraphicalItem-FaJmXbmv.js";import"./useAnimationId-x2-6Yyy0.js";import"./getRadiusAndStrokeWidthFromDot-DShwyyA4.js";import"./ActiveShapeUtils-XLBlJtUm.js";import"./isPlainObject-jyHTfG6K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-hCYFffPl.js";import"./Trapezoid-CqizPLb6.js";import"./Sector-Cruz6N8W.js";import"./Curve-BgKgFd6U.js";import"./Cross-CZx91a-X.js";import"./index-BRj_naI3.js";import"./ChartSizeDimensions-DuqOm4SH.js";import"./OffsetShower-BuTy_q5n.js";import"./PlotAreaShower-DHEJGydW.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-KDaejyXN.js";import{L as p}from"./LineChart-LIE9GsFd.js";import{R as s}from"./arrayEqualityCheck-Dl9si1nG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BFk4wEkm.js";import{X as d}from"./XAxis-CUWzsXQO.js";import{Y as y}from"./YAxis-CqYxMeQG.js";import{L as h}from"./Legend-DoolAvDu.js";import{L as u}from"./Line-D4d4pIVB.js";import{T as g}from"./Tooltip-CJ8fiXaY.js";import{R as K}from"./RechartsHookInspector-BNR7Zm8b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4JhW72j.js";import"./index-DSI_5Wf4.js";import"./immer-CeGNtgFu.js";import"./hooks-CwyWi44i.js";import"./axisSelectors-BceHH7kX.js";import"./d3-scale-CG0ZS8xo.js";import"./zIndexSlice-rJuXE5Mc.js";import"./renderedTicksSlice-B9nrJdqK.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCFhyuSh.js";import"./chartDataContext-B8zHImkQ.js";import"./CategoricalChart-BdhxEmbd.js";import"./resolveDefaultProps-BkMgUNPT.js";import"./CartesianAxis-BiIKu8kc.js";import"./Layer-SuuPoHJx.js";import"./Text-QAqYT_st.js";import"./DOMUtils-nQzBqLwC.js";import"./Label-qsNuh3C9.js";import"./ZIndexLayer-ByxBNcmF.js";import"./types-D57AIWPR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DZnm1ivu.js";import"./symbol-BVVD6ru2.js";import"./step-DG8IXFxN.js";import"./useElementOffset-BqSaCjyk.js";import"./uniqBy-C-hwanSq.js";import"./iteratee-w_ArUq_v.js";import"./ReactUtils-Cz14zwuP.js";import"./ActivePoints-9qhwqgPR.js";import"./Dot-BonfgY2V.js";import"./RegisterGraphicalItemId-Dm0pQXAu.js";import"./ErrorBarContext-BOfeTKVj.js";import"./GraphicalItemClipPath-D6jTsWti.js";import"./SetGraphicalItem-F9UKQ2Ti.js";import"./useAnimationId-BgX8Z8_i.js";import"./getRadiusAndStrokeWidthFromDot-BSb3e5WQ.js";import"./ActiveShapeUtils-CHydaFDW.js";import"./isPlainObject-DwPMRYDf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7hb1YKX.js";import"./Trapezoid-DebRFFpI.js";import"./Sector-Dm_k8cyb.js";import"./Curve-CK8qujc-.js";import"./Cross-X10m6apn.js";import"./index-BtJXyiTG.js";import"./ChartSizeDimensions-DVpdAMro.js";import"./OffsetShower-CxuZTe0D.js";import"./PlotAreaShower-N-DfZF_A.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-6KIzFwNo.js";import{L as p}from"./LineChart-BVZ-QyFc.js";import{R as s}from"./arrayEqualityCheck-CGqQmqAs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DOgFM7CW.js";import{X as d}from"./XAxis-D1NIlvkv.js";import{Y as y}from"./YAxis-BQuCUfzU.js";import{L as h}from"./Legend-BxMxi4eG.js";import{L as u}from"./Line-BsmGvey2.js";import{T as g}from"./Tooltip-CSrMRVS2.js";import{R as K}from"./RechartsHookInspector-DHKbTB6e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BS52G--d.js";import"./index-CsYEUaZR.js";import"./immer-ql4DR2MT.js";import"./hooks-DBLrG0Zs.js";import"./axisSelectors-IZ0_1Z0f.js";import"./d3-scale-CbScBmFc.js";import"./zIndexSlice-NyQa_NDp.js";import"./renderedTicksSlice-Bre3xjAe.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BlXPw11X.js";import"./chartDataContext-BRQTC3wB.js";import"./CategoricalChart-C7SCseXA.js";import"./resolveDefaultProps-CCemV21k.js";import"./CartesianAxis-ByaVWi8_.js";import"./Layer-qh1dFQeJ.js";import"./Text-EuDfZQJr.js";import"./DOMUtils-CF_DubJK.js";import"./Label-LIb90dQ2.js";import"./ZIndexLayer-oU3hoYkX.js";import"./types-Bw6Zsg7c.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-MySoeztG.js";import"./symbol-9PvFUqwr.js";import"./step-CIIfuNim.js";import"./useElementOffset-BgX62E1v.js";import"./uniqBy-DVX4SdIc.js";import"./iteratee-BVIhKU_O.js";import"./ReactUtils-6iymp8WO.js";import"./ActivePoints-DJj1zq0e.js";import"./Dot-CqmXJMhg.js";import"./RegisterGraphicalItemId-BJjNu8aV.js";import"./ErrorBarContext-BCQYaQUJ.js";import"./GraphicalItemClipPath-BiTFGdna.js";import"./SetGraphicalItem-B20_5yrQ.js";import"./useAnimationId-sBKnBvXo.js";import"./getRadiusAndStrokeWidthFromDot-Df503nhX.js";import"./ActiveShapeUtils-DmtFxvwi.js";import"./isPlainObject-CESm1hTz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSMfk7Q.js";import"./Trapezoid-R4CEZFO4.js";import"./Sector-BUTYQkfs.js";import"./Curve-BHLjwYFi.js";import"./Cross-DYI1Me4C.js";import"./index-D6ot0Q8y.js";import"./ChartSizeDimensions-Cv_HNug1.js";import"./OffsetShower-DwEE3buh.js";import"./PlotAreaShower-BdnS3yQL.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-BL30a25n.js";import{L as p}from"./LineChart-dh2gbVNx.js";import{R as s}from"./arrayEqualityCheck-CTdhw7v2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-NIG_z2rH.js";import{X as d}from"./XAxis-BuEHyROH.js";import{Y as y}from"./YAxis-97iCNCLl.js";import{L as h}from"./Legend-BFEw6qz3.js";import{L as u}from"./Line-K5AsLX-F.js";import{T as g}from"./Tooltip-CGzfh5OP.js";import{R as K}from"./RechartsHookInspector-CKAPvAcq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSatPt3_.js";import"./index-DaX2Q3AK.js";import"./immer-BLjYPncX.js";import"./hooks-Bu6pJnUO.js";import"./axisSelectors-CmxwFFvW.js";import"./d3-scale-DN4NcrYH.js";import"./zIndexSlice-DuEq0Nzw.js";import"./renderedTicksSlice-BNblKiJo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./resolveDefaultProps-Dhgfu696.js";import"./CartesianAxis-6XJOi0JN.js";import"./Layer-DbzzoT5W.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./Label-tOosDzC9.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./types-DngVF1gy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DWmX7Ql_.js";import"./symbol-DiJYHTEZ.js";import"./step-COhLjfgX.js";import"./useElementOffset-BRFRz_JX.js";import"./uniqBy-DLUxpX6I.js";import"./iteratee-D6pKSZwg.js";import"./ReactUtils-CvEgiikN.js";import"./ActivePoints-DLmu87F_.js";import"./Dot-D_x5JJ0f.js";import"./RegisterGraphicalItemId-NIdQMjW7.js";import"./ErrorBarContext-C--UypnL.js";import"./GraphicalItemClipPath-CvO0vgi7.js";import"./SetGraphicalItem-DqX3zCIa.js";import"./useAnimationId-StTSWEFx.js";import"./getRadiusAndStrokeWidthFromDot-BWR1tZh1.js";import"./ActiveShapeUtils-DyYtBEWy.js";import"./isPlainObject-DHekL-Pq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dbi9MvBK.js";import"./Trapezoid-DF1LPrGo.js";import"./Sector-By56eltg.js";import"./Curve-C9Gn1Z7l.js";import"./Cross-BqARO_ay.js";import"./index-CJGBDWaZ.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./OffsetShower-D6jdoegT.js";import"./PlotAreaShower-CDPFlOoQ.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-BEaYZ8Ke.js";import{L as p}from"./LineChart-BKECRmdg.js";import{R as s}from"./arrayEqualityCheck-BO9iL3J2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BgVx0tSK.js";import{X as d}from"./XAxis-B2ZFMdFE.js";import{Y as y}from"./YAxis-D75udpV7.js";import{L as h}from"./Legend-D3Gn7qKA.js";import{L as u}from"./Line-DgcXsGuE.js";import{T as g}from"./Tooltip-D6xLsXsd.js";import{R as K}from"./RechartsHookInspector-D2tl7RgO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxjX8qFn.js";import"./index-BUXBVCXz.js";import"./immer-ByOrN6rV.js";import"./hooks-BJ-fa7mf.js";import"./axisSelectors-DCKCETlC.js";import"./d3-scale-BqTC062g.js";import"./zIndexSlice-DSliDKHU.js";import"./renderedTicksSlice-2DyJU65H.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Da_Lqy5J.js";import"./chartDataContext-416DyL2h.js";import"./CategoricalChart-CsR3P7Yd.js";import"./resolveDefaultProps-w4GCi4u5.js";import"./CartesianAxis-CxvGMdSy.js";import"./Layer-BLQnqq8X.js";import"./Text-DmuVr28j.js";import"./DOMUtils-w1bHB0TX.js";import"./Label-CF7kInX4.js";import"./ZIndexLayer-D6bVHPc-.js";import"./types-N9mcSd1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BPjsU5gQ.js";import"./symbol-CNAvV-XC.js";import"./step-C3Uiieba.js";import"./useElementOffset-C1b_2gcF.js";import"./uniqBy-2GsMXbhA.js";import"./iteratee-Ctj7yK_B.js";import"./ReactUtils-DilCfUhS.js";import"./ActivePoints-D_4hsixX.js";import"./Dot-CcBnwLaV.js";import"./RegisterGraphicalItemId-BaBHxSFh.js";import"./ErrorBarContext-BjGO5YSj.js";import"./GraphicalItemClipPath-CM553tH1.js";import"./SetGraphicalItem-CxB6zzLj.js";import"./useAnimationId-Ngy9FXMV.js";import"./getRadiusAndStrokeWidthFromDot-Ditulol4.js";import"./ActiveShapeUtils-MXRMbrW9.js";import"./isPlainObject-DJ4nWZqf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B25XPYc9.js";import"./Trapezoid-q196FHE8.js";import"./Sector-CEm4BkOd.js";import"./Curve-atLapjtD.js";import"./Cross-CwWgzCa3.js";import"./index-D7lPj8lh.js";import"./ChartSizeDimensions-57Mz-9Pr.js";import"./OffsetShower-D0pz8TZy.js";import"./PlotAreaShower-uQsOnF-d.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

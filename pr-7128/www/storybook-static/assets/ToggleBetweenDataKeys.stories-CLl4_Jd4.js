import{r as n,e as t}from"./iframe-CxdcV2iU.js";import{L as p}from"./LineChart-epiRH8TX.js";import{R as s}from"./arrayEqualityCheck-DE5QCts1.js";import{C as c}from"./CartesianGrid-B38EGBL2.js";import{X as l}from"./XAxis-C3dQuPvy.js";import{Y as d}from"./YAxis-Kn_05Fgj.js";import{L as y}from"./Legend-B6X_Lh_A.js";import{L as h}from"./Line-DzCb6Me0.js";import{T as u}from"./Tooltip-qaTO8lo0.js";import{R as g}from"./RechartsHookInspector-Cmn_3oAZ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xlhT3EQD.js";import"./index-DQ1yjceL.js";import"./immer-DbqgSjuj.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./zIndexSlice-DIhuoP2j.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuL6NNnl.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./CartesianAxis-BIQ5tC5_.js";import"./Layer-C-TFz9Vn.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./Label-BgXSQpWc.js";import"./ZIndexLayer-CWN6c1mH.js";import"./types-d6h03Wgd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-PkBH2_X7.js";import"./symbol-6aewdZ8t.js";import"./step-D4kO6QN2.js";import"./useElementOffset-BJXD0EvZ.js";import"./uniqBy-cYVYf0Ul.js";import"./iteratee-BsxxOKhX.js";import"./ReactUtils-BTiU_wBS.js";import"./ActivePoints-wIbpr4RN.js";import"./Dot-fd7eIvkn.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./ErrorBarContext-CcA-FFLX.js";import"./GraphicalItemClipPath-CIKZm01y.js";import"./SetGraphicalItem-C9igpr7g.js";import"./useAnimationId-LJTPfExM.js";import"./getRadiusAndStrokeWidthFromDot-BgclTB9C.js";import"./ActiveShapeUtils-C1lnMWmS.js";import"./isPlainObject-7KcThv1C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dl57DUUW.js";import"./Trapezoid-DT3U4xXZ.js";import"./Sector-CTFx0r-m.js";import"./Curve-BibSVypT.js";import"./Cross-CGcmOFfi.js";import"./index-8erOpdWv.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-daRyhr9r.js";import{L as p}from"./LineChart-2fYXYEKC.js";import{R as s}from"./arrayEqualityCheck-2Pg-cl6R.js";import{C as c}from"./CartesianGrid-CEAMYBQl.js";import{X as l}from"./XAxis-CvxqYJF6.js";import{Y as d}from"./YAxis-CfRyhpY9.js";import{L as y}from"./Legend-B6AVa-gX.js";import{L as h}from"./Line-lb90ucHj.js";import{T as u}from"./Tooltip-DYU4iM_x.js";import{R as g}from"./RechartsHookInspector-Dokqg7We.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C9EF5VFS.js";import"./index-CdQ0cAhw.js";import"./immer-C5a-5af_.js";import"./hooks-DA2pBF9B.js";import"./axisSelectors-Bbgcz-jZ.js";import"./d3-scale-CDmp_quo.js";import"./zIndexSlice-B_dP-4_H.js";import"./renderedTicksSlice-BTk_Zw15.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkSXqfIZ.js";import"./chartDataContext-BrPbwshQ.js";import"./CategoricalChart-IEhmtzxN.js";import"./resolveDefaultProps-BvBz7hsS.js";import"./CartesianAxis-BAyDOgMb.js";import"./Layer-Bnvu8mRz.js";import"./Text-D-j5LY5X.js";import"./DOMUtils-CuoS797S.js";import"./Label-C2V68gYo.js";import"./ZIndexLayer-B8DbAkQv.js";import"./types-B1BFfyfQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CmmXLG0z.js";import"./symbol-Bh5t8BoD.js";import"./step-Bh8CmZPH.js";import"./useElementOffset-D66ej-tJ.js";import"./uniqBy-BiF-HFyp.js";import"./iteratee-DVpKSMyj.js";import"./ReactUtils-Dnts_VJo.js";import"./ActivePoints-B0i6PuG-.js";import"./Dot-Czq-4Zob.js";import"./RegisterGraphicalItemId-idmB961p.js";import"./ErrorBarContext-CeBeQ7um.js";import"./GraphicalItemClipPath-CSX8rQ5J.js";import"./SetGraphicalItem-BO-TqYJN.js";import"./useAnimationId-DzCJLB3u.js";import"./getRadiusAndStrokeWidthFromDot-C8K1qojG.js";import"./ActiveShapeUtils-BwOb2O47.js";import"./isPlainObject-Lpl2eom0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0FBXqMT.js";import"./Trapezoid-C-VqU7dw.js";import"./Sector-g7YAEghM.js";import"./Curve-CNVfap9K.js";import"./Cross-CaVgcF-G.js";import"./index-AR7D8lqg.js";import"./ChartSizeDimensions-B_gACk3Q.js";import"./OffsetShower-Cbu4mMas.js";import"./PlotAreaShower-CyrKPvGx.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

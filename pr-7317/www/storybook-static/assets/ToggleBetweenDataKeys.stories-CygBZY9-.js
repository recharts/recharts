import{r as n,e as t}from"./iframe-Cl35quqC.js";import{L as p}from"./LineChart-TFB3n61O.js";import{R as s}from"./arrayEqualityCheck-D9UIghxi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BYNeB4aW.js";import{X as d}from"./XAxis-FVKRUr2k.js";import{Y as y}from"./YAxis-WP2I3lgo.js";import{L as h}from"./Legend-t--SO07f.js";import{L as u}from"./Line-B6cjKV0J.js";import{T as g}from"./Tooltip-Cc87lfxi.js";import{R as K}from"./RechartsHookInspector-BZ6jgrdq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jOGgq2Y2.js";import"./index-_ky2ePMv.js";import"./immer-CY0Lk3WW.js";import"./hooks-CNddY0Tb.js";import"./axisSelectors-DeCbtXoM.js";import"./d3-scale-BkxfZ9aI.js";import"./zIndexSlice-DkkJQXQO.js";import"./renderedTicksSlice-BLU8jnqb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGp9HSBf.js";import"./chartDataContext-ZINcULtA.js";import"./CategoricalChart-0NzQu1bM.js";import"./resolveDefaultProps-BhrqjrLa.js";import"./CartesianAxis-Dg85fGZU.js";import"./Layer-CeD-uJbZ.js";import"./Text-DNnOYqaK.js";import"./DOMUtils-DIh1PeI4.js";import"./Label-DLz8rNT7.js";import"./ZIndexLayer-H1bn9xe9.js";import"./types-D677_BtS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-oEtpWgQJ.js";import"./symbol-BZKabVvR.js";import"./step-BlMx9OF4.js";import"./useElementOffset-OUPok0mW.js";import"./uniqBy-Do32wBRQ.js";import"./iteratee-BgC_x1g5.js";import"./ReactUtils-DZzHwFX5.js";import"./ActivePoints-B4P09zpr.js";import"./Dot-BR2Bc69w.js";import"./RegisterGraphicalItemId-BLnqRJKY.js";import"./ErrorBarContext-BQ7AUjVv.js";import"./GraphicalItemClipPath-Dk-2dIcR.js";import"./SetGraphicalItem-CECI28wk.js";import"./useAnimationId-BL2H4qbR.js";import"./getRadiusAndStrokeWidthFromDot-BWrVeHgV.js";import"./ActiveShapeUtils-DPlGMvpt.js";import"./isPlainObject-DrB0XJwF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZCtg9qm.js";import"./Trapezoid-CB0ArsDb.js";import"./Sector-HEQQPb1w.js";import"./Curve-hm8tQy1x.js";import"./Cross-DJ_J6PRh.js";import"./index-BdngFJZK.js";import"./ChartSizeDimensions-Dc6hCc8f.js";import"./OffsetShower-DCGl5kEz.js";import"./PlotAreaShower-D3XS0cIi.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

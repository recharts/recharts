import{r as n,e as t}from"./iframe-IlsB_rJq.js";import{L as p}from"./LineChart-DEh2todd.js";import{R as s}from"./arrayEqualityCheck-DRku3AZG.js";import{C as c}from"./CartesianGrid-Bw_j7iWQ.js";import{X as l}from"./XAxis-BQuXAPTr.js";import{Y as d}from"./YAxis-454ehxbM.js";import{L as y}from"./Legend-BG2d7PVa.js";import{L as h}from"./Line-CDm7gB2t.js";import{T as u}from"./Tooltip-2VtOJr--.js";import{R as g}from"./RechartsHookInspector-HlZdM34s.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3UkR7qf.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./zIndexSlice-CKbt9tj5.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./CartesianAxis-SxT37-Os.js";import"./Layer-vBbFq665.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./Label-DZIMKlIj.js";import"./ZIndexLayer-9CrWluzk.js";import"./types-tqXwELcn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DKmDvY-C.js";import"./Curve-BktJTjWe.js";import"./useElementOffset-CdX39lF8.js";import"./iteratee-wUxeLBjz.js";import"./ReactUtils-Pssbr3N2.js";import"./ActivePoints-Cr8soWVC.js";import"./Dot-BxXnrLYt.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./ErrorBarContext-XG0EPrx-.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./useAnimationId-Bms0uFs7.js";import"./getRadiusAndStrokeWidthFromDot-De11iLXV.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxgUhFQy.js";import"./Trapezoid-CcrDALRL.js";import"./Sector-D5hYxMFM.js";import"./Cross-B8GjIZrQ.js";import"./index-Bb2whpql.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};

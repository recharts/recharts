import{r as n,e as t}from"./iframe-C2m-yPM5.js";import{L as p}from"./LineChart-BP_rZsno.js";import{R as s}from"./arrayEqualityCheck-TbGkdOW0.js";import{C as c}from"./CartesianGrid-_Vu6X4Ru.js";import{X as l}from"./XAxis-pwIeR2Z_.js";import{Y as d}from"./YAxis-UtKchpqB.js";import{L as y}from"./Legend-Bl5gozJt.js";import{L as h}from"./Line-DQZ-cp1P.js";import{T as u}from"./Tooltip-CASLOoZ8.js";import{R as g}from"./RechartsHookInspector-hZPAuXLN.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cw8RxtHF.js";import"./hooks-DAeXdWPb.js";import"./axisSelectors-DcRH2ohT.js";import"./zIndexSlice-C6669BzF.js";import"./resolveDefaultProps-BmyS9k2s.js";import"./PolarUtils-CURfmLFn.js";import"./CartesianChart-DhCLRkDZ.js";import"./chartDataContext-BYudZTMM.js";import"./CategoricalChart-DyutkFbX.js";import"./CartesianAxis-BexRodkO.js";import"./Layer-Iud-sCq9.js";import"./Text-DUKp4QGC.js";import"./DOMUtils-CU85nTnD.js";import"./Label-BXoaurZ0.js";import"./ZIndexLayer-Cl-H5N7h.js";import"./types-8dUwYk5q.js";import"./Symbols-vGEzJ5HY.js";import"./Curve-Bma3Kx5X.js";import"./useElementOffset-CEtPZLws.js";import"./iteratee-C4HdVpvy.js";import"./ReactUtils-DmzHw7gD.js";import"./ActivePoints-VAc3oi-v.js";import"./Dot-CZbIvFZH.js";import"./RegisterGraphicalItemId-DCftStFv.js";import"./ErrorBarContext-DcTW_4BU.js";import"./GraphicalItemClipPath-DhdF9Via.js";import"./SetGraphicalItem-qvQ4SGUj.js";import"./useAnimationId-Du8Fxdxx.js";import"./getRadiusAndStrokeWidthFromDot-j4oCpZf6.js";import"./ActiveShapeUtils-BOZBV2Pi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQHai8ZT.js";import"./Trapezoid-CwALKVJk.js";import"./Sector-DFUU7h0Y.js";import"./Cross-C4JN4moc.js";import"./index-Dd7KOolC.js";import"./ChartSizeDimensions-DjDyxBi1.js";import"./OffsetShower-DXH-cEhk.js";import"./PlotAreaShower-lLRwtmjO.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};

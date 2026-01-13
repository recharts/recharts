import{r as n,e as t}from"./iframe-CUnLgpW-.js";import{L as p}from"./LineChart-CExhWaui.js";import{R as s}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as c}from"./CartesianGrid-4Fpib6wg.js";import{X as l}from"./XAxis-Ca50gTOu.js";import{Y as d}from"./YAxis-BiZg32ce.js";import{L as y}from"./Legend-BTdhMNwo.js";import{L as h}from"./Line-C6zgdqmO.js";import{T as u}from"./Tooltip-E9gUrVei.js";import{R as g}from"./RechartsHookInspector-Bx_AeU2-.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlEqFuyr.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./zIndexSlice-COAwGY7D.js";import"./resolveDefaultProps-3A21IoT3.js";import"./PolarUtils-B2H8NKZh.js";import"./CartesianChart-BId6Bjz9.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./CartesianAxis-tcRV1YVy.js";import"./Layer-DqDgkHbR.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./Label-BFTmbefL.js";import"./ZIndexLayer-CIJpz3dT.js";import"./types-Cya9OZ_P.js";import"./Symbols-B7Txi7cb.js";import"./Curve-BFHPlIj0.js";import"./useElementOffset-g6bXIJAX.js";import"./iteratee-DpJPEM-F.js";import"./ReactUtils-ubByZwRx.js";import"./ActivePoints-pdYEbr7r.js";import"./Dot-b-hZt1Z5.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./ErrorBarContext-cEGm4-dJ.js";import"./GraphicalItemClipPath-DI1arc73.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./useAnimationId-DVbvIVcC.js";import"./getRadiusAndStrokeWidthFromDot-CLXj6G0s.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./Trapezoid-D3rvFnZU.js";import"./Sector-CCBcQdor.js";import"./Cross-DA8hwZR2.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

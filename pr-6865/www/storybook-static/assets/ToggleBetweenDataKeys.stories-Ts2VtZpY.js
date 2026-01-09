import{r as n,e as t}from"./iframe-DCqI0XZE.js";import{L as p}from"./LineChart-DX2lzeAm.js";import{R as s}from"./arrayEqualityCheck-HYppUqbL.js";import{C as c}from"./CartesianGrid-DdImbUj4.js";import{X as l}from"./XAxis-v6adQsXq.js";import{Y as d}from"./YAxis-B8A2N8DW.js";import{L as y}from"./Legend-yrJaD9yi.js";import{L as h}from"./Line-BIfiJ6dH.js";import{T as u}from"./Tooltip-Cw_iCuSj.js";import{R as g}from"./RechartsHookInspector-fFyRgJJZ.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqZMRsqw.js";import"./hooks-D1LIxGLf.js";import"./axisSelectors-fdj65aw8.js";import"./zIndexSlice-DaD55gZL.js";import"./resolveDefaultProps-DeYA34uT.js";import"./PolarUtils-CVPwvSfi.js";import"./CartesianChart-DjU-EYVa.js";import"./chartDataContext-T8I8ugzh.js";import"./CategoricalChart-3Iob9H8U.js";import"./CartesianAxis-fqcCbsgg.js";import"./Layer-BuGX0g6x.js";import"./Text-CDyXfqgn.js";import"./DOMUtils-B_HAxUS-.js";import"./Label-4-POpI1D.js";import"./ZIndexLayer-C1uRVibY.js";import"./types-DHuf88Dj.js";import"./Symbols-Cxsfovx2.js";import"./Curve-Y6fdEOBg.js";import"./useElementOffset-BRgYYVQV.js";import"./iteratee-BE3nwIgK.js";import"./ReactUtils-B_rBW96b.js";import"./ActivePoints-DE-hR4pC.js";import"./Dot-Bi8GIran.js";import"./RegisterGraphicalItemId-D-lwaZ_v.js";import"./ErrorBarContext-Rv6Vd2e5.js";import"./GraphicalItemClipPath-BG8ZwsZs.js";import"./SetGraphicalItem-CD6yUE_R.js";import"./useAnimationId-PgeDRpeU.js";import"./getRadiusAndStrokeWidthFromDot-BoS6fH9m.js";import"./ActiveShapeUtils-BTx5WARf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpPAOcrn.js";import"./Trapezoid-BbcOya6W.js";import"./Sector-Cy_aXDIz.js";import"./Cross-Cz5FkvJu.js";import"./index-BSYEM6yU.js";import"./ChartSizeDimensions-lrWbrtxv.js";import"./OffsetShower-bO0_8mku.js";import"./PlotAreaShower-CRs_o2Tz.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{r as n,e as t}from"./iframe-CnJUGyj2.js";import{L as p}from"./LineChart-kPP5dpRl.js";import{R as s}from"./arrayEqualityCheck-DS-98WmY.js";import{C as c}from"./CartesianGrid-Dgw7xuDw.js";import{X as l}from"./XAxis-BXjKhibu.js";import{Y as d}from"./YAxis-BOMJi5bn.js";import{L as y}from"./Legend-Bicnpt6O.js";import{L as h}from"./Line-LC_xllE3.js";import{T as u}from"./Tooltip-Di2CZLYp.js";import{R as g}from"./RechartsHookInspector-D9NSExUN.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvN69gVe.js";import"./hooks-DtPou_4w.js";import"./axisSelectors-B3UBVlXk.js";import"./zIndexSlice-BtlphbRl.js";import"./resolveDefaultProps-BzjH9Fll.js";import"./PolarUtils-DUXYMnUd.js";import"./CartesianChart-DarKL8UC.js";import"./chartDataContext-BL3jGdF-.js";import"./CategoricalChart-3iTekVlo.js";import"./CartesianAxis-DVo4bkjd.js";import"./Layer-BsUJcQkF.js";import"./Text-sLuusAcx.js";import"./DOMUtils-CjNSxgDj.js";import"./Label-DpPDMM47.js";import"./ZIndexLayer-Dc_RcEv2.js";import"./types-D9HbD0yL.js";import"./Symbols-kQyDCWDP.js";import"./Curve-B_FGldsa.js";import"./useElementOffset-D0YfL9KH.js";import"./iteratee-DiQ7weWT.js";import"./ReactUtils-BNR-lOsN.js";import"./ActivePoints-Z1vNPH_9.js";import"./Dot-BlTBScXS.js";import"./RegisterGraphicalItemId-BM4OoSas.js";import"./ErrorBarContext-5qx9m8qh.js";import"./GraphicalItemClipPath-FClbaDV6.js";import"./SetGraphicalItem-BuXMx1_s.js";import"./useAnimationId-CPv9iP46.js";import"./getRadiusAndStrokeWidthFromDot-A9oPyYzt.js";import"./ActiveShapeUtils-DTauRdeB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAmamxSx.js";import"./Trapezoid-B9_fPQiM.js";import"./Sector-CiIkZPTJ.js";import"./Cross-9Jtk4bAQ.js";import"./index-CeIzyUzp.js";import"./ChartSizeDimensions-CoD815Xi.js";import"./OffsetShower-QmDVJyKt.js";import"./PlotAreaShower-CTJ4RF1E.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

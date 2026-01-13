import{r as n,e as t}from"./iframe-ZLLTs1L2.js";import{L as p}from"./LineChart-CdZlvONq.js";import{R as s}from"./arrayEqualityCheck-DulyWTfD.js";import{C as c}from"./CartesianGrid-RpQXF-Dz.js";import{X as l}from"./XAxis-CHTCY5Jh.js";import{Y as d}from"./YAxis-BCMoz5bl.js";import{L as y}from"./Legend-Dqil_PZE.js";import{L as h}from"./Line-BN6F4eoo.js";import{T as u}from"./Tooltip-Bed7mk_T.js";import{R as g}from"./RechartsHookInspector-BKmDjbuV.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./zIndexSlice-CBRMfbRc.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./PolarUtils-B9p_wTge.js";import"./CartesianChart-Ck4WnZ-P.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./CartesianAxis-C0wXEvxF.js";import"./Layer-Z1TeMr3K.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./Label-B7ECka5v.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./types-DBavnEN9.js";import"./Symbols-CzmBRPG3.js";import"./Curve-F2oZRqDm.js";import"./useElementOffset-C-GQABMK.js";import"./iteratee-DOdS9XFe.js";import"./ReactUtils-WSqE_xht.js";import"./ActivePoints-BwYfd7gv.js";import"./Dot-DSdrQqBD.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./ErrorBarContext-ByATrnH8.js";import"./GraphicalItemClipPath-BLImpVHN.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./useAnimationId-BvHzHoR_.js";import"./getRadiusAndStrokeWidthFromDot-Vw-0YA6V.js";import"./ActiveShapeUtils-DYOPRKym.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUa7ysAN.js";import"./Trapezoid-qhd__VDX.js";import"./Sector-C6G3hgjU.js";import"./Cross-DHvBXRas.js";import"./index-CuDIHWly.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./OffsetShower-DgUH6KPA.js";import"./PlotAreaShower-Caaac_r-.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

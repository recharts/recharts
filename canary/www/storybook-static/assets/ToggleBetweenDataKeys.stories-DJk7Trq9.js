import{r as n,e as t}from"./iframe-BoXIVKpi.js";import{L as p}from"./LineChart-DWFHTKPM.js";import{R as s}from"./arrayEqualityCheck-dnQrzM2E.js";import{C as c}from"./CartesianGrid-DbtkUh_J.js";import{X as l}from"./XAxis-CkW7_vH7.js";import{Y as d}from"./YAxis-DHIy0H30.js";import{L as y}from"./Legend-CJ-Vpl5s.js";import{L as h}from"./Line-BGsVM20O.js";import{T as u}from"./Tooltip-nIoMA6QQ.js";import{R as g}from"./RechartsHookInspector-Bv_iW9cn.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NZG2vnSc.js";import"./index-B4sUR4aF.js";import"./immer-DZ-IpPxl.js";import"./hooks-CmrSpg0T.js";import"./axisSelectors-C3NEPGA0.js";import"./d3-scale-4wy_PNKp.js";import"./zIndexSlice-DRRC13cr.js";import"./renderedTicksSlice-CJehQ3Y6.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVmBhOHu.js";import"./chartDataContext-BotxQRqQ.js";import"./CategoricalChart-CtSiGPzF.js";import"./resolveDefaultProps-DSYkeoEk.js";import"./CartesianAxis-UrQstO-Y.js";import"./Layer-LLMs1spv.js";import"./Text-JI5xSkLa.js";import"./DOMUtils-CzHd8SEJ.js";import"./Label-DIzgOATL.js";import"./ZIndexLayer-BiamzHbt.js";import"./types-DGUHAYWi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BdNjnJgs.js";import"./symbol-DuFkHlHY.js";import"./step-Dpvc6cK-.js";import"./useElementOffset-DhFcytpm.js";import"./uniqBy-Btz25j0W.js";import"./iteratee-br3ttoz_.js";import"./ReactUtils-D25zr5OD.js";import"./ActivePoints-B5Pf1vbB.js";import"./Dot-COyDptKo.js";import"./RegisterGraphicalItemId-DGJkdjw1.js";import"./ErrorBarContext-Da-s-Drd.js";import"./GraphicalItemClipPath-DEQZQieX.js";import"./SetGraphicalItem-b1pitorJ.js";import"./useAnimationId-CJqD-IcR.js";import"./getRadiusAndStrokeWidthFromDot-CvXSO0LX.js";import"./ActiveShapeUtils-yJwPYRY8.js";import"./isPlainObject-CJV2F3VY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CrG49jLS.js";import"./Trapezoid-HO8pmOVA.js";import"./Sector-ROnt6JN1.js";import"./Curve-4bfNPt84.js";import"./Cross-DM9kvAoa.js";import"./index-DaN_YDU6.js";import"./ChartSizeDimensions-xw94xbD8.js";import"./OffsetShower-Ci98_s2F.js";import"./PlotAreaShower-KIGO44Wy.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

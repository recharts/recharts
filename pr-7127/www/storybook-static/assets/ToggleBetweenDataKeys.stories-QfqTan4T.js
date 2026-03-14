import{r as n,e as t}from"./iframe-DhSnVUUY.js";import{L as p}from"./LineChart-DatH724u.js";import{R as s}from"./arrayEqualityCheck-ItSr43uT.js";import{C as c}from"./CartesianGrid-H5SRNHVz.js";import{X as l}from"./XAxis-BK9sGi8f.js";import{Y as d}from"./YAxis-CXFxK72j.js";import{L as y}from"./Legend-BbSGbk_D.js";import{L as h}from"./Line-B0U88ML_.js";import{T as u}from"./Tooltip-DhrsmUYo.js";import{R as g}from"./RechartsHookInspector-_iSQ6Sv6.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-yZud87Hm.js";import"./index-CW6mkywG.js";import"./immer-ffnfnJI7.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./zIndexSlice-CmnFYU-3.js";import"./renderedTicksSlice-aQirpCka.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./CartesianAxis-wTVaN_w2.js";import"./Layer-DqA8yJsy.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./Label-CbPieNct.js";import"./ZIndexLayer-qqef8KVB.js";import"./types-B9YiKk4f.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./step-CbaapRre.js";import"./useElementOffset-CdKfT37L.js";import"./uniqBy-zkYuhEQW.js";import"./iteratee-lYsZgTBf.js";import"./ReactUtils-BaLETgkD.js";import"./ActivePoints-BvftcU8L.js";import"./Dot-DMOGBFVp.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./ErrorBarContext-CqudBFLS.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./useAnimationId-DocxG_ZJ.js";import"./getRadiusAndStrokeWidthFromDot-DsTA79K5.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./Curve-BOb3x1Vv.js";import"./Cross-VsFbPZi8.js";import"./index-AtwlN2q9.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./OffsetShower-BxnZU9HH.js";import"./PlotAreaShower-CiIWRvtc.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

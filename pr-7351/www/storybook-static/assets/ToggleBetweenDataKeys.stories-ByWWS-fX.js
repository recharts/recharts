import{u as n,e as t}from"./iframe-CWtGA3nN.js";import{L as p}from"./LineChart-BLiLgLJz.js";import{g as s}from"./arrayEqualityCheck-SSZ_TbBR.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-D9pMPSjD.js";import{X as d}from"./XAxis-DW0rJY1W.js";import{Y as u}from"./YAxis-BNqIiiyx.js";import{L as y}from"./Legend-DJu-WPPA.js";import{L as h}from"./Line-DlLocPs1.js";import{T as g}from"./Tooltip-DgQdaJPt.js";import{R as K}from"./RechartsHookInspector-C5rf562U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtFvOF_N.js";import"./index-CJJNMar2.js";import"./immer-BFspOnss.js";import"./hooks-2GkvPwk3.js";import"./axisSelectors-B2ypiSef.js";import"./d3-scale-QF4ItY9H.js";import"./zIndexSlice-DXFiHolo.js";import"./renderedTicksSlice-dpcUCF55.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjBRb4BQ.js";import"./chartDataContext-BDE8JW6h.js";import"./CategoricalChart-VkWulsmh.js";import"./resolveDefaultProps-DAVWEwBG.js";import"./CartesianAxis-Bxj1i8r5.js";import"./Layer-CPnmijdU.js";import"./Text-C8joD4Pq.js";import"./DOMUtils-CParKcwz.js";import"./Label-C--aO5Ak.js";import"./ZIndexLayer-DtffmqPt.js";import"./types-DgK_EaWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C5EGHUxC.js";import"./symbol-CZfqmVoY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXnmGdlu.js";import"./uniqBy-B6g5sB3v.js";import"./iteratee-MnyvU_G3.js";import"./Curve-SkiaV8u-.js";import"./step-CBW02vKx.js";import"./ReactUtils-JfqC4NUj.js";import"./ActivePoints-DkGt118u.js";import"./Dot-CP0aaNdE.js";import"./RegisterGraphicalItemId-6R0wFFYv.js";import"./ErrorBarContext-Bkb8bdCY.js";import"./GraphicalItemClipPath-636H-9xI.js";import"./SetGraphicalItem-DcEByKaS.js";import"./useAnimationId-B0ac7aow.js";import"./getRadiusAndStrokeWidthFromDot-Df0eg7nC.js";import"./ActiveShapeUtils-CdHtuYAv.js";import"./Cross-L3muEabX.js";import"./Rectangle-CNr5V-0I.js";import"./Sector-CyRUSSOl.js";import"./index-DsA403Ur.js";import"./ChartSizeDimensions-BdcGth4f.js";import"./OffsetShower-BzgHuzNu.js";import"./PlotAreaShower-5_nPAcLw.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};

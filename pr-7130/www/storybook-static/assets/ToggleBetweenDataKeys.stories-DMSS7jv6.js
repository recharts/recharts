import{r as n,e as t}from"./iframe-CsXVB2ZJ.js";import{L as p}from"./LineChart-KQSX-aqA.js";import{R as s}from"./arrayEqualityCheck-BCHdTh97.js";import{C as c}from"./CartesianGrid-CHNGn_jU.js";import{X as l}from"./XAxis-B7CspB_5.js";import{Y as d}from"./YAxis-CG9kcCow.js";import{L as y}from"./Legend-BqKC_mMS.js";import{L as h}from"./Line-CXPOtBvj.js";import{T as u}from"./Tooltip-CpqHLaVy.js";import{R as g}from"./RechartsHookInspector-DPsZ88KI.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsYOQVLv.js";import"./index-DrJPvX0I.js";import"./immer-BTK-YsvV.js";import"./hooks-D_05cmM9.js";import"./axisSelectors-DotnTkUo.js";import"./d3-scale-COfDs1Hg.js";import"./zIndexSlice-COIrpl7N.js";import"./renderedTicksSlice-BIUh3E5-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5A6zJYY.js";import"./chartDataContext-U_ALNAnQ.js";import"./CategoricalChart-D25YEStt.js";import"./resolveDefaultProps-Dxo_4k9c.js";import"./CartesianAxis-D3FkxlAO.js";import"./Layer-ZxhtGexe.js";import"./Text-t92igXCI.js";import"./DOMUtils-DOi0Kbgg.js";import"./Label-CpKh3CyV.js";import"./ZIndexLayer-kRMHxQSg.js";import"./types-BRXmP5ht.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B41PQ-gK.js";import"./symbol-C0zx-DBl.js";import"./step-Do92eA3g.js";import"./useElementOffset-DWVNtqqj.js";import"./uniqBy-BKF_AGke.js";import"./iteratee-fFXmuyRd.js";import"./ReactUtils-BPsWb6oC.js";import"./ActivePoints-1yQdgBTn.js";import"./Dot-D9036cg4.js";import"./RegisterGraphicalItemId-Bh8wdrii.js";import"./ErrorBarContext-Dh71FriX.js";import"./GraphicalItemClipPath-CHSTcUHY.js";import"./SetGraphicalItem-1mPwySrk.js";import"./useAnimationId-CQeQyoAC.js";import"./getRadiusAndStrokeWidthFromDot-Blz_buNj.js";import"./ActiveShapeUtils-CSysbPr0.js";import"./isPlainObject-C0suLCJu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BziwuLFH.js";import"./Trapezoid-XBp8FK9I.js";import"./Sector-BbnyTQRb.js";import"./Curve-DWbGncva.js";import"./Cross-LLewnfb-.js";import"./index-B4Kp1LJ2.js";import"./ChartSizeDimensions-DnhUms5f.js";import"./OffsetShower-DndIy-Mf.js";import"./PlotAreaShower-BkBHMfKD.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

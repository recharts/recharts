import{e as t}from"./iframe-BDLVz6Jf.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CUwHcVyI.js";import{B as p}from"./BarChart-Di-y0jFX.js";import{X as l}from"./XAxis-rGGZujHk.js";import{Y as h}from"./YAxis-DhrJBh1G.js";import{B as c}from"./Brush-yaqAJcF2.js";import{B as x}from"./Bar-BJ0AzkM0.js";import{R as u}from"./RechartsHookInspector-DdlV-82E.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./immer-D7ppHI2d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BNGXTKCd.js";import"./index-B5IfmkK5.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./d3-scale-DrvOhfRi.js";import"./zIndexSlice-Dba-j24Y.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./CartesianAxis-DpZWUA10.js";import"./Layer-E90Uxi_N.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./ZIndexLayer-CeMtlwqL.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CoKMvDHF.js";import"./ReactUtils-Z_uY6BWT.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-1odowpJ3.js";import"./isPlainObject-D6WBWEYO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MA5abZlf.js";import"./useAnimationId-DiGR44lM.js";import"./Trapezoid-B0zvPW8H.js";import"./Sector-Bzk7xgyA.js";import"./Symbols-UHZicULa.js";import"./symbol-DWU8_PrF.js";import"./step-BVw-sImN.js";import"./Curve-BkotQ_Ul.js";import"./RegisterGraphicalItemId-DgsZoNJO.js";import"./ErrorBarContext-CHqnPMdC.js";import"./GraphicalItemClipPath-52erAg5v.js";import"./SetGraphicalItem-D-MDoVx7.js";import"./getZIndexFromUnknown-Dvow2B0m.js";import"./graphicalItemSelectors-DdsLyAOw.js";import"./index-B1g-GKPY.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};

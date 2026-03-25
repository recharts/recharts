import{e as t}from"./iframe-CldnC2PN.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BkMemVly.js";import{B as p}from"./BarChart-bAPDXYRe.js";import{X as l}from"./XAxis-Cj8qZ5rT.js";import{Y as h}from"./YAxis-CrDGCN3a.js";import{B as c}from"./Brush-DQo1fqvc.js";import{B as x}from"./Bar-DjoSHrT_.js";import{R as u}from"./RechartsHookInspector-D62gTWo0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./immer-DMaWcifR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./zIndexSlice-Dkmz4iFf.js";import"./renderedTicksSlice-Be71JRZt.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./CategoricalChart-SLN0-3Ts.js";import"./CartesianAxis-BLyyO5TZ.js";import"./Layer-Bdw6vRTF.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./Label-CL4-mp52.js";import"./ZIndexLayer-Bu6n17y5.js";import"./types-dYqueN3V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CsI9KJcU.js";import"./ReactUtils-vDwQR-8r.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-PUYnWCIP.js";import"./isPlainObject-DfSr4O01.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzrYFnf.js";import"./useAnimationId-3owPHR_y.js";import"./Trapezoid-TT50IcST.js";import"./Sector-Olx8axXc.js";import"./Symbols-CezzAArh.js";import"./symbol-ChaweOtd.js";import"./step-DeOo6rRX.js";import"./Curve-Cs2JifYn.js";import"./RegisterGraphicalItemId-BmpgF9p0.js";import"./ErrorBarContext-Bu40-WC5.js";import"./GraphicalItemClipPath-_SIbPbOr.js";import"./SetGraphicalItem-QHdiFTBm.js";import"./getZIndexFromUnknown-Cw-Oh-0Y.js";import"./graphicalItemSelectors-t89E3Daq.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

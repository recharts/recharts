import{e as t}from"./iframe-Nsc2sN17.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D9Zyw2Zw.js";import{B as p}from"./BarChart-CtyIdV35.js";import{X as l}from"./XAxis-DyA8Ake-.js";import{Y as h}from"./YAxis-D_irT6px.js";import{B as c}from"./Brush-C-Xokt_g.js";import{B as x}from"./Bar-CVQNpier.js";import{R as u}from"./RechartsHookInspector-DiJs5DhW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-gmbWhtkI.js";import"./immer-DLWrz67V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ckv5DlpI.js";import"./index-BHVPN82s.js";import"./hooks-C0EC2ajp.js";import"./axisSelectors-QpAjWyBl.js";import"./d3-scale-CHgSPW8E.js";import"./zIndexSlice-CNqGo6m1.js";import"./renderedTicksSlice-CYv0XDQO.js";import"./CartesianChart-CYxY5vz3.js";import"./chartDataContext-C4GxecVY.js";import"./CategoricalChart-Br-qLSqo.js";import"./CartesianAxis-C30xEFKB.js";import"./Layer-B6Mh8xHG.js";import"./Text-DiHUiXMK.js";import"./DOMUtils-P4LKJ49W.js";import"./Label-DZXeJJGm.js";import"./ZIndexLayer-Czi-cF3Q.js";import"./types-DgV3fJv5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C2qUsH30.js";import"./ReactUtils-SHh5MmVx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-j_PWExYP.js";import"./isPlainObject-WYrKXhh8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaywoHil.js";import"./useAnimationId-D34EikED.js";import"./Trapezoid-BwRKBAFI.js";import"./Sector-DfnrbS26.js";import"./Symbols-eFyCyhDx.js";import"./symbol-DFqSkUaY.js";import"./step-BW4WvIvQ.js";import"./Curve-DvjoiG0X.js";import"./RegisterGraphicalItemId-QStBr5Ie.js";import"./ErrorBarContext-BXu4nXIY.js";import"./GraphicalItemClipPath-2cdy-pu2.js";import"./SetGraphicalItem-DiLWJVic.js";import"./getZIndexFromUnknown-GiKJGrH1.js";import"./graphicalItemSelectors-CpHj3bU1.js";import"./index-CbA-Jv17.js";import"./ChartSizeDimensions-B1kQCCeW.js";import"./OffsetShower-Csp2K6dU.js";import"./PlotAreaShower-LkFt_opJ.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

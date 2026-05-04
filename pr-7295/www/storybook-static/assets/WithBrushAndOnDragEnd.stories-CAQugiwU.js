import{e as t}from"./iframe-Cm3fKKya.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CQWVDseH.js";import{B as p}from"./BarChart-BwFlGnRb.js";import{X as l}from"./XAxis-_gagIVgp.js";import{Y as h}from"./YAxis-BAWoPQYV.js";import{B as c}from"./Brush-BMl1vcXb.js";import{B as x}from"./Bar-D7YKraql.js";import{R as u}from"./RechartsHookInspector-CpOXiD6O.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BkcHGYVM.js";import"./immer-CEWtNvyb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-oDzj0r.js";import"./index-9rVBxZPD.js";import"./hooks-B3tRCSat.js";import"./axisSelectors-Bwtc5iq4.js";import"./d3-scale-BjMiYTJr.js";import"./zIndexSlice-DYSMWhOl.js";import"./renderedTicksSlice-BZy1ZNqb.js";import"./CartesianChart-BrFBpup6.js";import"./chartDataContext-B_eInrg7.js";import"./CategoricalChart-CY8DZn6m.js";import"./CartesianAxis-DUjBj8lo.js";import"./Layer-Bjej1AmV.js";import"./Text-DvSAUV0i.js";import"./DOMUtils-QUjg2Yua.js";import"./Label-DcJ8tF7g.js";import"./ZIndexLayer-Dsdg_UUE.js";import"./types-Cdoht-KM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BI-Cr1YU.js";import"./ReactUtils-CCKIvuk2.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CLgS6WZt.js";import"./isPlainObject-C3QqYDDv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7ODVlbIW.js";import"./useAnimationId-C78FuYWX.js";import"./Trapezoid-DvgpBRjx.js";import"./Sector-DrC_WEC7.js";import"./Symbols-BZXh3G7C.js";import"./symbol-atQbT2WX.js";import"./step-ClEFzmqb.js";import"./Curve-C9IFio54.js";import"./RegisterGraphicalItemId-DJy9dO_8.js";import"./ErrorBarContext-DewfvX2H.js";import"./GraphicalItemClipPath-CRdIG2N7.js";import"./SetGraphicalItem-BjOYW37Q.js";import"./getZIndexFromUnknown-BsU5Mk-J.js";import"./graphicalItemSelectors-DaXXizOZ.js";import"./index-DsjXiXu7.js";import"./ChartSizeDimensions-DHQ2iMpX.js";import"./OffsetShower-Be6n4fO7.js";import"./PlotAreaShower-DRAX5UGP.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

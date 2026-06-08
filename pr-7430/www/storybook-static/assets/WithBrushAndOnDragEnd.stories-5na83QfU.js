import{R as t}from"./iframe-D_P_Mvdh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DWG8bKuL.js";import{B as p}from"./BarChart-Cr-C0P94.js";import{X as l}from"./XAxis-qMeue6_L.js";import{Y as h}from"./YAxis-DVaDEIZb.js";import{B as x}from"./Brush-D5eS-I8e.js";import{B as c}from"./Bar-42slfoJy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-zUUuTuVf.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./get-B4It9gJG.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./CartesianAxis-CFHvtBrK.js";import"./Layer-DPlEhKnR.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./Label-XikFYvD7.js";import"./ZIndexLayer-B_lVTO01.js";import"./types-BEWgGyLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-iF3enNPc.js";import"./AnimatedItems-TOHLuZU5.js";import"./useAnimationId-B85ZSEKA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BP8C9lPh.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./ErrorBarContext-CuQjxX0z.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getZIndexFromUnknown-DdEC_rqJ.js";import"./graphicalItemSelectors-beDx0GkI.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

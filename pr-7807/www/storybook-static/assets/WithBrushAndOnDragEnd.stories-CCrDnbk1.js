import{R as t}from"./iframe-CpojRMYz.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D1ADf7PX.js";import{B as p}from"./BarChart-D5S3ErFT.js";import{X as l}from"./XAxis-DrbaoPhb.js";import{Y as h}from"./YAxis-emyLb2hw.js";import{B as x}from"./Brush-eqUaK1vi.js";import{B as c}from"./Bar-CBueyJ60.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2TOI5CL8.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CF4JxjLb.js";import"./axisSelectors-BWpXFhCq.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./CartesianAxis-BQyqi4qL.js";import"./Layer-CCaY3a6J.js";import"./Text-l7Cxp-9T.js";import"./DOMUtils-Bwqm48A6.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./Label-C3-HdBMA.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./types-BBXJ7Rux.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BIcnZI45.js";import"./useAnimationId-CwhUANii.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMpLU3WW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvTz2wmh.js";import"./tooltipContext-DURoZOYw.js";import"./RegisterGraphicalItemId-mR_kXHAC.js";import"./ErrorBarContext-DaXU1Z8v.js";import"./GraphicalItemClipPath-2lYWsPZE.js";import"./SetGraphicalItem-CyRpKe3K.js";import"./getZIndexFromUnknown-DYuX537z.js";import"./useGraphicalItemIdentity-CvTNdUiI.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

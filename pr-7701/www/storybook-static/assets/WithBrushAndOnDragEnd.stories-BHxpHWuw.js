import{R as t}from"./iframe-BTdOdF9K.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CcQiDZWo.js";import{B as p}from"./BarChart-CI0QpPqr.js";import{X as l}from"./XAxis-BHkAQnNg.js";import{Y as h}from"./YAxis-D6a9CyOE.js";import{B as x}from"./Brush-BJIKt6u6.js";import{B as c}from"./Bar-BDt4Qdyi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BGr8RGVS.js";import"./index-Cq8tu8wQ.js";import"./index-Ced2HG28.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CYx6Kk4A.js";import"./isWellBehavedNumber-ZiYy0LNM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DRLvm4aR.js";import"./axisSelectors-CEXy452f.js";import"./d3-scale-B2K1_ofr.js";import"./index-uQqEtlSq.js";import"./index-CwuReyQ-.js";import"./renderedTicksSlice-CwdI_hq1.js";import"./index-DifGdyog.js";import"./CartesianChart-DxgKFkUN.js";import"./chartDataContext-BIlbUR4j.js";import"./CategoricalChart-CWtNWW3W.js";import"./CartesianAxis-Bjag6PpJ.js";import"./Layer-BIBCumPU.js";import"./Text-ad69v4o0.js";import"./DOMUtils-D3jMOIM3.js";import"./useId-R0lZrYSa.js";import"./useBackwardsCompatibleTheme-CO-7LDmO.js";import"./Label-Cm499Ers.js";import"./ZIndexLayer-C5GGlVd8.js";import"./types-DjPeWPew.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DKFfKX33.js";import"./useAnimationId-C9O8Tbu7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CD06WOQp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HwCQ4yPj.js";import"./tooltipContext-ov1xHh4L.js";import"./RegisterGraphicalItemId-CtQfyEXD.js";import"./ErrorBarContext-CqdXJ3Jz.js";import"./GraphicalItemClipPath-BNHF0YUS.js";import"./SetGraphicalItem-CBZad1k7.js";import"./getZIndexFromUnknown-C6NCYuCD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-AK-DwY1O.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

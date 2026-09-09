import{R as t}from"./iframe-VXxHrawH.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DgTA0TxE.js";import{B as p}from"./BarChart-BVO3eVPU.js";import{X as l}from"./XAxis-D4xzCV5d.js";import{Y as h}from"./YAxis-DtlJkghU.js";import{B as x}from"./Brush-CNK38EeZ.js";import{B as c}from"./Bar-TERryxcl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWlQSnjt.js";import"./index-Cou_EQ7F.js";import"./index-Ci4a_PyE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5Zdg-cB.js";import"./isWellBehavedNumber-CkFzhS37.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQIlqS7p.js";import"./axisSelectors-BQNA_-kz.js";import"./d3-scale-CUjoKVS8.js";import"./index-BrnOmBWl.js";import"./index-CdTW_BBW.js";import"./renderedTicksSlice-S6Tl6gbL.js";import"./index-CcyipSPh.js";import"./CartesianChart-BwhDl5kl.js";import"./chartDataContext-CR1OC3WJ.js";import"./CategoricalChart-CT9rs-6L.js";import"./CartesianAxis-Dhdcn9ZL.js";import"./Layer-B3kAMod2.js";import"./Text-DwkoCOGf.js";import"./DOMUtils-xAHEQowW.js";import"./useId-poNdh1JU.js";import"./useBackwardsCompatibleTheme-CAqean3d.js";import"./Label-KqVvCdTF.js";import"./ZIndexLayer-ChcfhIs7.js";import"./types-DHxYQYQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DqmSFpoj.js";import"./useAnimationId-UYFwfxUz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH4DXc0Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7gHs5iI.js";import"./tooltipContext-DhxFmNWz.js";import"./RegisterGraphicalItemId-DSKBKWtn.js";import"./ErrorBarContext-DOLZMgYM.js";import"./GraphicalItemClipPath-DKgFqHTa.js";import"./SetGraphicalItem-DwIcSm4l.js";import"./getZIndexFromUnknown-DM4_h6GQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B5hnsjtf.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

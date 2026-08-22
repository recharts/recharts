import{R as t}from"./iframe-WAmwAwqv.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B7760TIp.js";import{B as p}from"./BarChart-DVokputB.js";import{X as l}from"./XAxis-C0HQ7bAn.js";import{Y as h}from"./YAxis-CvqgpJJX.js";import{B as x}from"./Brush-CwzvwcWs.js";import{B as c}from"./Bar-DtzCBq5G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaWJmTtS.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./axisSelectors-P4MAoEAr.js";import"./d3-scale-B9CJnMVD.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./CategoricalChart-BhQV0u5E.js";import"./CartesianAxis-BJa8Ix1s.js";import"./Layer-CduouMU4.js";import"./Text-BQOM4h-3.js";import"./DOMUtils-BipZejVj.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./Label-BI58xTcy.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./types-MF287rET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dygs4a37.js";import"./useAnimationId-DhhiM2kh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dn9uS56j.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./tooltipContext-7QY3PMZJ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getZIndexFromUnknown-DHVcH0sj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-bvq1Naac.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

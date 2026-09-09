import{R as t}from"./iframe-E8y1LHOl.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CP2K5fjd.js";import{B as p}from"./BarChart-Cfsupzjd.js";import{X as l}from"./XAxis-CQma6gAW.js";import{Y as h}from"./YAxis-DUr2r86j.js";import{B as x}from"./Brush-DFakQOfk.js";import{B as c}from"./Bar-BYS7Seaa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BI-R_Jee.js";import"./index-B9tVeqRW.js";import"./index-DPYTKeUs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp5H_7QD.js";import"./isWellBehavedNumber-CRMuJk7d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8PWTH_z.js";import"./axisSelectors-Bx3EdZdn.js";import"./d3-scale-DaRSGBEX.js";import"./index-uIxCQJLq.js";import"./index-BIh6D11j.js";import"./renderedTicksSlice-C2dkiWvM.js";import"./index-ozGQLW8c.js";import"./CartesianChart-BBRLk3sY.js";import"./chartDataContext-BjS41WHN.js";import"./CategoricalChart-ZbKNQGxB.js";import"./CartesianAxis-Cha6t-QP.js";import"./Layer-Bg2OEiKj.js";import"./Text-BdpTntNA.js";import"./DOMUtils-8lkeZOFq.js";import"./useId-BmVi-H88.js";import"./useBackwardsCompatibleTheme-vYz6naZ1.js";import"./Label-DN0LsbYZ.js";import"./ZIndexLayer-m7llBpH3.js";import"./types-Din7IpfN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-c6sC2Ph5.js";import"./useAnimationId-MpB0cIEG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4vCsGb7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpmlaViF.js";import"./tooltipContext-DA8pxA3I.js";import"./RegisterGraphicalItemId-zHC8jjTe.js";import"./ErrorBarContext-Bj9hGQm8.js";import"./GraphicalItemClipPath-B1o9CCBQ.js";import"./SetGraphicalItem-BwH3S5eX.js";import"./getZIndexFromUnknown-B7gaUUXJ.js";import"./useGraphicalItemIdentity-C1Aa_3nu.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

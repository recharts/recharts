import{R as t}from"./iframe-BnuuYCdy.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BbvX8GRP.js";import{B as p}from"./BarChart-B66t7w_U.js";import{X as l}from"./XAxis-SZJEJq9X.js";import{Y as h}from"./YAxis-C9KSlBTW.js";import{B as x}from"./Brush-De23R0fp.js";import{B as c}from"./Bar-CHZjzYVB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hzsPLVCI.js";import"./index-BBLVSC9o.js";import"./index-DGdfhc42.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKuWdgA8.js";import"./isWellBehavedNumber-Bo6YgW7B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yuVx-GfW.js";import"./axisSelectors-LqE-nBKd.js";import"./d3-scale-Xitmtu6a.js";import"./index-B7n-SwGH.js";import"./index-Bpn4eiX5.js";import"./renderedTicksSlice-BB-WXCKZ.js";import"./index-Co63ZXDS.js";import"./CartesianChart-Csg_49y8.js";import"./chartDataContext-Cfs5ZB_U.js";import"./CategoricalChart-D69sax0F.js";import"./CartesianAxis-D94E5CAk.js";import"./Layer-CdUwTkt1.js";import"./Text-CGVn4Fi7.js";import"./DOMUtils-uoptzxcb.js";import"./useId-DfmsLig3.js";import"./useBackwardsCompatibleTheme-B5XCxlLZ.js";import"./Label-B4GoECSR.js";import"./ZIndexLayer-exEMosZg.js";import"./types-CkU7DeC5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DduhreQ3.js";import"./useAnimationId-DPByLvsu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvS7JAyC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7-0YNMZJ.js";import"./tooltipContext-BPbc6Zci.js";import"./RegisterGraphicalItemId-DPzJCfll.js";import"./ErrorBarContext-Bs4CO-eU.js";import"./GraphicalItemClipPath-Dkj0uJsh.js";import"./SetGraphicalItem-DVMg4m0V.js";import"./getZIndexFromUnknown-CXpxDvsd.js";import"./useGraphicalItemIdentity-C2Y0PCNK.js";import"./dataEntryStyles-BmilyqJ9.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

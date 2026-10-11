import{R as t}from"./iframe-DIGZheBd.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-_cU-ODvm.js";import{B as p}from"./BarChart-BySMm8_f.js";import{X as l}from"./XAxis-JeVlcNJo.js";import{Y as h}from"./YAxis-pOdEjlW4.js";import{B as x}from"./Brush-CIiL9Kdu.js";import{B as c}from"./Bar-CoEyq2yh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZtBBFTk.js";import"./axisSelectors-D8SOTwsy.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./CartesianAxis--bh-_8od.js";import"./Layer-CyJKyehG.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./Label-DdnBRnzY.js";import"./ZIndexLayer-Csfe5z3g.js";import"./types-MK9UFfTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BNdVOgR8.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbIHVVOf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./tooltipContext-DXl9iCeE.js";import"./ErrorBarContext-Bx6RRNyu.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getZIndexFromUnknown-LNrjdUtF.js";import"./useEffectiveDataKey-DDZKQvTb.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

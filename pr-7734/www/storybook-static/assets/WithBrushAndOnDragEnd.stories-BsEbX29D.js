import{R as t}from"./iframe-dnbYLFAD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Tzq48rK3.js";import{B as p}from"./BarChart-CdYo4ktU.js";import{X as l}from"./XAxis-BSFcOfEW.js";import{Y as h}from"./YAxis-BETlZVB5.js";import{B as x}from"./Brush-JZo5Nxvq.js";import{B as c}from"./Bar-DDOWl0uR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrGf0NM1.js";import"./index-D5_wYljM.js";import"./index-EbTzNNy6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DaDkCz04.js";import"./isWellBehavedNumber-B4er61T0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUiYn_74.js";import"./axisSelectors-BxcK-66k.js";import"./d3-scale-DOYXtK-0.js";import"./index-C2tfzzVf.js";import"./index-BeP9odN1.js";import"./renderedTicksSlice-ByAoIIAo.js";import"./index-Dcl79aHz.js";import"./CartesianChart-l5SDlhyQ.js";import"./chartDataContext-kt33HbbB.js";import"./CategoricalChart-BIzQL4lC.js";import"./CartesianAxis-sVyuEsJd.js";import"./Layer-BJ7lSbQt.js";import"./Text-BaKv6O4H.js";import"./DOMUtils-BtlArb_7.js";import"./useId-BZKwUvxw.js";import"./useBackwardsCompatibleTheme-QZyWgv_8.js";import"./Label-DfEdNEi7.js";import"./ZIndexLayer-DjGyUWfd.js";import"./types-ryOPFJaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CZJCXzZR.js";import"./useAnimationId-p2irW4JC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CW-JqIPM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbwV3h3t.js";import"./tooltipContext-4hcIFSC2.js";import"./RegisterGraphicalItemId-BpbR-Lho.js";import"./ErrorBarContext-Bpb4kfuY.js";import"./GraphicalItemClipPath-DvPPmxSV.js";import"./SetGraphicalItem-BXaCF56M.js";import"./getZIndexFromUnknown-DQW_VWhJ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B2SStYkQ.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

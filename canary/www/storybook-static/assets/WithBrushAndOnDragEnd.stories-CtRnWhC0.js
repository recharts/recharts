import{R as t}from"./iframe-BNzhvzzJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-7B2pJ9R1.js";import{B as p}from"./BarChart-CciFeJph.js";import{X as l}from"./XAxis-BHRl-pdi.js";import{Y as h}from"./YAxis-Cl4-_k6Y.js";import{B as x}from"./Brush-BNtknvEw.js";import{B as c}from"./Bar-DSQFKMBr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-_Il6apPt.js";import"./index-D7steQeu.js";import"./index-B9gOfTvg.js";import"./get-Bo6NWZXP.js";import"./resolveDefaultProps-D9iASVgR.js";import"./isWellBehavedNumber-Bpef6lI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHcZLkJ-.js";import"./index-DJTE4prX.js";import"./index-7GSDLfD9.js";import"./renderedTicksSlice-EPo0eGyT.js";import"./axisSelectors-ceyKOVCq.js";import"./d3-scale-DfXMlVb2.js";import"./CartesianChart-CaZD9ouo.js";import"./chartDataContext-BcocN-0J.js";import"./CategoricalChart-C_ukC1b2.js";import"./CartesianAxis-LIK20Nid.js";import"./Layer-xsjkSAFG.js";import"./Text-B7J48mXb.js";import"./DOMUtils-C0rqppVh.js";import"./Label-Cch4VET0.js";import"./ZIndexLayer-DKk9ZSzt.js";import"./types-DwFKy1TI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CyD7XMEk.js";import"./AnimatedItems-DiPaozpi.js";import"./useAnimationId-DMdK3Lv6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLdg-C7_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfEExsMK.js";import"./RegisterGraphicalItemId-Xkz1LIrr.js";import"./ErrorBarContext-_lt3AQQA.js";import"./GraphicalItemClipPath-BB5MRsg5.js";import"./SetGraphicalItem-Di0ECEKf.js";import"./getZIndexFromUnknown-Cl0ZGAoN.js";import"./graphicalItemSelectors-BsfNmkQw.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

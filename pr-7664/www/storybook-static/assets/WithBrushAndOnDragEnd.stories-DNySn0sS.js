import{R as t}from"./iframe-DU8eOjQ1.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BTgaU9mo.js";import{B as p}from"./BarChart-Bl_3nC_P.js";import{X as l}from"./XAxis-DwxXrNeT.js";import{Y as h}from"./YAxis-C5Bhkieg.js";import{B as x}from"./Brush-DFFxRkyR.js";import{B as c}from"./Bar-COU1xcMU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ds7SGj9O.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9E3HwjIh.js";import"./index-BsY6e3Dv.js";import"./index-C5aMPIVJ.js";import"./axisSelectors-BDOPVsa7.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./CategoricalChart-QJ_K41d4.js";import"./CartesianAxis-CXtQQdut.js";import"./Layer-BIDK12wM.js";import"./Text-AtzkHDEd.js";import"./DOMUtils-Cql2uYAT.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./Label-Z9o5T8X-.js";import"./ZIndexLayer-D8k4jgaj.js";import"./types-RZ1xD5kE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DENpSSAq.js";import"./useAnimationId-CdvddGlN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfThDaqC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./tooltipContext-C_CDpSBv.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./getZIndexFromUnknown-CYPMJSt_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BqNpATTK.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-C_py9VKy.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CXPNbLh0.js";import{B as p}from"./BarChart-BU9uKTKf.js";import{X as l}from"./XAxis-BQTm69sE.js";import{Y as h}from"./YAxis-1vUjo3Fh.js";import{B as x}from"./Brush-BJOsjeXN.js";import{B as c}from"./Bar-DJUBgmNl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-y-97qzKM.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./Label-DaE8MMQO.js";import"./ZIndexLayer-cfs89nNi.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-Bu0nve_k.js";import"./AnimatedItems-BApiggtL.js";import"./useAnimationId-BmA3o4RX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dwgjvbsc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getZIndexFromUnknown-CVsUYSi-.js";import"./graphicalItemSelectors-RdnKikYv.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};

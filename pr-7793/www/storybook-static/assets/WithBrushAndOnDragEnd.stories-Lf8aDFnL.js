import{R as t}from"./iframe-CkRErbX3.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DTmbH2kM.js";import{B as p}from"./BarChart-DUd06iCO.js";import{X as l}from"./XAxis-B1jTgdYR.js";import{Y as h}from"./YAxis-CAzXCAfe.js";import{B as x}from"./Brush-BeiYhy3W.js";import{B as c}from"./Bar-Dxc2BRnb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BUNP2xt_.js";import"./index-lTKqLNY2.js";import"./index-8q2B2E2Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0XcYrnY.js";import"./isWellBehavedNumber-D_Km0wQV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LX80ZVpP.js";import"./axisSelectors-BQZb9AEv.js";import"./d3-scale-CAyfIE8L.js";import"./index-Cj3PhY3N.js";import"./index-DPOnfHKZ.js";import"./renderedTicksSlice-BTBGPftx.js";import"./index-CHvbSDPi.js";import"./CartesianChart-D7JoZRAe.js";import"./chartDataContext-C9978EDJ.js";import"./CategoricalChart-BNOSmnxT.js";import"./CartesianAxis-BGltcbGd.js";import"./Layer-eVqkjfjk.js";import"./Text-CcsMLAiM.js";import"./DOMUtils-ysvCMZ9n.js";import"./useId-BiQAXzmn.js";import"./useBackwardsCompatibleTheme-Z-DwFZxL.js";import"./Label-Cbc3sDLG.js";import"./ZIndexLayer-mbz94-CG.js";import"./types-ByxJ_946.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BXDAeM5O.js";import"./useAnimationId-B20w_W1l.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IH7PyD6Z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8wUCaOd.js";import"./tooltipContext-DPVrNbtr.js";import"./RegisterGraphicalItemId-DwpGnQ-i.js";import"./ErrorBarContext-LdHiwwFE.js";import"./GraphicalItemClipPath-osbFejbO.js";import"./SetGraphicalItem-7qiiWKdg.js";import"./getZIndexFromUnknown-B621kbKb.js";import"./useGraphicalItemIdentity-kWkqpE_r.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

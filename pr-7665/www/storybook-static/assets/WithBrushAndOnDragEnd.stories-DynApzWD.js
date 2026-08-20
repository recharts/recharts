import{R as t}from"./iframe-Csa_oMfm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BxquUHtq.js";import{B as p}from"./BarChart-DLRTD-Q7.js";import{X as l}from"./XAxis-uDV1OEUW.js";import{Y as h}from"./YAxis-tYvWvlOq.js";import{B as x}from"./Brush-RFzFYGsY.js";import{B as c}from"./Bar-BNalVyG7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSxXhEFU.js";import"./index-DAq0SL0A.js";import"./index-IjpwRB6F.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Byem5JrG.js";import"./isWellBehavedNumber-DWOo1BMI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQ2cp1Au.js";import"./index-CfKNqcoW.js";import"./index-CRP06Y07.js";import"./axisSelectors-BG4FCknP.js";import"./d3-scale-BtpAo9Oq.js";import"./renderedTicksSlice-CaOZRI6N.js";import"./CartesianChart-LGWyPi5p.js";import"./chartDataContext-BH4G6z7_.js";import"./CategoricalChart-DnCPfHVF.js";import"./CartesianAxis-Cukq_zeL.js";import"./Layer-BKPwema6.js";import"./Text-C_eX2bjG.js";import"./DOMUtils-BFEBcDdR.js";import"./useId-D1v4eS8N.js";import"./useBackwardsCompatibleTheme-D8HYBwfJ.js";import"./Label-KmPVqzrB.js";import"./ZIndexLayer-Dj0ApPdW.js";import"./types-C6llbAwt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DNlS9_lf.js";import"./useAnimationId-C2aTUSsq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHMSO-4U.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtwpfCs_.js";import"./tooltipContext-Ux_aw3-4.js";import"./RegisterGraphicalItemId-BpNCJT0O.js";import"./ErrorBarContext-Ch5kSSkb.js";import"./GraphicalItemClipPath-BFLHGHAh.js";import"./SetGraphicalItem-DHDvzfH7.js";import"./getZIndexFromUnknown-CiBmCZb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B12qC28t.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

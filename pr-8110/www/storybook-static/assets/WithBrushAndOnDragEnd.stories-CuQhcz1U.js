import{R as t}from"./iframe-oYyBRks2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CbmXT1dz.js";import{B as p}from"./BarChart-KboVuQvJ.js";import{X as l}from"./XAxis-DvAGam0D.js";import{Y as h}from"./YAxis-CQwSDKOg.js";import{B as x}from"./Brush-CkAQc6L9.js";import{B as c}from"./Bar-Dg4fxgNN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lgcxhifZ.js";import"./throttle-teQP-xJt.js";import"./index-uP8uPv2q.js";import"./index-C0E8rQWU.js";import"./RechartsWrapper-BEJButs1.js";import"./axisSelectors-CzrEReB-.js";import"./polarAxisSelectors-FwVZQ2F9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dsmu7PfS.js";import"./index-CorLv6ho.js";import"./index-DI7MM_Df.js";import"./renderedTicksSlice-PDwTct7N.js";import"./index-DhsLJ5T7.js";import"./CartesianChart-Bd-kZVr0.js";import"./ZIndexPortal-B7800aDw.js";import"./CategoricalChart-DoegTXhB.js";import"./CartesianAxis-C0SgAXkt.js";import"./Layer-CyxA7s2s.js";import"./Text-BTTN-58y.js";import"./DOMUtils-oL4xRmBr.js";import"./ZIndexLayer-D9yXy4ut.js";import"./Label-D2Ghzufd.js";import"./types-C_jjefDJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D0at5SMs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8sd_KAoB.js";import"./useAnimationId-C-eWMsqK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUKShifC.js";import"./tooltipContext-BsFwGvkO.js";import"./dataEntryStyles-C_5MqVGt.js";import"./ErrorBarContext-CVpEUN9z.js";import"./activeStyles-chOek7GE.js";import"./SetGraphicalItem-CofyTZmK.js";import"./getZIndexFromUnknown-DFrO-Gqk.js";import"./useEffectiveDataKey-BvG_PE5-.js";import"./fillDefinitions-BuAadA4s.js";import"./omit-AsRof3ey.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

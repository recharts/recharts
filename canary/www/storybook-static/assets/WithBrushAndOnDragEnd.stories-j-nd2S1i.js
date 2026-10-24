import{R as t}from"./iframe-02jumC35.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dh2CbWTc.js";import{B as p}from"./BarChart-ChYxqXOj.js";import{X as l}from"./XAxis-CnRK3wsv.js";import{Y as h}from"./YAxis-mNI4SsbU.js";import{B as x}from"./Brush--m_3neW5.js";import{B as c}from"./Bar-DsXmJiTW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3YzeAkV.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClpzkpkH.js";import"./axisSelectors-M7ebD7ER.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./CartesianAxis-BreAXyHF.js";import"./Layer-BluUqzQG.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./Label-DdA7iutk.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./types-BU7rhtDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BV4ZXPNg.js";import"./useAnimationId-BlDuhaIC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tsu_f_5l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./tooltipContext-CKevtMBv.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getZIndexFromUnknown-B_k9-Flt.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./omit-CaKZlrh-.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};

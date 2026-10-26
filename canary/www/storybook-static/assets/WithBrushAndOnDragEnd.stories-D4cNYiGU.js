import{R as t}from"./iframe-DPP4Tdri.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bty8FlsF.js";import{B as p}from"./BarChart-D_ss555F.js";import{X as l}from"./XAxis-BpxUBGxx.js";import{Y as h}from"./YAxis-Ce7IYC8C.js";import{B as x}from"./Brush-DrVgAJgd.js";import{B as c}from"./Bar-kJNtSnDL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./throttle-vvUvRomY.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./RechartsWrapper-Dc5A4Gsl.js";import"./axisSelectors-D5c_jQLf.js";import"./polarAxisSelectors-CClqMsSX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzX31dlW.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./Layer-wOFD4jm5.js";import"./Text-BtmpD8Z5.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./Label-VwhFHh0o.js";import"./dataEntryStyles-CptsKKQm.js";import"./types-nPujXrb0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Czb_VVwe.js";import"./useAnimationId-CRGpdxWH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYtgedmy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./tooltipContext-BbQ3hIxk.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./getZIndexFromUnknown-CYps8qNe.js";import"./useEffectiveDataKey-CPqFi3kZ.js";import"./omit-DeVuR1ub.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

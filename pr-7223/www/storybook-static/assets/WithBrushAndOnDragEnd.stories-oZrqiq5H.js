import{e as t}from"./iframe-DCw0tqQR.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C2tBZ1Qy.js";import{B as p}from"./BarChart-CMg4KRYr.js";import{X as l}from"./XAxis-DMq4si8_.js";import{Y as h}from"./YAxis-C3HUNKiJ.js";import{B as c}from"./Brush-ubI6P9lL.js";import{B as x}from"./Bar-gyHwn_4k.js";import{R as u}from"./RechartsHookInspector-Da0J_Xb_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCiQMHzG.js";import"./immer-DgwGzr0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKHRd-Jp.js";import"./index-kR5_0WmK.js";import"./hooks-BPO7V1JU.js";import"./axisSelectors-CtQi-3sb.js";import"./d3-scale-BoxOwXVD.js";import"./zIndexSlice-pEXw6d_M.js";import"./renderedTicksSlice-Bz3CfhIT.js";import"./CartesianChart-ARcHu8Al.js";import"./chartDataContext-DTKyXvOp.js";import"./CategoricalChart-2d0K-n2g.js";import"./CartesianAxis-oFVfgyCE.js";import"./Layer-DecK4sAB.js";import"./Text-DQrSc9C-.js";import"./DOMUtils-xep50AIj.js";import"./Label-CVZgdgXC.js";import"./ZIndexLayer-BYzXZQRZ.js";import"./types-DB1MifHz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Yd0dkIj1.js";import"./ReactUtils-ByaRZgWA.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fUwPie4c.js";import"./isPlainObject-CI4Edtk9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CriYIqhs.js";import"./useAnimationId-S3q8t8Nn.js";import"./Trapezoid-C7C4G9Uc.js";import"./Sector-CZ4caSpO.js";import"./Symbols-Ox381-HO.js";import"./symbol-Bs1LM99d.js";import"./step-C_4-RC3B.js";import"./Curve-BWU1MAzM.js";import"./RegisterGraphicalItemId-DNtaubKm.js";import"./ErrorBarContext-B44IbcKq.js";import"./GraphicalItemClipPath-DLhSizGK.js";import"./SetGraphicalItem-D17tmuod.js";import"./getZIndexFromUnknown-DDU6-irb.js";import"./graphicalItemSelectors-Cv1vjDoD.js";import"./index-CbS5rSne.js";import"./ChartSizeDimensions-DnWIR9Zc.js";import"./OffsetShower-DCtIXei-.js";import"./PlotAreaShower-AaZ9KRHa.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};

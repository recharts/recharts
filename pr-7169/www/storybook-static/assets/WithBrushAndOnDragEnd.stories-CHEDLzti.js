import{e as t}from"./iframe-CB4rwuoz.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B0sfDo8e.js";import{B as p}from"./BarChart-DpANSpM8.js";import{X as l}from"./XAxis-DCt1RS6w.js";import{Y as h}from"./YAxis-BaJrW052.js";import{B as c}from"./Brush-CznQrljE.js";import{B as x}from"./Bar-BIPFVWOZ.js";import{R as u}from"./RechartsHookInspector-c3RyaB9m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aRufe_6H.js";import"./immer-BWNyrJnU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VUmZrQSA.js";import"./index-BgC6MCXe.js";import"./hooks-DoXZqLBz.js";import"./axisSelectors-BlEjC6I8.js";import"./d3-scale-BjYlm7DL.js";import"./zIndexSlice-CX5pCWFs.js";import"./renderedTicksSlice-B7tbCiQT.js";import"./CartesianChart-Bwy1F3hm.js";import"./chartDataContext-D2Mcqnh5.js";import"./CategoricalChart-RjnDaFgq.js";import"./CartesianAxis-CMMIwY9U.js";import"./Layer-CF-S8dmg.js";import"./Text-BQ5lZJu1.js";import"./DOMUtils-CBex0cbx.js";import"./Label-C4bu2feL.js";import"./ZIndexLayer-DoMA1dJ2.js";import"./types-CgQDsaUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D5iTOQdR.js";import"./ReactUtils-BKtMub4g.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CXBvI7fg.js";import"./isPlainObject-ExidMtfN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BToq8Jht.js";import"./useAnimationId-CLj3uDOB.js";import"./Trapezoid-oQAH4GDD.js";import"./Sector-C4kas-8x.js";import"./Symbols-CMdoO83a.js";import"./symbol-C980TeYk.js";import"./step-BgqYgAla.js";import"./Curve-DX-WNmjD.js";import"./RegisterGraphicalItemId-mDbm0o4v.js";import"./ErrorBarContext-C9ucf0NL.js";import"./GraphicalItemClipPath-CewNEzcT.js";import"./SetGraphicalItem-Df_Fprv_.js";import"./getZIndexFromUnknown-Df4s3J8D.js";import"./graphicalItemSelectors-6Ztty2tI.js";import"./index-DLNZT6vI.js";import"./ChartSizeDimensions-D60uICZH.js";import"./OffsetShower-C1ie4azQ.js";import"./PlotAreaShower-T2_0B54j.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

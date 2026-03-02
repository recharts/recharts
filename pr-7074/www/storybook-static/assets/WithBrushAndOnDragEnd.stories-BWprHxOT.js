import{e as t}from"./iframe-YHIi0zNq.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CiMVM-SL.js";import{B as p}from"./BarChart-rd3ckUyw.js";import{X as l}from"./XAxis-kqqXeMbl.js";import{Y as h}from"./YAxis-EBaaYeoG.js";import{B as c}from"./Brush-CsXsADOx.js";import{B as x}from"./Bar-Ow4h9FCb.js";import{R as u}from"./RechartsHookInspector-Cdc_RxXj.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./immer-D_GJadju.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o-AfycQs.js";import"./index-u4istH96.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./zIndexSlice-DeqvswTX.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Layer-xP0kyya2.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./ZIndexLayer-ntDhn9GI.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CJg7C4G4.js";import"./ReactUtils-HN0dEhAf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BKfvV8h2.js";import"./isPlainObject-GBUylHQy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtRVLgVP.js";import"./useAnimationId-ZghgqyXB.js";import"./Trapezoid-CkRbYMAh.js";import"./Sector-BgEwi5iM.js";import"./Symbols-jxhochxb.js";import"./symbol-B8nih3Ay.js";import"./step-ByfP7lrq.js";import"./Curve-fcCSfps7.js";import"./RegisterGraphicalItemId-LQPm_pAb.js";import"./ErrorBarContext-CYNYOD56.js";import"./GraphicalItemClipPath-Iw5JYGhP.js";import"./SetGraphicalItem-CUARmGp-.js";import"./getZIndexFromUnknown-BXOE4--R.js";import"./graphicalItemSelectors-CSTEPztl.js";import"./index-Cat5Cyt-.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

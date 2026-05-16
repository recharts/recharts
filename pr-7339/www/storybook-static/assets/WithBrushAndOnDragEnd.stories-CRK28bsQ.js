import{e as t}from"./iframe-CiPNgAw4.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-C6nfogx3.js";import{B as p}from"./BarChart-CpK1R00g.js";import{X as l}from"./XAxis-BLKgRQop.js";import{Y as h}from"./YAxis-D3BtMUGk.js";import{B as c}from"./Brush-DRfvqQOV.js";import{B as x}from"./Bar-CQsMh6Ip.js";import{R as u}from"./RechartsHookInspector-CVL4J5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BDpBhHr1.js";import"./immer-BXEbVIgV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7DJEHdB.js";import"./index-DQVpqsS2.js";import"./hooks-BI7NI193.js";import"./axisSelectors-Cy_y_L06.js";import"./d3-scale-CMk2gc8P.js";import"./zIndexSlice-BxzsaYhB.js";import"./renderedTicksSlice-Bj7nK2mV.js";import"./CartesianChart-BCFleW8G.js";import"./chartDataContext-BajvTs6w.js";import"./CategoricalChart-DbOO-7mB.js";import"./CartesianAxis-CWGiyJPj.js";import"./Layer-tX1B1sjt.js";import"./Text-BwxXBXY0.js";import"./DOMUtils-D_v29T4S.js";import"./Label-C61zhpRD.js";import"./ZIndexLayer-D-L4yEZ6.js";import"./types-DpsbB84I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BNVb3LYw.js";import"./ReactUtils-2ol7Qocl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DVoj5wPa.js";import"./isPlainObject-32kxwUzR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvhSXBPG.js";import"./useAnimationId-ZolSEiin.js";import"./Trapezoid-DD_RcOCU.js";import"./Sector-Cott3o-2.js";import"./Symbols-CZNQWcFs.js";import"./symbol-DD46dP6C.js";import"./step-DNW2l5aF.js";import"./Curve-CIk8sgOv.js";import"./RegisterGraphicalItemId-Cfezvs_M.js";import"./ErrorBarContext-DeoWvLpT.js";import"./GraphicalItemClipPath-KikDG9N5.js";import"./SetGraphicalItem-Cc5PlSKV.js";import"./getZIndexFromUnknown-C4t-cI7u.js";import"./graphicalItemSelectors-CCnqSED4.js";import"./index-BVLD_GdP.js";import"./ChartSizeDimensions-BUpN4cof.js";import"./OffsetShower-BX6EEwKB.js";import"./PlotAreaShower-D9cRvfnk.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

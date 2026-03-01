import{e as t}from"./iframe-BKMt6m5h.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DKiSJyxs.js";import{B as p}from"./BarChart-DZe5YZCe.js";import{X as l}from"./XAxis-CDLcqOUJ.js";import{Y as h}from"./YAxis-BewdCXRw.js";import{B as c}from"./Brush-CPkKx1TX.js";import{B as x}from"./Bar-DOGhU9lm.js";import{R as u}from"./RechartsHookInspector-C8vh1C69.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRqv39RM.js";import"./immer-119-Vx0I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBmXgxrR.js";import"./index-0ICx_Jh1.js";import"./hooks-CVLKfhqZ.js";import"./axisSelectors-_eXkUPwd.js";import"./d3-scale-eFzonIBi.js";import"./zIndexSlice-C-hcpEb_.js";import"./renderedTicksSlice-CoSXmQJE.js";import"./CartesianChart-DIHhcgBc.js";import"./chartDataContext-BHrrZZEw.js";import"./CategoricalChart-BQZ3b4pY.js";import"./CartesianAxis-BvH7Qvln.js";import"./Layer-C7IPz0M5.js";import"./Text-DA8ucQjy.js";import"./DOMUtils-AZdfoklW.js";import"./Label-COa6_klK.js";import"./ZIndexLayer-BVz5K0QN.js";import"./types-CWEN2hKj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B56jwArc.js";import"./ReactUtils-ChQm2gA4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CFZSnkxp.js";import"./isPlainObject-7Y5kwcXL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_C8hcZh.js";import"./useAnimationId-CMiOk1pX.js";import"./Trapezoid-Cs1O72ba.js";import"./Sector-_bf6LJcr.js";import"./Symbols-DEMmgvtO.js";import"./symbol-Mq3R2Ynh.js";import"./step-q1byNl46.js";import"./Curve-CIJPKaTL.js";import"./RegisterGraphicalItemId-Cr9Zp2xj.js";import"./ErrorBarContext-CYXSxlYD.js";import"./GraphicalItemClipPath-DfzX8699.js";import"./SetGraphicalItem-DCaX05zE.js";import"./getZIndexFromUnknown-CSyNK56G.js";import"./graphicalItemSelectors-DyRpgfDi.js";import"./index-CM5FbTKx.js";import"./ChartSizeDimensions-DMUyiIA2.js";import"./OffsetShower-r91l4zph.js";import"./PlotAreaShower-Sm9yLIMv.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{e as t}from"./iframe-CGwnqAI9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DRh0NsZa.js";import{B as p}from"./BarChart-Cg79XJdw.js";import{X as l}from"./XAxis-B1wOh-_6.js";import{Y as h}from"./YAxis-DQ_Ub3Le.js";import{B as c}from"./Brush-C-vZ_kHj.js";import{B as x}from"./Bar-B_TbIHQq.js";import{R as u}from"./RechartsHookInspector-Dp5vB4hQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DSTq7oxQ.js";import"./immer-DfOKcAuw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DByz9jGi.js";import"./index-mavG575g.js";import"./hooks-CyDmPBvG.js";import"./axisSelectors-BGY1T7LG.js";import"./d3-scale-DlZgn0s2.js";import"./zIndexSlice-BTBhIRz7.js";import"./renderedTicksSlice-C0ADS2ij.js";import"./CartesianChart-Bbfh0WUo.js";import"./chartDataContext-oPYA1VCq.js";import"./CategoricalChart-COt4unt0.js";import"./CartesianAxis-4LCb4x4u.js";import"./Layer-CQ6uqOgk.js";import"./Text-DNmyQGES.js";import"./DOMUtils-nZK1ZF4e.js";import"./Label-CJpeNkBK.js";import"./ZIndexLayer-CMaPWngm.js";import"./types-VBg1tlke.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CD0S6N6h.js";import"./ReactUtils-CbJaRrjx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CKeH7i0X.js";import"./isPlainObject-BF1Vp7m2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsqGVbsk.js";import"./useAnimationId-DHwy2PIZ.js";import"./Trapezoid-BXyomBoy.js";import"./Sector-NwDh2164.js";import"./Symbols-CWdafSUI.js";import"./symbol-D9RrWTM2.js";import"./step-BVKFw9bQ.js";import"./Curve-kVtEDQbb.js";import"./RegisterGraphicalItemId-nbnlv4b-.js";import"./ErrorBarContext-CxWaFe4Q.js";import"./GraphicalItemClipPath-kWf0wfBs.js";import"./SetGraphicalItem-p36bNdDU.js";import"./getZIndexFromUnknown-CXlqZpEE.js";import"./graphicalItemSelectors-D4cd_ynK.js";import"./index-JaLX6-zQ.js";import"./ChartSizeDimensions-DcTb07cJ.js";import"./OffsetShower-DNDx_7Gv.js";import"./PlotAreaShower-C1OT31tE.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

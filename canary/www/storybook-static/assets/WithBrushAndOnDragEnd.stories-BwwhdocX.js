import{R as t}from"./iframe-Bv6Dcd9T.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DGhXPr-9.js";import{B as p}from"./BarChart-DHylwHdG.js";import{X as l}from"./XAxis-CSpcOKY2.js";import{Y as h}from"./YAxis-DHQaIYZw.js";import{B as x}from"./Brush-3A0tmsz-.js";import{B as c}from"./Bar-BL3gDLKD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BcQ01sX8.js";import"./index-CcYReNCh.js";import"./index-CxI2Eqca.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D_NqfWCM.js";import"./isWellBehavedNumber-CU7VWJn9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTS_6Eoq.js";import"./index-DdiL_HAM.js";import"./index-DzmElQg1.js";import"./renderedTicksSlice-CJ-EtdQM.js";import"./axisSelectors-BcVMUp1z.js";import"./d3-scale-CClsGt0Z.js";import"./CartesianChart-DBwo_mBR.js";import"./chartDataContext-BjtAcLZf.js";import"./CategoricalChart-BwO0IaNH.js";import"./CartesianAxis-COkD_qks.js";import"./Layer-DlkJXe1G.js";import"./Text-00C33NA5.js";import"./DOMUtils-C-FPV1O8.js";import"./Label-CQaeTHfg.js";import"./ZIndexLayer-DxBey86b.js";import"./types-CAucql9k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CoPM4J4n.js";import"./AnimatedItems-xeFS2cCQ.js";import"./useAnimationId-K5YFgJBV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtFCyLS0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BPmEcXgb.js";import"./RegisterGraphicalItemId-9ZN-jgk_.js";import"./ErrorBarContext-GKGPhv_o.js";import"./GraphicalItemClipPath-BS-sqKFj.js";import"./SetGraphicalItem-BQ96Q1Zd.js";import"./getZIndexFromUnknown-DR6AcVsZ.js";import"./graphicalItemSelectors-DtfFeKs3.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

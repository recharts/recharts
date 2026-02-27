import{e as t}from"./iframe-CLFlzKU9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CV0K5b6V.js";import{B as p}from"./BarChart-DFIpLTFT.js";import{X as l}from"./XAxis-CTep6ajY.js";import{Y as h}from"./YAxis-1XrS4lWj.js";import{B as c}from"./Brush-MP59YRJX.js";import{B as x}from"./Bar-av_n40dl.js";import{R as u}from"./RechartsHookInspector-EUreR-RY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./immer-Dut6E3j8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./index-Di3CFc3K.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./zIndexSlice-Dgcx4EWE.js";import"./renderedTicksSlice-qTsdruV1.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./CartesianAxis-U7WBccnc.js";import"./Layer-D55T8TbI.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./Label-B8vPAEDz.js";import"./ZIndexLayer-CygGErko.js";import"./types-C77fUvNb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Ckh_FF-f.js";import"./ReactUtils-KqS4Be82.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CngmHGxL.js";import"./isPlainObject-C5TOG-jr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGUQeJvS.js";import"./useAnimationId-B-nqwfiH.js";import"./Trapezoid-Nj1UelrR.js";import"./Sector-BGoD3vr5.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";import"./step-BHh7-B-Y.js";import"./Curve-04aIAzqq.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./ErrorBarContext-CcCgl_nm.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./getZIndexFromUnknown-C9sI_tWh.js";import"./graphicalItemSelectors-B0cHLovH.js";import"./index-CmeZFfhb.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

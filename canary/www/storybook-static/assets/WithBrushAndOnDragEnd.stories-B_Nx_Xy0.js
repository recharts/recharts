import{e}from"./iframe-CjUtT138.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B-tT2ESq.js";import{B as p}from"./BarChart-C6qz8_Oa.js";import{X as l}from"./XAxis-CEXHANTM.js";import{Y as h}from"./YAxis-Cz0XZWIE.js";import{B as c}from"./Brush-CDSPtFgI.js";import{B as x}from"./Bar-yfqk3EUx.js";import{R as u}from"./RechartsHookInspector-BSSs4sC-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXKWDAOg.js";import"./PolarUtils-_eTStEZn.js";import"./RechartsWrapper-it-0F-jx.js";import"./hooks-4UrLvWFw.js";import"./axisSelectors-BX9CBNHK.js";import"./zIndexSlice-DsVMOISz.js";import"./CartesianChart-DOBNNTq5.js";import"./chartDataContext-Cd_ntzly.js";import"./CategoricalChart-QNPsXY_1.js";import"./CartesianAxis-OEoEt9oE.js";import"./Layer-D_MGslDL.js";import"./Text-DwSJp926.js";import"./DOMUtils-D7gju_6v.js";import"./Label-BL8V4Wmg.js";import"./ZIndexLayer-DLNaK2nP.js";import"./types-C9Ftyw06.js";import"./tooltipContext-DSCUXggB.js";import"./ReactUtils-CHVaJjT2.js";import"./ActiveShapeUtils-BsX54dsF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Btcn2slE.js";import"./useAnimationId-D51fABKH.js";import"./Trapezoid-tluOV2am.js";import"./Sector-DLzrEVZJ.js";import"./Symbols-Lp37GtaH.js";import"./Curve-vYHSIBiw.js";import"./RegisterGraphicalItemId-BsU6Bbki.js";import"./ErrorBarContext-M64mzIpO.js";import"./GraphicalItemClipPath-BkNEqUtH.js";import"./SetGraphicalItem-pIRkDX-c.js";import"./getZIndexFromUnknown-KSHxbmXm.js";import"./graphicalItemSelectors-D7G1T64w.js";import"./index-CYZv41C2.js";import"./ChartSizeDimensions-CNTgDKUn.js";import"./OffsetShower-Cvrl070M.js";import"./PlotAreaShower-Bo9f_x1d.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};

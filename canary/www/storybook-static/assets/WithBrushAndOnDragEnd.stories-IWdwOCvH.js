import{R as t}from"./iframe-1fJ5z_WZ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BJlX5T59.js";import{B as p}from"./BarChart-wB_QrGpF.js";import{X as l}from"./XAxis-Kvj5vG7_.js";import{Y as h}from"./YAxis-De-4AuvJ.js";import{B as x}from"./Brush-D6llGLF3.js";import{B as c}from"./Bar-Bxudt8Ic.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./throttle-6GiZsFaS.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./RechartsWrapper-CR62a_mQ.js";import"./axisSelectors-V7mZ-cGP.js";import"./polarAxisSelectors-DJTK4O93.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqY1ZQ_w.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./CartesianAxis-DL2qV91b.js";import"./Layer-6gV2DTZI.js";import"./Text-BeONQBVt.js";import"./ZIndexLayer-CrU6dYup.js";import"./Label-C7hOOLTD.js";import"./types-XVdAxFZ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CqRs5fjI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kcn0wIRK.js";import"./useAnimationId-BaNyc8zg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./tooltipContext-BvBvAVwb.js";import"./ErrorBarContext-CHpXmxM4.js";import"./activeStyles-C3pl5b-R.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getZIndexFromUnknown-C3twUa9l.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./omit-C4r1CQBm.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

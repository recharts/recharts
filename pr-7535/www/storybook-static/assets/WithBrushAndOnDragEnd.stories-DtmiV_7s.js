import{R as t}from"./iframe-7XJ2xcaa.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Smyg0ZdR.js";import{B as p}from"./BarChart-picI59ip.js";import{X as l}from"./XAxis-C1fpfCfO.js";import{Y as h}from"./YAxis-BG1hFypZ.js";import{B as x}from"./Brush-CBAYCJK9.js";import{B as c}from"./Bar-C4vgLWR3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D4811UcH.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./renderedTicksSlice-C2Tixweq.js";import"./axisSelectors-BEWMGkmB.js";import"./d3-scale-BuuUT6V5.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./CartesianAxis-OiUDsUEB.js";import"./Layer-BGcXXZrK.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./Label-kaLCkxIc.js";import"./ZIndexLayer-CzQjP_gg.js";import"./types-CCvMXBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CKUlWzZu.js";import"./AnimatedItems-DXPDcN2s.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCPFxxTI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getZIndexFromUnknown-ncmLB9nU.js";import"./graphicalItemSelectors-DCsUtSMK.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

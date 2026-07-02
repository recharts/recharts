import{R as t}from"./iframe-BiO1LFJs.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CmtXwCpm.js";import{B as p}from"./BarChart-CIbMWn7p.js";import{X as l}from"./XAxis-BRwCq2oj.js";import{Y as h}from"./YAxis-JFjnQJGm.js";import{B as x}from"./Brush-B3ouWOLz.js";import{B as c}from"./Bar-DG8Zn84m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSNtF4Q0.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./isWellBehavedNumber-Dxkk48kL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./axisSelectors-C_E3bYBf.js";import"./d3-scale-B0MWpAf5.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./Label-CZnmw5cu.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-COr2JgW0.js";import"./AnimatedItems-DgpiirzW.js";import"./useAnimationId-CvsS4m8J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTCiy3q0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bl46xbNE.js";import"./RegisterGraphicalItemId-DTynMESK.js";import"./ErrorBarContext-DCf_sWWl.js";import"./GraphicalItemClipPath-BeoHEVW6.js";import"./SetGraphicalItem-BmZzevIp.js";import"./getZIndexFromUnknown-BK4fb4N5.js";import"./graphicalItemSelectors-CTNphZph.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

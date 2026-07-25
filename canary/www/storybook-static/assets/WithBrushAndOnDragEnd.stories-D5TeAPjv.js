import{R as t}from"./iframe-jpw6hTzP.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-0hywYSss.js";import{B as p}from"./BarChart-MZAB5Sdh.js";import{X as l}from"./XAxis-i-qKaY8p.js";import{Y as h}from"./YAxis-Cro589xA.js";import{B as x}from"./Brush-7j2mZkhU.js";import{B as c}from"./Bar-CwW5sQEX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyRNR61p.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./CartesianAxis-hrtgNZzr.js";import"./Layer-DBhjUf2v.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./Label-Ddiq2mWQ.js";import"./ZIndexLayer-qT8qrsoe.js";import"./types-Q9eva-kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-daoShmAn.js";import"./AnimatedItems-QuI77x2Z.js";import"./useAnimationId-BDRU6NIW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLYrXLOh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./getZIndexFromUnknown-Bs7pqycU.js";import"./graphicalItemSelectors-RdqMeZ9P.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};

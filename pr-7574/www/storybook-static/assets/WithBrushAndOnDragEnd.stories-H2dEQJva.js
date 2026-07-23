import{R as t}from"./iframe-BJ6rGQc6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BthxejHI.js";import{B as p}from"./BarChart-CTltu4Lv.js";import{X as l}from"./XAxis-DjB4BtKv.js";import{Y as h}from"./YAxis-41-XvzNM.js";import{B as x}from"./Brush-CPhFMnYg.js";import{B as c}from"./Bar-DLBcocq9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-cNz-OreL.js";import"./index-BmNs2kCE.js";import"./index-CByH2eT_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BO6O7yzj.js";import"./isWellBehavedNumber-DPc5CIJW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChNksolv.js";import"./index-mopUcmNZ.js";import"./index-Bmr20IMW.js";import"./renderedTicksSlice-C0Y7ZKTU.js";import"./axisSelectors-BLC4H6fV.js";import"./d3-scale-DN-uWHg9.js";import"./CartesianChart-Bgx90lkE.js";import"./chartDataContext-sqlI8BYS.js";import"./CategoricalChart-BQ-Zgg5z.js";import"./CartesianAxis-HIzhBiiI.js";import"./Layer-CWFT9o_4.js";import"./Text-B3HJfVNK.js";import"./DOMUtils-B9FEHnPQ.js";import"./Label-GAUKfLbl.js";import"./ZIndexLayer-Ux9EkA8k.js";import"./types-C1lw_8rt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DvBuwJmZ.js";import"./AnimatedItems-DC-H_ZkC.js";import"./useAnimationId-DQh6YXIz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-qBxWKOhj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUDn-tDt.js";import"./RegisterGraphicalItemId-Bwp-eRlf.js";import"./ErrorBarContext-CXKSzW2x.js";import"./GraphicalItemClipPath-C6Rgg4xk.js";import"./SetGraphicalItem-D1cCKorc.js";import"./getZIndexFromUnknown-D4APjW9l.js";import"./graphicalItemSelectors-Cd7Bkold.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

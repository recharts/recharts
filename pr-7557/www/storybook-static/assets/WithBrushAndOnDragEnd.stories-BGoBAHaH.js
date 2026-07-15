import{R as t}from"./iframe-CTZq4wow.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BugLLn2I.js";import{B as p}from"./BarChart-CRMmzLja.js";import{X as l}from"./XAxis-DLDzw0JX.js";import{Y as h}from"./YAxis-H48Xjaif.js";import{B as x}from"./Brush-BHbVBv0F.js";import{B as c}from"./Bar-D3T0Cmqs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyDwbdt-.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./index-C9WAMmaw.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./axisSelectors-CvXoECki.js";import"./d3-scale-oRxS8xLw.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./CartesianAxis-Fbl6c-dp.js";import"./Layer-B0eWkEir.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./Label-BA3Mm5Cp.js";import"./ZIndexLayer-JO4x2o2R.js";import"./types-Cmo79yaU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-kCJVu24k.js";import"./AnimatedItems-TPOIkuad.js";import"./useAnimationId-N1bAbizC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Zzn1I1q3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./ErrorBarContext-4wXqzGb4.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getZIndexFromUnknown-l4NVS4Rz.js";import"./graphicalItemSelectors-CB6kf9eg.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

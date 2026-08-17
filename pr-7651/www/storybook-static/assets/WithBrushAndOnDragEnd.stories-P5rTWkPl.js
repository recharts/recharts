import{R as t}from"./iframe-pNwHFSPW.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DugJPvbP.js";import{B as p}from"./BarChart-Bdxwdshv.js";import{X as l}from"./XAxis-KNJz3bpH.js";import{Y as h}from"./YAxis-BhLAmjxa.js";import{B as x}from"./Brush-CBe1EJEg.js";import{B as c}from"./Bar-Dqlr1thk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B5IaBbRH.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./isWellBehavedNumber-DROlGubD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./axisSelectors-BSoQDh0E.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./Text-BBlVElsZ.js";import"./DOMUtils-BNxHxmQg.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./Label-Bzd_UlcO.js";import"./ZIndexLayer-CUbdM7HK.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BZeu0cey.js";import"./useAnimationId-DPXGQUo9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkjZyP7u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bOSJ1OgY.js";import"./tooltipContext-QNLT4wBX.js";import"./RegisterGraphicalItemId-Cqk6hpjs.js";import"./ErrorBarContext-DVdtlYtH.js";import"./GraphicalItemClipPath-CPEJp_aS.js";import"./SetGraphicalItem-nLd7ALhr.js";import"./getZIndexFromUnknown-DTRpx5bE.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BVXi8M17.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

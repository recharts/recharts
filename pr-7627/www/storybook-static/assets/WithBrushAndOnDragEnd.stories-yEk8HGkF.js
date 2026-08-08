import{R as t}from"./iframe-BYCrCSPO.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DfD_-yb8.js";import{B as p}from"./BarChart-BI_m6QtN.js";import{X as l}from"./XAxis-3U1NuGne.js";import{Y as h}from"./YAxis-BHhfAWGr.js";import{B as x}from"./Brush-CVZ4vmWc.js";import{B as c}from"./Bar-I4cLczHV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwGaa8bA.js";import"./index-CduSCjJO.js";import"./index-DeTARG9l.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_hnhA8j.js";import"./isWellBehavedNumber-CtO4Dltx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1VDCfeR5.js";import"./index-B9LnnU9V.js";import"./index-CO8tfkky.js";import"./axisSelectors-DCnkJbPP.js";import"./d3-scale-CNobyPqZ.js";import"./renderedTicksSlice-D3LgmkWg.js";import"./CartesianChart-D_hO4lZa.js";import"./chartDataContext-BmXIjLQW.js";import"./CategoricalChart-DdsYRdkY.js";import"./CartesianAxis-DLhz-nrZ.js";import"./Layer-B3NuQ3iV.js";import"./Text-C7UGFNRC.js";import"./DOMUtils-_2tJTcuL.js";import"./Label-KQ9JDhJq.js";import"./ZIndexLayer-DS2x7pWW.js";import"./types-FnkeMo1L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUhvh7zS.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-C3sNg0eA.js";import"./AnimatedItems-B1rFvs0f.js";import"./useAnimationId-BrMFsthS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2QxPGJo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DetheFMa.js";import"./RegisterGraphicalItemId-QO0ldivF.js";import"./ErrorBarContext-P2qv3dNI.js";import"./GraphicalItemClipPath-Co8e0UKg.js";import"./SetGraphicalItem-BOoa7F9Y.js";import"./getZIndexFromUnknown-D4hLULcR.js";import"./graphicalItemSelectors-BTGcwiu4.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};

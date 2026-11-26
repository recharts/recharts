import{R as t}from"./iframe-B8h9Wvr9.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CVCC3Ewl.js";import{B as p}from"./BarChart-DIeBC8il.js";import{X as l}from"./XAxis-ClvsjJJf.js";import{Y as h}from"./YAxis-BfjaBbwl.js";import{B as x}from"./Brush-8heenocX.js";import{B as c}from"./Bar-CUjULqRW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXlTd2CB.js";import"./get-CjriyByo.js";import"./throttle-BfhZgz01.js";import"./index-CKXNY2A8.js";import"./index-R2j1A_a7.js";import"./RechartsWrapper-G4SBGBL6.js";import"./axisSelectors-DxXHcDkW.js";import"./polarAxisSelectors-DvWUU3lc.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B3tlBIXY.js";import"./index-DoR62jFZ.js";import"./index-DqggoQHU.js";import"./renderedTicksSlice-CV8xyIus.js";import"./index-y0390T2N.js";import"./fillDefinitions-DTKKCxhO.js";import"./CartesianChart-Bkkx4Fnj.js";import"./chartDataContext-BVM5VACt.js";import"./CategoricalChart-CyVTcBSA.js";import"./CartesianAxis-CJ6VDRMk.js";import"./Layer-BE-J6P8G.js";import"./Text-DY2xd2YN.js";import"./ZIndexLayer-Bx5YOPf4.js";import"./Label-WZNKLfQt.js";import"./types-BVLhjsLl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Ba3L9xmJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DWu49_Dg.js";import"./useAnimationId-D5-dWWo1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pnsLPMUZ.js";import"./tooltipContext-DS16xuY4.js";import"./ErrorBarContext-Dq6hu0_F.js";import"./activeStyles-DVd5xcPq.js";import"./SetGraphicalItem-CUEe1yBW.js";import"./getZIndexFromUnknown-rYnYQ4W6.js";import"./useEffectiveDataKey-Bc62JqkW.js";import"./omit-Bw5jP466.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

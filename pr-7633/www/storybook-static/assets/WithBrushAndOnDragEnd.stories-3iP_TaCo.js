import{R as t}from"./iframe-D9rYPFI6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C3wsTrp9.js";import{B as p}from"./BarChart-60CzQN_o.js";import{X as l}from"./XAxis-QgJPS01w.js";import{Y as h}from"./YAxis-9YjsfZpB.js";import{B as x}from"./Brush-Brxu3yN8.js";import{B as c}from"./Bar-DLmVZAc_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JMn6s7-r.js";import"./index-CBOJEfGe.js";import"./index-D-oLxkfn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ULtnpSod.js";import"./isWellBehavedNumber-wns85k-s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DraVZS0h.js";import"./index-BwM3wMsV.js";import"./index-BxIft0ja.js";import"./axisSelectors-BEMJ5G3d.js";import"./d3-scale-CWZ2NBQb.js";import"./renderedTicksSlice-BQcf9eI6.js";import"./CartesianChart-CbCZKRVf.js";import"./chartDataContext-C9SNw5Kb.js";import"./CategoricalChart-BTp1W0gj.js";import"./CartesianAxis-vGmXII6H.js";import"./Layer-Dvgn5PDs.js";import"./Text-CPEEagO_.js";import"./DOMUtils-DnqcKz1X.js";import"./Label-VP1_-jlA.js";import"./ZIndexLayer-CJhkiIkj.js";import"./types-BrxWVo-u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CrN5KJo6.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BzUY6gWC.js";import"./AnimatedItems-JH_MyxHu.js";import"./useAnimationId-CBJcnsSW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CD4a3Cj_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yvf6fJP9.js";import"./RegisterGraphicalItemId-Can_TNgi.js";import"./ErrorBarContext-v151GJ1I.js";import"./GraphicalItemClipPath-CiKUQeNX.js";import"./SetGraphicalItem-AXc71c8D.js";import"./getZIndexFromUnknown-QZiyIskH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IhPtoSXH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

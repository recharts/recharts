import{R as t}from"./iframe-mx_m0Bbx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DzRj0O2j.js";import{B as p}from"./BarChart-BQWLPbvu.js";import{X as l}from"./XAxis-e2aIYDeC.js";import{Y as h}from"./YAxis-D0miqhdY.js";import{B as x}from"./Brush-ttIThXzG.js";import{B as c}from"./Bar-BLrhuKRP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4NetDSi.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./axisSelectors-BCNbmsqC.js";import"./d3-scale-Dkhn0JVn.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./CartesianAxis-uqQC2EBI.js";import"./Layer-CIGRgmJf.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./Label-CTtz2nFH.js";import"./ZIndexLayer-DoWBLOas.js";import"./types-CGXKV1tr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DrwEEe3Q.js";import"./AnimatedItems-CxqbLrvD.js";import"./useAnimationId-B1RQqc1z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KZcqepmk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./ErrorBarContext-DRhFO-yz.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getZIndexFromUnknown-DFSjb3cp.js";import"./graphicalItemSelectors-CIKPVBBJ.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

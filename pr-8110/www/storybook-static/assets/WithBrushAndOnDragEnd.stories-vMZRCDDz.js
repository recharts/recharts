import{R as t}from"./iframe-LvrC9cNQ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Chla-YhC.js";import{B as p}from"./BarChart-DJ5Iu2Ag.js";import{X as l}from"./XAxis-ja2TXwgr.js";import{Y as h}from"./YAxis-C7vYJVdQ.js";import{B as x}from"./Brush-CoqtYzxM.js";import{B as c}from"./Bar-Ua0zARqk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yQwV084p.js";import"./throttle-BrACn0xJ.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./axisSelectors-C8xBMBuJ.js";import"./polarAxisSelectors-DMX56tfl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfvKpIbF.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./CartesianAxis-D4FB0bCi.js";import"./Layer-CcIpGH5s.js";import"./Text-DGG_TkrL.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./Label-DdT2eLCH.js";import"./types-Dk8bWHyp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DdXF3DfJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D15iKpUy.js";import"./useAnimationId-BX5uo1zq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./tooltipContext-D4P317Ja.js";import"./dataEntryStyles-CJNDsNBI.js";import"./ErrorBarContext-CdeJUeJW.js";import"./activeStyles-MYCrrU5C.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getZIndexFromUnknown-D7VTdN_Z.js";import"./useEffectiveDataKey-BIhhRaL_.js";import"./fillDefinitions-CA9aYCap.js";import"./omit-DdDKpAPD.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

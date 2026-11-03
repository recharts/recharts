import{R as t}from"./iframe-C4yajH80.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BfiJerBV.js";import{B as p}from"./BarChart-Bk-jzTIj.js";import{X as l}from"./XAxis-BFxxSACP.js";import{Y as h}from"./YAxis-CKXsneZC.js";import{B as x}from"./Brush-BcGQPnYd.js";import{B as c}from"./Bar-Dwnxi2Xk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./throttle-A9at9acq.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./RechartsWrapper-EDwJ-hpd.js";import"./axisSelectors-C4wAO8K7.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fBzFIMPy.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./CartesianAxis-CiDuuMHX.js";import"./Layer-D0yKuovh.js";import"./Text-Bi36EJ7d.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./Label-B6ownNND.js";import"./types-CL_v27h0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-C_dQABL5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Co2_9m8t.js";import"./useAnimationId-BUxfS1h6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./tooltipContext-CWv0OsXH.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./ErrorBarContext-ELy3xUI7.js";import"./activeStyles-DvcaieBh.js";import"./SetGraphicalItem-aXzYe790.js";import"./getZIndexFromUnknown-D-oKNjXm.js";import"./useEffectiveDataKey-RrCx3xE8.js";import"./omit-CfBlZ-ZR.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

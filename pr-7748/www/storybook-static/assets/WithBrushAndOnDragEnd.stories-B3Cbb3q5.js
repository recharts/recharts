import{R as t}from"./iframe-SOI7ETqc.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BU6oUWx4.js";import{B as p}from"./BarChart-CKPYNx6P.js";import{X as l}from"./XAxis-gIhRIlH1.js";import{Y as h}from"./YAxis-Du2dgY78.js";import{B as x}from"./Brush-DwHgBKdz.js";import{B as c}from"./Bar-C9ihTEjc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./throttle-BuYpA644.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./RechartsWrapper-2ihhOObz.js";import"./axisSelectors-DhazdA5O.js";import"./polarAxisSelectors-C18_Wica.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3TBblIj9.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./Text-CVVDOvxk.js";import"./ZIndexLayer-uSStm6JU.js";import"./Label-_MgncHEc.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKn3hEIk.js";import"./useAnimationId-C4SjfD_p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./tooltipContext-Cq5r6BX8.js";import"./ErrorBarContext-DHxWeWr-.js";import"./activeStyles--vF_fmID.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./getZIndexFromUnknown-CXowfawV.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./omit-eSH-Qxde.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-BV4BJT-m.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B-lthx1D.js";import{B as p}from"./BarChart-nG5AYqAW.js";import{X as l}from"./XAxis-Dddiy3kS.js";import{Y as h}from"./YAxis-DrgVb9Ay.js";import{B as x}from"./Brush-ZMOh5_vH.js";import{B as c}from"./Bar-DO37x2do.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./throttle-2G-03cGC.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./RechartsWrapper-BCKkTVf1.js";import"./axisSelectors-DnTNEhev.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9I0ClQu9.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./CartesianAxis-D1XYtW-z.js";import"./Layer-C4zlYTAs.js";import"./Text-CO85_-F3.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./Label-xll97smN.js";import"./types-CgGLncla.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-B3uF9y0j.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtlT2XYk.js";import"./useAnimationId-BaOUwCNw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./tooltipContext-GDisYEj5.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./ErrorBarContext-CgppqQDQ.js";import"./activeStyles-DPABJUlt.js";import"./SetGraphicalItem-BojvnrYu.js";import"./getZIndexFromUnknown-DopZR3Lo.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./omit-Kyb53XVe.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

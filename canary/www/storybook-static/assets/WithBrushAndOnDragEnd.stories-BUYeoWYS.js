import{R as t}from"./iframe-BXyks5nv.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DGicPDgx.js";import{B as p}from"./BarChart-J3pk4I9Z.js";import{X as l}from"./XAxis-CgBDJfd7.js";import{Y as h}from"./YAxis-8vdoPbT3.js";import{B as x}from"./Brush-CDhLJILm.js";import{B as c}from"./Bar-uTMPVT3q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-t9RGNc5u.js";import"./throttle-BMtt0Eqt.js";import"./index-Brvwee9M.js";import"./index-W4KahICV.js";import"./RechartsWrapper-ybz91CxZ.js";import"./axisSelectors-58u8_YZx.js";import"./polarAxisSelectors-DMqgJFL7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgObkVdI.js";import"./index-DYE61kxi.js";import"./index-CNe8-YXd.js";import"./renderedTicksSlice-kjkWbf2b.js";import"./index-Ci615jxM.js";import"./CartesianChart-BvGgkH75.js";import"./ZIndexPortal-97xDukRB.js";import"./CategoricalChart-BARINQPN.js";import"./CartesianAxis-BC_l_0hm.js";import"./Layer-x02rJScX.js";import"./Text-DpKdLlQu.js";import"./pageBackground-ButgTNwE.js";import"./ZIndexLayer-aWdCgojo.js";import"./Label-DVoMofK2.js";import"./types-DxlZCjsw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BWqHNOr4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ozvy3-Co.js";import"./useAnimationId-DXaogzGC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6rYuavq.js";import"./tooltipContext-JspXPy5S.js";import"./dataEntryStyles-stu4dp7O.js";import"./ErrorBarContext-B3eXKAAe.js";import"./activeStyles-CF_8K1QH.js";import"./SetGraphicalItem-CyPK3B5U.js";import"./getZIndexFromUnknown-CMXoB80-.js";import"./useEffectiveDataKey-BzrOPzFS.js";import"./omit-BEEzFRQP.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

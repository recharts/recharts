import{R as t}from"./iframe-tfhlM7RE.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B471v4Lb.js";import{B as p}from"./BarChart-B9WSI4jI.js";import{X as l}from"./XAxis-B7I9Q0Cl.js";import{Y as h}from"./YAxis-h2SUOBLw.js";import{B as x}from"./Brush-ScRd--wr.js";import{B as c}from"./Bar-pTnDyAVt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DL75x_1S.js";import"./throttle-CXjKONS2.js";import"./index-BTN7W_Yl.js";import"./index-lTJQPG4X.js";import"./RechartsWrapper-DDpiUUXi.js";import"./axisSelectors-DJx7DAnJ.js";import"./polarAxisSelectors-BpOt7LI8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D6t4zM3P.js";import"./index-Dv3JWEH0.js";import"./index-HYmTeb2Q.js";import"./renderedTicksSlice-DbMZHvdq.js";import"./index-MeXGvWIN.js";import"./CartesianChart-DU4kdG2u.js";import"./chartDataContext-DaAlq-l7.js";import"./CategoricalChart-CUmY4tZ5.js";import"./CartesianAxis-DyvVeGzf.js";import"./Layer-BL0J2r_i.js";import"./Text-5W0Vtyw-.js";import"./pageBackground-0qhqc0cB.js";import"./useId-Bzzww67M.js";import"./ZIndexLayer-C-CGrvp9.js";import"./Label-Dc9_QYO6.js";import"./dataEntryStyles-D3tcZitS.js";import"./types-D9bKTCt9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BEaPJgw0.js";import"./useAnimationId-BfuVUtmA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYTDxp40.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJsr9xRk.js";import"./tooltipContext-D3OGS0fz.js";import"./RegisterGraphicalItemId-KBiFRx-Y.js";import"./ErrorBarContext-WVyXc6eb.js";import"./SetGraphicalItem-nKtDGPi3.js";import"./getZIndexFromUnknown-BbOLndiI.js";import"./useEffectiveDataKey-Vj1bvM5G.js";import"./omit-qKxEFnb5.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

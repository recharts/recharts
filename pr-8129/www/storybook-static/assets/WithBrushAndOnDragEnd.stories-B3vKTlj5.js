import{R as t}from"./iframe-qOFEdJsq.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-4ZilFo_n.js";import{B as p}from"./BarChart-wraqFC1I.js";import{X as l}from"./XAxis-BLPVblQP.js";import{Y as h}from"./YAxis-W_URYSZS.js";import{B as x}from"./Brush-BR0VjPtJ.js";import{B as c}from"./Bar-v3P4qb_D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./throttle-Bx7bNNV1.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./RechartsWrapper-BNMPtHnU.js";import"./axisSelectors-CB4lGYL3.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjhRaU2.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./CartesianAxis-B9ZixuFu.js";import"./Layer-p7tl0Obh.js";import"./Text-D4Or0m3K.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./Label-Cllq2PGv.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-C8MPZPAo.js";import"./LabelList-CNqM2k92.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIPq25kq.js";import"./useAnimationId-DRvHP31x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./tooltipContext-BP9EM6Hs.js";import"./dataEntryStyles-BpwMOC9F.js";import"./ErrorBarContext-CScUCP7Y.js";import"./activeStyles-B7bZlFHp.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getZIndexFromUnknown-CRHni7CM.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./omit-BS3hI4dD.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};

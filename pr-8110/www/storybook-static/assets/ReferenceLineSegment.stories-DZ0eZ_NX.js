import{R as e}from"./iframe-Diz1MxK0.js";import{R as i}from"./zIndexSlice-De03ARmf.js";import{C as n}from"./ComposedChart-OhuMczYf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D6mypkCo.js";import{X as s}from"./XAxis-o44om-aN.js";import{Y as c}from"./YAxis-wJW4f648.js";import{L as d}from"./Line-Bw4KMoLA.js";import{R as g}from"./ReferenceLine-ZAwSZCPg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXx0w5ol.js";import"./throttle-D6Fnchfm.js";import"./index-BRB5AgXV.js";import"./index-BLbVat5F.js";import"./RechartsWrapper-Dua8Yzn2.js";import"./axisSelectors-DSSqtEqI.js";import"./polarAxisSelectors-Bv8wAAst.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzLjpFUT.js";import"./index-F_sHq6h9.js";import"./index-B9EOw7DU.js";import"./renderedTicksSlice-BDuqmjwG.js";import"./index-B5mD0-P8.js";import"./CartesianChart-DgKauYA5.js";import"./ZIndexPortal-DkIbXTbh.js";import"./CategoricalChart-BQk2mTyl.js";import"./CartesianAxis-g7INsdPw.js";import"./Layer-Bs_jv2-i.js";import"./Text-Cd2gwijp.js";import"./DOMUtils-CLoOggbb.js";import"./ZIndexLayer-DarFSaif.js";import"./Label-BN-_qB9f.js";import"./types-DOhta01o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DjbP1tEr.js";import"./step-BTIR3rT6.js";import"./path-DyVhHtw_.js";import"./LabelList-UNOP6jku.js";import"./ActivePoints-CsnFafYW.js";import"./Dot-BJelZ-T3.js";import"./activeStyles-DMKa5gXh.js";import"./useAnimationId-DrJNkikT.js";import"./dataEntryStyles-D0onuRNm.js";import"./Symbols-wvGU_BGG.js";import"./symbol-DdzwEmp4.js";import"./ErrorBarContext-8rAmb_-m.js";import"./SetGraphicalItem-R77n_H2E.js";import"./getRadiusAndStrokeWidthFromDot-CVdmuuRJ.js";import"./ActiveShapeUtils-lZsBLYLZ.js";import"./useEffectiveDataKey-CP6w9Jk7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};

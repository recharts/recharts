import{e as t}from"./iframe-Gbg_l78M.js";import{P as a}from"./PlotAreaShower-C7q1PybE.js";import{c as p}from"./hooks-BX9UIUih.js";import{R as s}from"./arrayEqualityCheck-B69LB4m3.js";import{C as n}from"./ComposedChart-B2lIhwzo.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-4pnz_hNM.js";import{X as h}from"./XAxis-DY33qp1b.js";import{Y as c}from"./YAxis-DZDs3GKO.js";import{L as g}from"./Legend-C9X7UUEv.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BLrRxRyE.js";import"./immer-mU5ngVSZ.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./zIndexSlice-BsUMgwVy.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./Layer-BI5znRpT.js";import"./ReactUtils-BEyTjZ-J.js";import"./Label-C97vZCUD.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./ActivePoints-CLdEaCHn.js";import"./Dot-DiubYT5n.js";import"./types-6-jxyL20.js";import"./RegisterGraphicalItemId-B4Pbzoa5.js";import"./ErrorBarContext-muYUytku.js";import"./GraphicalItemClipPath-C6vmlIdz.js";import"./SetGraphicalItem-BeRS8RAb.js";import"./useAnimationId-FFZ8e1iF.js";import"./getRadiusAndStrokeWidthFromDot-qW4tViY-.js";import"./ActiveShapeUtils-BF5Ec1rO.js";import"./isPlainObject-C5_xiZ-_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ao9F5Oc0.js";import"./Trapezoid-B9yBSbp-.js";import"./Sector-NBw4H--I.js";import"./Symbols-DdxMLZNU.js";import"./symbol-gfqsi-zR.js";import"./step-BMA_kAfe.js";import"./Curve-CLZ73sU1.js";import"./CartesianAxis-Dca3a3op.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B5ago7eB.js";import"./uniqBy-D3sIEuXx.js";import"./iteratee-Bz9748e7.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};

import{e}from"./iframe-C04w6IgM.js";import{R as n}from"./arrayEqualityCheck-CbUGNhnJ.js";import{C as p}from"./ComposedChart-CocGbXJ_.js";import{C as s}from"./CartesianGrid-NOO7UTOC.js";import{X as c}from"./XAxis-BLBsMt8p.js";import{Y as f}from"./YAxis-Bx_U4OHG.js";import{L as l}from"./Line-CyTxFKog.js";import{R as d}from"./ReferenceLine-nlJ_sk5l.js";import{R as h}from"./RechartsHookInspector-B7Jr2nYf.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W7dKz5yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFnGMsu4.js";import"./hooks-Cld4lrxT.js";import"./axisSelectors-BYq9-SUS.js";import"./zIndexSlice-BbE5d2nx.js";import"./CartesianChart-enHf794Z.js";import"./chartDataContext-Cjixp2uN.js";import"./CategoricalChart-PYyhSed2.js";import"./CartesianAxis-02lidDov.js";import"./Layer-DCya1uir.js";import"./Text-BJaKJCkK.js";import"./DOMUtils-BGMw9OAN.js";import"./Label-B7VXzhwV.js";import"./ZIndexLayer-HIOEAvam.js";import"./types-D-OVIK3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C2UklmlD.js";import"./ActivePoints-BaLEk5hj.js";import"./Dot-FCeRraIm.js";import"./RegisterGraphicalItemId-DHraWFR-.js";import"./ErrorBarContext-vRJZfYBF.js";import"./GraphicalItemClipPath-Do9yu51T.js";import"./SetGraphicalItem-vjtDhulh.js";import"./useAnimationId-DPZtvNGp.js";import"./getRadiusAndStrokeWidthFromDot-DFtLqJEr.js";import"./ActiveShapeUtils-BwfeuSce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXVXA4zS.js";import"./Trapezoid-C_oXf8hs.js";import"./Sector-Cbb0SBJZ.js";import"./Symbols-DPND5ycq.js";import"./Curve-BQk4xMcU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Demzea1L.js";import"./ChartSizeDimensions-BMKfYLeY.js";import"./OffsetShower-RZSmdjyo.js";import"./PlotAreaShower-BeZsrL7O.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};

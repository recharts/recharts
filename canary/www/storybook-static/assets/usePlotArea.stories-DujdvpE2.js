import{R as t}from"./iframe-DgA6x1az.js";import{z as a}from"./RechartsWrapper-DDZDydJY.js";import{R as p}from"./zIndexSlice-BFMaekmq.js";import{C as n}from"./ComposedChart-ByKzrUfc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D138P_9w.js";import{X as l}from"./XAxis-COtnzKrI.js";import{Y as h}from"./YAxis-Bq2KiL_g.js";import{L as c}from"./Legend-Ck_IYBzg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BWYipoBl.js";import"./throttle-BeFzmqAe.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFWCEDhR.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./chartDataContext-BQDV-mFo.js";import"./CategoricalChart-925-SQc0.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./Layer-4UauM4-I.js";import"./Curve-C1ngk-4z.js";import"./types-BWKVAmkC.js";import"./step-CeJDq7tp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C5svgbWd.js";import"./Label-SeLMQAdg.js";import"./Text-5b15Y2Dk.js";import"./ZIndexLayer-CKzh_iFN.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./activeStyles-CoM8kTSe.js";import"./useAnimationId-DOzFiRYM.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./ErrorBarContext-BPyt6eZ1.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./useEffectiveDataKey-B9lYa-g7.js";import"./CartesianAxis-RM9TiRUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CAQy_pe4.js";import"./uniqBy-BFi66pIj.js";import"./iteratee-B8NyNZ1U.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};

import{R as t}from"./iframe-BwLZw-_M.js";import{z as p}from"./RechartsWrapper-C2SzhBqG.js";import{R as a}from"./zIndexSlice-ChI0kTlF.js";import{C as n}from"./ComposedChart-CIavBfkK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B80TmJuf.js";import{X as l}from"./XAxis-D6rGR5iH.js";import{Y as h}from"./YAxis-CM5oOvq7.js";import{L as c}from"./Legend-CBaALUz-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BegzgTjS.js";import"./get-cF5BDHN6.js";import"./axisSelectors-kUTEWjAI.js";import"./throttle-DvL4FsEQ.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DGzUJoIU.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./Layer-DuW_QRN1.js";import"./Curve-CzfoK2T3.js";import"./fillDefinitions-B6DD0NTj.js";import"./pageBackground-BK1aOTMM.js";import"./themeFill-sw4Y96Vm.js";import"./types-tzWyPHwG.js";import"./step-QqIlLDuW.js";import"./path-DyVhHtw_.js";import"./LabelList-6PzejVVq.js";import"./Label-U4vkciLv.js";import"./Text-CBZN8k_S.js";import"./DOMUtils-i6fMpPJ-.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./ActivePoints-vE2lL3n4.js";import"./Dot-P4orGxiz.js";import"./activeStyles-lGmv_AYe.js";import"./useAnimationId-yjvP5B3D.js";import"./dataEntryStyles-B1tUzdyv.js";import"./Symbols-D0k11amF.js";import"./symbol-CxJ4nrsQ.js";import"./ErrorBarContext-B9C041Rd.js";import"./SetGraphicalItem-CZMv7iCK.js";import"./getRadiusAndStrokeWidthFromDot-Di0VE_vh.js";import"./ActiveShapeUtils-BCNnGPme.js";import"./useEffectiveDataKey-C-YUm0jF.js";import"./CartesianAxis-CE8eP4oM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D3IPICiA.js";import"./uniqBy-CMfwLbOw.js";import"./iteratee-QhoVn_-z.js";import"./isArguments-yB-y1yaH.js";const yt={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},xt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,xt as __namedExportsOrder,yt as default};

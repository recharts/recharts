import{e as t}from"./iframe-Db5WrE36.js";import{C as s}from"./Cross-DW2Lq9rY.js";import{R as n}from"./arrayEqualityCheck-C3JobR2_.js";import{C as p}from"./ComposedChart-CmGmKOjn.js";import{R as m}from"./RechartsHookInspector-CFI1frAU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DvMxgvCh.js";import"./immer-CAzEWOIE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDDerXEh.js";import"./index-BJzZql5p.js";import"./hooks-lxXboCZm.js";import"./axisSelectors-CDotANNU.js";import"./d3-scale-FiYYf1nP.js";import"./zIndexSlice-DHcQINX8.js";import"./renderedTicksSlice-CypQTB_Z.js";import"./CartesianChart-5yWhuVSR.js";import"./chartDataContext-DCp_Y5EI.js";import"./CategoricalChart-K1l3oikN.js";import"./index-B08ilTo6.js";import"./ChartSizeDimensions-CXOsnzEA.js";import"./OffsetShower-DEnIV-uj.js";import"./PlotAreaShower-CqTq0MkW.js";const h={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},height:{description:"Height of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},left:{description:"The x-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},top:{description:"The y-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},width:{description:"Width of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},x:{description:"The x-coordinate of the vertical line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},y:{description:"The y-coordinate of the horizontal line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}}},P={component:s,argTypes:h},e={render:a=>t.createElement(n,{width:"100%",height:500},t.createElement(p,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},t.createElement(s,{...a}),t.createElement(m,null))),args:{y:100,x:500,top:0,left:0,height:1e3,width:1e3,stroke:"#000",fill:"none",strokeDasharray:"3 3",strokeWidth:10,strokeOpacity:.5}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Cross {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    y: 100,
    x: 500,
    top: 0,
    left: 0,
    height: 1000,
    width: 1000,
    stroke: '#000',
    fill: 'none',
    strokeDasharray: '3 3',
    strokeWidth: 10,
    strokeOpacity: 0.5
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["API"];export{e as API,S as __namedExportsOrder,P as default};

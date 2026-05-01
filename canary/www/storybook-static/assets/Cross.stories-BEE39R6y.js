import{e as t}from"./iframe-C5l4DaJO.js";import{C as s}from"./Cross-CpN4Zqgv.js";import{R as n}from"./arrayEqualityCheck-fM0600Tt.js";import{C as p}from"./ComposedChart-OPX83XMh.js";import{R as m}from"./RechartsHookInspector-eKcCgGD5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./immer-BjHWRAG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./index-D-KNk5kJ.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./OffsetShower-BJNZ64do.js";import"./PlotAreaShower-mtOsWYxm.js";const h={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},height:{description:"Height of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},left:{description:"The x-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},top:{description:"The y-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},width:{description:"Width of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},x:{description:"The x-coordinate of the vertical line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},y:{description:"The y-coordinate of the horizontal line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}}},P={component:s,argTypes:h},e={render:a=>t.createElement(n,{width:"100%",height:500},t.createElement(p,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},t.createElement(s,{...a}),t.createElement(m,null))),args:{y:100,x:500,top:0,left:0,height:1e3,width:1e3,stroke:"#000",fill:"none",strokeDasharray:"3 3",strokeWidth:10,strokeOpacity:.5}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-Dt9aG847.js";import{C as i}from"./Cross-R3GIONbF.js";import{R as a}from"./zIndexSlice-C3sOwbsK.js";import{C as p}from"./ComposedChart-CpvmmgfC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./throttle-DjDKvtka.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./RechartsWrapper-CgsNUza7.js";import"./axisSelectors-Bm-O_fE3.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLGbz4xh.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";const m={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},height:{description:"Height of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},left:{description:"The x-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},top:{description:"The y-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},width:{description:"Width of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},x:{description:"The x-coordinate of the vertical line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},y:{description:"The y-coordinate of the horizontal line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}}},I={component:i,argTypes:m},t={render:s=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(i,{...s}))),args:{y:100,x:500,top:0,left:0,height:1e3,width:1e3,stroke:"#000",fill:"none",strokeDasharray:"3 3",strokeWidth:10,strokeOpacity:.5}},P=["API"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Cross {...args} />
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as API,P as __namedExportsOrder,I as default};

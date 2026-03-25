import{e as r}from"./iframe-BUUPGxKW.js";import{g as c}from"./utils-ePvtT4un.js";import{P as s}from"./PolarGrid-C4pQkAv8.js";import{S as u}from"./arrayEqualityCheck-uAaGhnkl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./immer-kqZDXGZE.js";import"./polarScaleSelectors-DIFb2OW3.js";import"./axisSelectors-CQVyKxdV.js";import"./d3-scale-b1qoVJWC.js";import"./polarSelectors-BESqqFHh.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./ZIndexLayer-CiKkYojy.js";import"./zIndexSlice-DsPDLjCa.js";const l={angleAxisId:{table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},cx:{description:`The x-coordinate of center.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,table:{type:{summary:"number | string"},category:"General"}},cy:{description:`The y-coordinate of center.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,table:{type:{summary:"number | string"},category:"General"}},fill:{description:"The background color used to fill the space between grid lines.",control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"none"}},defaultValue:"none"},fillOpacity:{description:"The opacity of the background used to fill the space between grid lines.",table:{type:{summary:"number | string"},category:"General"}},gridType:{description:"The type of polar grids.",table:{type:{summary:'"circle" | "polygon"'},category:"General",defaultValue:{summary:"polygon"}},defaultValue:"polygon"},innerRadius:{description:`The radius of the inner polar grid.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},outerRadius:{description:`The radius of the outer polar grid.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},polarAngles:{description:"The array of every line grid's angle.",table:{type:{summary:"Array<number>"},category:"General"}},polarRadius:{description:"The array of every circle grid's radius.",table:{type:{summary:"Array<number>"},category:"General"}},radialLines:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},radiusAxisId:{table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"#ccc"}},defaultValue:"#ccc"},strokeDasharray:{description:"The pattern of dashes and gaps used to paint the lines of the grid.",table:{type:{summary:"number | string"},category:"Style"}},strokeWidth:{description:"The width of the stroke.",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1"}},defaultValue:1},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"-100"}},defaultValue:-100}},I={argTypes:l,component:s},[t,a]=[500,500],e={name:"Simple",render:d=>r.createElement(u,{width:t,height:a,viewBox:{x:0,y:0,width:t,height:a}},r.createElement(s,{cx:250,cy:250,innerRadius:0,outerRadius:200,...d})),args:{...c(l),polarAngles:[0,30,60,90,145,180,200,270,300],polarRadius:[10,20,40,80],stroke:"#ccc",strokeWidth:1,fill:"none",fillOpacity:.2}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Record<string, any>) => {
    return <Surface width={surfaceWidth} height={surfaceHeight} viewBox={{
      x: 0,
      y: 0,
      width: surfaceWidth,
      height: surfaceHeight
    }}>
        <PolarGrid cx={250} cy={250} innerRadius={0} outerRadius={200} {...args} />
      </Surface>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarGridArgs),
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
    stroke: '#ccc',
    strokeWidth: 1,
    fill: 'none',
    fillOpacity: 0.2
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const R=["API"];export{e as API,R as __namedExportsOrder,I as default};

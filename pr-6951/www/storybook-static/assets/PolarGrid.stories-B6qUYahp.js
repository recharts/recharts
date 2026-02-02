import{e as r}from"./iframe-Cce3OzqZ.js";import{g as c}from"./utils-ePvtT4un.js";import{P as i}from"./PolarGrid-DlhfRUg3.js";import{S as u}from"./arrayEqualityCheck-Db-Wlt3-.js";const d={angleAxisId:{table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},cx:{description:`The x-coordinate of center.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,table:{type:{summary:"number | string"},category:"General"}},cy:{description:`The y-coordinate of center.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,table:{type:{summary:"number | string"},category:"General"}},gridType:{description:"The type of polar grids.",table:{type:{summary:'"circle" | "polygon"'},category:"General",defaultValue:{summary:"polygon"}},defaultValue:"polygon"},innerRadius:{description:`The radius of the inner polar grid.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},outerRadius:{description:`The radius of the outer polar grid.
When used inside a chart context, this prop is calculated based on the chart's dimensions,
and this prop is ignored.

This is only used when rendered outside a chart context.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},polarAngles:{description:"The array of every line grid's angle.",table:{type:{summary:"Array<number>"},category:"General"}},polarRadius:{description:"The array of every circle grid's radius.",table:{type:{summary:"Array<number>"},category:"General"}},radialLines:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},radiusAxisId:{table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"-100"}},defaultValue:-100}},p={argTypes:d,component:i},[t,n]=[500,500],e={name:"Simple",render:l=>r.createElement(u,{width:t,height:n,viewBox:{x:0,y:0,width:t,height:n}},r.createElement(i,{cx:250,cy:250,innerRadius:0,outerRadius:200,...l})),args:{...c(d),polarAngles:[0,30,60,90,145,180,200,270,300],polarRadius:[10,20,40,80],stroke:"#ccc",strokeWidth:1,fill:"none",fillOpacity:.2}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const h=["API"],b=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{e as A,b as C};

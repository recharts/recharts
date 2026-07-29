import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Q as i,R as a,Vn as o,X as s,ot as c,t as l,u}from"./iframe-BqVvK_R4.js";import{t as d}from"./data-J2vpPkF6.js";import{r as f}from"./Page-C0w_0_Yr.js";import{n as p,t as m}from"./utils-4uF5A2JM.js";var h,g=e((()=>{h={className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:`"discard" | "extendDomain" | "hidden" | "visible"`},category:`General`,defaultValue:{summary:`discard`}},defaultValue:`discard`},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:`(union of 6 variants)`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:`select`},options:[`end`,`middle`,`start`],table:{type:{summary:`"end" | "middle" | "start"`},category:`General`,defaultValue:{summary:`middle`}},defaultValue:`middle`},segment:{description:`Tuple of coordinates. If defined, renders a diagonal line segment.`,table:{type:{summary:`[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]`},category:`General`}},shape:{table:{type:{summary:`Function | ReactNode`},category:`General`}},strokeWidth:{description:`The width of the stroke`,table:{type:{summary:`number | string`},category:`Style`,defaultValue:{summary:`1`}},defaultValue:1},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:`number | string`},category:`General`}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:`number | string`},category:`General`}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`400`}},defaultValue:400}}})),_,v,y,b;e((()=>{_=t(n()),l(),d(),p(),g(),v={argTypes:h,component:c},y={render:e=>_.createElement(o,{width:`100%`,height:500},_.createElement(u,{data:f,margin:{top:5,right:30,left:20,bottom:5}},_.createElement(i,{strokeDasharray:`3 3`}),_.createElement(r,{dataKey:`name`}),_.createElement(a,{type:`number`}),_.createElement(c,e),_.createElement(s,{dataKey:`uv`}))),args:{...m(h),y:1520,stroke:`blue`,strokeWidth:2,strokeDasharray:`4 1`,label:`My example label`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
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
          <ReferenceLine {...args} />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceLineArgs),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: 'My example label'
  }
}`,...y.parameters?.docs?.source}}},b=[`API`]}))();export{y as API,b as __namedExportsOrder,v as default};
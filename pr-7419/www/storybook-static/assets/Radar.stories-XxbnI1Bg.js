import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{St as r,Vn as i,bt as a,ft as o,t as s,v as c,wt as l}from"./iframe-BiMB5Acc.js";import{t as u}from"./data-J2vpPkF6.js";import{s as d}from"./Page-C0w_0_Yr.js";import{n as f,t as p}from"./utils-4uF5A2JM.js";var m,h=e((()=>{m={activeDot:{table:{type:{summary:`Function | Partial<ActiveDotProps> | ReactNode | false | true`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},angleAxisId:{table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},animationBegin:{description:`Specifies when the animation should begin, the unit of this option is ms.`,control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`0`}},defaultValue:0},animationDuration:{description:`Specifies the duration of animation, the unit of this option is ms.`,control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`1500`}},defaultValue:1500},animationEasing:{description:`The type of easing function.`,table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:`Animation`,defaultValue:{summary:`ease`}},defaultValue:`ease`},animationInterpolateFn:{description:`Custom animation function for interpolating data items.
When provided, this replaces the default animation interpolation.`,table:{type:{summary:`AnimationInterpolateFn<RadarPoint, PolarLayout>`},category:`Animation`}},animationMatchBy:{description:"Strategy for matching previous items to next items during animation.\nDetermines how Recharts pairs old data points with new data points\nto create smooth transitions.\n\n- `matchByIndex` (default): match by array position with proportional stretching\n- `matchAppend`: match sequentially by index and treat newly appended items as new\n- `matchByDataKey('someKey')`: match by a data key from the payload\n- Custom function `(item, index) => key`: match by the returned key",table:{type:{summary:`"append" | "index" | AnimationMatchBy<RadarPoint>`},category:`Animation`,defaultValue:{summary:`index`}},defaultValue:`index`},baseLinePoints:{table:{type:{summary:`Array<RadarPoint>`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},connectNulls:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`}},dataKey:{description:`The data that you provide via the \`data\` prop is an array of objects.
Each object can have multiple properties, each representing a different data dimension.
Use the \`dataKey\` prop to specify which property (or dimension) to use for this component.

Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
where they extract different values from the same data objects.

Decides how to extract the value from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value.`,table:{type:{summary:`TypedDataKey<DataPointType, DataValueType>`},category:`General`}},dot:{description:"Renders a circle element at each data point. Options:\n\n- `false`: no dots are drawn;\n- `true`: renders the dots with default settings;\n- `object`: the props of the dot. This will be merged with the internal calculated props of each dot;\n- `ReactElement`: the custom dot element;\n- `function`: a render function of the custom dot.",table:{type:{summary:`Function | Partial<Props> | ReactNode | false | true`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},hide:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},isAnimationActive:{description:`If set false, animation of polygon will be disabled.
If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.`,table:{type:{summary:`"auto" | false | true`},category:`Animation`,defaultValue:{summary:`auto`}},defaultValue:`auto`},isRange:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`}},label:{description:"Renders one label for each point. Options:\n- `true`: renders default labels;\n- `false`: no labels are rendered;\n- `object`: the props of LabelList component;\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label.",table:{type:{summary:`Function | Props | ReactNode | false | true`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},legendType:{description:`The type of icon in legend.  If set to 'none', no legend item will be rendered.`,control:{type:`select`},options:[`none`,`circle`,`cross`,`diamond`,`line`,`plainline`,`rect`,`square`,`star`,`triangle`,`wye`],table:{type:{summary:`"circle" | "cross" | "diamond" | "line" | "none" | "plainline" | "rect" | "square" | "star" | "triangle" | "wye"`},category:`General`,defaultValue:{summary:`rect`}},defaultValue:`rect`},onAnimationEnd:{description:`The customized event handler of animation end`,table:{type:{summary:`React.AnimationEventHandler<T>`},category:`Events`}},onAnimationStart:{description:`The customized event handler of animation start`,table:{type:{summary:`React.AnimationEventHandler<T>`},category:`Events`}},onMouseEnter:{table:{type:{summary:`Function`},category:`Events`}},onMouseLeave:{table:{type:{summary:`Function`},category:`Events`}},radiusAxisId:{table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},shape:{description:`If set a ReactElement, the shape of radar can be customized.
If set a function, the function will be called to render customized shape.`,table:{type:{summary:`Function | ReactNode`},category:`General`}},tooltipType:{table:{type:{summary:`"none"`},category:`General`}},zIndex:{control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`100`}},defaultValue:100}}})),g,_,v,y;e((()=>{g=t(n()),s(),u(),f(),h(),_={argTypes:m,component:o},v={render:e=>g.createElement(i,{width:`100%`,height:500},g.createElement(c,{cx:`50%`,cy:`50%`,outerRadius:`80%`,data:d,margin:{top:5,right:30,left:20,bottom:5}},g.createElement(l,null),g.createElement(a,{dataKey:`subject`}),g.createElement(r,null),g.createElement(o,e))),args:{...p(m),dataKey:`A`,name:`Mike`,stroke:`#8884d8`,fill:`#8884d8`,fillOpacity:.6,dot:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={subjectData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar {...args} />
        </RadarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarArgs),
    dataKey: 'A',
    name: 'Mike',
    stroke: '#8884d8',
    fill: '#8884d8',
    fillOpacity: 0.6,
    dot: true
  }
}`,...v.parameters?.docs?.source}}},y=[`General`]}))();export{v as General,y as __namedExportsOrder,_ as default};
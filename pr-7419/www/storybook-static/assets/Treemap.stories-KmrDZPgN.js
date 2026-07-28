import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Rt as r,S as i,Vn as a,t as o}from"./iframe-BiMB5Acc.js";import{g as s,t as c,v as l,y as u}from"./data-J2vpPkF6.js";import{n as d,t as f}from"./utils-4uF5A2JM.js";var p,m=e((()=>{p={animationBegin:{description:`Specifies when the animation should begin, the unit of this option is ms.`,control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`0`}},defaultValue:0},animationDuration:{description:`Specifies the duration of animation, the unit of this option is ms.`,control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`1500`}},defaultValue:1500},animationEasing:{description:`The type of easing function.`,table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:`Animation`,defaultValue:{summary:`linear`}},defaultValue:`linear`},animationId:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`},description:"@deprecated unused prop, doesn't do anything, use `key` instead"},aspectRatio:{description:`The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`1.618033988749895`}},defaultValue:1.618033988749895},children:{table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},colorPanel:{control:{type:`color`},table:{type:{summary:`Array<string>`},category:`General`}},content:{description:"If set to a React element, the option is the customized React element of rendering the content.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function will be called to render the content.",table:{type:{summary:`(union of 8 variants)`},category:`General`}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.

If the \`children\` property is present on an element, it will be treated as a nested treemap.`,table:{type:{summary:`Array<DataPointType>`},category:`General`}},dataKey:{description:"Decides how to extract the value of this Treemap from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this Treemap.",table:{type:{summary:`TypedDataKey<DataPointType, DataValueType>`},category:`General`,defaultValue:{summary:`value`}},defaultValue:`value`},fill:{control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}},id:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},isAnimationActive:{description:`If set false, animation of treemap will be disabled.
If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.`,table:{type:{summary:`"auto" | false | true`},category:`Animation`,defaultValue:{summary:`auto`}},defaultValue:`auto`},isUpdateAnimationActive:{table:{type:{summary:`"auto" | false | true`},category:`Animation`,defaultValue:{summary:`auto`}},defaultValue:`auto`},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:`TypedDataKey<DataPointType, DataValueType>`},category:`General`,defaultValue:{summary:`name`}},defaultValue:`name`},nestIndexContent:{table:{type:{summary:`Function | ReactNode`},category:`General`}},nodeGap:{description:`The gap between the nodes.

Adds spacing between sibling nodes at the same depth level.
This does not inset children from their parent boundary.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},nodeInset:{description:`The inset between a parent node and its child nodes.

Insets a parent node's available area before laying out its children.
This creates space between a parent boundary and its child nodes.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},onAnimationEnd:{description:`The customized event handler of animation end`,table:{type:{summary:`Function`},category:`Events`}},onAnimationStart:{description:`The customized event handler of animation start`,table:{type:{summary:`Function`},category:`Events`}},onClick:{table:{type:{summary:`Function`},category:`Events`}},onMouseEnter:{table:{type:{summary:`Function`},category:`Events`}},onMouseLeave:{table:{type:{summary:`Function`},category:`Events`}},stroke:{control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},style:{table:{type:{summary:`React.CSSProperties`},category:`Style`}},throttleDelay:{description:`Decides the time interval to throttle events.
Only events defined in \`throttledEvents\` prop are throttled.
All other events are executed immediately/synchronously.

Options:
- \`number\`: the time interval in milliseconds
- \`'raf'\`: use requestAnimationFrame to schedule updates.`,table:{type:{summary:`"raf" | number`},category:`General`,defaultValue:{summary:`raf`}},defaultValue:`raf`},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:`"all" | Array<keyof GlobalEventHandlersEventMap>`},category:`General`,defaultValue:{summary:`["mousemove","touchmove","pointermove","scroll","wheel"]`}},defaultValue:[`mousemove`,`touchmove`,`pointermove`,`scroll`,`wheel`]},type:{description:`The type of treemap to render.

- 'flat': Renders the entire treemap at once, with all leaf nodes visible.
- 'nest': Renders an interactive, nested treemap. Clicking on a parent node will "zoom in" to show its children,
  and a breadcrumb navigation will be displayed to allow navigating back up the hierarchy.`,table:{type:{summary:`"flat" | "nest"`},category:`General`,defaultValue:{summary:`flat`}},defaultValue:`flat`},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}}}})),h,g,_,v,y,b,x,S;e((()=>{h=t(n()),c(),o(),m(),d(),g={argTypes:p,component:i},_={name:`Simple`,render:e=>h.createElement(a,{width:`100%`,height:400},h.createElement(i,e)),args:{...f(p),data:s,dataKey:`size`,nameKey:`name`,isAnimationActive:!1}},v={render:e=>h.createElement(a,{width:`100%`,height:400},h.createElement(i,e,h.createElement(r,null))),args:{...f(p),data:s,dataKey:`size`,nameKey:`name`,isAnimationActive:!1}},y=[`#8889DD`,`#9597E4`,`#8DC77B`,`#A5D297`,`#E2CF45`,`#F8C12D`],b={render:e=>h.createElement(a,{width:`100%`,height:400},h.createElement(i,{...e,dataKey:`size`,stroke:`#fff`,fill:`#8884d8`,content:e=>{let{root:t,depth:n,x:r,y:i,width:a,height:o,index:s,name:c}=e;return h.createElement(`g`,null,h.createElement(`rect`,{x:r,y:i,width:a,height:o,style:{fill:n<2?y[Math.floor(s/(t?.children?.length??1)*6)]:`#ffffff00`,stroke:`#fff`,strokeWidth:2/(n+1e-10),strokeOpacity:1/(n+1e-10)}}),n===1?h.createElement(`text`,{x:r+a/2,y:i+o/2+7,textAnchor:`middle`,fill:`#fff`,fontSize:14},c):null,n===1?h.createElement(`text`,{x:r+4,y:i+18,fill:`#fff`,fontSize:16,fillOpacity:.9},s+1):null)}},h.createElement(r,null))),args:{...f(p),data:u,dataKey:`size`,isAnimationActive:!1}},x={render:e=>h.createElement(a,{width:`100%`,height:400},h.createElement(i,e,h.createElement(r,null))),args:{...f(p),data:l,dataKey:`size`,nameKey:`name`,type:`nest`,isAnimationActive:!1}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: flatTreemapData,
    dataKey: 'size',
    nameKey: 'name',
    isAnimationActive: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args}>
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: flatTreemapData,
    dataKey: 'size',
    nameKey: 'name',
    isAnimationActive: false
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args} dataKey="size" stroke="#fff" fill="#8884d8" content={(props: TreemapNode) => {
        const {
          root,
          depth,
          x,
          y,
          width,
          height,
          index,
          name
        } = props;
        return <g>
                <rect x={x} y={y} width={width} height={height} style={{
            fill: depth < 2 ? colors[Math.floor(index / (root?.children?.length ?? 1) * 6)] : '#ffffff00',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10)
          }} />
                {depth === 1 ? <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                    {name}
                  </text> : null}
                {depth === 1 ? <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                    {index + 1}
                  </text> : null}
              </g>;
      }}>
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: treemapData,
    dataKey: 'size',
    isAnimationActive: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args}>
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: sizeData,
    dataKey: 'size',
    nameKey: 'name',
    type: 'nest',
    isAnimationActive: false
  }
}`,...x.parameters?.docs?.source}}},S=[`API`,`WithTooltip`,`WithCustomContent`,`Nested`]}))();export{_ as API,x as Nested,b as WithCustomContent,v as WithTooltip,S as __namedExportsOrder,g as default};
import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Rt as r,Vn as i,b as a,t as o}from"./iframe-BiMB5Acc.js";import{S as s,b as c,t as l}from"./data-J2vpPkF6.js";import{n as u,t as d}from"./utils-4uF5A2JM.js";var f,p=e((()=>{f={accessibilityLayer:{description:`Turn on accessibility support for keyboard-only and screen reader users.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},align:{description:`If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.`,table:{type:{summary:`"justify" | "left"`},category:`General`,defaultValue:{summary:`justify`}},defaultValue:`justify`},children:{table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},data:{description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,table:{type:{summary:`SankeyData`},category:`General`}},dataKey:{description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,table:{type:{summary:`Function | number | string`},category:`General`,defaultValue:{summary:`value`}},defaultValue:`value`},desc:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}},iterations:{description:`The number of the iterations between the links`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`32`}},defaultValue:32},link:{description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,table:{type:{summary:`Function | React.SVGProps<SVGPathElement> | ReactNode`},category:`General`}},linkCurvature:{description:`The curvature of width`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0.5`}},defaultValue:.5},margin:{description:`Empty space around the container.`,table:{type:{summary:`Partial<Margin>`},category:`General`,defaultValue:{summary:`{"top":5,"right":5,"bottom":5,"left":5}`}},defaultValue:{top:5,right:5,bottom:5,left:5}},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:`Function | number | string`},category:`General`,defaultValue:{summary:`name`}},defaultValue:`name`},node:{description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,table:{type:{summary:`Function | Props | ReactNode`},category:`General`}},nodePadding:{description:`The padding between the nodes`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`10`}},defaultValue:10},nodeWidth:{description:`The width of node`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`10`}},defaultValue:10},onClick:{description:`The customized event handler of click on the area in this group`,table:{type:{summary:`Function`},category:`Events`}},onMouseEnter:{description:`The customized event handler of mouseenter on the area in this group`,table:{type:{summary:`Function`},category:`Events`}},onMouseLeave:{description:`The customized event handler of mouseleave on the area in this group`,table:{type:{summary:`Function`},category:`Events`}},sort:{description:`Whether to sort the nodes on the y axis, or to display them as user-defined.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},style:{table:{type:{summary:`React.CSSProperties`},category:`Style`}},throttleDelay:{description:`Decides the time interval to throttle events.
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
then that event handler must not be in this list.`,table:{type:{summary:`"all" | Array<keyof GlobalEventHandlersEventMap>`},category:`General`,defaultValue:{summary:`["mousemove","touchmove","pointermove","scroll","wheel"]`}},defaultValue:[`mousemove`,`touchmove`,`pointermove`,`scroll`,`wheel`]},title:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},verticalAlign:{description:`Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.`,table:{type:{summary:`"justify" | "top"`},category:`General`,defaultValue:{summary:`justify`}},defaultValue:`justify`},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}}}})),m,h,g,_,v,y;e((()=>{m=t(n()),l(),o(),p(),u(),h={argTypes:f,component:a},g={name:`Simple`,render:e=>m.createElement(i,{width:`100%`,height:400},m.createElement(a,{data:s,...e},m.createElement(r,null))),args:{...d(f),data:s}},_={render:e=>m.createElement(i,{width:`100%`,height:400},m.createElement(a,{data:s,...e})),args:{...d(f),data:s,nodeWidth:10,nodePadding:60,height:500,width:960}},v={render:e=>{let t=[`#3C898E`,`#486DF0`,`#6F50E5`];return m.createElement(i,{width:`100%`,height:400},m.createElement(a,{data:c,node:e=>m.createElement(`rect`,{x:e.x+4,y:e.y-2,width:e.width-8,height:e.height+4,fill:t[e.payload.depth%t.length],rx:2.5}),link:e=>m.createElement(`g`,null,m.createElement(`path`,{d:`
  M${e.sourceX},${e.sourceY}
  C${e.sourceControlX},${e.sourceY} ${e.targetControlX},${e.targetY} ${e.targetX},${e.targetY}`,fill:`none`,stroke:t[e.payload.source.depth%t.length],strokeOpacity:.4,strokeWidth:e.linkWidth,strokeLinecap:`butt`}),m.createElement(`foreignObject`,{x:e.sourceX,y:e.targetY-e.linkWidth/2,width:Math.max(e.targetX,e.sourceX)-Math.min(e.targetX,e.sourceX),height:e.linkWidth,style:{overflow:`visible`}},m.createElement(`div`,{style:{boxSizing:`border-box`,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,width:`100%`,height:`100%`,overflow:`visible`,padding:`0.5em`,gap:8}},m.createElement(`div`,{style:{fontSize:10,fontFamily:`sans-serif`,textAlign:`center`,backgroundColor:`#f1f5fe80`,padding:`0.25em 0.5em`,borderRadius:4,position:`relative`,zIndex:1}},e.payload.target.name?`${e.payload.target.name}: `:``,e.payload.value,`\xA0€`)))),...e}))},args:{...d(f),data:c,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const colors = ['#3C898E', '#486DF0', '#6F50E5'];
    type CustomNodePayload = {
      name: string;
      sourceNodes: number[];
      sourceLinks: number[];
      targetLinks: number[];
      targetNodes: number[];
      value: number;
      depth: number;
      x: number;
      dx: number;
      y: number;
      dy: number;
    };
    const CustomNode = (props: NodeProps): React.ReactElement => {
      return <rect x={props.x + 4} y={props.y - 2} width={props.width - 8} height={props.height + 4} fill={colors[props.payload.depth % colors.length]} rx={2.5} />;
    };
    type CustomLinkPayload = {
      source: CustomNodePayload;
      target: CustomNodePayload;
      value: number;
      dy: number;
      sy: number;
      ty: number;
    };
    const CustomLink = (props: {
      sourceX: number;
      targetX: number;
      sourceY: number;
      targetY: number;
      sourceControlX: number;
      targetControlX: number;
      sourceRelativeY: number;
      targetRelativeY: number;
      linkWidth: number;
      index: number;
      payload: CustomLinkPayload;
    }) => {
      return <g>
          <path d={\`
  M\${props.sourceX},\${props.sourceY}
  C\${props.sourceControlX},\${props.sourceY} \${props.targetControlX},\${props.targetY} \${props.targetX},\${props.targetY}\`} fill="none" stroke={colors[props.payload.source.depth % colors.length]} strokeOpacity={0.4} strokeWidth={props.linkWidth} strokeLinecap="butt" />
          <foreignObject x={props.sourceX} y={props.targetY - props.linkWidth / 2} width={Math.max(props.targetX, props.sourceX) - Math.min(props.targetX, props.sourceX)} height={props.linkWidth} style={{
          overflow: 'visible'
        }}>
            <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%',
            overflow: 'visible',
            padding: '0.5em',
            gap: 8
          }}>
              <div style={{
              fontSize: 10,
              fontFamily: 'sans-serif',
              textAlign: 'center',
              backgroundColor: '#f1f5fe80',
              padding: '0.25em 0.5em',
              borderRadius: 4,
              position: 'relative',
              zIndex: 1
            }}>
                {props.payload.target.name ? \`\${props.payload.target.name}: \` : ''}
                {props.payload.value}
                &nbsp;€
              </div>
            </div>
          </foreignObject>
        </g>;
    };
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={complexNodeLinkData} node={CustomNode} link={CustomLink} {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: complexNodeLinkData,
    nodeWidth: 16,
    nodePadding: 14,
    height: 500,
    width: 960,
    sort: false,
    margin: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`API`,`Customized`,`CustomNodeAndLink`]}))();export{g as API,v as CustomNodeAndLink,_ as Customized,y as __namedExportsOrder,h as default};
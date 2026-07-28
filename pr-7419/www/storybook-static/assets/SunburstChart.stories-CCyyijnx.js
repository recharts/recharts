import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Rt as r,Vn as i,c as a,t as o}from"./iframe-BiMB5Acc.js";var s,c=e((()=>{s={children:{table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},cx:{description:`The x-coordinate of center in pixels.
If undefined, it will be set to half of the chart width.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},cy:{description:`The y-coordinate of center in pixels.
If undefined, it will be set to half of the chart height.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:`SunburstData`},category:`General`}},dataKey:{description:`Decides how to extract value from the data.`,control:{type:`text`},table:{type:{summary:`string`},category:`General`,defaultValue:{summary:`value`}},defaultValue:`value`},endAngle:{description:`Angle, in degrees, at which the chart should end.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`360`}},defaultValue:360},fill:{control:{type:`color`},table:{type:{summary:`string`},category:`Style`,defaultValue:{summary:`#333`}},defaultValue:`#333`},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}},id:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},innerRadius:{description:`The radius of the inner circle at the center of the chart.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`50`}},defaultValue:50},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:`Function | number | string`},category:`General`,defaultValue:{summary:`name`}},defaultValue:`name`},onClick:{table:{type:{summary:`Function`},category:`Events`}},onMouseEnter:{table:{type:{summary:`Function`},category:`Events`}},onMouseLeave:{table:{type:{summary:`Function`},category:`Events`}},outerRadius:{description:`Outermost edge of the chart.
Defaults to the max possible radius for a circle inscribed in the chart container`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},padding:{description:`Distance between sectors.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`2`}},defaultValue:2},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},ringPadding:{description:`Padding between each hierarchical level.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`2`}},defaultValue:2},startAngle:{description:`Angle in degrees from which the chart should start.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},stroke:{control:{type:`color`},table:{type:{summary:`string`},category:`Style`,defaultValue:{summary:`#FFF`}},defaultValue:`#FFF`},style:{table:{type:{summary:`React.CSSProperties`},category:`Style`}},textOptions:{description:`An object with svg text options to control the appearance of the chart labels.`,table:{type:{summary:`Props`},category:`General`,defaultValue:{summary:`{"fontWeight":"bold","paintOrder":"stroke fill","fontSize":".75rem","stroke":"#FFF","fill":"black","pointerEvents":"none"}`}},defaultValue:{fontWeight:`bold`,paintOrder:`stroke fill`,fontSize:`.75rem`,stroke:`#FFF`,fill:`black`,pointerEvents:`none`}},throttleDelay:{description:`Decides the time interval to throttle events.
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
then that event handler must not be in this list.`,table:{type:{summary:`"all" | Array<keyof GlobalEventHandlersEventMap>`},category:`General`,defaultValue:{summary:`["mousemove","touchmove","pointermove","scroll","wheel"]`}},defaultValue:[`mousemove`,`touchmove`,`pointermove`,`scroll`,`wheel`]},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}}}})),l,u,d,f,p;e((()=>{l=t(n()),o(),c(),u={argTypes:s,component:a},d={name:`Root`,value:100,children:[{name:`Child1`,fill:`#264653`,value:30,children:[{name:`third child`,value:10},{name:`another child`,value:5},{name:`next child`,value:15,children:[{name:`third level child`,value:5},{name:`third level child`,value:5},{name:`third level child`,value:5,children:[{name:`level 4`,value:2}]}]}]},{name:`Child2`,fill:`#2a9d8f`,value:20,children:[{name:`another child`,value:10},{name:`next child`,value:10,children:[{name:`level 3 of child 2`,value:5},{name:`level 3 of child 2`,value:3},{name:`level 3 of child 2`,value:2}]}]},{name:`Child3`,fill:`#e9c46a`,value:20},{name:`Child4`,fill:`#F4A261`,value:10,children:[{name:`child4 child`,value:5},{name:`child4 child`,value:5}]},{name:`Child5`,fill:`#e76f51`,value:20}]},f={render:e=>l.createElement(i,{width:`100%`,height:450},l.createElement(a,{...e,data:e.data},l.createElement(r,null))),args:{data:d,innerRadius:40,startAngle:90,endAngle:270}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={450}>
        <SunburstChart {...args} data={args.data}>
          <Tooltip />
        </SunburstChart>
      </ResponsiveContainer>;
  },
  args: {
    data: hierarchy,
    innerRadius: 40,
    startAngle: 90,
    endAngle: 270
  }
}`,...f.parameters?.docs?.source}}},p=[`API`]}))();export{f as API,p as __namedExportsOrder,u as default};
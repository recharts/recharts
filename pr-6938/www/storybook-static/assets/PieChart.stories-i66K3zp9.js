import{e,r as f}from"./iframe-DsOUfprP.js";import{g as h}from"./utils-ePvtT4un.js";import{a as v}from"./assertNotNull-uK_qSLsC.js";import{a as u,P as p}from"./PieChart-B17wVqYz.js";import{R as F}from"./arrayEqualityCheck-DjO11PbP.js";import{S as I}from"./Sector-ClMrTgKg.js";import{T as k}from"./Tooltip-BoIk5KKE.js";import{R as g}from"./RechartsHookInspector-mhd3rbsm.js";import{L as C}from"./Label-CbeoYjYN.js";import{L as R}from"./Legend-CjMNvEPR.js";import{b as z}from"./Page-Cj8EiXz7.js";const c={accessibilityLayer:{description:"Turn on accessibility support for keyboard-only and screen reader users.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},barCategoryGap:{description:"The gap between two bar categories, which can be a percent value or a fixed value.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"10%"}},defaultValue:"10%"},barGap:{description:"The gap between two bars in the same category.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"4"}},defaultValue:4},barSize:{description:`The width or height of each bar. If the barSize is not specified, the size of the
bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,table:{type:{summary:"number | string"},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},cx:{description:"The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"50%"}},defaultValue:"50%"},cy:{description:"The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"50%"}},defaultValue:"50%"},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:"ReadonlyArray<DataPointType>"},category:"General"}},dataKey:{table:{type:{summary:"Function | number | string"},category:"General"}},desc:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},endAngle:{description:"Angle, in degrees, at which the chart should end.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"360"}},defaultValue:360},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},id:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},innerRadius:{description:`The inner radius of the chart.
If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},layout:{description:"The layout of chart defines the orientation of axes, graphical items, and tooltip.",table:{type:{summary:'"centric" | "radial"'},category:"General",defaultValue:{summary:"centric"}},defaultValue:"centric"},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},maxBarSize:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},onClick:{description:"The customized event handler of click in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onContextMenu:{description:"The customized event handler of contextmenu in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onDoubleClick:{description:"The customized event handler of dblclick in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchEnd:{description:"The customized event handler of touchend in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchMove:{description:"The customized event handler of touchmove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchStart:{description:"The customized event handler of touchstart in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},outerRadius:{description:`The outer radius of the chart.
If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"80%"}},defaultValue:"80%"},ref:{table:{type:{summary:"Function | React.RefObject<SVGSVGElement> | null"},category:"General"}},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},reverseStackOrder:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},role:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},stackOffset:{control:{type:"select"},options:["none","sign","expand","wiggle","silhouette","positive"],table:{type:{summary:'"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"'},category:"General",defaultValue:{summary:"none"}},defaultValue:"none"},startAngle:{description:"Angle in degrees from which the chart should start.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},syncId:{description:"Charts with the same syncId will synchronize Tooltip and Brush events.",table:{type:{summary:"number | string"},category:"General"}},syncMethod:{description:"Customize how the charts will synchronize tooltips and brushes.\n`index`: synchronize using the data index in the data array. Index expects that all data has the same length.\n`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).\nfunction: a custom sync method which receives tick and data as argument and returns an index.",table:{type:{summary:'"index" | "value" | Function'},category:"General",defaultValue:{summary:"index"}},defaultValue:"index"},tabIndex:{description:"If and where the chart should appear in the tab order",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},throttleDelay:{description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",table:{type:{summary:'"raf" | number'},category:"General",defaultValue:{summary:"raf"}},defaultValue:"raf"},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:'"all" | Array<keyof GlobalEventHandlersEventMap>'},category:"General",defaultValue:{summary:'["mousemove","touchmove","pointermove","scroll","wheel"]'}},defaultValue:["mousemove","touchmove","pointermove","scroll","wheel"]},title:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},K={argTypes:c,component:u},r={name:"Simple",render:t=>{const{data:i,activeShape:l}=t;return e.createElement(F,{width:"100%",height:400},e.createElement(u,{...t},e.createElement(p,{data:i,dataKey:"uv",shape:({isActive:d,...s})=>e.createElement(I,{...s,fill:d?l.fill:s.fill})}),e.createElement(k,{defaultIndex:3}),e.createElement(g,null)))},args:{...h(c),data:z,activeShape:{fill:"red"},margin:{top:0,right:0,bottom:0,left:0}}},n={render:t=>e.createElement(u,{...t},e.createElement(p,{data:t.data,dataKey:"uv",nameKey:"name",innerRadius:50,outerRadius:80,cornerRadius:8},e.createElement(C,{position:"center",fill:"#000",fontSize:12,fontWeight:"bold",dy:-7},"Donut"),e.createElement(C,{position:"center",fontSize:12,fontWeight:"bold",dy:8},"Chart"),e.createElement(R,{align:"right",verticalAlign:"middle",layout:"vertical"})),e.createElement(g,null)),args:{...h(c),width:500,height:300,data:z}},o={render:t=>{const i=[{x:{value:1},name:"x1",fill:"blue"},{x:{value:2},name:"x2",fill:"red"},{x:{value:3},name:"x3",fill:"green"}],l=[{y:{value:3},name:"y1",fill:"blue"},{y:{value:2},name:"y2",fill:"red"},{y:{value:1},name:"y3",fill:"green"}],d=a=>(v(a.x),a.x.value),s=a=>(v(a.y),a.y.value),[m,b]=f.useState(!1),[P,y]=f.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{b(!1),y(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{b(!0),y(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{y(!1)}},"Hide"),e.createElement(u,{...t,data:m?l:i},e.createElement(k,null),e.createElement(R,null),e.createElement(g,null),e.createElement(p,{data:m?l:i,name:"Animated line",hide:!P,type:"monotone",dataKey:m?s:d,stroke:"#8884d8",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:3e3})))},args:{...h(c),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}};var x,T,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Record<string, any>) => {
    const {
      data,
      activeShape
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" shape={({
          isActive,
          ...props
        }) => {
          return <Sector {...props} fill={isActive ? activeShape.fill : props.fill} />;
        }} />
          <Tooltip defaultIndex={3} />
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PieChartArgs),
    data: pageDataWithFillColor,
    activeShape: {
      fill: 'red'
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var w,S,V;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    return <PieChart {...args}>
        <Pie data={args.data} dataKey="uv" nameKey="name" innerRadius={50} outerRadius={80} cornerRadius={8}>
          <Label position="center" fill="#000" fontSize={12} fontWeight="bold" dy={-7}>
            Donut
          </Label>
          <Label position="center" fontSize={12} fontWeight="bold" dy={8}>
            Chart
          </Label>
          <Legend align="right" verticalAlign="middle" layout="vertical" />
        </Pie>
        <RechartsHookInspector />
      </PieChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PieChartArgs),
    width: 500,
    height: 300,
    data: pageDataWithFillColor
  }
}`,...(V=(S=n.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var G,D,A;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    type MockDataType = {
      x?: {
        value: number;
      };
      y?: {
        value: number;
      };
      name: string;
      fill: string;
    };
    const data1: ReadonlyArray<MockDataType> = [{
      x: {
        value: 1
      },
      name: 'x1',
      fill: 'blue'
    }, {
      x: {
        value: 2
      },
      name: 'x2',
      fill: 'red'
    }, {
      x: {
        value: 3
      },
      name: 'x3',
      fill: 'green'
    }];
    const data2: ReadonlyArray<MockDataType> = [{
      y: {
        value: 3
      },
      name: 'y1',
      fill: 'blue'
    }, {
      y: {
        value: 2
      },
      name: 'y2',
      fill: 'red'
    }, {
      y: {
        value: 1
      },
      name: 'y3',
      fill: 'green'
    }];
    const dataKey1 = (d: MockDataType) => {
      assertNotNull(d.x);
      return d.x.value;
    };
    const dataKey2 = (d: MockDataType) => {
      assertNotNull(d.y);
      return d.y.value;
    };
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <PieChart {...args} data={useData2 ? data2 : data1}>
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
          <Pie data={useData2 ? data2 : data1} name="Animated line" hide={!visible} type="monotone" dataKey={useData2 ? dataKey2 : dataKey1} stroke="#8884d8" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={3000} />
        </PieChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PieChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const M=["API","Donut","ChangingDataKey"],X=Object.freeze(Object.defineProperty({__proto__:null,API:r,ChangingDataKey:o,Donut:n,__namedExportsOrder:M,default:K},Symbol.toStringTag,{value:"Module"}));export{r as A,X as C};

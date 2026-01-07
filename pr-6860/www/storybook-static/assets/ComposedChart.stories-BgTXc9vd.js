import{e}from"./iframe-Cr3T7ZdA.js";import{g as m}from"./utils-ePvtT4un.js";import{C}from"./ComposedChart-C4RuOW4J.js";import{t as O}from"./Time-CZh6Vidc.js";import{A as p}from"./Area-Csidfa1k.js";import{B as a}from"./Bar-hcWSqP9i.js";import{L as d}from"./Line-CLdKLaES.js";import{R as D}from"./arrayEqualityCheck-DqF1T4jr.js";import{R}from"./RechartsHookInspector-ClBCFl3l.js";import{X as u}from"./XAxis-DBNHDh11.js";import{Y as y}from"./YAxis-D1E5tbtq.js";import{L as h}from"./Legend-C40qRgVH.js";import{C as f}from"./CartesianGrid-BmfMprKw.js";import{R as j}from"./ReferenceLine-DxupMds8.js";import{R as H}from"./ReferenceDot-CQjM-V4T.js";import{B as I}from"./Brush-Dr4qyJNl.js";import{L as X}from"./LineChart-D55KAf0D.js";import{T as g}from"./Tooltip-Bv5lo6sl.js";import{S as Y}from"./Scatter-BgOLskzi.js";import{p as r}from"./Page-DPte-9pC.js";const n={accessibilityLayer:{description:"Turn on accessibility support for keyboard-only and screen reader users.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},barCategoryGap:{description:"The gap between two bar categories, which can be a percent value or a fixed value.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"10%"}},defaultValue:"10%"},barGap:{description:"The gap between two bars in the same category.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"4"}},defaultValue:4},barSize:{description:`The width or height of each bar. If the barSize is not specified, the size of the
bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,table:{type:{summary:"number | string"},category:"General"}},baseValue:{description:"The base value of area.",table:{type:{summary:'"dataMax" | "dataMin" | number'},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},compact:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:"ReadonlyArray<unknown>"},category:"General"}},dataKey:{table:{type:{summary:"Function | number | string"},category:"General"}},desc:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},id:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},layout:{description:"The layout of chart defines the orientation of axes, graphical items, and tooltip.",table:{type:{summary:'"horizontal" | "vertical"'},category:"General",defaultValue:{summary:"horizontal"}},defaultValue:"horizontal"},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},maxBarSize:{description:"The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},onClick:{description:"The customized event handler of click in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onContextMenu:{description:"The customized event handler of contextmenu in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onDoubleClick:{description:"The customized event handler of dblclick in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchEnd:{description:"The customized event handler of touchend in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchMove:{description:"The customized event handler of touchmove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchStart:{description:"The customized event handler of touchstart in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},reverseStackOrder:{description:"If `false`, stacked items will be rendered left to right.\nIf `true`, stacked items will be rendered right to left.\n\nRender direction affects SVG layering, not x position.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},role:{description:"The ARIA role for the chart, which provides semantic information for screen reader users.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},stackOffset:{description:`The type of offset function used to generate the lower and upper values in the series array.
The types are built-in offsets in d3-shape.
Only applicable for stacked Area or Bar charts.
Has no effect when the stackId prop is not set on Area or Bar components.`,control:{type:"select"},options:["none","sign","expand","wiggle","silhouette","positive"],table:{type:{summary:'"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"'},category:"General",defaultValue:{summary:"none"}},defaultValue:"none"},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},syncId:{description:"Charts with the same syncId will synchronize Tooltip and Brush events.",table:{type:{summary:"number | string"},category:"General"}},syncMethod:{description:"Customize how the charts will synchronize tooltips and brushes.\n`index`: synchronize using the data index in the data array. Index expects that all data has the same length.\n`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).\nfunction: a custom sync method which receives tick and data as argument and returns an index.",table:{type:{summary:'"index" | "value" | Function'},category:"General",defaultValue:{summary:"index"}},defaultValue:"index"},tabIndex:{description:"If and where the chart should appear in the tab order",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},throttleDelay:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},title:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},Z={argTypes:n,component:C},b={render:t=>e.createElement(D,{width:"100%",height:300},e.createElement(C,{...t,data:r,margin:{top:20,right:20,bottom:20,left:20}},t.children,e.createElement(R,null)))},o={name:"Simple Chart",...b,args:{...m(n),data:r,children:e.createElement(e.Fragment,null,e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv"}),e.createElement(d,{dataKey:"pv"}))}},i={...b,args:{...m(n),data:r,children:e.createElement(e.Fragment,null,e.createElement(u,{dataKey:"name",scale:"band"}),e.createElement(y,null),e.createElement(h,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(f,{stroke:"#f5f5f5"}),e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(j,{x:"Page C",stroke:"red",label:"Max PV PAGE"}),e.createElement(H,{x:"Page C",y:1300,stroke:"red"}),e.createElement(I,null,e.createElement(X,null,e.createElement(d,{dataKey:"uv",stroke:"#ff7300",dot:!1}))),e.createElement(g,null))}},l={...b,args:{...m(n),data:r,children:e.createElement(e.Fragment,null,e.createElement(u,{dataKey:"name"}),e.createElement(y,null),e.createElement(h,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(f,{stroke:"#f5f5f5"}),e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(d,{type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(Y,{dataKey:"pv",fill:"red"}),e.createElement(I,null),e.createElement(g,null))}},s={...b,args:{...m(n),data:r,children:e.createElement(e.Fragment,null,e.createElement(u,null),e.createElement(y,null),e.createElement(h,null),e.createElement(f,{stroke:"#f5f5f5"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(d,{type:"monotone",dataKey:"pv",stroke:"#ff7300"}),e.createElement(g,null))}},c={render:t=>{const M=P=>P.toLocaleString("en-GB",{timeZone:"UTC",dateStyle:"medium"});return e.createElement("div",{style:{width:"600px"}},e.createElement("p",null,"A ComposedChart of time scale"),e.createElement(D,{width:"100%",height:500},e.createElement("div",{className:"composed-chart-wrapper"},e.createElement(C,{width:600,height:400,data:t.timeData,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(f,{stroke:"#f5f5f5"}),e.createElement(u,{dataKey:"x",domain:[t.from.getTime(),t.to.getTime()],scale:"time",type:"number",tick:{fontSize:10,fill:"red"},tickFormatter:M}),e.createElement(y,null),e.createElement(h,null),e.createElement(p,{type:"monotone",dataKey:"y",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"y",barSize:20,fill:"#413ea0"}),e.createElement(d,{type:"monotone",dataKey:"y",stroke:"#ff7300"}),e.createElement(g,null),e.createElement(R,null)))))},args:{...m(n),from:new Date("2019-07-04T00:00:00.000Z"),to:new Date("2019-07-10T00:00:00.000Z"),timeData:O,data:r}};var v,E,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Simple Chart',
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
  }
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,k,x;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" fill="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceDot x="Page C" y={1300} stroke="red" />
        <Brush>
          <LineChart>
            <Line dataKey="uv" stroke="#ff7300" dot={false} />
          </LineChart>
        </Brush>
        <Tooltip />
      </>
  }
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,w,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
        <Tooltip />
      </>
  }
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var G,K,L;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
        <Tooltip />
      </>
  }
}`,...(L=(K=s.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var F,B,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: Args) => {
    const tickFormatter = (tick: Date) => {
      return tick.toLocaleString('en-GB', {
        /*
         * Forced timezone so that our visual diff renders the same for all contributors.
         * In real app you will probably leave timeZone undefined
         */
        timeZone: 'UTC',
        dateStyle: 'medium'
      });
    };
    return <div style={{
      width: '600px'
    }}>
        <p>A ComposedChart of time scale</p>
        <ResponsiveContainer width="100%" height={500}>
          <div className="composed-chart-wrapper">
            <Composed width={600} height={400} data={args.timeData} margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="x" domain={[args.from.getTime(), args.to.getTime()]} scale="time" type="number" tick={{
              fontSize: 10,
              fill: 'red'
            }} tickFormatter={tickFormatter} />
              <YAxis />
              <Legend />
              <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="y" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
              <Tooltip />
              <RechartsHookInspector />
            </Composed>
          </div>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData
  }
}`,...(V=(B=c.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const _=["API","ComplexChart","LineBarAreaScatter","LineBarHorizontal","LineBarAreaScatterTimeScale"],ue=Object.freeze(Object.defineProperty({__proto__:null,API:o,ComplexChart:i,LineBarAreaScatter:l,LineBarAreaScatterTimeScale:c,LineBarHorizontal:s,__namedExportsOrder:_,default:Z},Symbol.toStringTag,{value:"Module"}));export{o as A,ue as C};

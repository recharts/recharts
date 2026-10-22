import{R as e}from"./iframe-BqFv--n0.js";import{g as s}from"./utils-ePvtT4un.js";import{L as n}from"./activeStyles-C0pD60nL.js";import{R as h}from"./zIndexSlice-CQSP_367.js";import{L as z}from"./LineChart-DQAfyNsp.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-Dd_n4Mfj.js";import{Y as f}from"./YAxis-C7K0-Kt6.js";import{L as X}from"./Line-Cu7SDvK4.js";import{B as y}from"./BarChart-DfOOeraH.js";import{C as b}from"./CartesianGrid-tlhXc924.js";import{B as A}from"./Bar-BCGpxfEL.js";import{R as Y}from"./RadarChart-lOkHdbpP.js";import{P as M}from"./PolarGrid-Df7JD6Gh.js";import{P as U}from"./PolarAngleAxis-CqYB_N3G.js";import{P as _}from"./PolarRadiusAxis-BgCpalAX.js";import{R as q}from"./Radar-BeuKQC0F.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-DI-ST-i-.js";import"./get-cF5BDHN6.js";import"./Text-BW5R7YWF.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./pageBackground-B1lJR1Eh.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-m5JcFv6F.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./Layer-VP2k7KQb.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./throttle-u_PA2Aue.js";import"./RechartsWrapper-CRaC0TZF.js";import"./axisSelectors-ZWEeDNRz.js";import"./d3-scale-CFuq5uTk.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./index-3DQVsuvq.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./CartesianAxis-CpohuUTj.js";import"./types-A41OMRS1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B2qT8EGI.js";import"./step-DAllZbzr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BuaaOhKZ.js";import"./Dot-Ck25bOyu.js";import"./ErrorBarContext-CHaebdqW.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getRadiusAndStrokeWidthFromDot-pw39BaVD.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./useEffectiveDataKey-B-x1_7m_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bht2f_LE.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-DcplO9q_.js";import"./getZIndexFromUnknown-DaGHmo0U.js";import"./omit-Doolu4tT.js";import"./isArguments-yB-y1yaH.js";import"./PolarChart-Dh8Hh0xz.js";import"./polarScaleSelectors-CNqwxiHT.js";import"./polarSelectors-BkgsvsAp.js";import"./Polygon-C6VCiCIg.js";import"./maxBy-DIEmscKh.js";import"./iteratee-DOA0wS8i.js";const o={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a rectangle behind each label, for example to keep labels readable on top of filled shapes.\n\n- `true` draws the background with default styles.\n  The fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n- `false` or `undefined` draws no background.\n\nEach background is sized from its rendered label and follows curved label paths.\nIt is not drawn for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:"If set a React element, the option is the customized React element of rendering each label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function is called once for each item",table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of each label.

If set, then valueAccessor will be ignored.

Scatter requires this prop to be set.
Other graphical components will show the same value as the dataKey of the component by default.`,table:{type:{summary:"Function | number | string"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},offset:{description:`The offset to the specified "position".
Direction of the offset depends on the position.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},valueAccessor:{description:"The accessor function to get the value of each label. Is ignored if dataKey is specified.",table:{type:{summary:"Function"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ut={argTypes:o,component:n},l={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(z,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},m={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5}},c={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(M,null),e.createElement(U,{dataKey:"subject"}),e.createElement(_,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(n,{...r}))),args:{...s(o),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=O=>{const{x:j,y:F,width:V,value:x}=O;if(x==null)return null;const v=Number(j)+Number(V)/2,w=Number(F)-14;return e.createElement("g",null,e.createElement("circle",{cx:v,cy:w,r:10,fill:"#8884d8"}),e.createElement("text",{x:v,y:w,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},x))},[t,i]=[600,300];return e.createElement(h,{width:"100%",height:i},e.createElement(y,{width:t,height:i,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(n,{...r,content:a}))))},args:{...s(o),dataKey:"pv"}},p={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r,formatter:i=>i!=null?`${i} visitors`:""}))))},args:{...s(o),dataKey:"uv",position:"top"}},gt=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];var L,C,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top',
    offset: 5,
    angle: 0,
    textBreakAll: false,
    zIndex: 2000
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var K,R,T;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList {...args} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top',
    offset: 5
  }
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var B,k,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={500} height={400} data={subjectData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        {/* The target component */}
        <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
          <LabelList {...args} />
        </Radar>
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'A',
    position: 'outside',
    clockWise: true
  }
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var G,W,H;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: Args) => {
    const renderCustomLabel = (props: LabelProps) => {
      const {
        x,
        y,
        width,
        value
      } = props;
      if (value == null) {
        return null;
      }
      const xPos = Number(x) + Number(width) / 2;
      const yPos = Number(y) - 14;
      return <g>
          <circle cx={xPos} cy={yPos} r={10} fill="#8884d8" />
          <text x={xPos} y={yPos} fill="#fff" textAnchor="middle" dominantBaseline="middle" fontSize={10}>
            {value}
          </text>
        </g>;
    };
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 30,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component with custom content renderer */}
          <Bar dataKey="pv" fill="#82ca9d">
            <LabelList {...args} content={renderCustomLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'pv'
  }
}`,...(H=(W=d.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var S,D,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component with formatter */}
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList {...args} formatter={value => value != null ? \`\${value} visitors\` : ''} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top'
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};export{l as API,m as OnBarChart,c as OnRadarChart,d as WithCustomContent,p as WithFormatter,gt as __namedExportsOrder,ut as default};

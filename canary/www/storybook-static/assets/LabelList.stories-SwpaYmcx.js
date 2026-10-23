import{R as e}from"./iframe-DWz-Q7D1.js";import{g as s}from"./utils-ePvtT4un.js";import{L as n}from"./activeStyles-cBdGFM1d.js";import{R as h}from"./zIndexSlice-D4KjIdsO.js";import{L as z}from"./LineChart-Dcmc61bT.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-BZUBECrT.js";import{Y as f}from"./YAxis--VjP9Ce5.js";import{L as X}from"./Line-DmDKrJpN.js";import{B as y}from"./BarChart-CzKifJ5F.js";import{C as b}from"./CartesianGrid-BoGhBG8e.js";import{B as A}from"./Bar-fHz40j2p.js";import{R as Y}from"./RadarChart-B_q2hLlV.js";import{P as M}from"./PolarGrid-DQAEPcWv.js";import{P as U}from"./PolarAngleAxis-CfE4gKAA.js";import{P as _}from"./PolarRadiusAxis-BhtZXIWm.js";import{R as q}from"./Radar-BC5kRNaX.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-DNBocu_e.js";import"./get-cF5BDHN6.js";import"./Text-Rsbaz2Nf.js";import"./resolveDefaultProps-CzYzgORH.js";import"./pageBackground-Bn_EUSju.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./Layer-0LCA68q2.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./throttle-CiqOC1ip.js";import"./RechartsWrapper-DTtBamZ0.js";import"./axisSelectors-Ce2rWziX.js";import"./d3-scale-B1h-c6nn.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-DXyt1obU.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./CartesianAxis-k4k8wY80.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-57G7mADL.js";import"./step-CnBlCK_d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BA6UWnZF.js";import"./Dot-DC9IrQq5.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getRadiusAndStrokeWidthFromDot-Dqmrd8D2.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-04QXIjXf.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-QlfnW-MK.js";import"./getZIndexFromUnknown-cXPSnZy0.js";import"./omit-sactXHxf.js";import"./isArguments-yB-y1yaH.js";import"./PolarChart-B4vZacjC.js";import"./polarScaleSelectors-C47bfaei.js";import"./polarSelectors-C3cy9Yeb.js";import"./Polygon-Bw-RfTSU.js";import"./maxBy-ChVc_jym.js";import"./iteratee-D2MvuXn3.js";const o={angle:{description:`Text rotation angle in degrees.
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

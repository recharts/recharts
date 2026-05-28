import{e}from"./iframe-BpuHkxzv.js";import{g as s}from"./utils-ePvtT4un.js";import{L as o}from"./ReactUtils-eZNJAb5x.js";import{g as u}from"./arrayEqualityCheck-D3NbzucA.js";import{L as N}from"./LineChart-DbHE3aJ7.js";import{p as g,s as X}from"./Page-DPte-9pC.js";import{X as f}from"./XAxis-DAM5aOqn.js";import{Y as y}from"./YAxis-Di_DA3y5.js";import{L as Y}from"./Line-CgHPqU2o.js";import{R as l}from"./RechartsHookInspector-AaKfh7uA.js";import{B as b}from"./BarChart-CJPzBxcI.js";import{C as A}from"./CartesianGrid-B8Emn2Id.js";import{B as x}from"./Bar-C-HLHhlT.js";import{R as _}from"./RadarChart-Boi1lSpL.js";import{P as q}from"./PolarGrid-D7AhSqW7.js";import{P as U}from"./PolarAngleAxis-BuACUtFO.js";import{P as $}from"./PolarRadiusAxis-CkRvsnm8.js";import{R as M}from"./Radar-Lz_iRF63.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-DXexZu28.js";import"./clsx-B-dksMZM.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./zIndexSlice-CmLQD4Hj.js";import"./immer-OyT0OiEL.js";import"./Layer-BqE9-RFh.js";import"./index-B2w93Cnl.js";import"./RechartsWrapper-PymVavj3.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./CartesianAxis-C7ZsdIQA.js";import"./types-EV6wLq9J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CBMG8s0Y.js";import"./step-BD2V_DAB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BAZZqzbw.js";import"./Dot-DpxQTaWX.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./ErrorBarContext-C3BTG3j_.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./useAnimationId-ObzFSifI.js";import"./getRadiusAndStrokeWidthFromDot-CfvNKrul.js";import"./ActiveShapeUtils-CT-qLZ85.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";import"./tooltipContext-DC3Kn2Ay.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2x9Rcis.js";import"./getZIndexFromUnknown-Ba28HUXU.js";import"./graphicalItemSelectors-DK3U3rqu.js";import"./PolarChart-DmyeHW-x.js";import"./polarScaleSelectors-BpFK4koi.js";import"./polarSelectors-DdOash3i.js";import"./Polygon-DlXYrvCW.js";import"./maxBy-BFcpiRgM.js";import"./iteratee-Dy8tB5bU.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:`If set a React element, the option is the customized React element of rendering each label.
If set to a function, the function is called once for each item`,table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},dt={argTypes:i,component:o},m={render:r=>{const[a,t]=[600,300];return e.createElement(u,{width:"100%",height:t},e.createElement(N,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:g},e.createElement(f,{dataKey:"name"}),e.createElement(y,null),e.createElement(Y,{dataKey:"uv"},e.createElement(o,{...r})),e.createElement(l,null)))},args:{...s(i),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},c={render:r=>{const[a,t]=[600,300];return e.createElement(u,{width:"100%",height:t},e.createElement(b,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:g},e.createElement(A,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(y,null),e.createElement(x,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r})),e.createElement(l,null)))},args:{...s(i),dataKey:"uv",position:"top",offset:5}},d={render:r=>e.createElement(_,{width:500,height:400,data:X},e.createElement(q,null),e.createElement(U,{dataKey:"subject"}),e.createElement($,null),e.createElement(M,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(o,{...r})),e.createElement(l,null)),args:{...s(i),dataKey:"A",position:"outside",clockWise:!0}},p={render:r=>{const a=F=>{const{x:j,y:z,width:V,value:v}=F;if(v==null)return null;const E=Number(j)+Number(V)/2,L=Number(z)-14;return e.createElement("g",null,e.createElement("circle",{cx:E,cy:L,r:10,fill:"#8884d8"}),e.createElement("text",{x:E,y:L,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,n]=[600,300];return e.createElement(u,{width:"100%",height:n},e.createElement(b,{width:t,height:n,margin:{top:30,right:20,bottom:20,left:20},data:g},e.createElement(A,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(y,null),e.createElement(x,{dataKey:"pv",fill:"#82ca9d"},e.createElement(o,{...r,content:a})),e.createElement(l,null)))},args:{...s(i),dataKey:"pv"}},h={render:r=>{const[a,t]=[600,300];return e.createElement(u,{width:"100%",height:t},e.createElement(b,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:g},e.createElement(A,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(y,null),e.createElement(x,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r,formatter:n=>n!=null?`${n} visitors`:""})),e.createElement(l,null)))},args:{...s(i),dataKey:"uv",position:"top"}};var C,w,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var K,B,T;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top',
    offset: 5
  }
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var k,H,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={500} height={400} data={subjectData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        {/* The target component */}
        <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
          <LabelList {...args} />
        </Radar>
        <RechartsHookInspector />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'A',
    position: 'outside',
    clockWise: true
  }
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var I,W,G;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'pv'
  }
}`,...(G=(W=p.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var D,S,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top'
  }
}`,...(O=(S=h.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const pt=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];export{m as API,c as OnBarChart,d as OnRadarChart,p as WithCustomContent,h as WithFormatter,pt as __namedExportsOrder,dt as default};

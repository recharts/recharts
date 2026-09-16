import{R as e}from"./iframe-14XWblZL.js";import{g as s}from"./utils-ePvtT4un.js";import{L as n}from"./AnimatedItems-Dweh6qvQ.js";import{R as h}from"./zIndexSlice-bTipO816.js";import{L as z}from"./LineChart-o59r2jxV.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-C7X69uLj.js";import{Y as f}from"./YAxis-B3LGD4EX.js";import{L as X}from"./Line-CWtoKG_V.js";import{B as y}from"./BarChart-BIdbh17n.js";import{C as b}from"./CartesianGrid-sqAOvoii.js";import{B as A}from"./Bar-ujt9bXXz.js";import{R as Y}from"./RadarChart-HIsCxcxe.js";import{P as M}from"./PolarGrid-DSkpAYMi.js";import{P as U}from"./PolarAngleAxis-BTLI-6eJ.js";import{P as _}from"./PolarRadiusAxis-DWQfvkXl.js";import{R as q}from"./Radar-DaizDz4e.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-CvRLouIN.js";import"./get-C2VjdU0L.js";import"./Text-DR2swdHV.js";import"./resolveDefaultProps-CeALBfEq.js";import"./DOMUtils-BDBx2TYe.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BpIepiPk.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./Layer-DfNVM8Fr.js";import"./index-kqeHVlrV.js";import"./index-CT88W_qc.js";import"./throttle-BdJ0G1gd.js";import"./useAnimationId-BF3NsOWV.js";import"./RechartsWrapper-DCy9svnE.js";import"./axisSelectors-CIwAjqs7.js";import"./d3-scale-Do0_JEbV.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./CartesianAxis-CBKTwxf2.js";import"./types-DUuownuR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CiXwsAAl.js";import"./step-JufzNNlH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CmDJ2stf.js";import"./Dot-CVbI_zwl.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./ErrorBarContext-B0Gjb9Ej.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getRadiusAndStrokeWidthFromDot-CkcS_CHs.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./useGraphicalItemIdentity-QKGsdlin.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Btq3c2bb.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-DkW5DSuT.js";import"./getZIndexFromUnknown-K_r4WiI1.js";import"./PolarChart-Bbv4jrR4.js";import"./polarScaleSelectors-B6F_ycZi.js";import"./polarSelectors-D6bYO015.js";import"./Polygon-BnYUqU5H.js";import"./maxBy-B-uazLFg.js";import"./iteratee-CcTmIxFv.js";const o={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:"If set a React element, the option is the customized React element of rendering each label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function is called once for each item",table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},pt={argTypes:o,component:n},m={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(z,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},l={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5}},c={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(M,null),e.createElement(U,{dataKey:"subject"}),e.createElement(_,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(n,{...r}))),args:{...s(o),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=I=>{const{x:F,y:j,width:V,value:v}=I;if(v==null)return null;const x=Number(F)+Number(V)/2,L=Number(j)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:L,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:L,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,i]=[600,300];return e.createElement(h,{width:"100%",height:i},e.createElement(y,{width:t,height:i,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(n,{...r,content:a}))))},args:{...s(o),dataKey:"pv"}},p={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r,formatter:i=>i!=null?`${i} visitors`:""}))))},args:{...s(o),dataKey:"uv",position:"top"}},ht=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];var C,w,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var K,R,T;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var B,P,G;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(P=c.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var W,H,k;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(H=d.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var S,D,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};export{m as API,l as OnBarChart,c as OnRadarChart,d as WithCustomContent,p as WithFormatter,ht as __namedExportsOrder,pt as default};

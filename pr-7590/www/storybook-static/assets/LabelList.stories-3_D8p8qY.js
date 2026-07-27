import{R as e}from"./iframe-DX3DoU0V.js";import{g as s}from"./utils-ePvtT4un.js";import{L as o}from"./AnimatedItems-azUMJ4jR.js";import{R as h}from"./zIndexSlice-JZscBD-4.js";import{L as z}from"./LineChart-D_vcWVpB.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-CymymjPS.js";import{Y as f}from"./YAxis-eJYuoSOp.js";import{L as X}from"./Line-Dxp5xYSo.js";import{B as y}from"./BarChart-CViHzgTk.js";import{C as b}from"./CartesianGrid-BMdbx6fH.js";import{B as A}from"./Bar-CbtwD6ve.js";import{R as Y}from"./RadarChart-D3Djzcu4.js";import{P as M}from"./PolarGrid-C4NQwlBE.js";import{P as U}from"./PolarAngleAxis-DtQeN8VS.js";import{P as _}from"./PolarRadiusAxis-B15Q6ozZ.js";import{R as q}from"./Radar-DQfpkyFE.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-CcOENmHR.js";import"./get-DJ3830uQ.js";import"./Text-CGNeItsO.js";import"./resolveDefaultProps-Dht9eep2.js";import"./DOMUtils-jkxXqBeu.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./Layer-CfDkJPJv.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./throttle-Df9paSU5.js";import"./useAnimationId-2LcPTVkH.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./axisSelectors-CPexRmiS.js";import"./d3-scale-cmuGZbi0.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./CartesianAxis-Bl7vCDUz.js";import"./types-CkeZP30w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-lZ1smd7v.js";import"./step-m02rWKGn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D6qpACIy.js";import"./Dot-DycfcH3j.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./ErrorBarContext-UMJzk-jC.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getRadiusAndStrokeWidthFromDot-BSSlkcIg.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./tooltipContext-B8gNCXNL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BknJ5SeS.js";import"./util-Dxo8gN5i.js";import"./getZIndexFromUnknown-Bymqfo9L.js";import"./graphicalItemSelectors-BlsH2ULy.js";import"./PolarChart-C4XLKG2Z.js";import"./polarScaleSelectors-BVLhsoxt.js";import"./polarSelectors-BpWzPAU7.js";import"./Polygon-D40Vi0An.js";import"./maxBy-Db8SYTGF.js";import"./iteratee-CB7cTIhH.js";const i={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},mt={argTypes:i,component:o},l={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(z,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(o,{...r}))))},args:{...s(i),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},m={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r}))))},args:{...s(i),dataKey:"uv",position:"top",offset:5}},c={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(M,null),e.createElement(U,{dataKey:"subject"}),e.createElement(_,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(o,{...r}))),args:{...s(i),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=I=>{const{x:F,y:j,width:V,value:v}=I;if(v==null)return null;const x=Number(F)+Number(V)/2,L=Number(j)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:L,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:L,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,n]=[600,300];return e.createElement(h,{width:"100%",height:n},e.createElement(y,{width:t,height:n,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(o,{...r,content:a}))))},args:{...s(i),dataKey:"pv"}},p={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r,formatter:n=>n!=null?`${n} visitors`:""}))))},args:{...s(i),dataKey:"uv",position:"top"}};var C,w,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var K,R,T;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var B,P,G;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ct=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];export{l as API,m as OnBarChart,c as OnRadarChart,d as WithCustomContent,p as WithFormatter,ct as __namedExportsOrder,mt as default};

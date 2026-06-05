import{R as e}from"./iframe-COvhlo3n.js";import{g as s}from"./utils-ePvtT4un.js";import{L as o}from"./AnimatedItems-DpY5jibk.js";import{R as h}from"./zIndexSlice-UjQyxCBO.js";import{L as V}from"./LineChart-BzHQVwJT.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-CiJXThtt.js";import{Y as f}from"./YAxis-Xvc1KoDU.js";import{L as X}from"./Line-Cmqu6p5D.js";import{B as y}from"./BarChart-CdfW00yM.js";import{C as b}from"./CartesianGrid-DloNNRRy.js";import{B as A}from"./Bar-BI4ZPP1r.js";import{R as Y}from"./RadarChart-BdnRL5Zm.js";import{P as _}from"./PolarGrid-DpfaLybF.js";import{P as q}from"./PolarAngleAxis-2V9CGaSC.js";import{P as U}from"./PolarRadiusAxis-BIhFy2U1.js";import{R as $}from"./Radar-ASEGJTl5.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-Vr2WzXIC.js";import"./get-DcOFzyCK.js";import"./Text-opN_hZQa.js";import"./resolveDefaultProps-DJ7OALvu.js";import"./DOMUtils-C6WNHbS7.js";import"./isWellBehavedNumber-y7VTG9QG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0TWuVZ-.js";import"./index-HVKWfhx-.js";import"./index-S2en6f0x.js";import"./Layer-B-6Is3nc.js";import"./index-iNixOGJn.js";import"./index-DX1qvyWd.js";import"./immer-BpCohf0r.js";import"./useAnimationId-BKJNFkSk.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-Dx2dgZSl.js";import"./renderedTicksSlice-DbzHTb4p.js";import"./axisSelectors-Zbm12FCw.js";import"./d3-scale-BlVLCp11.js";import"./CartesianChart-Dy7YVWuh.js";import"./chartDataContext-iIol8Xhi.js";import"./CategoricalChart-CLWSl7gV.js";import"./CartesianAxis-s3bXG1ws.js";import"./types-p5b3Q5GI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DZz8_CrJ.js";import"./step-hf0ZFvgG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dfm7fkiJ.js";import"./Dot-DfhacusV.js";import"./RegisterGraphicalItemId-C7wd0umC.js";import"./ErrorBarContext-BHPD5mnS.js";import"./GraphicalItemClipPath-CI-F5EmQ.js";import"./SetGraphicalItem-CwV_dfS_.js";import"./getRadiusAndStrokeWidthFromDot-D1_dalUD.js";import"./ActiveShapeUtils-C3R6UHJX.js";import"./tooltipContext-tIqHNj-C.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-WHK0iDu3.js";import"./getZIndexFromUnknown-CqeMjSuy.js";import"./graphicalItemSelectors-Bn7U8IOW.js";import"./PolarChart-D0TGf2l5.js";import"./polarScaleSelectors-C3m_4Kex.js";import"./polarSelectors-DLbF-7iu.js";import"./Polygon-CjVB1bx_.js";import"./maxBy-CHRdR6Uh.js";import"./iteratee-BnLCBSbQ.js";const i={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},lt={argTypes:i,component:o},l={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(V,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(o,{...r}))))},args:{...s(i),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},m={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r}))))},args:{...s(i),dataKey:"uv",position:"top",offset:5}},c={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(_,null),e.createElement(q,{dataKey:"subject"}),e.createElement(U,null),e.createElement($,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(o,{...r}))),args:{...s(i),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=O=>{const{x:F,y:j,width:z,value:x}=O;if(x==null)return null;const v=Number(F)+Number(z)/2,L=Number(j)-14;return e.createElement("g",null,e.createElement("circle",{cx:v,cy:L,r:10,fill:"#8884d8"}),e.createElement("text",{x:v,y:L,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},x))},[t,n]=[600,300];return e.createElement(h,{width:"100%",height:n},e.createElement(y,{width:t,height:n,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(o,{...r,content:a}))))},args:{...s(i),dataKey:"pv"}},p={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r,formatter:n=>n!=null?`${n} visitors`:""}))))},args:{...s(i),dataKey:"uv",position:"top"}};var C,w,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var K,R,B;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var T,P,W;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var k,G,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var D,S,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const mt=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];export{l as API,m as OnBarChart,c as OnRadarChart,d as WithCustomContent,p as WithFormatter,mt as __namedExportsOrder,lt as default};

import{R as e}from"./iframe-_oCKXQQT.js";import{g as s}from"./utils-ePvtT4un.js";import{L as o}from"./AnimatedItems-CmMbILYr.js";import{R as h}from"./zIndexSlice-Dq64QlX1.js";import{L as V}from"./LineChart-CXWb_mfq.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-D3L4SFSq.js";import{Y as f}from"./YAxis-pBFniQdP.js";import{L as X}from"./Line-CpOlBkzb.js";import{B as y}from"./BarChart-C2xZLaaC.js";import{C as b}from"./CartesianGrid-CGKlTvg8.js";import{B as A}from"./Bar-iq9J0QlP.js";import{R as Y}from"./RadarChart-Du5GXVdj.js";import{P as _}from"./PolarGrid-C0mfUlkP.js";import{P as q}from"./PolarAngleAxis-FRXn_pnX.js";import{P as U}from"./PolarRadiusAxis-tR8cd2gx.js";import{R as $}from"./Radar-DyuaA2XW.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-DrF3NWpt.js";import"./get-Dgc8xSDl.js";import"./Text-CaXzzKZw.js";import"./resolveDefaultProps-D-cNYr8U.js";import"./DOMUtils-BvVxKZ4D.js";import"./isWellBehavedNumber-B9wxNRPu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUuDPJyN.js";import"./index-eQFvDN2n.js";import"./index-BhdyHQ9q.js";import"./Layer-BtAMG36m.js";import"./index-6i1k6cIu.js";import"./index-DYTqQgsI.js";import"./throttle-BQ_gnI8m.js";import"./useAnimationId-CObBJ0f9.js";import"./RechartsWrapper-BkeUzj5p.js";import"./renderedTicksSlice-BRr9Mzxw.js";import"./axisSelectors-DIl8ejt1.js";import"./d3-scale-DRcGFkfh.js";import"./CartesianChart-Br7CcIjd.js";import"./chartDataContext-DAy8Squq.js";import"./CategoricalChart-CepUJJer.js";import"./CartesianAxis--Lh3QzvY.js";import"./types-C2uV_Cvt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-OFG9MmZD.js";import"./step-BG6ETINo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-vZyVJ-4h.js";import"./Dot-B8ZmznHu.js";import"./RegisterGraphicalItemId-43VeAxEX.js";import"./ErrorBarContext-C6Mh3zEx.js";import"./GraphicalItemClipPath-BiS7z6q5.js";import"./SetGraphicalItem-jz90sZeJ.js";import"./getRadiusAndStrokeWidthFromDot-AsQYUmCL.js";import"./ActiveShapeUtils-CrKU6_AB.js";import"./tooltipContext-D56Y1KI-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxnTCKGy.js";import"./util-Dxo8gN5i.js";import"./getZIndexFromUnknown-DQk5nsuk.js";import"./graphicalItemSelectors-CH5-FBeI.js";import"./PolarChart-_LrPbmIl.js";import"./polarScaleSelectors-BkqfEvAF.js";import"./polarSelectors-uE7xTwq0.js";import"./Polygon-CXQJCC98.js";import"./maxBy-ZfhiUHf_.js";import"./iteratee-2tW9rS6f.js";const i={angle:{description:`Text rotation angle in degrees.
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

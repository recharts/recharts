import{R as e}from"./iframe-Dbaqfuxw.js";import{g as s}from"./utils-ePvtT4un.js";import{L as o}from"./AnimatedItems-y-MKsCpX.js";import{R as h}from"./zIndexSlice-CcFmF_GZ.js";import{L as z}from"./LineChart-Dwd6Y2GG.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-B8p6yjl5.js";import{Y as f}from"./YAxis-Dutac8df.js";import{L as X}from"./Line-BIC9rMP6.js";import{B as y}from"./BarChart-D0fiCQcO.js";import{C as b}from"./CartesianGrid-BUjZkSQx.js";import{B as A}from"./Bar-DJDjg_SI.js";import{R as Y}from"./RadarChart-DZ0PcoY9.js";import{P as M}from"./PolarGrid-gJNRm9Lc.js";import{P as U}from"./PolarAngleAxis-B74RWQQQ.js";import{P as _}from"./PolarRadiusAxis-DTsJubSH.js";import{R as q}from"./Radar-BLw22oFZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-BcEDWRMz.js";import"./get-C2VjdU0L.js";import"./Text-Be1RjgkE.js";import"./resolveDefaultProps-xjFLpEsL.js";import"./DOMUtils-CWVgWmzu.js";import"./isWellBehavedNumber-BxE9MI33.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CpQayApT.js";import"./index-A3AcgQ4H.js";import"./index-CQt4Xl-S.js";import"./Layer-BXzB5K08.js";import"./index-Da5KZnpm.js";import"./index-BrtWnZP9.js";import"./throttle-Y8aMRwU5.js";import"./useAnimationId-CsoHoZpG.js";import"./RechartsWrapper-Dl5FKPzp.js";import"./axisSelectors-BumiVa5e.js";import"./d3-scale-HmOGYUjs.js";import"./renderedTicksSlice-DpL__K8R.js";import"./CartesianChart-BXfYtqIv.js";import"./chartDataContext-4k7YbnXG.js";import"./CategoricalChart-CFxz42EG.js";import"./CartesianAxis-DGjRHc2j.js";import"./types-CVDIv1Cb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-60DgJeSx.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CTO_mN3-.js";import"./step-E3pvPVWS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CymzKczQ.js";import"./Dot-B0ezNCXB.js";import"./RegisterGraphicalItemId-BZO7dJhg.js";import"./ErrorBarContext-lpnJ7mOQ.js";import"./GraphicalItemClipPath-r0eQUgnA.js";import"./SetGraphicalItem-D1VXM8vc.js";import"./getRadiusAndStrokeWidthFromDot-BIpM0DDc.js";import"./ActiveShapeUtils-BwZZXBow.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./tooltipContext-ahWnUwoa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CF0u-T5-.js";import"./util-Dxo8gN5i.js";import"./getZIndexFromUnknown-PJ7vAi-M.js";import"./graphicalItemSelectors-DUUaKj4j.js";import"./PolarChart-RhiB27FL.js";import"./polarScaleSelectors-CQrzh32u.js";import"./polarSelectors-DS6J0kh8.js";import"./Polygon-DdRzSvNt.js";import"./maxBy-BuVUJyY1.js";import"./iteratee-lFXD7-Os.js";const i={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},dt={argTypes:i,component:o},m={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(z,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(o,{...r}))))},args:{...s(i),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},l={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r}))))},args:{...s(i),dataKey:"uv",position:"top",offset:5}},c={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(M,null),e.createElement(U,{dataKey:"subject"}),e.createElement(_,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(o,{...r}))),args:{...s(i),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=I=>{const{x:F,y:j,width:V,value:v}=I;if(v==null)return null;const x=Number(F)+Number(V)/2,L=Number(j)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:L,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:L,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,n]=[600,300];return e.createElement(h,{width:"100%",height:n},e.createElement(y,{width:t,height:n,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(o,{...r,content:a}))))},args:{...s(i),dataKey:"pv"}},p={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...r,formatter:n=>n!=null?`${n} visitors`:""}))))},args:{...s(i),dataKey:"uv",position:"top"}};var C,w,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const pt=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];export{m as API,l as OnBarChart,c as OnRadarChart,d as WithCustomContent,p as WithFormatter,pt as __namedExportsOrder,dt as default};

import{R as e}from"./iframe-TJn1iDy_.js";import{g as s}from"./utils-ePvtT4un.js";import{L as n}from"./activeStyles-C-8W4HoU.js";import{R as h}from"./zIndexSlice-DcxCrJas.js";import{L as z}from"./LineChart-Xi1CeoEm.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-B_y5feDu.js";import{Y as f}from"./YAxis-BwpngE3S.js";import{L as X}from"./Line-BFq-C2HM.js";import{B as y}from"./BarChart-tR6mDyzg.js";import{C as b}from"./CartesianGrid-DZkiD9Lt.js";import{B as A}from"./Bar-D49dhmc6.js";import{R as Y}from"./RadarChart-PV_LlmZj.js";import{P as M}from"./PolarGrid-L68fFg7_.js";import{P as U}from"./PolarAngleAxis-Dvs45bl2.js";import{P as _}from"./PolarRadiusAxis-AJfDwwxl.js";import{R as q}from"./Radar-COG2kc3K.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-DOD1E2dd.js";import"./get-cF5BDHN6.js";import"./Text-Lhe6e02h.js";import"./resolveDefaultProps-B1uePsee.js";import"./pageBackground-CtZ35NZS.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qm_XHo-2.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./Layer-tyJENV3V.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./throttle-boe4gmWF.js";import"./RechartsWrapper-CGWm-04h.js";import"./axisSelectors-BRmQ6VbT.js";import"./d3-scale-VVBOPfYG.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-DfZWRiOw.js";import"./useAnimationId-BdprCSjI.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./CartesianAxis-D8sqtaMD.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DyBM506c.js";import"./step-L1YHvbsX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BHSnIp6Z.js";import"./Dot-DGaRCVJg.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./ErrorBarContext-B5z72jnv.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getRadiusAndStrokeWidthFromDot-uMuQLm3-.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./useEffectiveDataKey-7HT13U9Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bx76BAa_.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-CAG3SHWZ.js";import"./getZIndexFromUnknown-CxY-_PC9.js";import"./omit-BUNnoJpW.js";import"./isArguments-yB-y1yaH.js";import"./PolarChart-BCBQmyCW.js";import"./polarScaleSelectors-fNkTF_9E.js";import"./polarSelectors-BjSVzITd.js";import"./Polygon-BzTbLY34.js";import"./maxBy-D9p3hNYB.js";import"./iteratee-uwfmLxFV.js";const o={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a rectangle behind each label, for example to keep labels readable on top of filled shapes.\n\n- `true` draws the background with the styles from the theme's `graphicalItems[n].label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `graphicalItems[n].label.background`, and draws no background without a theme.\n\nEach background is sized from its rendered label and follows curved label paths.\nIt is not drawn for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:"If set a React element, the option is the customized React element of rendering each label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function is called once for each item",table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},gt={argTypes:o,component:n},l={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(z,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},m={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5}},c={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(M,null),e.createElement(U,{dataKey:"subject"}),e.createElement(_,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(n,{...r}))),args:{...s(o),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=O=>{const{x:j,y:F,width:V,value:v}=O;if(v==null)return null;const x=Number(j)+Number(V)/2,w=Number(F)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:w,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:w,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,i]=[600,300];return e.createElement(h,{width:"100%",height:i},e.createElement(y,{width:t,height:i,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(n,{...r,content:a}))))},args:{...s(o),dataKey:"pv"}},p={render:r=>{const[a,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r,formatter:i=>i!=null?`${i} visitors`:""}))))},args:{...s(o),dataKey:"uv",position:"top"}},ft=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];var L,C,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var K,k,R;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var B,T,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var G,I,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var H,S,D;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};export{l as API,m as OnBarChart,c as OnRadarChart,d as WithCustomContent,p as WithFormatter,ft as __namedExportsOrder,gt as default};

import{R as e}from"./iframe-qOFEdJsq.js";import{g as s}from"./utils-ePvtT4un.js";import{L as n}from"./LabelList-CNqM2k92.js";import{R as p}from"./zIndexSlice-4ZilFo_n.js";import{L as z}from"./LineChart-Dl529CfE.js";import{p as u,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-BLPVblQP.js";import{Y as f}from"./YAxis-W_URYSZS.js";import{L as X}from"./Line-DRa6L9kk.js";import{B as y}from"./BarChart-wraqFC1I.js";import{C as b}from"./CartesianGrid-BF4MkUzS.js";import{B as v}from"./Bar-v3P4qb_D.js";import{R as Y}from"./RadarChart-a9YmUB7A.js";import{P as U}from"./PolarGrid-Kbcvwg5y.js";import{P as M}from"./PolarAngleAxis-CyTmWAWO.js";import{P as _}from"./PolarRadiusAxis-TLWeHHaz.js";import{R as q}from"./Radar-DpGe9wPs.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-Cllq2PGv.js";import"./get-cF5BDHN6.js";import"./Text-D4Or0m3K.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./throttle-Bx7bNNV1.js";import"./Layer-p7tl0Obh.js";import"./axisSelectors-CB4lGYL3.js";import"./d3-scale-DLjhRaU2.js";import"./RechartsWrapper-BNMPtHnU.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./CartesianAxis-B9ZixuFu.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DB3f0x8T.js";import"./fillDefinitions-C8MPZPAo.js";import"./step-5jiFn3Gv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B9VIFtI9.js";import"./Dot-Cx_dxYvu.js";import"./activeStyles-B7bZlFHp.js";import"./useAnimationId-DRvHP31x.js";import"./dataEntryStyles-BpwMOC9F.js";import"./Symbols-DU4y3lGd.js";import"./symbol-Cc7ZDpSQ.js";import"./ErrorBarContext-CScUCP7Y.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getRadiusAndStrokeWidthFromDot-B-7643QY.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIPq25kq.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-BP9EM6Hs.js";import"./getZIndexFromUnknown-CRHni7CM.js";import"./omit-BS3hI4dD.js";import"./isArguments-yB-y1yaH.js";import"./PolarChart-ze2n5tiB.js";import"./polarScaleSelectors-BU8_iG4z.js";import"./polarSelectors-Cd3XhuHz.js";import"./Polygon-CTdUXnZI.js";import"./maxBy-D_hCqyZY.js";import"./iteratee-bC8XKX9j.js";const o={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a rectangle behind each label, for example to keep labels readable on top of filled shapes.\n\n- `true` draws the background with the styles from the theme's `graphicalItems[n].label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `graphicalItems[n].label.background`, and draws no background without a theme.\n\nEach background is sized from its rendered label and follows curved label paths.\nIt is not drawn for custom `content`.\n\nIn a chart, the rectangles render in a zIndex layer below the labels,\nso overlapping labels never cover each other's text.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:"If set a React element, the option is the customized React element of rendering each label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function is called once for each item",table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of each label.

If set, then valueAccessor will be ignored.

Scatter requires this prop to be set.
Other graphical components will show the same value as the dataKey of the component by default.`,table:{type:{summary:"Function | number | string"},category:"General"}},fill:{description:'The text color of every label. It wins over the theme.\n\nWithout it, and without a theme, each label takes the fill of its data entry, if there is one.\n\nWith a theme, a `fill` in the theme\'s `graphicalItems[n].label.style` applies first.\nOtherwise each label picks a color automatically:\n- A label on top of a filled shape (Bar, Funnel, Pie, RadialBar) takes the `pageBackground` color,\n  or the `typography` color if there is no page background.\n  A shape with `fill="none"` or `transparent` is not filled, so its labels count as next to it.\n- A label next to its shape, and every label of Line, Area, Radar and Scatter, takes the color of its shape.\n- A label with a `background` or `halo` takes the color of its shape too.\n- A label at an `{ x, y }` position takes the `typography` color.\n\nCustom `content` receives the resolved color as its `fill` prop.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},halo:{description:"Draws an outline around the letters of each label, as a lighter alternative to `background`.\n\n- `true` draws the halo with default styles.\n  The stroke is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts `stroke`, `strokeWidth`, `strokeOpacity` and `strokeLinejoin` to set them explicitly.\n- `false` or `undefined` draws no halo.\n\nUnlike `background`, a halo needs no measurement, works during server-side rendering, and works for\nlabels that follow a curved path (`insideStart`, `insideEnd` and `end` in polar charts).",table:{type:{summary:"TextHaloProps | false | true"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},offset:{description:`The offset to the specified "position".
Direction of the offset depends on the position.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},valueAccessor:{description:"The accessor function to get the value of each label. Is ignored if dataKey is specified.",table:{type:{summary:"Function"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ft={argTypes:o,component:n},l={render:r=>{const[a,t]=[600,300];return e.createElement(p,{width:"100%",height:t},e.createElement(z,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(X,{dataKey:"uv"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},c={render:r=>{const[a,t]=[600,300];return e.createElement(p,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(v,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r}))))},args:{...s(o),dataKey:"uv",position:"top",offset:5}},m={render:r=>e.createElement(Y,{width:500,height:400,data:N},e.createElement(U,null),e.createElement(M,{dataKey:"subject"}),e.createElement(_,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(n,{...r}))),args:{...s(o),dataKey:"A",position:"outside",clockWise:!0}},d={render:r=>{const a=O=>{const{x:j,y:F,width:V,value:w}=O;if(w==null)return null;const x=Number(j)+Number(V)/2,A=Number(F)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:A,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:A,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},w))},[t,i]=[600,300];return e.createElement(p,{width:"100%",height:i},e.createElement(y,{width:t,height:i,margin:{top:30,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(v,{dataKey:"pv",fill:"#82ca9d"},e.createElement(n,{...r,content:a}))))},args:{...s(o),dataKey:"pv"}},h={render:r=>{const[a,t]=[600,300];return e.createElement(p,{width:"100%",height:t},e.createElement(y,{width:a,height:t,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(v,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...r,formatter:i=>i!=null?`${i} visitors`:""}))))},args:{...s(o),dataKey:"uv",position:"top"}},yt=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];var k,L,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var E,B,K;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(B=c.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var R,T,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var I,G,W;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(G=d.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var S,H,D;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(H=h.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};export{l as API,c as OnBarChart,m as OnRadarChart,d as WithCustomContent,h as WithFormatter,yt as __namedExportsOrder,ft as default};

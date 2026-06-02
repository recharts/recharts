import{c as e}from"./iframe-QM_Hy95O.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-D4PO75Y9.js";import{g}from"./zIndexSlice-BlNPxokt.js";import{L as y}from"./LineChart-CYdrF5Sx.js";import{p as u}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-xNLG7r9K.js";import{L as h}from"./Line-Uf2Z77KS.js";import{Y as b}from"./YAxis-ByuMssjK.js";import{X as x}from"./XAxis-k_T7UBmN.js";import{R as v}from"./RadarChart-Di8Qo-X3.js";import{R}from"./Radar-CBwF9WCb.js";import{P as w}from"./PolarGrid-Bmz4ciTB.js";import{P as A}from"./PolarAngleAxis-BRIUeAKT.js";import{P}from"./PolarRadiusAxis-gdEYhxw7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-in6fAyvy.js";import"./Text-CiqEhbxu.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./DOMUtils-O0X-t8NY.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiKPrQca.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./immer-fQ35ak9n.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./index-CGSa8iwo.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./CartesianAxis-B-Qfc6z6.js";import"./Layer-DMLrZzOp.js";import"./types-B29_egWp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BXRuFBMP.js";import"./step-BH3XZet7.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BIEdgNAL.js";import"./ActivePoints-48Z6mXbE.js";import"./Dot-CfJGHcqY.js";import"./RegisterGraphicalItemId-Ch0Vf5AU.js";import"./ErrorBarContext-BHFsn856.js";import"./GraphicalItemClipPath-BHIKYbjI.js";import"./SetGraphicalItem-DzbZ3uGV.js";import"./useAnimationId-BxdIxPQQ.js";import"./getRadiusAndStrokeWidthFromDot-6yNSu3ln.js";import"./ActiveShapeUtils-Ben0Z5Gs.js";import"./PolarChart-0uw7vSjC.js";import"./Polygon-CutIyAAr.js";import"./polarScaleSelectors-Dg8ripmq.js";import"./polarSelectors-ev47PvF1.js";import"./maxBy-CHtr448_.js";import"./iteratee-CmZMcvd6.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ee={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(v,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(R,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'CartesianPositions',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart data={pageData} margin={{
        top: 100,
        bottom: 100,
        left: 100,
        right: 100
      }}>
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          <Label value={\`Position: \${args.position}\`} {...args} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={800} height={800} data={pageData} margin={{
      top: 30,
      bottom: 30,
      left: 100,
      right: 100
    }}>
        <Radar type="monotone" dataKey="uv" fill="rgba(0, 200, 200, 0.2)" />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis tick={false} />
        <Label value={\`Position: \${args.position}\`} {...args} />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ve=["API","PolarPositions"];export{r as API,o as PolarPositions,Ve as __namedExportsOrder,Ee as default};

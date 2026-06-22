import{R as e}from"./iframe-BLYaiTCo.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BDDWEbHy.js";import{R as g}from"./zIndexSlice-lQffsUG8.js";import{L as y}from"./LineChart-DG-yzeX5.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BCnvYhH-.js";import{L as h}from"./Line-DaU6l3CY.js";import{Y as b}from"./YAxis-ryWccSzT.js";import{X as x}from"./XAxis-B1NcdzKW.js";import{R}from"./RadarChart-CkGG4Z3l.js";import{R as v}from"./Radar-DFlUNlXc.js";import{P as w}from"./PolarGrid-CYu8ssbB.js";import{P as A}from"./PolarAngleAxis-ByMdSGQx.js";import{P}from"./PolarRadiusAxis-DgI3nvyH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C6fkE9tv.js";import"./Text-OjYntAZR.js";import"./resolveDefaultProps-DpWzBvps.js";import"./DOMUtils-CIYC9pgo.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDdQieuE.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./immer-ILyg-GW3.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./axisSelectors-D6Dyr_Wd.js";import"./d3-scale-B2LK6XqV.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./CartesianAxis-D8ReKkO7.js";import"./Layer-Cjsn70fL.js";import"./types-B8ff9nYs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DeQy-y-t.js";import"./step-BTBSj6ja.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LYPYqGuf.js";import"./useAnimationId-e0tJBS7c.js";import"./ActivePoints-BabG5O7K.js";import"./Dot-BrwJ_7NM.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./ErrorBarContext-B1uz4CKa.js";import"./GraphicalItemClipPath-D0PBT0ws.js";import"./SetGraphicalItem-DCGW6Zln.js";import"./getRadiusAndStrokeWidthFromDot-LiorCCqR.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./PolarChart-Cgb4-mwp.js";import"./Polygon-CWgz_AxI.js";import"./polarScaleSelectors-UON18eOK.js";import"./polarSelectors-B9VNIEYl.js";import"./maxBy-RKuU44Li.js";import"./iteratee-7NILAXQu.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ee={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

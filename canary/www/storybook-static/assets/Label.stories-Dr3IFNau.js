import{R as e}from"./iframe-BcyvxDDm.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DKWc-r2Z.js";import{R as g}from"./zIndexSlice-CjqwPb4I.js";import{L as y}from"./LineChart-DkoRA9WP.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-r9xfU8Bh.js";import{L as h}from"./Line-BnwOZ2r5.js";import{Y as b}from"./YAxis-DWNExzo5.js";import{X as x}from"./XAxis-hKqegIsy.js";import{R}from"./RadarChart-BMXBcllz.js";import{R as v}from"./Radar-cHZLv3fh.js";import{P as w}from"./PolarGrid-DAZxg_Xk.js";import{P as A}from"./PolarAngleAxis-Bj7kioqL.js";import{P}from"./PolarRadiusAxis-cHfwmbKp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Text-DHboH0PZ.js";import"./resolveDefaultProps-DYK2TugC.js";import"./DOMUtils-BbuOOwxk.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-O4JEDRQM.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./throttle-Da4mYIun.js";import"./RechartsWrapper-BKq7sB4k.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./renderedTicksSlice-C78J9WJd.js";import"./axisSelectors-Ft8qoIRM.js";import"./d3-scale-CuOcyn8C.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./CartesianAxis-X-wBC9Mi.js";import"./Layer-BbNzeSuC.js";import"./types-BRN82dlo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Cd8N0Bzf.js";import"./step-VnJCxhpn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_84PZuB.js";import"./useAnimationId-UCivMRaV.js";import"./ActivePoints-8g9VJ2oC.js";import"./Dot-33A0Szh_.js";import"./RegisterGraphicalItemId-MfcacHn_.js";import"./ErrorBarContext-Bo7tXsWd.js";import"./GraphicalItemClipPath-gcf9l3Dr.js";import"./SetGraphicalItem-NfXYYfkR.js";import"./getRadiusAndStrokeWidthFromDot-C-lZV2mT.js";import"./ActiveShapeUtils-CAO4oJEH.js";import"./PolarChart-C-Rcym5g.js";import"./Polygon-DkvBVFSw.js";import"./polarScaleSelectors-C8LmziFa.js";import"./polarSelectors-Bzbid-eU.js";import"./maxBy-Cd3vLj0k.js";import"./iteratee-Danss_sE.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ve={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ee=["API","PolarPositions"];export{r as API,o as PolarPositions,Ee as __namedExportsOrder,Ve as default};

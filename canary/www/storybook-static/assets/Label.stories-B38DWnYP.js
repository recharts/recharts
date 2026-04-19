import{e}from"./iframe-DnKPxY7a.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-75Lwdv3P.js";import{R as f}from"./arrayEqualityCheck-BRLe4SS-.js";import{L as y}from"./LineChart-OSLW19Gz.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-BUMSM3nv.js";import{L as b}from"./Line-Bh8WdYsJ.js";import{Y as x}from"./YAxis-RGcfB1__.js";import{X as R}from"./XAxis-BAn9u7ZP.js";import{R as g}from"./RechartsHookInspector-C1a5f-X8.js";import{R as v}from"./RadarChart-CgUavQzS.js";import{R as w}from"./Radar-Dlme2UwB.js";import{P as A}from"./PolarGrid-CpZSd_zd.js";import{P}from"./PolarAngleAxis-BRVTO7aC.js";import{P as T}from"./PolarRadiusAxis-oJRHFke6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CqYxA_ST.js";import"./DOMUtils-0c6Z1U3w.js";import"./resolveDefaultProps-DOqUyIeg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFRrJfPa.js";import"./zIndexSlice-KD1BDYTU.js";import"./immer-D9hLCfsI.js";import"./RechartsWrapper-nQtYlSir.js";import"./index-CC8a_PKZ.js";import"./hooks-DeeMtons.js";import"./axisSelectors-BXdD8PxV.js";import"./d3-scale-C2xqHqad.js";import"./renderedTicksSlice-CFEn4_Md.js";import"./CartesianChart-Coa75cqV.js";import"./chartDataContext-CJJd-wkg.js";import"./CategoricalChart-hpH9n4Dg.js";import"./CartesianAxis-BuD04Hve.js";import"./Layer-DeK52Cv4.js";import"./types-CYYN-QxE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-4peIRB2B.js";import"./ActivePoints-DbUAoEhp.js";import"./Dot-CNgvsTba.js";import"./RegisterGraphicalItemId-DwM7Te_7.js";import"./ErrorBarContext-DIOAcn2L.js";import"./GraphicalItemClipPath-DAZ9bgmo.js";import"./SetGraphicalItem-BlPK52Q_.js";import"./useAnimationId-DEpRCopS.js";import"./getRadiusAndStrokeWidthFromDot-C1w0XMVH.js";import"./ActiveShapeUtils-CgK_A1V3.js";import"./isPlainObject-DfAQHXtw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-y2LFFHGo.js";import"./Trapezoid-DNxvKaBL.js";import"./Sector-CnwcOah-.js";import"./Symbols-KdBGH5vz.js";import"./symbol-CiognWkM.js";import"./step-xT0L5jQX.js";import"./Curve-Dkc-iOzw.js";import"./index-CdavTI8c.js";import"./ChartSizeDimensions-CY_4B8hK.js";import"./OffsetShower-BXqoFf7d.js";import"./PlotAreaShower-CJTPHZ_L.js";import"./PolarChart-B2myhr7F.js";import"./Polygon-XuoVNQ5k.js";import"./polarScaleSelectors-CSbvJgjl.js";import"./polarSelectors-COOKahCl.js";import"./maxBy-BHZsH8zW.js";import"./iteratee-BZCWsX37.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Oe={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(f,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(h,null),e.createElement(b,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(x,{tick:!1}),e.createElement(R,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(g,null))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(v,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(w,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(A,null),e.createElement(P,{dataKey:"name"}),e.createElement(T,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(g,null)),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
        <RechartsHookInspector />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const je=["API","PolarPositions"];export{r as API,o as PolarPositions,je as __namedExportsOrder,Oe as default};

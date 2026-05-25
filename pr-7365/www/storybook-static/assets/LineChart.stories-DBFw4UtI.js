import{u as i,e}from"./iframe-CivULM0O.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-B90z0YGN.js";import{g as C}from"./arrayEqualityCheck-PbQt1vd_.js";import{L as n}from"./Line-BcwWxmgV.js";import{R as A}from"./RechartsHookInspector-B13-Urqc.js";import{X as p}from"./XAxis-CYAQkN2U.js";import{T as c}from"./Tooltip-DgeDNHg1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./immer-C3JSSs7p.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./Curve-CR9QitUx.js";import"./types-CYA8PCW2.js";import"./step-DozMZOeE.js";import"./path-DyVhHtw_.js";import"./Layer-BOVDUSvA.js";import"./ReactUtils-B75F0iOa.js";import"./Label-BAI4tr_y.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./ZIndexLayer-CgUDZ3al.js";import"./ActivePoints-De-ksHDq.js";import"./Dot-13A9yk-i.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./useAnimationId-DJJiEnXV.js";import"./getRadiusAndStrokeWidthFromDot-CdnZqcwv.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";import"./CartesianAxis-G3eNrHbq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CC9xhXxh.js";import"./uniqBy-Cwhcwtk-.js";import"./iteratee-UPOw9UnH.js";import"./Cross-P7L2JLrH.js";import"./Rectangle-d22AVGnL.js";import"./Sector-592Fkfg8.js";const Be={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const He=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,He as __namedExportsOrder,Be as default};

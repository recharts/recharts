import{r as i,R as e}from"./iframe-BPYH2WpS.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CRB086Uy.js";import{R as C}from"./zIndexSlice-CRIY2DI-.js";import{L as s}from"./Line-T-KkaNIg.js";import{X as p}from"./XAxis-Cp4YLkQ5.js";import{T as c}from"./Tooltip-CqhPUDbY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CeSqC8qM.js";import"./resolveDefaultProps-CGvNj-Ia.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BixSNhmq.js";import"./throttle-xyVQD3_H.js";import"./index-BlMmEtsK.js";import"./index-DJpd9u5l.js";import"./isWellBehavedNumber-CF5FkEe7.js";import"./d3-scale-C1nlw5KN.js";import"./index-CWtZ8b1U.js";import"./index-B4bTdLCM.js";import"./renderedTicksSlice-6vdJGY0j.js";import"./index-BPYK78er.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CvYs98y7.js";import"./chartDataContext-kSMgmHGF.js";import"./CategoricalChart-Biw_xsj3.js";import"./Layer-C2LXKbkN.js";import"./Curve-CSa72MMA.js";import"./types-CqopvqdC.js";import"./step-lFEaXGaU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-cMTO2B.js";import"./Label-DVwS1qXs.js";import"./Text-zynwh62u.js";import"./DOMUtils-BPeWtLKN.js";import"./useId-BE8oxSSZ.js";import"./useBackwardsCompatibleTheme-D75GrB32.js";import"./ZIndexLayer-BSe5AwCg.js";import"./useAnimationId-BKqfl7rh.js";import"./ActivePoints-Ds7Vxzg0.js";import"./Dot-b-Hlrxis.js";import"./RegisterGraphicalItemId-BFsJivb8.js";import"./ErrorBarContext-BJvfmcx_.js";import"./GraphicalItemClipPath-B49DsmcO.js";import"./SetGraphicalItem-rIgP9mSO.js";import"./getRadiusAndStrokeWidthFromDot-Bg7bX7Mu.js";import"./ActiveShapeUtils-Ds20vJPV.js";import"./useGraphicalItemIdentity-AHFKb_mu.js";import"./CartesianAxis-CGCKig2C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C6LgEkRR.js";import"./uniqBy-BLfWWLf6.js";import"./iteratee-BZ9sVM1E.js";import"./Cross-2hMX8eh6.js";import"./Rectangle-3aQUV3ep.js";import"./util-Dxo8gN5i.js";import"./Sector-DHJW8RW3.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};

import{r as s,e}from"./iframe-1xuwxK0i.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-eB3_AEJE.js";import{R as C}from"./arrayEqualityCheck-CASLlqQ3.js";import{L as n}from"./Line-CUH5xAuk.js";import{R as A}from"./RechartsHookInspector-DjsmwIRA.js";import{X as p}from"./XAxis-BKyyM-a9.js";import{T as c}from"./Tooltip-C00K2uSc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5Ekcff7f.js";import"./index-DCwL0QiS.js";import"./immer-BoNsEynp.js";import"./hooks-BzE3zYbI.js";import"./axisSelectors-DyjHckMI.js";import"./d3-scale-DUQowLdF.js";import"./zIndexSlice-DPF7rmTT.js";import"./renderedTicksSlice-Dixyj9Jy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-4woDVZs_.js";import"./chartDataContext-BwmW5feg.js";import"./CategoricalChart-CiWFX2uU.js";import"./resolveDefaultProps-BeeagbIX.js";import"./Layer-HRVol_nO.js";import"./ReactUtils-B2i9al3C.js";import"./Label-EE46xwmi.js";import"./Text-BBwkToBR.js";import"./DOMUtils-BhlllvxT.js";import"./ZIndexLayer-C7GyPaOO.js";import"./ActivePoints-BVDrdHpP.js";import"./Dot-Bf3Kg0FQ.js";import"./types-UwWXE9AL.js";import"./RegisterGraphicalItemId-CklwmYhh.js";import"./ErrorBarContext-SjXcYHyD.js";import"./GraphicalItemClipPath-BmfpOWt-.js";import"./SetGraphicalItem-BECsf1z-.js";import"./useAnimationId-CNQ0amde.js";import"./getRadiusAndStrokeWidthFromDot-CItpH8qB.js";import"./ActiveShapeUtils-CDdbS846.js";import"./isPlainObject-DBcZBbuh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B47wiU0M.js";import"./Trapezoid-Cr4fcElh.js";import"./Sector-2ltBV-lC.js";import"./Symbols-C6y5KnTy.js";import"./symbol-BMBn4bHO.js";import"./step-BCh-34yC.js";import"./Curve-CAhCV73Q.js";import"./index-l66o8zNg.js";import"./ChartSizeDimensions-lZytJoNO.js";import"./OffsetShower-DHMDBhnx.js";import"./PlotAreaShower-Dete_MNu.js";import"./CartesianAxis-DrIFSgXd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CwZilh1y.js";import"./uniqBy-CjLSqm-O.js";import"./iteratee-Dnw0ZN_g.js";import"./Cross-D3ed_C6s.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};

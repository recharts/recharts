import{r as s,e}from"./iframe-C-50EfA7.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-CSyeE1KO.js";import{R as C}from"./arrayEqualityCheck-C4RXKFVZ.js";import{L as n}from"./Line-Ch8yl9X2.js";import{R as k}from"./RechartsHookInspector-B1kq2kh2.js";import{X as p}from"./XAxis-90LmsjPO.js";import{T as c}from"./Tooltip-Di6wI1DL.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-4XlXwyP0.js";import"./index-DgChmAdf.js";import"./immer-4zqQKvZM.js";import"./hooks-B8m9isT1.js";import"./axisSelectors-CpmXiDAA.js";import"./d3-scale-B6NfZS7A.js";import"./zIndexSlice-B4bKHPxl.js";import"./renderedTicksSlice-DmzhzySp.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGym5D6x.js";import"./chartDataContext-CVjjKugU.js";import"./CategoricalChart-BhkXQps_.js";import"./resolveDefaultProps-DyfkEz9s.js";import"./Layer-CjzK_mik.js";import"./ReactUtils-CO3iMEw6.js";import"./Label-D4RxJjz3.js";import"./Text-Bjbs5yvb.js";import"./DOMUtils-BJ8awGJ7.js";import"./ZIndexLayer-CEEBNKDA.js";import"./ActivePoints-DJzgHe1Z.js";import"./Dot-DJCM9NbX.js";import"./types--ddu9raC.js";import"./RegisterGraphicalItemId-CwXq2ePK.js";import"./ErrorBarContext-DKJlMfPG.js";import"./GraphicalItemClipPath-BG4MlZY6.js";import"./SetGraphicalItem-k5xaJlVz.js";import"./useAnimationId-DEOKae8V.js";import"./getRadiusAndStrokeWidthFromDot-Bfo0EhLe.js";import"./ActiveShapeUtils-BQKoRXiq.js";import"./isPlainObject-C7QiIDX3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DylkAvEv.js";import"./Trapezoid-CVfMGfer.js";import"./Sector-BqYe_ni4.js";import"./Symbols-DEUKzo69.js";import"./symbol-B7uWDEKo.js";import"./step-D-hsF5Bn.js";import"./Curve-BrkfeITg.js";import"./index-D0wRUjZQ.js";import"./ChartSizeDimensions-CLZ_38hy.js";import"./OffsetShower-B2bw8EI-.js";import"./PlotAreaShower-GeIkbIXn.js";import"./CartesianAxis-CA7owa59.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D6pRHGuu.js";import"./uniqBy-BauvA021.js";import"./iteratee-BVDJI1aP.js";import"./Cross-DmBcFXIf.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

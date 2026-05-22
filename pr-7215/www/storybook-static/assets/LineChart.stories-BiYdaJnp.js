import{u as i,e}from"./iframe-Cag7wSRv.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-xYtqufeh.js";import{g as C}from"./arrayEqualityCheck-DIS5wzHQ.js";import{L as n}from"./Line-DfIGhKaB.js";import{R as A}from"./RechartsHookInspector-BY5Jlwrh.js";import{X as p}from"./XAxis-DXJVCfkD.js";import{T as c}from"./Tooltip-CaZgP3kp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./immer-284wn8VQ.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-D-tflLzN.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./Layer-BKYLP7Ft.js";import"./Curve-DBPrYDrF.js";import"./types-VwRdPpC4.js";import"./step-CkDKckf6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CluPQFSi.js";import"./Label-C9zkgYEJ.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./ZIndexLayer-DmSAjehE.js";import"./useAnimationId-DTrmZnPm.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./ErrorBarContext-CXe2vi8A.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";import"./CartesianAxis-BO6A-dYS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-e6GLcNBL.js";import"./uniqBy-Dt7fnwgv.js";import"./iteratee-Jm-FQi8d.js";import"./Cross-0JOGn5HY.js";import"./Rectangle-C4gj6xhs.js";import"./Sector-PQ9ghs0A.js";const He={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Se=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Se as __namedExportsOrder,He as default};

import{u as i,e}from"./iframe-CagDbm-R.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-Bk45umwU.js";import{g as C}from"./arrayEqualityCheck-Bn08yLiN.js";import{L as n}from"./Line-DjE5KLPa.js";import{R as A}from"./RechartsHookInspector-pMEJlnqX.js";import{X as p}from"./XAxis-CyILEj33.js";import{T as c}from"./Tooltip-Bx81jUJN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./immer-DWuco0BF.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./Layer-D2JglvMB.js";import"./Curve-DbLnFn1T.js";import"./types-D2ON-SRi.js";import"./step-CjVrG-vW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HQORsnaH.js";import"./Label-COowhm97.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./ZIndexLayer-BqsAA_KH.js";import"./useAnimationId-BEBp-SWr.js";import"./ActivePoints-DbdvGaCl.js";import"./Dot-BHIp2EY6.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getRadiusAndStrokeWidthFromDot-B6ftvxTH.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";import"./CartesianAxis-6zuZSvBM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Bs1684WT.js";import"./uniqBy-CNxClo-U.js";import"./iteratee-DsFpFkHV.js";import"./Cross-WY-9lTvl.js";import"./Rectangle-B56fHVHN.js";import"./Sector-Cj_Alzct.js";const He={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

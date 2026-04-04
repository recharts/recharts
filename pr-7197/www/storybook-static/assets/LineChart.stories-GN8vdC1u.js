import{r as s,e}from"./iframe-Y_RGNuVZ.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CViHTy2e.js";import{R as C}from"./arrayEqualityCheck-Ds7SKd67.js";import{L as n}from"./Line-B2Ca7ZOh.js";import{R as A}from"./RechartsHookInspector-BaDAEILC.js";import{X as p}from"./XAxis-DOlhxeJx.js";import{T as c}from"./Tooltip-MYVZThWj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0AKdwcb0.js";import"./index-6zWqcpfE.js";import"./immer-CvMOMmfr.js";import"./hooks-D-ukaKl5.js";import"./axisSelectors-B08StVJi.js";import"./d3-scale-xMg1wH9a.js";import"./zIndexSlice-Ba0CiZj_.js";import"./renderedTicksSlice-BNYNUWgh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tAchdUZG.js";import"./chartDataContext-DLrhoiOn.js";import"./CategoricalChart-xZ700W9g.js";import"./resolveDefaultProps-CNDGD4av.js";import"./Layer-B3aEjvUI.js";import"./ReactUtils-DW9WQHfP.js";import"./Label-C7BzYfbz.js";import"./Text-2I-RPtH4.js";import"./DOMUtils-Cmq9iEnp.js";import"./ZIndexLayer-BkWVTcKj.js";import"./ActivePoints-M-0Nj2uW.js";import"./Dot-B6xO9r8i.js";import"./types-DUF6Oaqa.js";import"./RegisterGraphicalItemId-DQOzlEQV.js";import"./ErrorBarContext-D2MsqZ2g.js";import"./GraphicalItemClipPath-DV3rsVOw.js";import"./SetGraphicalItem-Cr3Eh_Ii.js";import"./useAnimationId-D3O-mVgt.js";import"./getRadiusAndStrokeWidthFromDot-BLOpOIfG.js";import"./ActiveShapeUtils-fVk6EKo1.js";import"./isPlainObject-1pSWT5Op.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr0T3_ga.js";import"./Trapezoid-52KgDugC.js";import"./Sector-NVf3Jf9G.js";import"./Symbols-BkK6C4o8.js";import"./symbol-CHniFcTm.js";import"./step-BeTRk8e6.js";import"./Curve-okqgdx-1.js";import"./index-Bw2HFO2T.js";import"./ChartSizeDimensions-Kjtp9_ay.js";import"./OffsetShower-X1duxMkd.js";import"./PlotAreaShower-C08ktU3-.js";import"./CartesianAxis-UB1S8E_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DXlRn5Ww.js";import"./uniqBy-CJG1yfnn.js";import"./iteratee-N29jbGML.js";import"./Cross-GrNpWmZl.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

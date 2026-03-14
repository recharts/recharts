import{r as s,e}from"./iframe-Bv9A2uSW.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-DfmvToUQ.js";import{R as C}from"./arrayEqualityCheck-40Pjb_0H.js";import{L as n}from"./Line-D2EubcdT.js";import{R as k}from"./RechartsHookInspector-gKybnL4n.js";import{X as p}from"./XAxis-CDoYxb3o.js";import{T as c}from"./Tooltip-C0YZCQ4N.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BINnaSWf.js";import"./index-CYS6IjLh.js";import"./immer-Ch1CAK4c.js";import"./hooks-BFXhp1mb.js";import"./axisSelectors-C-Y5dRy9.js";import"./d3-scale-B-GeqdsZ.js";import"./zIndexSlice-BDVZwdE1.js";import"./renderedTicksSlice-fUxzen-N.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVCnbG_A.js";import"./chartDataContext-Cx-F6gwT.js";import"./CategoricalChart-BfArJY5o.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./Layer-BOAumolw.js";import"./ReactUtils-Be8qMHP_.js";import"./Label-Dk_EOWAk.js";import"./Text-ByTWddCc.js";import"./DOMUtils-DLZp3yaw.js";import"./ZIndexLayer-DOKoEx6m.js";import"./ActivePoints-DpwJQ3PC.js";import"./Dot-BOg88zsH.js";import"./types-BNfpUJFf.js";import"./RegisterGraphicalItemId-Dztj5ea7.js";import"./ErrorBarContext-PQzMtlLN.js";import"./GraphicalItemClipPath-Ce74-Utf.js";import"./SetGraphicalItem-CrMe5qpl.js";import"./useAnimationId-5b7iZFah.js";import"./getRadiusAndStrokeWidthFromDot-EXhvIgor.js";import"./ActiveShapeUtils-__oljrAQ.js";import"./isPlainObject-CgUr2901.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9QMG00E.js";import"./Trapezoid-WLRjMuUY.js";import"./Sector-S-QnBLP2.js";import"./Symbols-DSA8vyEc.js";import"./symbol-gFXZdrDQ.js";import"./step-Dhxu0QC9.js";import"./Curve-g-TKkld0.js";import"./index-B_DT_wU1.js";import"./ChartSizeDimensions-DOZqpgqC.js";import"./OffsetShower-CWVYqkue.js";import"./PlotAreaShower-DuXT_1jY.js";import"./CartesianAxis-CiclrdFg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CKNTo5FY.js";import"./uniqBy-CkuHOdDH.js";import"./iteratee-BdEGTM6e.js";import"./Cross-CwmNJ4WL.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

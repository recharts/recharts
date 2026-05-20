import{u as s,e}from"./iframe-BExdC6gN.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-euj5BLuK.js";import{g as C}from"./arrayEqualityCheck-DOMqUAof.js";import{L as n}from"./Line-CtNgSGaI.js";import{R as A}from"./RechartsHookInspector-jedlPGVn.js";import{X as p}from"./XAxis-CiJpP_bt.js";import{T as c}from"./Tooltip-BgS9wPqC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./immer-fLQu0D5z.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./resolveDefaultProps-BABy-fAx.js";import"./Curve-BAgcgHZR.js";import"./types-DfAw3uAA.js";import"./step-D4OvHG8Z.js";import"./path-DyVhHtw_.js";import"./Layer-Bn8zfoRz.js";import"./ReactUtils-Dgl8JF7u.js";import"./Label-BEYaNe1v.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./ActivePoints-BRlCo6wv.js";import"./Dot-DeXpLXf5.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./ErrorBarContext-B68PiQ82.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./useAnimationId-DlRyv4oq.js";import"./getRadiusAndStrokeWidthFromDot-CEsaKSHL.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";import"./CartesianAxis-DOEtdq2b.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B0Mp0O5s.js";import"./uniqBy-RnJXqtWx.js";import"./iteratee-BYEtbo7d.js";import"./Cross-BjlkqM3M.js";import"./Rectangle-DUkG5lzX.js";import"./Sector-FJVsvN4m.js";const Se={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};

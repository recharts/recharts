import{r as i,R as e}from"./iframe--dVKNbCw.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dx55xPg5.js";import{R as C}from"./zIndexSlice-CpZXb3K1.js";import{L as s}from"./Line-C0IgQdK8.js";import{X as p}from"./XAxis-CO1xFj8-.js";import{T as c}from"./Tooltip-CUr8_T9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRzg3fGD.js";import"./resolveDefaultProps-19MGuD5L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-asW4dLtq.js";import"./throttle-Vdk2BIuN.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./d3-scale-Daiirif0.js";import"./index-11dfO-im.js";import"./index-Bm7T0tPh.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-BXnIb1gt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./Layer-DfItUnsr.js";import"./Curve-goXmosWw.js";import"./types-CJbJ0IDT.js";import"./step-Cg-bszWe.js";import"./path-DyVhHtw_.js";import"./activeStyles-Kpuk4WPq.js";import"./Label-BMbpqhNX.js";import"./Text-ah79KUdU.js";import"./pageBackground-BuDL1xc_.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./ZIndexLayer-BW0svFjl.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./ActivePoints-DkHKRT6s.js";import"./Dot-SmgdmdqO.js";import"./ErrorBarContext-C4YeRw8_.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getRadiusAndStrokeWidthFromDot-CZD0qUAD.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./useEffectiveDataKey-DluS1fAA.js";import"./CartesianAxis-DUU6iCh1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Bk-O-pyy.js";import"./uniqBy--toTvk6J.js";import"./iteratee-DuvGNWXG.js";import"./Cross-D5_gCULz.js";import"./Rectangle-60MF1n22.js";import"./util-Dxo8gN5i.js";import"./Sector-BY6auqMT.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

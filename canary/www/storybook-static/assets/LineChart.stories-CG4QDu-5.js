import{r as i,R as e}from"./iframe-B0MhV86h.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BPmT7I6P.js";import{R as C}from"./zIndexSlice-JhYmjiRs.js";import{L as s}from"./Line-CWasAWgS.js";import{X as p}from"./XAxis-mSUHawKI.js";import{T as c}from"./Tooltip-Cdn6ZAA0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_6wPZYR.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CrrgMfKB.js";import"./throttle-BiG1uYFs.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./d3-scale-CR10n00v.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-DmgedYxy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./Layer-TaFZ6cEO.js";import"./Curve-BkmryfS-.js";import"./types-BhM_mLRi.js";import"./step-D52lSMQ-.js";import"./path-DyVhHtw_.js";import"./activeStyles-DryRBlXh.js";import"./Label-DtBWxW0-.js";import"./Text-03E8A-Bw.js";import"./pageBackground-qvgCZBpb.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./ZIndexLayer-OiTLfYLd.js";import"./useAnimationId-CudNOC-V.js";import"./dataEntryStyles--cHZ_1nv.js";import"./ActivePoints-DTScXn02.js";import"./Dot-Btw3znVN.js";import"./ErrorBarContext-CxDSe0Hd.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getRadiusAndStrokeWidthFromDot-B_7w4E3e.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./useEffectiveDataKey-DkWEBp9n.js";import"./CartesianAxis-BSkD6k6d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-D3PGtHdN.js";import"./uniqBy-C-fLvMH7.js";import"./iteratee-Czlzoku_.js";import"./Cross-bltm8sjj.js";import"./Rectangle-CJdwGJ58.js";import"./util-Dxo8gN5i.js";import"./Sector-Cg6jha8o.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

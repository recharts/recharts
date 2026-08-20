import{r as s,R as e}from"./iframe-Bw423yT3.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-K1Jx0CvT.js";import{R as C}from"./zIndexSlice-C0Ur0qQv.js";import{L as m}from"./Line-BMKWlib2.js";import{X as p}from"./XAxis-DoB4s5YX.js";import{T as c}from"./Tooltip-Be8nokA1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./throttle-DoQ6jmeU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DvFF09lq.js";import"./resolveDefaultProps-DecYMRDs.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./Layer-D4oXIaGo.js";import"./Curve-ROVFdQ-G.js";import"./types-Ds-DwS6F.js";import"./step-BJpmgVSO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hYYLyghD.js";import"./Label-CDuT1dKE.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./ZIndexLayer-BMLxUbw3.js";import"./useAnimationId-Ys0eqrlL.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Crdg7aw6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-ChV6ndkv.js";import"./uniqBy-DXUX_vZx.js";import"./iteratee-CM1mNqCJ.js";import"./Cross-B0QGpBVq.js";import"./Rectangle-B-9AixLW.js";import"./util-Dxo8gN5i.js";import"./Sector-Dk7MJm7o.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};

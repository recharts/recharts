import{r as s,R as e}from"./iframe-BEI88iUa.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Bxplk3-5.js";import{R as C}from"./zIndexSlice-CNhIK6pZ.js";import{L as n}from"./Line-KF1e2YiW.js";import{X as p}from"./XAxis-0izQHWsV.js";import{T as c}from"./Tooltip-CfloNjN1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwAaxlIx.js";import"./index-DdylQdZr.js";import"./index-UjVR-wEt.js";import"./index-CNenOY3c.js";import"./index-DGXEJOU7.js";import"./throttle-BbtfERHN.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CfGYAsFa.js";import"./axisSelectors-BwSjoLT0.js";import"./resolveDefaultProps-CNtzbuaW.js";import"./isWellBehavedNumber-DwXWb7IU.js";import"./d3-scale-Mw6WOBPY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BBEthDu3.js";import"./chartDataContext-DSUhfh_h.js";import"./CategoricalChart-D3IYhdol.js";import"./Layer-BHa_r1ys.js";import"./Curve-CjgnvPj0.js";import"./types-CzsmCJZd.js";import"./step-B-WAV25h.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-99nv9Q5e.js";import"./Label-CQfR7C4I.js";import"./Text-b9BvWKjK.js";import"./DOMUtils-CavEusJ9.js";import"./ZIndexLayer-6tY-vHyf.js";import"./useAnimationId-oD_5QjXY.js";import"./ActivePoints-DT7QCbeH.js";import"./Dot-6nm8mAMu.js";import"./RegisterGraphicalItemId-DE2xjbZV.js";import"./ErrorBarContext-BOU1rFco.js";import"./GraphicalItemClipPath-35MUlgJV.js";import"./SetGraphicalItem-DEteyePq.js";import"./getRadiusAndStrokeWidthFromDot-qx3yFJHx.js";import"./ActiveShapeUtils-CCFEfVD0.js";import"./RechartsThemeContext-az12ZSPD.js";import"./CartesianAxis-DsLYDFB2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-n39J5_Wl.js";import"./uniqBy-CP7iw8Et.js";import"./iteratee-B9ORTKRU.js";import"./Cross-C6CRQXLG.js";import"./Rectangle-CXxl5AiF.js";import"./util-Dxo8gN5i.js";import"./Sector-BoFbHUBc.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};

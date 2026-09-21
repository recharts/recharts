import{r as i,R as e}from"./iframe-Dj8Z6PrK.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-dPcy5MmB.js";import{R as C}from"./zIndexSlice-Dis8kkjQ.js";import{L as s}from"./Line-CRAh7N0O.js";import{X as p}from"./XAxis-CLQEk-FG.js";import{T as c}from"./Tooltip-4kfCVcdq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XYW6BA6T.js";import"./resolveDefaultProps-B-9SHASA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4pFlXeA.js";import"./throttle-CKdcDnHb.js";import"./index-Bx3PqqYW.js";import"./index-CA6chf5t.js";import"./isWellBehavedNumber-BxyDY2ba.js";import"./d3-scale-1D4CewQG.js";import"./index-BBXX-7T2.js";import"./index-BMZ0mV9M.js";import"./renderedTicksSlice-zGdO_NAv.js";import"./index-MAP75uR-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pWv6R1U2.js";import"./chartDataContext-DnNc1DHN.js";import"./CategoricalChart-B9MwHwt-.js";import"./Layer-BAM8ommd.js";import"./Curve-m98fbF0c.js";import"./types-CIgkXEGC.js";import"./step-ncsjPZ4b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0rSS-oCT.js";import"./Label-BbvgfVci.js";import"./Text-c1trxvgH.js";import"./DOMUtils-Bp6mSslK.js";import"./useId-mH59anzj.js";import"./useBackwardsCompatibleTheme-BW-Eyyrw.js";import"./ZIndexLayer-DjnDFneh.js";import"./useAnimationId-DORt3e-J.js";import"./ActivePoints-Bg_cfUBG.js";import"./Dot-M4-D-D3c.js";import"./RegisterGraphicalItemId-B_hXYrSH.js";import"./ErrorBarContext-D5I-eLzk.js";import"./GraphicalItemClipPath-WRfkTQaB.js";import"./SetGraphicalItem-vQHk7qeP.js";import"./getRadiusAndStrokeWidthFromDot-iWXc3UEX.js";import"./ActiveShapeUtils-tGmUUFtW.js";import"./useGraphicalItemIdentity-WP1DKWAp.js";import"./CartesianAxis-C_t42adW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CEBQPOfc.js";import"./uniqBy-CN11yF73.js";import"./iteratee-CSiy3jc8.js";import"./Cross-BEWH4yZn.js";import"./Rectangle--VBhlI6J.js";import"./util-Dxo8gN5i.js";import"./Sector-B39pprSn.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as i,R as e}from"./iframe-DyNflmpD.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DEYDVOEr.js";import{R as C}from"./zIndexSlice-DcbzUDl1.js";import{L as s}from"./Line-BGuS8g8Y.js";import{X as p}from"./XAxis-BRq0uwwt.js";import{T as c}from"./Tooltip-BAxc7Yy-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcT-g24f.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D8oAfUCo.js";import"./throttle-JOKyqjkh.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./index-D1o802DX.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./Layer-BAK3mXOF.js";import"./Curve-tt8V9XJv.js";import"./types-BmhrOP68.js";import"./step-Cw2SmsXu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bg7iXKcU.js";import"./Label-8baFJ3SD.js";import"./Text-DubbQCtu.js";import"./DOMUtils-CnMp_f2C.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./ZIndexLayer-BkImCK5k.js";import"./useAnimationId-B6Hjzqdy.js";import"./ActivePoints-CZJUt6u2.js";import"./Dot-DiXQ237y.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getRadiusAndStrokeWidthFromDot-D8_lJPIV.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./useGraphicalItemIdentity-BUorwys7.js";import"./CartesianAxis-FmtEoT3c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-yI9njwCE.js";import"./uniqBy-3XMkSlBq.js";import"./iteratee-CgqxdBPn.js";import"./Cross-LXoMM9NZ.js";import"./Rectangle-ewchM9Jh.js";import"./util-Dxo8gN5i.js";import"./Sector-C-RrM82Y.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

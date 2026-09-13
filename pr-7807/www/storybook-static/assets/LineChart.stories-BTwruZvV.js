import{r as i,R as e}from"./iframe-CpojRMYz.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-fwC6ZBnl.js";import{R as C}from"./zIndexSlice-D1ADf7PX.js";import{L as s}from"./Line-DDx2X4LF.js";import{X as p}from"./XAxis-DrbaoPhb.js";import{T as c}from"./Tooltip-DVviryQw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CF4JxjLb.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWpXFhCq.js";import"./throttle-2TOI5CL8.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./Layer-CCaY3a6J.js";import"./Curve-5MG-rBKT.js";import"./types-BBXJ7Rux.js";import"./step-DMyapVKc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BIcnZI45.js";import"./Label-C3-HdBMA.js";import"./Text-l7Cxp-9T.js";import"./DOMUtils-Bwqm48A6.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./useAnimationId-CwhUANii.js";import"./ActivePoints-CSBV62SU.js";import"./Dot-Cf1g1XZp.js";import"./RegisterGraphicalItemId-mR_kXHAC.js";import"./ErrorBarContext-DaXU1Z8v.js";import"./GraphicalItemClipPath-2lYWsPZE.js";import"./SetGraphicalItem-CyRpKe3K.js";import"./getRadiusAndStrokeWidthFromDot-Z2EK9WFQ.js";import"./ActiveShapeUtils-DvTz2wmh.js";import"./useGraphicalItemIdentity-CvTNdUiI.js";import"./CartesianAxis-BQyqi4qL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C-WxvLcI.js";import"./uniqBy-CeYNO4r-.js";import"./iteratee-Bb80RnL1.js";import"./Cross-DBEGwuAS.js";import"./Rectangle-DMpLU3WW.js";import"./util-Dxo8gN5i.js";import"./Sector-DJq8OywD.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

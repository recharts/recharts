import{r as s,R as e}from"./iframe-jpw6hTzP.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BGtcFPtp.js";import{R as C}from"./zIndexSlice-0hywYSss.js";import{L as n}from"./Line-C57CrOO0.js";import{X as p}from"./XAxis-i-qKaY8p.js";import{T as c}from"./Tooltip-CQP5PMUx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./throttle-CyRNR61p.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./axisSelectors-fmgxI94T.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./d3-scale-DRfhHoT1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./Layer-DBhjUf2v.js";import"./Curve-CvVzTtSx.js";import"./types-Q9eva-kl.js";import"./step-DQBQyc1L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QuI77x2Z.js";import"./Label-Ddiq2mWQ.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./ZIndexLayer-qT8qrsoe.js";import"./useAnimationId-BDRU6NIW.js";import"./ActivePoints-Byy_7u33.js";import"./Dot-C9R0P-ig.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./getRadiusAndStrokeWidthFromDot-DOVdep_g.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./CartesianAxis-hrtgNZzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-C-e6OQM8.js";import"./uniqBy-Dn1sAR5T.js";import"./iteratee-ZOl5KNFh.js";import"./Cross-DJcvNMj3.js";import"./Rectangle-BLYrXLOh.js";import"./util-Dxo8gN5i.js";import"./Sector-DTQnXnWe.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};

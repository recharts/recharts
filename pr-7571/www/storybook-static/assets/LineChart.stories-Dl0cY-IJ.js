import{r as s,R as e}from"./iframe-CV15e7az.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BNkQ07gE.js";import{R as C}from"./zIndexSlice-CjGsmEi1.js";import{L as n}from"./Line-UnZJBYs0.js";import{X as p}from"./XAxis-DLZMrQJA.js";import{T as c}from"./Tooltip-CTPM0Q4A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDXDvVK3.js";import"./index-BoM1UPcR.js";import"./index-BBpab-Hd.js";import"./index-93JCPKbn.js";import"./index-CVAE3ToH.js";import"./throttle-CHzP70vu.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-fTbz0eeh.js";import"./axisSelectors-CI8TiAbs.js";import"./resolveDefaultProps-C-NTBoJu.js";import"./isWellBehavedNumber-ieBgpEor.js";import"./d3-scale-BchuFtEx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CvIpxzyO.js";import"./chartDataContext-BjsNRzum.js";import"./CategoricalChart-Cjf4C7PM.js";import"./Layer-D7-BURxK.js";import"./Curve-DJiquf3-.js";import"./types-CWD3xXR9.js";import"./step-BDRmzmOQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CwcBVWiQ.js";import"./Label-CWZ2l2lA.js";import"./Text-DlLjmiQX.js";import"./DOMUtils-DvhMIjVB.js";import"./ZIndexLayer-D33L973J.js";import"./useAnimationId-CAqTHHd1.js";import"./ActivePoints-CxfliSLe.js";import"./Dot-CGVhNmXj.js";import"./RegisterGraphicalItemId-CTyQ2SsK.js";import"./ErrorBarContext-DbIUjAn0.js";import"./GraphicalItemClipPath-Cho1rLIH.js";import"./SetGraphicalItem-BMbMD-I2.js";import"./getRadiusAndStrokeWidthFromDot-sVa05Jko.js";import"./ActiveShapeUtils-D4G9dWIO.js";import"./CartesianAxis-C65u4Bt5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-CYeD-QhL.js";import"./uniqBy-C1LhrqqD.js";import"./iteratee-OgcCVfTc.js";import"./Cross-1cQgvQtS.js";import"./Rectangle-Bx-fAemw.js";import"./util-Dxo8gN5i.js";import"./Sector-CHHGLCHU.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

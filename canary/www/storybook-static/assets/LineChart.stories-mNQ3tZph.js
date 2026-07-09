import{r as s,R as e}from"./iframe-DTfUMuxI.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Cu_hKTlk.js";import{R as C}from"./zIndexSlice-DgbTd9h0.js";import{L as n}from"./Line-B98wDZe7.js";import{X as p}from"./XAxis-CKFG07JY.js";import{T as c}from"./Tooltip-Ce7_-MV5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./index-C-gVZ3HS.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./throttle-DSBiY2UW.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./axisSelectors-D0YyYzBU.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./d3-scale-DrphVPA4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./CategoricalChart-DjP0Xpt7.js";import"./Layer-fCILtQSz.js";import"./Curve-CDLgz_Rx.js";import"./types-CausIaox.js";import"./step-D8Xe5eP9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DnEACLZT.js";import"./Label-Sgtp5mjO.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./ZIndexLayer-BhQOtpEj.js";import"./useAnimationId-BT6QlGBk.js";import"./ActivePoints-1q3Ryxbz.js";import"./Dot-Br2mhGeX.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getRadiusAndStrokeWidthFromDot-D9ottDdP.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./CartesianAxis-CzVgKTyr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DrOTra1T.js";import"./uniqBy-C0UbEHN4.js";import"./iteratee-DaP6RRgm.js";import"./Cross-Kjd5wsQk.js";import"./Rectangle-Cf96Egf9.js";import"./util-Dxo8gN5i.js";import"./Sector-Blr5B_HL.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};

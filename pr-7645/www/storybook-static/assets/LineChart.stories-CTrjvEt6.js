import{r as s,R as e}from"./iframe-DsrT6Igl.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D_1kgV6-.js";import{R as C}from"./zIndexSlice-h68Ml9Fg.js";import{L as m}from"./Line-Co0or1gx.js";import{X as p}from"./XAxis-B8sGkbA_.js";import{T as c}from"./Tooltip-CH2R-UVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSffRmp6.js";import"./index-TmgrHUX7.js";import"./index-yiXd6Pb-.js";import"./index-CcGDpKo8.js";import"./index-CFQPgMx1.js";import"./throttle-CKywVGzs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-wSA8VE6u.js";import"./resolveDefaultProps-B9PzJr_D.js";import"./isWellBehavedNumber-BKc-Hacq.js";import"./d3-scale-xIAfNFu1.js";import"./renderedTicksSlice-CMKIM6y2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZwpOQ8g.js";import"./chartDataContext-CfBgcaN6.js";import"./CategoricalChart-CEyUxV14.js";import"./Layer-DLKGrOO6.js";import"./Curve-BpJvhb6R.js";import"./types-Dr4WwlRr.js";import"./step-CipQ0fCR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHAzNwyg.js";import"./Label-Vp0epMck.js";import"./Text-C481n1OT.js";import"./DOMUtils-C9ccNhGG.js";import"./useBackwardsCompatibleTheme-DXRl_guv.js";import"./ZIndexLayer-CReW--vZ.js";import"./useAnimationId-B6Rv0dv4.js";import"./ActivePoints-BFA4rG7L.js";import"./Dot-B2h-3AQs.js";import"./RegisterGraphicalItemId-Bitjrotw.js";import"./ErrorBarContext-CvpDkEE-.js";import"./GraphicalItemClipPath-acoCHMXA.js";import"./SetGraphicalItem-vfAWovt3.js";import"./getRadiusAndStrokeWidthFromDot-CeZkjRIS.js";import"./ActiveShapeUtils-ETIvX2m5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BXcmAp6r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-KJy6JXTO.js";import"./uniqBy-CcAT-JF8.js";import"./iteratee-Ch_bSXv9.js";import"./Cross-DdS7YOJT.js";import"./Rectangle-BTeUrZeI.js";import"./util-Dxo8gN5i.js";import"./Sector-DqkrMSqs.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Se=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Se as __namedExportsOrder,Ie as default};

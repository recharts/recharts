import{r as s,R as e}from"./iframe-Csa_oMfm.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CXTVrORs.js";import{R as C}from"./zIndexSlice-BxquUHtq.js";import{L as m}from"./Line-CF8Pd-gQ.js";import{X as p}from"./XAxis-uDV1OEUW.js";import{T as c}from"./Tooltip-BsrPmR3i.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQ2cp1Au.js";import"./index-CfKNqcoW.js";import"./index-CRP06Y07.js";import"./index-DAq0SL0A.js";import"./index-IjpwRB6F.js";import"./throttle-CSxXhEFU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BG4FCknP.js";import"./resolveDefaultProps-Byem5JrG.js";import"./isWellBehavedNumber-DWOo1BMI.js";import"./d3-scale-BtpAo9Oq.js";import"./renderedTicksSlice-CaOZRI6N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LGWyPi5p.js";import"./chartDataContext-BH4G6z7_.js";import"./CategoricalChart-DnCPfHVF.js";import"./Layer-BKPwema6.js";import"./Curve-BqFDmSfU.js";import"./types-C6llbAwt.js";import"./step-o0DAusso.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNlS9_lf.js";import"./Label-KmPVqzrB.js";import"./Text-C_eX2bjG.js";import"./DOMUtils-BFEBcDdR.js";import"./useId-D1v4eS8N.js";import"./useBackwardsCompatibleTheme-D8HYBwfJ.js";import"./ZIndexLayer-Dj0ApPdW.js";import"./useAnimationId-C2aTUSsq.js";import"./ActivePoints-CpN93VEs.js";import"./Dot-BraMSZz_.js";import"./RegisterGraphicalItemId-BpNCJT0O.js";import"./ErrorBarContext-Ch5kSSkb.js";import"./GraphicalItemClipPath-BFLHGHAh.js";import"./SetGraphicalItem-DHDvzfH7.js";import"./getRadiusAndStrokeWidthFromDot-DXCwtpcK.js";import"./ActiveShapeUtils-DtwpfCs_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Cukq_zeL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CbgcJIP8.js";import"./uniqBy-DJZRRRzN.js";import"./iteratee-BCfsRupd.js";import"./Cross-CvyQTzF9.js";import"./Rectangle-CHMSO-4U.js";import"./util-Dxo8gN5i.js";import"./Sector-fsmInxGH.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as s,R as e}from"./iframe-NVmT8fNw.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Belzvbse.js";import{R as C}from"./zIndexSlice-oXJaNZSv.js";import{L as m}from"./Line-B-bNZ47p.js";import{X as p}from"./XAxis-hjQAsG8m.js";import{T as c}from"./Tooltip-uYg3Huk3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7AIj6ea.js";import"./index-BpZAOzLQ.js";import"./index-DglhN2t4.js";import"./index-Q4SQnPgQ.js";import"./index-UDay9_dl.js";import"./throttle-Cfz3FXws.js";import"./get-C2VjdU0L.js";import"./axisSelectors-tCKXm7jn.js";import"./resolveDefaultProps-C8jEDqKQ.js";import"./isWellBehavedNumber-DXLqj9yd.js";import"./d3-scale-Brn0HGK7.js";import"./renderedTicksSlice-DjTIRCRN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKFmyfhg.js";import"./chartDataContext-DZujCsS5.js";import"./CategoricalChart-Dxp6zY9P.js";import"./Layer-BD2Ls3O_.js";import"./Curve-BPHyzTn-.js";import"./types-DCTQ4Lzc.js";import"./step-CnSikc6K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CytrP_0t.js";import"./Label-DfDRyr69.js";import"./Text-C5xVRdeB.js";import"./DOMUtils-CDTGDYSn.js";import"./RechartsThemeContext-awS4vi70.js";import"./ZIndexLayer-B6fWtNzq.js";import"./useAnimationId-d1ULQyIN.js";import"./ActivePoints-CgHBThkz.js";import"./Dot-CFsdSuNY.js";import"./RegisterGraphicalItemId-twhih18P.js";import"./ErrorBarContext-CABhUjIg.js";import"./GraphicalItemClipPath-BQB0fOYx.js";import"./SetGraphicalItem-B2EMuvtY.js";import"./getRadiusAndStrokeWidthFromDot-D6gL5APH.js";import"./ActiveShapeUtils-0-0F3LMG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CwxpTfpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C1W2-wdN.js";import"./uniqBy-BhGOvFTa.js";import"./iteratee-DCpTGsx6.js";import"./Cross-CZY283UJ.js";import"./Rectangle-DMIOlDxR.js";import"./util-Dxo8gN5i.js";import"./Sector-D2cWFEle.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

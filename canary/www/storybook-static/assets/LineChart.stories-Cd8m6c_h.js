import{r as s,R as e}from"./iframe-Bzmu5HIk.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DRFeO6Ud.js";import{R as C}from"./zIndexSlice-DOqwIOxM.js";import{L as m}from"./Line-Dy4VpV_O.js";import{X as p}from"./XAxis-jQ_CxXuQ.js";import{T as c}from"./Tooltip-C0sYZp6-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCfV64tZ.js";import"./index-Bs5Y62tp.js";import"./index-DuAK0LiD.js";import"./index-CS9ypgyw.js";import"./index-BU2ca08W.js";import"./throttle-By1_Q0f1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CQE5C8Tc.js";import"./resolveDefaultProps-CRF5GxOI.js";import"./isWellBehavedNumber-DCtTU4mD.js";import"./d3-scale-mcjvwMyE.js";import"./renderedTicksSlice-aIMhvrWq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D9cj75Uw.js";import"./chartDataContext-6ylcQe-7.js";import"./CategoricalChart-CH9SVF8Q.js";import"./Layer-BIAwX0Ug.js";import"./Curve-CKwGe3YB.js";import"./types-CP805D0F.js";import"./step-BOb3jDRZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8pcPfP0.js";import"./Label-BnPFFEHB.js";import"./Text-DqoobI6S.js";import"./DOMUtils-dt_U2Js1.js";import"./useId-CJJMgP-t.js";import"./useBackwardsCompatibleTheme-CmmFKQCY.js";import"./ZIndexLayer-CHgZKeoE.js";import"./useAnimationId-pFMJHbYK.js";import"./ActivePoints-Bg1bvRXN.js";import"./Dot-B390M5o3.js";import"./RegisterGraphicalItemId-9b4sSDvA.js";import"./ErrorBarContext-BwVhmXYH.js";import"./GraphicalItemClipPath-DpslvBV-.js";import"./SetGraphicalItem-Xipmdhp5.js";import"./getRadiusAndStrokeWidthFromDot-C9axG9oY.js";import"./ActiveShapeUtils-ByjLSOPq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ByUKa2Ph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DUKr_KA9.js";import"./uniqBy-Bi1p8Whm.js";import"./iteratee-B9tCTKER.js";import"./Cross-xNO4Qo7l.js";import"./Rectangle-BwyZeyJ3.js";import"./util-Dxo8gN5i.js";import"./Sector-DQtYiwR3.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

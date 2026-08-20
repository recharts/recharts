import{r as s,R as e}from"./iframe-Bxb7fTI_.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-COMIh2_7.js";import{R as C}from"./zIndexSlice-Dc8AhsBR.js";import{L as m}from"./Line-BOYN2QnI.js";import{X as p}from"./XAxis-CkOknljo.js";import{T as c}from"./Tooltip-79hrGs82.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./throttle-CFHzUNT1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6Hc05Ed.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./CategoricalChart-D-PTwWFe.js";import"./Layer-DjfrzuA0.js";import"./Curve-D4ESszCl.js";import"./types-sJxYiwgt.js";import"./step-DmsSDk4K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_-SWE1b.js";import"./Label-CTFdx9tw.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./ZIndexLayer-oyOyBp5p.js";import"./useAnimationId-BhzzmCcY.js";import"./ActivePoints-Bdd5ZL2k.js";import"./Dot-CatBtppS.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./ErrorBarContext-D8MkcOwe.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./getRadiusAndStrokeWidthFromDot-CEcgVwhz.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CMkdpaa1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CvkVVO4z.js";import"./uniqBy-DL7Bhf0u.js";import"./iteratee-CRSpQ1DK.js";import"./Cross-BnIYPAob.js";import"./Rectangle-CCwWx1xN.js";import"./util-Dxo8gN5i.js";import"./Sector-CSyIb4pU.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

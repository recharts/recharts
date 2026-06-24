import{r as s,R as e}from"./iframe-CtzYfaFS.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-TcopsgyI.js";import{R as C}from"./zIndexSlice-CHFLQ-iB.js";import{L as n}from"./Line-BA9hGf2z.js";import{X as p}from"./XAxis-oAw543sJ.js";import{T as c}from"./Tooltip-DogIC3j-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtAkHf5u.js";import"./index-CQyW4Cl8.js";import"./index-B8ynkf98.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./immer-5-WksSwG.js";import"./get-BsiXY17Z.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./Layer-BYFEOVHG.js";import"./Curve-CEEgN7pC.js";import"./types-BhOKl2M1.js";import"./step-BRDo_NJw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFTPfFdo.js";import"./Label-vhEl4j2z.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./ZIndexLayer-DBCChzpw.js";import"./useAnimationId-Dat_OdBO.js";import"./ActivePoints-VdjJXov3.js";import"./Dot-DiQjGxU2.js";import"./RegisterGraphicalItemId-C98AlHEB.js";import"./ErrorBarContext-Bj7SM4UW.js";import"./GraphicalItemClipPath-DEcca-2A.js";import"./SetGraphicalItem-CIPU0D-S.js";import"./getRadiusAndStrokeWidthFromDot-DosUFuXZ.js";import"./ActiveShapeUtils-Bjb6cUC6.js";import"./CartesianAxis-BA_E2N7m.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DkrRKcsg.js";import"./uniqBy-CBSkEntb.js";import"./iteratee-BJLAzLHV.js";import"./Cross-Dgj9Mdeo.js";import"./Rectangle-bPdK07Y6.js";import"./util-Dxo8gN5i.js";import"./Sector-Kex3ri7r.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

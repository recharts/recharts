import{r as i,R as e}from"./iframe-Dofq_iQ-.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Clg0lwmX.js";import{R as C}from"./zIndexSlice-D1WV8xVK.js";import{L as s}from"./Line-CxMmNUAz.js";import{X as p}from"./XAxis-BAcN42ay.js";import{T as c}from"./Tooltip-D82JgkIu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CETzgtk4.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CqE-voO2.js";import"./throttle-DKmFrtnD.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bd78fIJ9.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./Layer-DmIM376f.js";import"./Curve-Beatw8ZQ.js";import"./types-B7VCcYuj.js";import"./step-g7A04fAl.js";import"./path-DyVhHtw_.js";import"./activeStyles-B73KwGvD.js";import"./Label-hlz0weoU.js";import"./Text-DvhWb0Oj.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./dataEntryStyles-BZNZhw1g.js";import"./useAnimationId-CwELIUBQ.js";import"./ActivePoints--oTriwIr.js";import"./Dot-CgHFserM.js";import"./Symbols-BSqZO71K.js";import"./symbol-3INanWh5.js";import"./RegisterGraphicalItemId-DtelKBLL.js";import"./ErrorBarContext-D73mtL4f.js";import"./SetGraphicalItem-DU742dNa.js";import"./getRadiusAndStrokeWidthFromDot-BcCSCHB7.js";import"./ActiveShapeUtils-R-VNi4BZ.js";import"./useEffectiveDataKey-B7xEEKli.js";import"./CartesianAxis-BkbAUDQ6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-B6c3R0Fo.js";import"./uniqBy-pKrPA6ZI.js";import"./iteratee-eczRew1O.js";import"./isArguments-yB-y1yaH.js";import"./Cross-_ZcP0GkJ.js";import"./Rectangle-ywvlgolw.js";import"./util-Dxo8gN5i.js";import"./Sector-fCNxang1.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};

import{r as i,R as e}from"./iframe-SPJaGn0F.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CQKXXcUM.js";import{R as C}from"./zIndexSlice-nIWAtr6b.js";import{L as s}from"./Line-Q7YZR7MH.js";import{X as p}from"./XAxis-D91EJms1.js";import{T as c}from"./Tooltip-3etkXvz6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DA_3WzAb.js";import"./resolveDefaultProps-DgTytEg2.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BV5QtOCC.js";import"./throttle-Cb7coFKv.js";import"./index-BiFHN7g6.js";import"./index-DUJEB6Vl.js";import"./polarAxisSelectors-CIAIQYnO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ChAd5Ihl.js";import"./index-U_F_U_yW.js";import"./index-B2XfpK0R.js";import"./renderedTicksSlice-CknOQqZ1.js";import"./index-Bl846mwt.js";import"./CartesianChart-DHKYKaYX.js";import"./ZIndexPortal-zVY5zLCl.js";import"./CategoricalChart-CWkGyQY4.js";import"./Layer-GoN2yHWA.js";import"./Curve-CQDBLSXd.js";import"./types-DJ6_4iq2.js";import"./step-g9-z_5ZT.js";import"./path-DyVhHtw_.js";import"./LabelList-BeGqiY0d.js";import"./Label-COXn0L8P.js";import"./Text-BYUbuGtp.js";import"./DOMUtils-BDkhG4Mf.js";import"./ZIndexLayer-CuxzF6Ru.js";import"./ActivePoints-BWJOXnL8.js";import"./Dot-CJO9q9fw.js";import"./activeStyles-BViWZA4B.js";import"./useAnimationId-d7QVaKqG.js";import"./dataEntryStyles-DAzBzzsr.js";import"./Symbols-CUkMeiyc.js";import"./symbol-DauxKq8Z.js";import"./ErrorBarContext-CyoUsRnh.js";import"./SetGraphicalItem-B-k8mUay.js";import"./getRadiusAndStrokeWidthFromDot-DYuKOPnc.js";import"./ActiveShapeUtils-zpveVZ8b.js";import"./useEffectiveDataKey-PspZ4BaC.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-D0rqelxZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DwP8huJc.js";import"./uniqBy-P-x3YYna.js";import"./iteratee-CwlSc91y.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DeDV4AvO.js";import"./Rectangle-UJSQ6vDA.js";import"./util-Dxo8gN5i.js";import"./Sector-BuwgO7T2.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

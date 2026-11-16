import{r as i,R as e}from"./iframe-DHoXusD1.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CiWQkdJS.js";import{R as C}from"./zIndexSlice-FsvXxdXV.js";import{L as s}from"./Line-COAixAac.js";import{X as p}from"./XAxis-hvLT-HVR.js";import{T as c}from"./Tooltip-D3ME52ET.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B415nsX3.js";import"./resolveDefaultProps-htUurm4w.js";import"./get-cF5BDHN6.js";import"./axisSelectors-pR92cyKp.js";import"./throttle-bPL_CYHd.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrVNT65M.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./Layer-DvTlLbe7.js";import"./Curve-CobFJY2m.js";import"./types-BuL5d7PW.js";import"./step-7L3GLQ3k.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./Label-DH0ZiH3v.js";import"./Text-DGMTORnL.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./ActivePoints-Okwmojju.js";import"./Dot-DjtRy0VI.js";import"./activeStyles-CtCkxF9Y.js";import"./useAnimationId-BUoKLqt_.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./ErrorBarContext-BUjEWD9b.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./getRadiusAndStrokeWidthFromDot-JLWstI7V.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./useEffectiveDataKey-Ckh-4MN_.js";import"./CartesianAxis-D3kgYeFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-0dudveHh.js";import"./uniqBy-Cb8Ka0OF.js";import"./iteratee-DACkWKhu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dbucp1-Q.js";import"./Rectangle-DvIJVMhk.js";import"./util-Dxo8gN5i.js";import"./Sector-CkJljpkv.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};

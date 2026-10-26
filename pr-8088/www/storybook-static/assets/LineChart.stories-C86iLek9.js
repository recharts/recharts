import{r as i,R as e}from"./iframe-DcaMyu57.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-9QId3R0-.js";import{R as C}from"./zIndexSlice-D63TC5wE.js";import{L as s}from"./Line-qfkHf2wW.js";import{X as p}from"./XAxis-CpQfhxVu.js";import{T as c}from"./Tooltip-49fj7LmN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DeMGjxl4.js";import"./throttle-DTKuFpeU.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./polarAxisSelectors-C8YroQFB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtXzbLe9.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./Layer-Buw-ejS2.js";import"./Curve-zPXLC5y1.js";import"./types-CezfUA9a.js";import"./step-DwnhkCIy.js";import"./path-DyVhHtw_.js";import"./activeStyles-DWP2-Wsz.js";import"./Label-CNqQQqDH.js";import"./Text-BDVAjJGp.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./dataEntryStyles-Dvqex9ju.js";import"./useAnimationId-CY8QIDMT.js";import"./ActivePoints-ByVehSZn.js";import"./Dot-DNgNZq3J.js";import"./Symbols-0k-WiD9E.js";import"./symbol-uzrYNuoI.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getRadiusAndStrokeWidthFromDot-brVJexwW.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./CartesianAxis-CeZT8ZwV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BZhsAoPk.js";import"./uniqBy-Debw3FXq.js";import"./iteratee-DfBVt2Tm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BtF40hvQ.js";import"./Rectangle-BG3wMj9I.js";import"./util-Dxo8gN5i.js";import"./Sector-jAYUYlJM.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

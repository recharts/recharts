import{r as i,R as e}from"./iframe-DWt4J3JN.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DWMGYK11.js";import{R as C}from"./zIndexSlice-NSNONz_v.js";import{L as s}from"./Line-0mvPQ6iO.js";import{X as p}from"./XAxis-Ct82dr0g.js";import{T as c}from"./Tooltip-BZHJZUNK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-COqAJslP.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BS7avNJg.js";import"./throttle-Dk5xsQjg.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BC5jrybd.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./Layer-D1fzjsCN.js";import"./Curve-DrWralR8.js";import"./types-BbXG2_az.js";import"./step-Bit_NyY0.js";import"./path-DyVhHtw_.js";import"./LabelList-DCtJIAIf.js";import"./Label-Bkb0GMep.js";import"./Text-BH_q_eI2.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./ActivePoints-BL9AGUXf.js";import"./Dot-BgFpa2WJ.js";import"./activeStyles-DEL6Q9xK.js";import"./useAnimationId-DaySoH3H.js";import"./dataEntryStyles-CMWxjrvv.js";import"./Symbols-DwZTYmJ_.js";import"./symbol-DVO5NwTU.js";import"./ErrorBarContext-D_UxjrQr.js";import"./SetGraphicalItem-cSBJzNh5.js";import"./getRadiusAndStrokeWidthFromDot-KA7euB10.js";import"./ActiveShapeUtils-BICHaO6W.js";import"./useEffectiveDataKey---V5hCOC.js";import"./CartesianAxis-Ch6tESXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BsiXtm6U.js";import"./uniqBy-DSjR0NWH.js";import"./iteratee-BZC7KUwZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CP_9_DpQ.js";import"./Rectangle-Cd9oJYQg.js";import"./util-Dxo8gN5i.js";import"./Sector-ei3xmHoK.js";const He={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},xe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,xe as __namedExportsOrder,He as default};

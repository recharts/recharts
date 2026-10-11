import{r as i,R as e}from"./iframe-CBWhl09v.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-B1d6Zhb_.js";import{R as C}from"./zIndexSlice-B1AH5YJS.js";import{L as s}from"./Line-B0sSvzHP.js";import{X as p}from"./XAxis-tzQHqynD.js";import{T as c}from"./Tooltip-Ebv0bBWC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BU6mzVyD.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6qdSbwV.js";import"./throttle-bJqzO9Ic.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./Layer-DxeVA2bX.js";import"./Curve-B56TGwB_.js";import"./types-Dq74-fjW.js";import"./step-CZA2KIrz.js";import"./path-DyVhHtw_.js";import"./activeStyles-BZ5qRbpV.js";import"./Label-CJ9xjWYO.js";import"./Text-fMbisw4f.js";import"./pageBackground-zeq0PAuW.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./ZIndexLayer-DmDmq8bi.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./ActivePoints-mIk3yLeC.js";import"./Dot-BHORkSEl.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getRadiusAndStrokeWidthFromDot-B1PyR7dw.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";import"./CartesianAxis-BGPUbFHg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-BeDLriUL.js";import"./uniqBy-BSAN_SQR.js";import"./iteratee-kSqFHTFy.js";import"./Cross-CQN_SAeC.js";import"./Rectangle-B0IEIFtA.js";import"./util-Dxo8gN5i.js";import"./Sector-hJbvafuJ.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

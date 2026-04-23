import{r as s,e}from"./iframe-9z1u-Aav.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-COI5PUNu.js";import{R as C}from"./arrayEqualityCheck-BxC1vNgX.js";import{L as n}from"./Line-Eu88whDC.js";import{R as A}from"./RechartsHookInspector-CPy6deVf.js";import{X as p}from"./XAxis-40ikClNA.js";import{T as c}from"./Tooltip-DvEhfGZo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCPy8B0Q.js";import"./index-B2EC147Y.js";import"./immer-Bw5e914R.js";import"./hooks-6Kt3djxY.js";import"./axisSelectors-COp_2eg-.js";import"./d3-scale-Gw1yRTSk.js";import"./zIndexSlice-CgHKAdAg.js";import"./renderedTicksSlice-BHud9xuy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BYVE1KsL.js";import"./chartDataContext-C3cOG7oG.js";import"./CategoricalChart-BSBYVT05.js";import"./resolveDefaultProps-hYLPXQk1.js";import"./Layer-CQ8qv4WV.js";import"./ReactUtils-BhZgkjsQ.js";import"./Label-CLPrmfez.js";import"./Text-hlTX4MHR.js";import"./DOMUtils-C8Hk5ID2.js";import"./ZIndexLayer-DD6-9cCr.js";import"./ActivePoints-BrNY2xuv.js";import"./Dot-Bkkq57cb.js";import"./types-DkmL6Els.js";import"./RegisterGraphicalItemId-BFftKPbg.js";import"./ErrorBarContext-C3IrAAAi.js";import"./GraphicalItemClipPath-BPP11Y5p.js";import"./SetGraphicalItem-DhXUBNxa.js";import"./useAnimationId-DEUiQ2FH.js";import"./getRadiusAndStrokeWidthFromDot-OHnzfSYw.js";import"./ActiveShapeUtils-Dr5kvCCk.js";import"./isPlainObject-C-oBiTzF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BL9Pth1-.js";import"./Trapezoid-Cob3LyNG.js";import"./Sector-Blap6T8q.js";import"./Symbols-Do-WoS-v.js";import"./symbol-CozNTkvH.js";import"./step-DgnayOtY.js";import"./Curve-CaIVque-.js";import"./index-CQ_nBmPz.js";import"./ChartSizeDimensions-Dl068BxX.js";import"./OffsetShower-DaW6uSre.js";import"./PlotAreaShower-B88-OHCb.js";import"./CartesianAxis-CCI6UuOV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CgJ9LAWC.js";import"./uniqBy-klSQtmRp.js";import"./iteratee-CZCXTLGV.js";import"./Cross-DJdoNXAC.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};

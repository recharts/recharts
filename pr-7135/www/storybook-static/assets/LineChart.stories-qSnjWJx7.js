import{r as s,e}from"./iframe-CRc-flGw.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-CJK6OAJa.js";import{R as C}from"./arrayEqualityCheck-DKsNPC5t.js";import{L as n}from"./Line-BHpCRDpE.js";import{R as k}from"./RechartsHookInspector-BfXBIijA.js";import{X as p}from"./XAxis-DefhfpDJ.js";import{T as c}from"./Tooltip-D05wqO7m.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BeKC2RVo.js";import"./index-1w6ajcFg.js";import"./immer-ByZzKzss.js";import"./hooks-DZKzKpMo.js";import"./axisSelectors-DdTNbtlm.js";import"./d3-scale-BQdhaFkz.js";import"./zIndexSlice-D5r4A9oU.js";import"./renderedTicksSlice-Drgf2BHB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-XjjZ8yiv.js";import"./chartDataContext-BxD4B1Fo.js";import"./CategoricalChart-GI1F9wsO.js";import"./resolveDefaultProps-Bl3-Fo8N.js";import"./Layer-BnBdmezi.js";import"./ReactUtils-CwEELAWD.js";import"./Label-DhveLrm9.js";import"./Text-BTTbtJ1y.js";import"./DOMUtils-XAHmwwbv.js";import"./ZIndexLayer-D6jxT2Od.js";import"./ActivePoints-z3-8W7vW.js";import"./Dot-C3bYGGHM.js";import"./types-yycQMcyL.js";import"./RegisterGraphicalItemId-DszhlzY0.js";import"./ErrorBarContext-CORkh6aB.js";import"./GraphicalItemClipPath-DuL0hAIv.js";import"./SetGraphicalItem-DLMb23PD.js";import"./useAnimationId-CV3KoLuu.js";import"./getRadiusAndStrokeWidthFromDot-BClUWKos.js";import"./ActiveShapeUtils-CBXTVkGy.js";import"./isPlainObject-CwCpOTqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQ2TmgdK.js";import"./Trapezoid-CMdi1mNK.js";import"./Sector-CyV3S5d1.js";import"./Symbols-cTxoNgJ3.js";import"./symbol-uSNG4J3i.js";import"./step-n2b1zRpO.js";import"./Curve-Bq0CaY0M.js";import"./index-CWAerfFe.js";import"./ChartSizeDimensions-BlHKMCB6.js";import"./OffsetShower-C9-yzuEJ.js";import"./PlotAreaShower-5DxwHxbi.js";import"./CartesianAxis-CmjuMVBO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BYI9oXVf.js";import"./uniqBy-BwmkhaPp.js";import"./iteratee-LEn6qRui.js";import"./Cross-BEnbUp2e.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

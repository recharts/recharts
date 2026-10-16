import{r as i,R as e}from"./iframe--2AVw2Ig.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CyqqFFib.js";import{R as C}from"./zIndexSlice-DY-KmnMj.js";import{L as s}from"./Line-_Cuhdt7D.js";import{X as p}from"./XAxis-DR36Dp_O.js";import{T as c}from"./Tooltip-D8Knn-sQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EJRMqcbQ.js";import"./resolveDefaultProps-B29QL1c4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CDUrw1Me.js";import"./throttle-BaGyyE0T.js";import"./index-rGVVlfKz.js";import"./index-CbZkT_u5.js";import"./isWellBehavedNumber-BCwXwBOh.js";import"./d3-scale-CuVmq_8Z.js";import"./index-BTmio8NJ.js";import"./index-_nleLnFM.js";import"./renderedTicksSlice-ViCmPO8v.js";import"./index-DVblcXeN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwfabjuB.js";import"./chartDataContext-BsjWdA7j.js";import"./CategoricalChart-D1mzQ8Dl.js";import"./Layer-eIGZDbY8.js";import"./Curve-DnLexwZ8.js";import"./types-DZjr1JEr.js";import"./step-CCcO8MdV.js";import"./path-DyVhHtw_.js";import"./activeStyles-CzHB9dwV.js";import"./Label-DUHcPYlD.js";import"./Text-Hvkjn3b4.js";import"./pageBackground-DkdcD7r5.js";import"./useId-CUoDw_aI.js";import"./useBackwardsCompatibleTheme-CKvuuYac.js";import"./ZIndexLayer-KCSLP8mG.js";import"./useAnimationId-CHJ3Zhtv.js";import"./dataEntryStyles-DeEjeZX4.js";import"./ActivePoints-BD1pKs86.js";import"./Dot-D-Ut_Ero.js";import"./ErrorBarContext-CPUPPNIF.js";import"./GraphicalItemClipPath-DBN3vY8J.js";import"./SetGraphicalItem-CFoIf7JL.js";import"./getRadiusAndStrokeWidthFromDot-D3N_jfqh.js";import"./ActiveShapeUtils-Cos36bQq.js";import"./useEffectiveDataKey-mwtlbWZk.js";import"./CartesianAxis-khS1fmQe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C3tMcbQq.js";import"./uniqBy-BT1kOl9J.js";import"./iteratee-BUnf2Li6.js";import"./Cross-DBhkKTPh.js";import"./Rectangle-CQO9mUlA.js";import"./util-Dxo8gN5i.js";import"./Sector-D9_TvkfH.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

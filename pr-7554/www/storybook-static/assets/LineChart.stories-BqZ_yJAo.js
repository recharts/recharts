import{r as s,R as e}from"./iframe-B5C9KTx6.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Ct1MV1hO.js";import{R as C}from"./zIndexSlice-DWIJ7njb.js";import{L as n}from"./Line-COtlWy37.js";import{X as p}from"./XAxis-wVZq09ph.js";import{T as c}from"./Tooltip-mtVEiDey.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-LcQsrP5q.js";import"./index-Cc-xdkS4.js";import"./index-CcYL9FAW.js";import"./index-DqoBz7Th.js";import"./index-2f6O6x8k.js";import"./throttle-BbpYnvP-.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C1Unvwoa.js";import"./axisSelectors-DNhpWmqM.js";import"./resolveDefaultProps-CyjCxujM.js";import"./isWellBehavedNumber-D81K5xCr.js";import"./d3-scale-C_LGDl3j.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CdAE6abg.js";import"./chartDataContext-BUicgLG9.js";import"./CategoricalChart-CxbxfGOc.js";import"./Layer-B1gLrgGj.js";import"./Curve-Bcxn_nu1.js";import"./types-Ca2Hpkj5.js";import"./step-BO5HL1Kb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CboUjumK.js";import"./Label-BqsOZO9Z.js";import"./Text-CAlHzKeZ.js";import"./DOMUtils-DWemK0zS.js";import"./ZIndexLayer-BjQPgVfD.js";import"./useAnimationId-B9XgvcqX.js";import"./ActivePoints-Bphq3wpq.js";import"./Dot-BhAsUEQD.js";import"./RegisterGraphicalItemId-C9s_9ELq.js";import"./ErrorBarContext-BUevHKDk.js";import"./GraphicalItemClipPath-DBJwGDNu.js";import"./SetGraphicalItem-DFLthVJ4.js";import"./getRadiusAndStrokeWidthFromDot-DOjcOwBz.js";import"./ActiveShapeUtils-DHp3h3tZ.js";import"./CartesianAxis-BJNemJkp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BRCdZsgJ.js";import"./uniqBy-CV58Zprr.js";import"./iteratee-keYsgSb4.js";import"./Cross-BcMj7Ct3.js";import"./Rectangle-zp4NG0t5.js";import"./util-Dxo8gN5i.js";import"./Sector-vUYD7aVM.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{P as s,c as e}from"./iframe-eXOzs3YY.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-BvwJ3Yto.js";import{g as C}from"./zIndexSlice-CuY-7AxA.js";import{L as n}from"./Line-C4G4AOL0.js";import{X as p}from"./XAxis-25xD-jfg.js";import{T as c}from"./Tooltip-Bzvd67Zb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./immer-DwC3AsAE.js";import"./get-DyNLp3_i.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./axisSelectors-2h318yzI.js";import"./d3-scale-CfOtqMhF.js";import"./resolveDefaultProps-DFOijNU4.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./Curve-CaJWe8Oa.js";import"./types-ty1UrU8J.js";import"./step-a4qbb-H-.js";import"./path-DyVhHtw_.js";import"./Layer-VPMddfpg.js";import"./ReactUtils-C6uVGLKp.js";import"./Label-A2hDBNkM.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./ZIndexLayer-NeCcTin-.js";import"./ActivePoints-D8PlVKN0.js";import"./Dot-DA7Kaq93.js";import"./RegisterGraphicalItemId-qKqyupEJ.js";import"./ErrorBarContext-C69bYVo4.js";import"./GraphicalItemClipPath-BFD_fJ-h.js";import"./SetGraphicalItem-CWrfv76Z.js";import"./useAnimationId-B5pCqy41.js";import"./getRadiusAndStrokeWidthFromDot-BBLB3WSC.js";import"./ActiveShapeUtils-DIEuoF9z.js";import"./CartesianAxis-DRLBBJED.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DDmKHRD5.js";import"./uniqBy-ZzENiDFV.js";import"./iteratee-KW00BhH9.js";import"./Cross-CuDnj-EF.js";import"./Rectangle-B8la5sgf.js";import"./Sector-CC4RvhGx.js";const Ce={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ee=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ee as __namedExportsOrder,Ce as default};

import{r as i,R as e}from"./iframe-RJgsiaPL.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-D5z6XZDg.js";import{R as C}from"./zIndexSlice-CaPb3BS1.js";import{L as s}from"./Line-DaDTKpZD.js";import{X as p}from"./XAxis-D1NHLWzc.js";import{T as c}from"./Tooltip-DLD8jhoi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rp6dEN_z.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BvLTD4U6.js";import"./throttle-2XjV57Y3.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./Layer-CDx7YXT6.js";import"./Curve-CFCl1kCW.js";import"./types-C_mapbFf.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ct76uSB6.js";import"./Label-DPnPk4i3.js";import"./Text-DZ5ZEdji.js";import"./DOMUtils-BwBerndY.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./ZIndexLayer-BoWVhfOi.js";import"./useAnimationId-DsRwG-rm.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./ErrorBarContext-CV0SzBCK.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";import"./CartesianAxis-BXFp-lIC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-ZiVaw6LG.js";import"./uniqBy-DLupEHg_.js";import"./iteratee-DLy57EFC.js";import"./Cross-D6ax-tR9.js";import"./Rectangle-0ZcZVEk0.js";import"./util-Dxo8gN5i.js";import"./Sector-Cu3Rz7Q0.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

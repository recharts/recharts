import{r as s,R as e}from"./iframe-7XJ2xcaa.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-k3zvZ0sx.js";import{R as C}from"./zIndexSlice-Smyg0ZdR.js";import{L as n}from"./Line-D0ZPViAT.js";import{X as p}from"./XAxis-C1fpfCfO.js";import{T as c}from"./Tooltip-BmtInrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./throttle-D4811UcH.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2Tixweq.js";import"./axisSelectors-BEWMGkmB.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./d3-scale-BuuUT6V5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./Layer-BGcXXZrK.js";import"./Curve-CHo9cgN6.js";import"./types-CCvMXBAG.js";import"./step-CE2G1JBn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXPDcN2s.js";import"./Label-kaLCkxIc.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./ZIndexLayer-CzQjP_gg.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./ActivePoints-DwDpt2dv.js";import"./Dot-CdCHNKxE.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getRadiusAndStrokeWidthFromDot-DV9FgO6_.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./CartesianAxis-OiUDsUEB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-C-vskSZV.js";import"./uniqBy-Big4MVsT.js";import"./iteratee-BpHsmV36.js";import"./Cross-GqWREVO2.js";import"./Rectangle-BCPFxxTI.js";import"./util-Dxo8gN5i.js";import"./Sector-DCIpnNip.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

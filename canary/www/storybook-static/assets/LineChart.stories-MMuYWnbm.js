import{r as i,R as e}from"./iframe-BR9um8hy.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-dmXbUrqn.js";import{R as C}from"./zIndexSlice-DInTlpQm.js";import{L as s}from"./Line-B2Y8w_7v.js";import{X as p}from"./XAxis-Df2VZum-.js";import{T as c}from"./Tooltip-D273-kUD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp-C2Hzh.js";import"./resolveDefaultProps-DqQmI4tj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-AyLSKa9B.js";import"./throttle-BcqT3vfz.js";import"./index-C-g-WGda.js";import"./index-DxJwgSab.js";import"./isWellBehavedNumber-DRhRXNpZ.js";import"./d3-scale-CDw_eAgY.js";import"./index-BkxIjOFS.js";import"./index-BFcGxk9F.js";import"./renderedTicksSlice-CoNN11f9.js";import"./index-DXgo6F3y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZcLq4iA.js";import"./chartDataContext-Bt8Fe_rW.js";import"./CategoricalChart-DmGnRbfN.js";import"./Layer-BBDuFZTy.js";import"./Curve-C4vXdRCg.js";import"./types-C8x07v5_.js";import"./step-Dcjunjbb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpNUe9OS.js";import"./Label-DksyNS0g.js";import"./Text-CRGxz7fL.js";import"./DOMUtils-Duc3pHlK.js";import"./useId-BgrQ9U0l.js";import"./useBackwardsCompatibleTheme-DOuVjsc2.js";import"./ZIndexLayer-BGQSpetD.js";import"./useAnimationId-CK-e-_3G.js";import"./ActivePoints-D1dlEVO6.js";import"./Dot-C4b3VHLo.js";import"./RegisterGraphicalItemId-BT1l9jKw.js";import"./ErrorBarContext-B2oMN3ea.js";import"./GraphicalItemClipPath-D0pxdHNA.js";import"./SetGraphicalItem-CjDcCpNq.js";import"./getRadiusAndStrokeWidthFromDot-D1WfNQgz.js";import"./ActiveShapeUtils-B8gsJAZs.js";import"./useGraphicalItemIdentity-BYoj9he0.js";import"./CartesianAxis-Ctt1NdjE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Buf92wBZ.js";import"./uniqBy-CLhcCcda.js";import"./iteratee-RhNK36r-.js";import"./Cross-5yNRVGnj.js";import"./Rectangle-D94O9QXF.js";import"./util-Dxo8gN5i.js";import"./Sector-CbKiosjF.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
